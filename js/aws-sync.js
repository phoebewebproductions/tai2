// Archivo para manejar la sincronización con AWS
import { getCurrentUserId } from "./user-utils.js"
import { AWS_CONFIG } from "./aws-config.js"
import { collectUserProgressData } from "./data-collection.js"
import { updateLastSyncTimestamp, applyCloudDataToLocalStorage } from "./data-persistence.js"

// Definir funciones de utilidad localmente para evitar problemas de importación
function getBaseUrl() {
  const hostname = window.location.hostname
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return window.location.origin // Desarrollo local
  } else if (hostname.includes("opotai.netlify.app")) {
    return "https://opotai.netlify.app" // Producción en Netlify
  } else {
    // Cualquier otro dominio
    return window.location.origin
  }
}

function buildUrl(path) {
  // Asegurarse de que el path comience con /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${getBaseUrl()}${normalizedPath}`
}

function logPathDebug(original, transformed, source) {
  console.log(`[PATH DEBUG] ${source}: Original: "${original}" → Transformed: "${transformed}"`)
}

function getLoginPath() {
  // Usar una URL absoluta para evitar problemas de rutas relativas
  return buildUrl("/login.html")
}

// Función para sincronizar datos con AWS
export async function syncUserProgress() {
  const userId = getCurrentUserId()
  if (!userId) {
    console.warn("No hay usuario autenticado, no se puede sincronizar")
    return false
  }

  try {
    console.log("Iniciando sincronización con AWS DynamoDB...")

    // Verificar que AWS esté disponible globalmente
    if (typeof window.AWS === "undefined") {
      throw new Error("AWS SDK no está disponible. Asegúrate de incluir el script de AWS SDK.")
    }

    // Obtener el token de ID de Google
    const userAuth = localStorage.getItem("userAuth")
    if (!userAuth) {
      throw new Error("No hay información de autenticación")
    }

    const userData = JSON.parse(userAuth)
    if (!userData.idToken) {
      throw new Error("No hay token de ID disponible")
    }

    // Verificar si el token está expirado
    if (isTokenExpired(userData.idToken)) {
      console.warn("El token de Google ha expirado, se requiere iniciar sesión nuevamente")
      // Guardar datos para sincronización posterior
      saveDataForLaterSync(userId, collectUserProgressData(userId))
      // Redirigir a la página de login
      redirectToLogin()
      return false
    }

    // Recopilar todos los datos de progreso del usuario
    const userProgress = collectUserProgressData(userId)
    console.log("Datos a sincronizar:", userProgress)

    // Configurar AWS SDK
    window.AWS.config.region = AWS_CONFIG.region

    // Configurar credenciales de Cognito
    window.AWS.config.credentials = new window.AWS.CognitoIdentityCredentials({
      IdentityPoolId: AWS_CONFIG.identityPoolId,
      Logins: {
        "accounts.google.com": userData.idToken,
      },
    })

    // Limpiar credenciales anteriores si existen
    if (window.AWS.config.credentials.needsRefresh()) {
      window.AWS.config.credentials.clearCachedId()
    }

    // Obtener credenciales
    await new Promise((resolve, reject) => {
      window.AWS.config.credentials.get((err) => {
        if (err) {
          console.error("Error al obtener credenciales de AWS:", err)
          reject(err)
        } else {
          console.log("Credenciales de AWS obtenidas correctamente")
          resolve()
        }
      })
    })

    // Crear cliente de DynamoDB
    const dynamoDB = new window.AWS.DynamoDB.DocumentClient()

    // Preparar datos para guardar en DynamoDB
    const params = {
      TableName: AWS_CONFIG.dynamoDBTable,
      Item: {
        userId: userId,
        timestamp: new Date().toISOString(),
        progressData: userProgress,
      },
    }

    // Guardar en DynamoDB
    await new Promise((resolve, reject) => {
      dynamoDB.put(params, (err, data) => {
        if (err) {
          console.error("Error al guardar en DynamoDB:", err)
          reject(err)
        } else {
          console.log("Datos guardados en DynamoDB:", data)
          resolve(data)
        }
      })
    })

    // Actualizar la marca de tiempo de última sincronización
    updateLastSyncTimestamp(userId)
    console.log("Sincronización completada exitosamente")

    // Intentar sincronizar datos pendientes si hay
    await syncPendingData()

    return true
  } catch (error) {
    console.error("Error en la sincronización con AWS:", error)

    // Manejar específicamente errores de autenticación
    if (error.code === "NotAuthorizedException" || (error.message && error.message.includes("Invalid login token"))) {
      console.warn("Token de autenticación inválido, se requiere iniciar sesión nuevamente")
      // Guardar datos para sincronización posterior
      saveDataForLaterSync(userId, collectUserProgressData(userId))
      // Redirigir a la página de login
      redirectToLogin()
      return false
    }

    // Guardar datos para sincronización posterior
    saveDataForLaterSync(userId, collectUserProgressData(userId))

    return false
  }
}

// Función para verificar si un token JWT está expirado
function isTokenExpired(token) {
  try {
    // Decodificar el token
    const base64Url = token.split(".")[1]
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    )
    const payload = JSON.parse(jsonPayload)

    // Verificar si tiene campo de expiración
    if (!payload.exp) {
      return false
    }

    // Comparar con la hora actual
    const now = Math.floor(Date.now() / 1000)
    return payload.exp < now
  } catch (error) {
    console.error("Error al verificar expiración del token:", error)
    return true // Si hay error, asumir que está expirado
  }
}

// Función para redirigir a la página de login
function redirectToLogin() {
  try {
    // Mostrar mensaje al usuario
    alert("Tu sesión ha expirado. Por favor, inicia sesión nuevamente.")

    // Usar una ruta relativa simple
    const loginPath = "login.html"

    console.log("Redirigiendo a:", loginPath)

    // Redirigir a la página de login
    window.location.href = loginPath
  } catch (error) {
    console.error("Error al redirigir a login:", error)
    // Intentar redirigir directamente a la raíz como último recurso
    window.location.href = "login.html"
  }
}

// Función para guardar datos para sincronización posterior
function saveDataForLaterSync(userId, progressData) {
  try {
    // Obtener datos pendientes de sincronización
    let pendingSyncs = []
    const pendingSyncsStr = localStorage.getItem("pendingSyncs")

    if (pendingSyncsStr) {
      pendingSyncs = JSON.parse(pendingSyncsStr)
    }

    // Añadir nueva sincronización pendiente
    pendingSyncs.push({
      userId: userId,
      progressData: progressData,
      timestamp: new Date().toISOString(),
    })

    // Limitar a 10 sincronizaciones pendientes para no ocupar demasiado espacio
    if (pendingSyncs.length > 10) {
      pendingSyncs = pendingSyncs.slice(-10)
    }

    // Guardar sincronizaciones pendientes
    localStorage.setItem("pendingSyncs", JSON.stringify(pendingSyncs))

    console.log("Datos guardados para sincronización posterior")
    return true
  } catch (error) {
    console.error("Error al guardar datos para sincronización posterior:", error)
    return false
  }
}

// Función para sincronizar datos pendientes
export async function syncPendingData() {
  try {
    const pendingSyncsStr = localStorage.getItem("pendingSyncs")
    if (!pendingSyncsStr) {
      return true // No hay datos pendientes
    }

    const pendingSyncs = JSON.parse(pendingSyncsStr)
    if (pendingSyncs.length === 0) {
      return true // No hay datos pendientes
    }

    console.log(`Intentando sincronizar ${pendingSyncs.length} conjuntos de datos pendientes...`)

    // Verificar que estamos autenticados
    const userAuth = localStorage.getItem("userAuth")
    if (!userAuth) {
      console.warn("No hay usuario autenticado, no se pueden sincronizar datos pendientes")
      return false
    }

    const userData = JSON.parse(userAuth)
    if (!userData.idToken || isTokenExpired(userData.idToken)) {
      console.warn("Token expirado o no disponible, no se pueden sincronizar datos pendientes")
      return false
    }

    // Configurar AWS SDK
    window.AWS.config.region = AWS_CONFIG.region
    window.AWS.config.credentials = new window.AWS.CognitoIdentityCredentials({
      IdentityPoolId: AWS_CONFIG.identityPoolId,
      Logins: {
        "accounts.google.com": userData.idToken,
      },
    })

    // Obtener credenciales
    await new Promise((resolve, reject) => {
      window.AWS.config.credentials.get((err) => {
        if (err) {
          console.error("Error al obtener credenciales de AWS:", err)
          reject(err)
        } else {
          console.log("Credenciales de AWS obtenidas correctamente")
          resolve()
        }
      })
    })

    // Crear cliente de DynamoDB
    const dynamoDB = new window.AWS.DynamoDB.DocumentClient()

    // Intentar sincronizar cada conjunto de datos
    let successCount = 0
    for (const pendingSync of pendingSyncs) {
      try {
        // Preparar datos para guardar en DynamoDB
        const params = {
          TableName: AWS_CONFIG.dynamoDBTable,
          Item: {
            userId: pendingSync.userId,
            timestamp: new Date().toISOString(),
            progressData: pendingSync.progressData,
          },
        }

        // Guardar en DynamoDB
        await new Promise((resolve, reject) => {
          dynamoDB.put(params, (err, data) => {
            if (err) {
              console.error("Error al guardar datos pendientes en DynamoDB:", err)
              reject(err)
            } else {
              console.log("Datos pendientes guardados en DynamoDB:", data)
              resolve(data)
            }
          })
        })

        successCount++
      } catch (error) {
        console.error("Error al sincronizar datos pendientes:", error)
      }
    }

    // Si todos se sincronizaron correctamente, limpiar la lista
    if (successCount === pendingSyncs.length) {
      localStorage.removeItem("pendingSyncs")
      console.log("Todos los datos pendientes se sincronizaron correctamente")
    } else {
      // Si algunos fallaron, mantener solo los que fallaron
      const remainingPendingSyncs = pendingSyncs.slice(successCount)
      localStorage.setItem("pendingSyncs", JSON.stringify(remainingPendingSyncs))
      console.log(`${successCount} de ${pendingSyncs.length} datos pendientes sincronizados correctamente`)
    }

    return successCount > 0
  } catch (error) {
    console.error("Error al procesar datos pendientes:", error)
    return false
  }
}

// Obtener datos de progreso desde AWS
export async function fetchUserProgressFromCloud() {
  const userId = getCurrentUserId()
  if (!userId) {
    console.warn("No hay usuario autenticado, no se pueden obtener datos")
    return null
  }

  try {
    console.log("Obteniendo datos desde AWS DynamoDB...")

    // Verificar que AWS esté disponible globalmente
    if (typeof window.AWS === "undefined") {
      throw new Error("AWS SDK no está disponible. Asegúrate de incluir el script de AWS SDK.")
    }

    // Obtener el token de ID de Google
    const userAuth = localStorage.getItem("userAuth")
    if (!userAuth) {
      throw new Error("No hay información de autenticación")
    }

    const userData = JSON.parse(userAuth)
    if (!userData.idToken) {
      throw new Error("No hay token de ID disponible")
    }

    // Verificar si el token está expirado
    if (isTokenExpired(userData.idToken)) {
      console.warn("El token de Google ha expirado, se requiere iniciar sesión nuevamente")
      redirectToLogin()
      return null
    }

    // Configurar AWS SDK
    window.AWS.config.region = AWS_CONFIG.region

    // Configurar credenciales de Cognito
    window.AWS.config.credentials = new window.AWS.CognitoIdentityCredentials({
      IdentityPoolId: AWS_CONFIG.identityPoolId,
      Logins: {
        "accounts.google.com": userData.idToken,
      },
    })

    // Limpiar credenciales anteriores si existen
    if (window.AWS.config.credentials.needsRefresh()) {
      window.AWS.config.credentials.clearCachedId()
    }

    // Obtener credenciales
    await new Promise((resolve, reject) => {
      window.AWS.config.credentials.get((err) => {
        if (err) {
          console.error("Error al obtener credenciales de AWS:", err)
          reject(err)
        } else {
          console.log("Credenciales de AWS obtenidas correctamente")
          resolve()
        }
      })
    })

    // Crear cliente de DynamoDB
    const dynamoDB = new window.AWS.DynamoDB.DocumentClient()

    // Preparar consulta para obtener el registro más reciente
    const params = {
      TableName: AWS_CONFIG.dynamoDBTable,
      KeyConditionExpression: "userId = :userId",
      ExpressionAttributeValues: {
        ":userId": userId,
      },
      Limit: 1,
      ScanIndexForward: false, // Ordenar por timestamp descendente (más reciente primero)
    }

    // Consultar DynamoDB
    const result = await new Promise((resolve, reject) => {
      dynamoDB.query(params, (err, data) => {
        if (err) {
          console.error("Error al consultar DynamoDB:", err)
          reject(err)
        } else {
          console.log("Datos obtenidos de DynamoDB:", data)
          resolve(data)
        }
      })
    })

    // Verificar si se encontraron datos
    if (result.Items && result.Items.length > 0) {
      const cloudData = result.Items[0]
      console.log("Datos más recientes encontrados:", cloudData)

      // Aplicar los datos de la nube al almacenamiento local
      applyCloudDataToLocalStorage(cloudData)

      // Actualizar la marca de tiempo de última sincronización
      updateLastSyncTimestamp(userId)

      return cloudData
    } else {
      console.log("No se encontraron datos para este usuario en DynamoDB")
      return null
    }
  } catch (error) {
    console.error("Error al obtener datos de AWS:", error)

    // Manejar específicamente errores de autenticación
    if (error.code === "NotAuthorizedException" || (error.message && error.message.includes("Invalid login token"))) {
      console.warn("Token de autenticación inválido, se requiere iniciar sesión nuevamente")
      redirectToLogin()
    }

    return null
  }
}

// Intentar sincronizar datos pendientes al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  // Esperar un poco para no interferir con la carga inicial
  setTimeout(() => {
    syncPendingData().catch((error) => {
      console.error("Error al sincronizar datos pendientes al inicio:", error)
    })
  }, 5000)
})

