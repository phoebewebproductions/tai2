/**
 * Script para integrar el modo oscuro del header con el sistema existente
 * Este archivo debe incluirse después de dynamic-header.js y css-only-dark-mode.js
 */

// Modificar la función applyDarkModeToHeader para que no altere el header
function applyDarkModeToHeader() {
  // Verificar si el modo oscuro está activado
  const isDarkMode =
    localStorage.getItem("darkMode") === "true" ||
    document.documentElement.classList.contains("dark-mode") ||
    document.body.classList.contains("dark-mode")

  console.log("Estado del modo oscuro al cargar:", isDarkMode)

  // Actualizar solo el icono del botón de modo oscuro en el header
  if (isDarkMode) {
    // Actualizar el icono del botón de modo oscuro en el header
    const darkModeIcon = document.getElementById("darkModeIcon")
    if (darkModeIcon) {
      darkModeIcon.className = "fa-solid fa-sun"
    }
  }
}

// Modificar la función setupDarkModeButtons para que no altere el estilo del header
function setupDarkModeButtons() {
  // Reemplazar el evento del botón de modo oscuro en el header
  const darkModeToggle = document.getElementById("darkModeToggle")
  if (darkModeToggle) {
    // Eliminar eventos existentes
    const newButton = darkModeToggle.cloneNode(true)
    darkModeToggle.parentNode.replaceChild(newButton, darkModeToggle)

    // Añadir nuevo evento que use la función global toggleDarkMode
    newButton.addEventListener("click", () => {
      if (typeof window.toggleDarkMode === "function") {
        window.toggleDarkMode()

        // Actualizar el icono después de cambiar el modo
        const icon = document.getElementById("darkModeIcon")
        if (icon) {
          const isDark = document.documentElement.classList.contains("dark-mode")
          icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon"
        }
      }
    })
  }

  // Hacer lo mismo para el botón de modo oscuro en el menú móvil
  const mobileDarkModeToggle = document.getElementById("darkmode-mobile")
  if (mobileDarkModeToggle) {
    // Eliminar eventos existentes
    const newMobileButton = mobileDarkModeToggle.cloneNode(true)
    mobileDarkModeToggle.parentNode.replaceChild(newMobileButton, mobileDarkModeToggle)

    // Añadir nuevo evento
    newMobileButton.addEventListener("click", () => {
      if (typeof window.toggleDarkMode === "function") {
        window.toggleDarkMode()

        // Cerrar el menú móvil
        const mobileMenu = document.querySelector(".mobile-menu")
        const overlay = document.querySelector(".mobile-overlay")
        const hamburgerMenu = document.querySelector(".hamburger-menu")

        if (mobileMenu) mobileMenu.classList.remove("active")
        if (overlay) overlay.classList.remove("active")
        if (hamburgerMenu) hamburgerMenu.classList.remove("active")

        document.body.style.overflow = ""
      }
    })
  }
}

// Función principal que se ejecuta cuando el DOM está listo
function initDarkModeIntegration() {
  console.log("Inicializando integración de modo oscuro para el header...")

  // Aplicar modo oscuro al header si es necesario
  applyDarkModeToHeader()

  // Configurar los botones de modo oscuro
  setupDarkModeButtons()

  // Ocultar el botón de inicio en la página principal
  hideHomeButtonOnHomePage()

  // Observar cambios en las clases del body y documentElement para mantener sincronizado el header
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "class") {
        const isDark =
          document.documentElement.classList.contains("dark-mode") || document.body.classList.contains("dark-mode")

        // Actualizar el header según el estado del modo oscuro
        const header = document.querySelector(".dynamic-header")
        if (header) {
          if (isDark) {
            header.style.background = "linear-gradient(90deg, #15803d 0%, #1e40af 100%)"
          } else {
            header.style.background = "linear-gradient(90deg, #22c55e 0%, #0070f3 100%)"
          }
        }

        // Actualizar el icono
        const darkModeIcon = document.getElementById("darkModeIcon")
        if (darkModeIcon) {
          darkModeIcon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon"
        }
      }
    })
  })

  // Observar cambios en las clases del body y documentElement
  observer.observe(document.body, { attributes: true })
  observer.observe(document.documentElement, { attributes: true })

  console.log("Integración de modo oscuro para el header inicializada correctamente")
}

// Función para ocultar el botón de inicio en la página principal
function hideHomeButtonOnHomePage() {
  // Verificar si estamos en la página principal
  const isHomePage =
    document.querySelector("header.inicio") !== null ||
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html" ||
    window.location.pathname.endsWith("/index.html")

  console.log("Verificación adicional de página de inicio:", {
    hasInicioClass: document.querySelector("header.inicio") !== null,
    pathname: window.location.pathname,
    isHomePage,
  })

  if (isHomePage) {
    // Ocultar el botón de inicio
    const homeButton = document.getElementById("home-button")
    if (homeButton) {
      homeButton.style.display = "none"
      console.log("Botón de inicio ocultado desde header-dark-mode-integration.js")
    }

    // También ocultar el botón en el menú móvil
    const mobileHomeButton = document.getElementById("home-mobile")
    if (mobileHomeButton) {
      mobileHomeButton.style.display = "none"
      console.log("Botón de inicio móvil ocultado desde header-dark-mode-integration.js")
    }
  } else {
    // Si NO estamos en la página de inicio, forzar la visibilidad del botón
    const homeButton = document.getElementById("home-button")
    if (homeButton) {
      homeButton.setAttribute("style", "display: flex !important")
      console.log("Botón de inicio forzado a ser visible desde header-dark-mode-integration.js")
    }

    // También forzar la visibilidad del botón en el menú móvil
    const mobileHomeButton = document.getElementById("home-mobile")
    if (mobileHomeButton) {
      mobileHomeButton.setAttribute("style", "display: flex !important")
      console.log("Botón de inicio móvil forzado a ser visible desde header-dark-mode-integration.js")
    }
  }
}

// Ejecutar cuando el DOM esté completamente cargado
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    // Esperar un poco para asegurar que todos los scripts estén cargados
    setTimeout(initDarkModeIntegration, 100)
  })
} else {
  // Si el DOM ya está cargado, ejecutar después de un breve retraso
  setTimeout(initDarkModeIntegration, 100)
}

// También ejecutar cuando la ventana esté completamente cargada
window.addEventListener("load", () => {
  // Volver a aplicar el modo oscuro al header para asegurar consistencia
  applyDarkModeToHeader()
})

