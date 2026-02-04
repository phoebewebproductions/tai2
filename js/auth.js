/**
 * Modo local - Sin autenticación ni servicios de AWS
 * Todos los datos se guardan localmente en localStorage
 */

// ID de usuario local fijo para modo sin autenticación
const LOCAL_USER_ID = "local_user"

// Función para obtener el ID del usuario local
export function getLocalUserId() {
  return LOCAL_USER_ID
}

// Función para verificar el estado de autenticación (siempre autenticado en modo local)
export async function checkAuthStatus() {
  console.log("Modo local activo - No se requiere autenticación")
  
  // Crear usuario local si no existe
  const userAuth = localStorage.getItem("userAuth")
  if (!userAuth) {
    const localUserData = {
      id: LOCAL_USER_ID,
      name: "Usuario Local",
      isAuthenticated: true,
      isLocalMode: true,
      firstLogin: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    }
    localStorage.setItem("userAuth", JSON.stringify(localUserData))
    console.log("Usuario local creado")
  } else {
    // Actualizar última sesión
    try {
      const userData = JSON.parse(userAuth)
      userData.lastLogin = new Date().toISOString()
      userData.isLocalMode = true
      localStorage.setItem("userAuth", JSON.stringify(userData))
    } catch (error) {
      console.error("Error al actualizar datos de usuario:", error)
    }
  }
}

// Función para cerrar sesión (en modo local solo limpia datos si se desea)
export async function logout() {
  if (confirm("¿Deseas borrar todos tus datos de progreso? Esta acción no se puede deshacer.")) {
    // Limpiar todos los datos de localStorage relacionados con el progreso
    const keysToRemove = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && (key.includes("user_") || key.includes("courseProgress") || key.includes("examHistory") || key.includes("examResult"))) {
        keysToRemove.push(key)
      }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key))
    localStorage.removeItem("userAuth")
    
    console.log("Datos de progreso eliminados")
    alert("Tus datos han sido eliminados. La página se recargará.")
    window.location.reload()
  }
}

// Función vacía para mantener compatibilidad con código existente
export function saveUserData() {
  console.log("Modo local - saveUserData no hace nada")
}

