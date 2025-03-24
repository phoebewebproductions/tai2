// Función para decodificar el token JWT
function decodeJwtResponse(token) {
  var base64Url = token.split(".")[1]
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join(""),
  )

  return JSON.parse(jsonPayload)
}

// Función para manejar la respuesta de Google
window.handleCredentialResponse = async (response) => {
  try {
    console.log("Respuesta de Google recibida:", response)

    // Decodificar el token JWT para obtener la información del usuario
    const responsePayload = decodeJwtResponse(response.credential)
    console.log("Información de usuario decodificada:", responsePayload)

    // Guardar la información del usuario en localStorage, incluyendo el token
    saveUserData(responsePayload, response.credential)

    // Intentar obtener datos de progreso desde la nube
    try {
      const { fetchUserProgressFromCloud } = await import("./aws-sync.js")
      await fetchUserProgressFromCloud()
      console.log("Datos sincronizados desde la nube")
    } catch (error) {
      console.error("Error al obtener datos de la nube:", error)
      // Continuamos aunque haya error, usaremos datos locales
    }

    // Intentar sincronizar datos pendientes si hay
    try {
      const { syncPendingData } = await import("./aws-sync.js")
      if (typeof syncPendingData === "function") {
        await syncPendingData()
        console.log("Datos pendientes sincronizados después del login")
      }
    } catch (error) {
      console.error("Error al sincronizar datos pendientes después del login:", error)
    }

    // Redirigir al dashboard
    window.location.href = "index.html"
  } catch (error) {
    console.error("Error al iniciar sesión:", error)
    alert("Error al iniciar sesión. Por favor, inténtalo de nuevo.")
  }
}

// Función para guardar los datos del usuario
function saveUserData(userData, idToken) {
  // Obtener datos existentes del usuario si los hay
  const existingUserData = localStorage.getItem("userAuth")
  const userInfo = {
    id: userData.sub,
    name: userData.name,
    email: userData.email,
    picture: userData.picture,
    isAuthenticated: true,
    lastLogin: new Date().toISOString(),
    firstLogin: new Date().toISOString(), // Por defecto, primera vez que inicia sesión
    idToken: idToken, // Guardar el token para autenticación con AWS
    tokenExpiration: calculateTokenExpiration(idToken), // Añadir expiración del token
  }

  if (existingUserData) {
    try {
      const parsedData = JSON.parse(existingUserData)
      // Mantener la fecha del primer inicio de sesión
      if (parsedData.firstLogin) {
        userInfo.firstLogin = parsedData.firstLogin
      }
      // Mantener cualquier otra información personalizada que queramos preservar
      if (parsedData.customSettings) {
        userInfo.customSettings = parsedData.customSettings
      }
      // Mantener la marca de tiempo de última sincronización
      if (parsedData.lastSync) {
        userInfo.lastSync = parsedData.lastSync
      }
    } catch (error) {
      console.error("Error al analizar datos existentes del usuario:", error)
    }
  }

  localStorage.setItem("userAuth", JSON.stringify(userInfo))
  console.log("Datos del usuario guardados:", userInfo)
}

// Función para calcular la expiración del token
function calculateTokenExpiration(token) {
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
    if (payload.exp) {
      return new Date(payload.exp * 1000).toISOString()
    }

    // Si no tiene campo de expiración, establecer una expiración predeterminada (1 hora)
    return new Date(Date.now() + 3600 * 1000).toISOString()
  } catch (error) {
    console.error("Error al calcular expiración del token:", error)
    // Establecer una expiración predeterminada (1 hora)
    return new Date(Date.now() + 3600 * 1000).toISOString()
  }
}

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

// Función para verificar el estado de autenticación
export async function checkAuthStatus() {
  const userAuth = localStorage.getItem("userAuth")

  // Si estamos en la página de login
  if (window.location.pathname.includes("login.html")) {
    if (userAuth) {
      const userData = JSON.parse(userAuth)
      if (userData.isAuthenticated && !isTokenExpired(userData.idToken)) {
        // Si el usuario ya está autenticado y el token es válido, redirigir al dashboard
        window.location.href = "index.html"
      }
    }
  }
  // Si estamos en cualquier otra página que requiera autenticación
  else {
    if (!userAuth) {
      // Si el usuario no está autenticado, redirigir a la página de login
      // Usar una ruta relativa simple
      const loginPath = "login.html"

      console.log("Redirigiendo a:", loginPath)
      window.location.href = loginPath
    } else {
      // Verificar si el token ha expirado
      const userData = JSON.parse(userAuth)
      if (isTokenExpired(userData.idToken)) {
        console.warn("Token expirado, redirigiendo a login...")
        logout()
        return
      }

      // Intentar sincronizar datos automáticamente si es necesario
      try {
        const { shouldSyncData } = await import("./user-utils.js")
        const { syncUserProgress } = await import("./aws-sync.js")

        if (shouldSyncData()) {
          console.log("Iniciando sincronización automática...")
          await syncUserProgress()
        } else {
          console.log("No es necesario sincronizar datos automáticamente")
        }
      } catch (error) {
        console.error("Error durante la sincronización automática:", error)
      }
    }
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

// Función para cerrar sesión
export async function logout() {
  try {
    // Intentar sincronizar antes de cerrar sesión
    try {
      const { syncUserProgress } = await import("./aws-sync.js")
      await syncUserProgress()
      console.log("Datos sincronizados antes de cerrar sesión")
    } catch (error) {
      console.error("Error al sincronizar antes de cerrar sesión:", error)
    }

    // Eliminar datos de autenticación
    localStorage.removeItem("userAuth")

    // Obtener la ruta correcta a login.html
    // Usar una ruta relativa simple
    const loginPath = "login.html"

    console.log("Redirigiendo a:", loginPath)

    // Redirigir a la página de login
    window.location.href = loginPath
  } catch (error) {
    console.error("Error al cerrar sesión:", error)
    // Forzar redirección a la raíz como último recurso
    window.location.href = "login.html"
  }
}

// Exportar funciones necesarias
export { saveUserData }

