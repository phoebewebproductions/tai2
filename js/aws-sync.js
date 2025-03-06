// Archivo para manejar la sincronización con AWS
import { getCurrentUserId } from "./user-utils.js"
import { AWS_CONFIG } from "./aws-config.js"
import { collectUserProgressData } from "./data-collection.js"
import { updateLastSyncTimestamp, applyCloudDataToLocalStorage } from "./data-persistence.js"

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

    return true
  } catch (error) {
    console.error("Error en la sincronización con AWS:", error)

    // Intentar sincronización en modo de respaldo
    try {
      console.log("Intentando sincronización en modo de respaldo...")

      // Actualizar la marca de tiempo de última sincronización de todos modos
      // para evitar intentos repetidos fallidos
      updateLastSyncTimestamp(userId)

      return false
    } catch (backupError) {
      console.error("Error en sincronización de respaldo:", backupError)
      return false
    }
  }
}

// Función para obtener datos de progreso desde AWS
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

    // Configurar AWS SDK
    window.AWS.config.region = AWS_CONFIG.region

    // Configurar credenciales de Cognito
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
    return null
  }
}

