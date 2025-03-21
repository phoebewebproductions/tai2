/**
 * Modo oscuro basado únicamente en CSS, sin DarkReader
 * Esta solución evita los problemas de CORS y es más ligera
 */

// Estado del modo oscuro
let darkModeEnabled = false

/**
 * Aplicar estilos directamente a los botones del sidebar
 * para asegurar que mantengan sus estilos originales
 */
function preserveSidebarButtonStyles() {
  // Seleccionar todos los botones de punto
  const puntoBtns = document.querySelectorAll(".punto-btn")

  // Aplicar estilos inline a cada botón
  puntoBtns.forEach((btn) => {
    // Guardar los estilos originales
    const computedStyle = window.getComputedStyle(btn)
    const originalColor = computedStyle.color
    const originalBgColor = computedStyle.backgroundColor
    const originalBorderColor = computedStyle.borderColor

    // Guardar los estilos originales como atributos de datos
    btn.setAttribute("data-original-color", originalColor)
    btn.setAttribute("data-original-bg-color", originalBgColor)
    btn.setAttribute("data-original-border-color", originalBorderColor)

    // Aplicar estilos inline
    btn.style.setProperty("color", originalColor, "important")
    btn.style.setProperty("background-color", originalBgColor, "important")
    btn.style.setProperty("border-color", originalBorderColor, "important")
  })

  // Configurar un observador para aplicar estos estilos a nuevos botones
  setupButtonsObserver()
}

/**
 * Configurar un observador para nuevos botones
 */
function setupButtonsObserver() {
  // Crear un observador de mutaciones
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        // Buscar nuevos botones de punto
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            // Elemento
            // Buscar dentro del nodo añadido
            const newButtons = node.querySelectorAll ? node.querySelectorAll(".punto-btn") : []

            // Aplicar estilos a los nuevos botones
            newButtons.forEach((btn) => {
              const computedStyle = window.getComputedStyle(btn)
              const originalColor = computedStyle.color
              const originalBgColor = computedStyle.backgroundColor
              const originalBorderColor = computedStyle.borderColor

              btn.setAttribute("data-original-color", originalColor)
              btn.setAttribute("data-original-bg-color", originalBgColor)
              btn.setAttribute("data-original-border-color", originalBorderColor)

              btn.style.setProperty("color", originalColor, "important")
              btn.style.setProperty("background-color", originalBgColor, "important")
              btn.style.setProperty("border-color", originalBorderColor, "important")
            })

            // Si el nodo mismo es un botón
            if (node.classList && node.classList.contains("punto-btn")) {
              const computedStyle = window.getComputedStyle(node)
              const originalColor = computedStyle.color
              const originalBgColor = computedStyle.backgroundColor
              const originalBorderColor = computedStyle.borderColor

              node.setAttribute("data-original-color", originalColor)
              node.setAttribute("data-original-bg-color", originalBgColor)
              node.setAttribute("data-original-border-color", originalBorderColor)

              node.style.setProperty("color", originalColor, "important")
              node.style.setProperty("background-color", originalBgColor, "important")
              node.style.setProperty("border-color", originalBorderColor, "important")
            }
          }
        })
      }
    })
  })

  // Observar cambios en el contenedor de puntos
  const puntosContainer = document.querySelector(".puntos-container")
  if (puntosContainer) {
    observer.observe(puntosContainer, {
      childList: true,
      subtree: true,
    })
  }

  // Observar cambios en la navegación de temas
  const temaNavigation = document.querySelector(".tema-navigation")
  if (temaNavigation) {
    observer.observe(temaNavigation, {
      childList: true,
      subtree: true,
    })
  }
}

/**
 * Preservar los estilos originales del header
 */
function preserveHeaderStyles() {
  // Capturar los estilos originales del header antes de aplicar el modo oscuro
  const header = document.querySelector("header") || document.getElementById("bloque-header")
  if (header) {
    // Aplicar !important a todos los estilos computados del header
    const headerStyle = window.getComputedStyle(header)
    for (let i = 0; i < headerStyle.length; i++) {
      const property = headerStyle[i]
      const value = headerStyle.getPropertyValue(property)
      if (value) {
        header.style.setProperty(property, value, "important")
      }
    }

    // Hacer lo mismo para los elementos dentro del header
    const headerElements = header.querySelectorAll("*")
    headerElements.forEach((element) => {
      const style = window.getComputedStyle(element)
      // Preservar solo las propiedades críticas para evitar sobrecarga
      const criticalProperties = [
        "color",
        "background-color",
        "background-image",
        "border-color",
        "fill",
        "stroke",
        "box-shadow",
        "text-shadow",
      ]

      criticalProperties.forEach((property) => {
        const value = style.getPropertyValue(property)
        if (value) {
          element.style.setProperty(property, value, "important")
        }
      })
    })
  }

  // Preservar específicamente los estilos de los botones del header
  const headerButtons = document.querySelectorAll(
    ".buttonsHeader button, .buttonsHeader a, #darkModeToggle, #progress-button, #sidebar-toggle",
  )
  headerButtons.forEach((button) => {
    const style = window.getComputedStyle(button)
    const criticalProperties = ["color", "background-color", "border-color", "fill", "stroke"]

    criticalProperties.forEach((property) => {
      const value = style.getPropertyValue(property)
      if (value) {
        button.style.setProperty(property, value, "important")
      }
    })
  })
}

/**
 * Activar modo oscuro
 */
function enableDarkMode() {
  // Preservar estilos del header antes de aplicar el modo oscuro
  preserveHeaderStyles()

  // Aplicar clase CSS personalizada
  document.documentElement.classList.add("dark-mode")

  // Preservar estilos de los botones del sidebar
  preserveSidebarButtonStyles()

  // Actualizar icono
  const darkModeIcon = document.getElementById("darkModeIcon")
  if (darkModeIcon) {
    darkModeIcon.classList.replace("fa-moon", "fa-sun")
  }

  // Guardar preferencia
  localStorage.setItem("darkMode", "true")

  darkModeEnabled = true
}

/**
 * Desactivar modo oscuro
 */
function disableDarkMode() {
  // Quitar clase CSS personalizada
  document.documentElement.classList.remove("dark-mode")

  // Actualizar icono
  const darkModeIcon = document.getElementById("darkModeIcon")
  if (darkModeIcon) {
    darkModeIcon.classList.replace("fa-sun", "fa-moon")
  }

  // Guardar preferencia
  localStorage.setItem("darkMode", "false")

  darkModeEnabled = false
}

/**
 * Alternar modo oscuro
 */
function toggleDarkMode() {
  if (darkModeEnabled) {
    disableDarkMode()
  } else {
    enableDarkMode()
  }
}

/**
 * Inicializar modo oscuro
 */
function initializeDarkMode() {
  // Cargar preferencia
  const darkModePreference = localStorage.getItem("darkMode") === "true"

  // Aplicar modo oscuro si está habilitado
  if (darkModePreference) {
    enableDarkMode()
  }

  // Configurar botón
  const darkModeToggle = document.getElementById("darkModeToggle")
  if (darkModeToggle) {
    // Eliminar cualquier event listener existente
    const newButton = darkModeToggle.cloneNode(true)
    darkModeToggle.parentNode.replaceChild(newButton, darkModeToggle)

    // Añadir nuevo event listener
    newButton.addEventListener("click", toggleDarkMode)
  }

  // Verificar preferencia del sistema si no hay preferencia de usuario
  if (localStorage.getItem("darkMode") === null) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (prefersDark) {
      enableDarkMode()
    }
  }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeDarkMode)
} else {
  initializeDarkMode()
}

// Exportar funciones
window.enableDarkMode = enableDarkMode
window.disableDarkMode = disableDarkMode
window.toggleDarkMode = toggleDarkMode

