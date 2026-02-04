// Utilidades relacionadas con el usuario - Modo Local

// ID de usuario local fijo para modo sin autenticación
const LOCAL_USER_ID = "local_user"

// Función para obtener el ID del usuario actual (siempre devuelve usuario local)
export function getCurrentUserId() {
  // Verificar si existe usuario en localStorage, si no crearlo
  const userAuth = localStorage.getItem("userAuth")
  if (!userAuth) {
    // Crear usuario local automáticamente
    const localUserData = {
      id: LOCAL_USER_ID,
      name: "Usuario Local",
      isAuthenticated: true,
      isLocalMode: true,
      firstLogin: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    }
    localStorage.setItem("userAuth", JSON.stringify(localUserData))
    return LOCAL_USER_ID
  }

  try {
    const userData = JSON.parse(userAuth)
    return userData.id || LOCAL_USER_ID
  } catch (error) {
    console.error("Error al obtener el ID del usuario:", error)
    return LOCAL_USER_ID
  }
}

// Función para verificar si es necesario sincronizar (siempre false en modo local)
export function shouldSyncData() {
  // En modo local, no hay sincronización con la nube
  return false
}

// Función para guardar configuraciones personalizadas del usuario
export function saveUserCustomSettings(settings) {
  const userAuth = localStorage.getItem("userAuth")
  if (!userAuth) return false

  try {
    const userData = JSON.parse(userAuth)
    userData.customSettings = {
      ...userData.customSettings,
      ...settings,
    }
    localStorage.setItem("userAuth", JSON.stringify(userData))
    return true
  } catch (error) {
    console.error("Error al guardar configuraciones:", error)
    return false
  }
}

// Función para obtener configuraciones personalizadas del usuario
export function getUserCustomSettings() {
  const userAuth = localStorage.getItem("userAuth")
  if (!userAuth) return null

  try {
    const userData = JSON.parse(userAuth)
    return userData.customSettings || {}
  } catch (error) {
    console.error("Error al obtener configuraciones:", error)
    return {}
  }
}

