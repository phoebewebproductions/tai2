// Utilidades relacionadas con el usuario

// Función para obtener el ID del usuario actual
export function getCurrentUserId() {
  const userAuth = localStorage.getItem("userAuth")
  if (!userAuth) return null

  try {
    const userData = JSON.parse(userAuth)
    return userData.id // El ID único de Google
  } catch (error) {
    console.error("Error al obtener el ID del usuario:", error)
    return null
  }
}

// Función para verificar si es necesario sincronizar
export function shouldSyncData() {
  const userAuth = localStorage.getItem("userAuth")
  if (!userAuth) return false

  try {
    const userData = JSON.parse(userAuth)

    // Si nunca se ha sincronizado, debemos sincronizar
    if (!userData.lastSync) return true

    // Si han pasado más de 5 minutos desde la última sincronización
    const lastSync = new Date(userData.lastSync)
    const now = new Date()
    const diffMinutes = (now - lastSync) / (1000 * 60)

    return diffMinutes > 5
  } catch (error) {
    console.error("Error al verificar sincronización:", error)
    return false
  }
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

