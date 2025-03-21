// Importar funciones de autenticación
import { checkAuthStatus, logout } from "./auth.js"
/*import { initializeDarkMode } from "./dark-mode.js"*/

// Importar función de sincronización (con manejo de errores)
let syncUserProgress
try {
  const awsModule = await import("./aws-sync.js")
  syncUserProgress = awsModule.syncUserProgress
} catch (error) {
  console.warn("No se pudo cargar el módulo de sincronización:", error)
  // Función de respaldo si no se puede cargar el módulo
  syncUserProgress = async () => {
    console.log("Sincronización no disponible")
    return false
  }
}

/*// Función para aplicar el modo oscuro
function applyDarkMode(isDark) {
  const root = document.documentElement
  if (isDark) {
    root.classList.add("dark-mode")
  } else {
    root.classList.remove("dark-mode")
  }
}

// Función para cambiar entre modo claro y oscuro
function toggleDarkMode() {
  const root = document.documentElement
  const isDarkMode = !root.classList.contains("dark-mode")
  applyDarkMode(isDarkMode)
  updateDarkModeButton(isDarkMode)

  // Guardar preferencia de modo oscuro específica para el usuario
  const userAuth = localStorage.getItem("userAuth")
  if (userAuth) {
    const userData = JSON.parse(userAuth)
    localStorage.setItem(`user_${userData.id}_darkMode`, isDarkMode)
  } else {
    localStorage.setItem("darkMode", isDarkMode)
  }
}

// Función para actualizar el ícono del botón de modo oscuro
function updateDarkModeButton(isDarkMode) {
  const darkModeIcon = document.getElementById("darkModeIcon")
  if (darkModeIcon) {
    if (isDarkMode) {
      darkModeIcon.classList.replace("fa-moon", "fa-sun") // Cambia a sol en modo oscuro
    } else {
      darkModeIcon.classList.replace("fa-sun", "fa-moon") // Cambia a luna en modo claro
    }
  }
}

// Función para inicializar el modo oscuro basado en la preferencia guardada
function initializeDarkMode() {
  let isDarkMode = false

  // Intentar cargar preferencia específica del usuario
  const userAuth = localStorage.getItem("userAuth")
  if (userAuth) {
    const userData = JSON.parse(userAuth)
    isDarkMode = localStorage.getItem(`user_${userData.id}_darkMode`) === "true"
  } else {
    // Fallback a preferencia genérica
    isDarkMode = localStorage.getItem("darkMode") === "true"
  }

  applyDarkMode(isDarkMode)
  updateDarkModeButton(isDarkMode)
}*/

// Función para mostrar la información del usuario en el dashboard
function displayUserInfo() {
  const userAuth = localStorage.getItem("userAuth")

  if (userAuth) {
    const userData = JSON.parse(userAuth)
    const welcomeHeader = document.querySelector(".welcome-header h2")

    if (welcomeHeader) {
      welcomeHeader.textContent = `Bienvenido/a, ${userData.name.split(" ")[0]}`
    }

    // Mostrar la última vez que el usuario accedió
    const lastAccessSpan = document.querySelector(".last-access")
    if (lastAccessSpan) {
      const lastLogin = new Date(userData.lastLogin)
      const formattedDate = lastLogin.toLocaleDateString()
      const formattedTime = lastLogin.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      lastAccessSpan.textContent = `Último acceso: ${formattedDate}, ${formattedTime}`
    }

    // Añadir botón de sincronización si no existe
    const buttonsHeader = document.querySelector(".buttonsHeader")

    if (buttonsHeader) {
      // Añadir botón de sincronización si no existe
      if (!document.getElementById("sync-button")) {
        const syncButton = document.createElement("button")
        syncButton.id = "sync-button"
        syncButton.className = "header-button"
        syncButton.setAttribute("aria-label", "Sincronizar progreso")
        syncButton.setAttribute("title", "Sincronizar progreso")
        syncButton.innerHTML = '<i class="fa-solid fa-sync"></i>'

        syncButton.addEventListener("click", async () => {
          try {
            syncButton.classList.add("rotating") // Añadir clase para animación
            const success = await syncUserProgress()
            syncButton.classList.remove("rotating")

            if (success) {
              // Mostrar indicador de éxito
              syncButton.classList.add("sync-success")
              setTimeout(() => {
                syncButton.classList.remove("sync-success")
              }, 2000)
            } else {
              // Mostrar indicador de error
              syncButton.classList.add("sync-error")
              setTimeout(() => {
                syncButton.classList.remove("sync-error")
              }, 2000)
            }
          } catch (error) {
            console.error("Error durante la sincronización:", error)
            syncButton.classList.remove("rotating")
            syncButton.classList.add("sync-error")
            setTimeout(() => {
              syncButton.classList.remove("sync-error")
            }, 2000)
          }
        })

        buttonsHeader.appendChild(syncButton)
      }

      // Añadir botón de cerrar sesión si no existe
      if (!document.getElementById("logout-button")) {
        const logoutButton = document.createElement("button")
        logoutButton.id = "logout-button"
        logoutButton.className = "header-button"
        logoutButton.setAttribute("aria-label", "Cerrar sesión")
        logoutButton.setAttribute("title", "Cerrar sesión")
        logoutButton.innerHTML = '<i class="fa-solid fa-sign-out-alt"></i>'

        logoutButton.addEventListener("click", logout)

        buttonsHeader.appendChild(logoutButton)
      }
    }

    // Actualizar la imagen de perfil si está disponible
    if (userData.picture) {
      // Verificar si ya existe la imagen de perfil
      let userPicture = document.querySelector(".user-picture")

      if (!userPicture) {
        userPicture = document.createElement("img")
        userPicture.className = "user-picture"
        userPicture.alt = "Foto de perfil"
        userPicture.style.width = "32px"
        userPicture.style.height = "32px"
        userPicture.style.borderRadius = "50%"
        userPicture.style.marginLeft = "10px"

        if (buttonsHeader) {
          buttonsHeader.appendChild(userPicture)
        }
      }

      userPicture.src = userData.picture
    }

    // Mostrar indicador de sincronización
    const lastSyncInfo = document.createElement("div")
    lastSyncInfo.className = "last-sync-info"
    lastSyncInfo.style.fontSize = "0.8rem"
    lastSyncInfo.style.color = "var(--color-text-light)"
    lastSyncInfo.style.marginTop = "5px"

    if (userData.lastSync) {
      const lastSync = new Date(userData.lastSync)
      const formattedSyncDate = lastSync.toLocaleDateString()
      const formattedSyncTime = lastSync.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      lastSyncInfo.textContent = `Última sincronización: ${formattedSyncDate}, ${formattedSyncTime}`
    } else {
      lastSyncInfo.textContent = "No se ha sincronizado aún"
    }

    // Añadir o actualizar el indicador de sincronización
    const existingLastSyncInfo = document.querySelector(".last-sync-info")
    if (existingLastSyncInfo) {
      existingLastSyncInfo.replaceWith(lastSyncInfo)
    } else {
      const progressSummary = document.querySelector(".progress-summary")
      if (progressSummary) {
        progressSummary.appendChild(lastSyncInfo)
      }
    }
  }
}

// Añadir estilos CSS para la animación de sincronización
function addSyncStyles() {
  const styleElement = document.createElement("style")
  styleElement.textContent = `
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    .rotating {
      animation: rotate 1s linear infinite;
    }
    
    .sync-success {
      color: var(--color-success, #4CAF50) !important;
    }
    
    .sync-error {
      color: var(--color-error, #F44336) !important;
    }
  `
  document.head.appendChild(styleElement)
}

// Función principal de inicialización
function initialize() {
  console.log("Inicialización del script comenzada")

  // Verificar autenticación
  checkAuthStatus()

  // Añadir estilos para la sincronización
  addSyncStyles()

  // Dark mode is now handled by simple-dark-mode.js
  // No need to call initializeDarkMode() here

  // Mostrar información del usuario si estamos en el dashboard
  if (!window.location.pathname.includes("login.html")) {
    displayUserInfo()
  }

  // Function to handle "under construction" elements
  const construccion = document.querySelectorAll(".enconstruccion")
  construccion.forEach((punto) => {
    punto.addEventListener("click", (e) => {
      e.preventDefault()
      alert("Todavía no, pero ya se barajan las preguntas y tienes tema oscuro...")
    })
  })

  console.log("Inicialización del script completada")
}

// Ejecutar la inicialización cuando el DOM esté cargado
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize)
} else {
  initialize()
}

