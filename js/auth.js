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

// Función para verificar el estado de autenticación
export async function checkAuthStatus() {
  const userAuth = localStorage.getItem("userAuth")

  // Si estamos en la página de login
  if (window.location.pathname.includes("login.html")) {
    if (userAuth) {
      const userData = JSON.parse(userAuth)
      if (userData.isAuthenticated) {
        // Si el usuario ya está autenticado, redirigir al dashboard
        window.location.href = "index.html"
      }
    }
  }
  // Si estamos en cualquier otra página que requiera autenticación
  else {
    if (!userAuth) {
      // Si el usuario no está autenticado, redirigir a la página de login
      // Determinar la ruta relativa a la raíz
      let pathToRoot = ""
      const pathSegments = window.location.pathname.split("/").filter(Boolean)

      // Si estamos en un subdirectorio, necesitamos navegar hacia arriba
      if (pathSegments.length > 0) {
        pathToRoot = "../".repeat(pathSegments.length - 1)
      }

      window.location.href = `${pathToRoot}login.html`
    } else {
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

    // Determinar la ruta relativa a la raíz
    let pathToRoot = ""
    const pathSegments = window.location.pathname.split("/").filter(Boolean)

    // Si estamos en un subdirectorio, necesitamos navegar hacia arriba
    if (pathSegments.length > 0) {
      pathToRoot = "../".repeat(pathSegments.length - 1)
    }

    // Redirigir a la página de login
    window.location.href = `${pathToRoot}login.html`
  } catch (error) {
    console.error("Error al cerrar sesión:", error)
    // Forzar redirección a login en caso de error
    window.location.href = "login.html"
  }
}

// Exportar funciones necesarias
export { saveUserData }

