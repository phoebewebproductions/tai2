/**
 * Script para crear un header dinámico en todas las páginas
 */

// Función principal para inicializar el header dinámico
function initDynamicHeader() {
  console.log("Inicializando header dinámico...")

  // Verificar si ya existe un header
  const existingHeader = document.querySelector("header")
  if (!existingHeader) {
    console.error("No se encontró el elemento <header> en la página")
    return
  }

  // Detectar si estamos en la página de inicio SOLO por la clase "inicio"
  const isHomePage = existingHeader.classList.contains("inicio")
  console.log("¿Es página de inicio?", isHomePage, "Tiene clase 'inicio':", existingHeader.classList.contains("inicio"))

  // Añadir clases al header existente sin eliminar las existentes
  existingHeader.classList.add("dynamic-header")

  // Crear el contenido del header
  createHeaderContent(existingHeader, isHomePage)

  // Inicializar el menú móvil
  initMobileMenu(isHomePage)

  console.log("Header dinámico inicializado correctamente")
}

// Modificar la función createHeaderContent para eliminar el botón de inicio
function createHeaderContent(headerElement, isHomePage) {
  // Crear el título
  const titleContainer = document.createElement("div")
  titleContainer.className = "dynamic-header-title"

  // Crear un enlace para el título principal
  const titleLink = document.createElement("a")
  titleLink.href = determineHomeUrl() // Función para determinar la URL correcta
  titleLink.style.textDecoration = "none"
  titleLink.style.color = "white"
  titleLink.style.display = "block"
  titleLink.setAttribute("aria-label", "Ir a la página de inicio")

  const mainTitle = document.createElement("h1")
  mainTitle.textContent = "Formación Online"
  titleLink.appendChild(mainTitle)

  const subTitle = document.createElement("h2")
  subTitle.textContent = detectPageContext()

  // Añadir el enlace del título y el subtítulo al contenedor
  titleContainer.appendChild(titleLink)
  titleContainer.appendChild(subTitle)

  // Crear los botones
  const buttonsContainer = document.createElement("div")
  buttonsContainer.className = "dynamic-header-buttons buttonsHeader" // Añadido clase buttonsHeader para el botón de progreso

  // Botón de progreso
  const progressButton = createHeaderButton("progress-button", "fa-chart-pie", "Ver progreso")
  // Ocultar el botón de progreso en la página de inicio
  if (isHomePage) {
    progressButton.style.display = "none"
  }

  // Botón de modo oscuro
  const darkModeButton = createHeaderButton("darkModeToggle", "fa-moon", "Alternar modo claro/oscuro")

  // Botón para borrar datos (reemplaza logout)
  const clearDataButton = createHeaderButton("clear-data-button", "fa-trash-alt", "Borrar datos de progreso")

  // Añadir botones al contenedor
  buttonsContainer.appendChild(progressButton)
  buttonsContainer.appendChild(darkModeButton)
  buttonsContainer.appendChild(clearDataButton)

  // Crear menú hamburguesa para móviles
  const hamburgerMenu = document.createElement("div")
  hamburgerMenu.className = "hamburger-menu"
  hamburgerMenu.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `

  // Limpiar el header y añadir los nuevos elementos
  headerElement.innerHTML = ""
  headerElement.appendChild(titleContainer)
  headerElement.appendChild(buttonsContainer)
  headerElement.appendChild(hamburgerMenu)

  // Crear el menú móvil
  createMobileMenu(isHomePage)

  // Añadir eventos a los botones
  addButtonEvents()
}

// Función para determinar la URL correcta para la página de inicio
function determineHomeUrl() {
  try {
    // Si estamos en un subdirectorio conocido, ajustar la ruta
    const currentPath = window.location.pathname
    console.log("Determinando URL de inicio. Ruta actual:", currentPath)

    if (currentPath.includes("/bloques/")) {
      // Estamos en un bloque, necesitamos subir dos niveles
      return "../../index.html"
    } else if (currentPath.includes("/examenes/")) {
      // Estamos en exámenes, necesitamos subir dos niveles
      return "../../index.html"
    } else if (currentPath.split("/").filter((p) => p).length > 1) {
      // Estamos en algún otro subdirectorio, subir un nivel
      return "../index.html"
    }

    // Si estamos en producción, usar URL absoluta
    if (window.location.hostname.includes("netlify")) {
      return "https://opotai.netlify.app/"
    }

    // Por defecto, usar index.html en el mismo directorio
    return "index.html"
  } catch (error) {
    console.error("Error al determinar URL de inicio:", error)
    return "/"
  }
}

// Función para crear la foto de perfil del usuario
function createUserProfilePic() {
  try {
    // Obtener datos del usuario desde localStorage
    const userAuth = localStorage.getItem("userAuth")
    if (!userAuth) return null

    const userData = JSON.parse(userAuth)
    if (!userData.picture) return null

    // Crear contenedor para la foto de perfil
    const profileContainer = document.createElement("div")
    profileContainer.className = "profile-pic-container"
    profileContainer.style.marginRight = "10px"
    profileContainer.style.display = "flex"
    profileContainer.style.alignItems = "center"

    // Crear la imagen de perfil
    const profilePic = document.createElement("img")
    profilePic.src = userData.picture
    profilePic.alt = "Foto de perfil"
    profilePic.className = "profile-pic"
    profilePic.style.width = "32px"
    profilePic.style.height = "32px"
    profilePic.style.borderRadius = "50%"
    profilePic.style.border = "2px solid white"

    profileContainer.appendChild(profilePic)
    return profileContainer
  } catch (error) {
    console.error("Error al crear foto de perfil:", error)
    return null
  }
}

// Función para crear un botón del header
function createHeaderButton(id, iconClass, tooltipText) {
  const button = document.createElement("button")
  button.id = id
  button.className = "header-button"
  button.setAttribute("aria-label", tooltipText)

  const icon = document.createElement("i")
  icon.className = `fa-solid ${iconClass}`
  icon.id = id === "darkModeToggle" ? "darkModeIcon" : ""

  const tooltip = document.createElement("span")
  tooltip.className = "tooltip"
  tooltip.textContent = tooltipText

  button.appendChild(icon)
  button.appendChild(tooltip)

  return button
}

// Función para detectar el contexto de la página actual
function detectPageContext() {
  const path = window.location.pathname

  // Detectar si estamos en un bloque específico
  if (path.includes("/bloque1/") || path.includes("/bloqueI/") || path.includes("Bloque I")) {
    return "Bloque I"
  } else if (path.includes("/bloque2/") || path.includes("/bloqueII/") || path.includes("Bloque II")) {
    return "Bloque II"
  } else if (path.includes("/bloque3/") || path.includes("/bloqueIII/") || path.includes("Bloque III")) {
    return "Bloque III"
  } else if (path.includes("/bloque4/") || path.includes("/bloqueIV/") || path.includes("Bloque IV")) {
    return "Bloque IV"
  }
  // Detectar si estamos en una página de exámenes
  else if (path.includes("/examenportemas/") || path.includes("portemas.html")) {
    return "Examen por temas"
  } else if (path.includes("/examenOficial/") || path.includes("examenOficial.html")) {
    return "Examen oficial"
  }
  // Si no es ninguna de las anteriores, mostrar TAI
  else {
    return "TAI"
  }
}

// Modificar la función createMobileMenu para eliminar el botón de inicio móvil
function createMobileMenu(isHomePage = false) {
  // Verificar si ya existe el menú móvil
  if (document.querySelector(".mobile-menu")) {
    return
  }

  // Crear el overlay
  const overlay = document.createElement("div")
  overlay.className = "mobile-overlay"

  // Crear el menú
  const mobileMenu = document.createElement("div")
  mobileMenu.className = "mobile-menu"

  // Crear los botones del menú móvil
  const progressButton = createMobileMenuButton("fa-chart-pie", "Ver progreso", "progress-mobile")
  // Ocultar el botón de progreso en la página de inicio
  if (isHomePage) {
    progressButton.style.display = "none"
  }

  const darkModeButton = createMobileMenuButton("fa-moon", "Alternar modo claro/oscuro", "darkmode-mobile")
  const clearDataButton = createMobileMenuButton("fa-trash-alt", "Borrar datos de progreso", "clear-data-mobile")

  // Añadir botones al menú
  mobileMenu.appendChild(progressButton)
  mobileMenu.appendChild(darkModeButton)
  mobileMenu.appendChild(clearDataButton)

  // Añadir el menú y el overlay al body
  document.body.appendChild(overlay)
  document.body.appendChild(mobileMenu)
}

// Función para crear un botón del menú móvil
function createMobileMenuButton(iconClass, text, id) {
  const button = document.createElement("button")
  button.className = "mobile-menu-button"
  button.id = id

  const icon = document.createElement("i")
  icon.className = `fa-solid ${iconClass}`

  button.appendChild(icon)
  button.appendChild(document.createTextNode(text))

  return button
}

// Función para inicializar el menú móvil
function initMobileMenu(isHomePage) {
  const hamburgerMenu = document.querySelector(".hamburger-menu")
  const mobileMenu = document.querySelector(".mobile-menu")
  const overlay = document.querySelector(".mobile-overlay")

  if (!hamburgerMenu || !mobileMenu || !overlay) {
    return
  }

  // Evento para abrir/cerrar el menú
  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active")
    mobileMenu.classList.toggle("active")
    overlay.classList.toggle("active")

    // Bloquear scroll cuando el menú está abierto
    if (mobileMenu.classList.contains("active")) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  })

  // Cerrar el menú al hacer clic en el overlay
  overlay.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active")
    mobileMenu.classList.remove("active")
    overlay.classList.remove("active")
    document.body.style.overflow = ""
  })

  // Añadir eventos a los botones del menú móvil
  addMobileMenuButtonEvents()
}

// Función para añadir eventos a los botones del header
function addButtonEvents() {
  // Botón de progreso
  const progressButton = document.getElementById("progress-button")
  if (progressButton) {
    progressButton.addEventListener("click", function () {
      handleProgressClick.call(this)
    })
  }

  // Botón de borrar datos
  const clearDataButton = document.getElementById("clear-data-button")
  if (clearDataButton) {
    clearDataButton.addEventListener("click", function () {
      handleClearData.call(this)
    })
  }

  // Botón de modo oscuro - Asegurar que funcione en todas las páginas
  const darkModeButton = document.getElementById("darkModeToggle")
  if (darkModeButton) {
    // Eliminar eventos existentes para evitar duplicados
    const newButton = darkModeButton.cloneNode(true)
    darkModeButton.parentNode.replaceChild(newButton, darkModeButton)

    // Añadir nuevo evento directamente
    newButton.addEventListener("click", () => {
      console.log("Botón de modo oscuro clickeado")
      // Intentar usar la función global primero
      if (typeof window.toggleDarkMode === "function") {
        window.toggleDarkMode()
      } else {
        // Implementación de respaldo
        document.body.classList.toggle("dark-mode")
        document.documentElement.classList.toggle("dark-mode")

        // Actualizar el icono
        const darkModeIcon = document.getElementById("darkModeIcon")
        if (darkModeIcon) {
          if (document.body.classList.contains("dark-mode")) {
            darkModeIcon.className = "fa-solid fa-sun"
          } else {
            darkModeIcon.className = "fa-solid fa-moon"
          }
        }

        // Guardar preferencia
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "true" : "false")

        // Disparar evento personalizado
        document.dispatchEvent(
          new CustomEvent("darkModeChanged", {
            detail: { isDarkMode: document.body.classList.contains("dark-mode") },
          }),
        )
      }
    })
  }

}

// Modificar la función addMobileMenuButtonEvents para eliminar el evento del botón de inicio móvil
function addMobileMenuButtonEvents() {
  // Botón de progreso móvil
  const progressButton = document.getElementById("progress-mobile")
  if (progressButton) {
    progressButton.addEventListener("click", function () {
      handleProgressClick.call(this)
      closeMobileMenu()
    })
  }

  // Botón de modo oscuro - Asegurar que funcione en todas las páginas
  const darkModeButton = document.getElementById("darkmode-mobile")
  if (darkModeButton) {
    // Eliminar eventos existentes para evitar duplicados
    const newButton = darkModeButton.cloneNode(true)
    darkModeButton.parentNode.replaceChild(newButton, darkModeButton)

    // Añadir nuevo evento directamente
    newButton.addEventListener("click", () => {
      console.log("Botón de modo oscuro móvil clickeado")
      // Intentar usar la función global primero
      if (typeof window.toggleDarkMode === "function") {
        window.toggleDarkMode()
      } else {
        // Implementación de respaldo
        document.body.classList.toggle("dark-mode")
        document.documentElement.classList.toggle("dark-mode")

        // Guardar preferencia
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "true" : "false")

        // Cerrar el menú móvil
        closeMobileMenu()

        // Disparar evento personalizado
        document.dispatchEvent(
          new CustomEvent("darkModeChanged", {
            detail: { isDarkMode: document.body.classList.contains("dark-mode") },
          }),
        )
      }
    })
  }

  // Botón de borrar datos móvil
  const clearDataMobileButton = document.getElementById("clear-data-mobile")
  if (clearDataMobileButton) {
    clearDataMobileButton.addEventListener("click", function () {
      handleClearData.call(this)
      closeMobileMenu()
    })
  }
}

// Manejador para el botón de progreso
function handleProgressClick() {
  // Cerrar el menú móvil si está abierto
  closeMobileMenu()

  // Intentar usar la función global de toggleProgressDisplay
  if (typeof window.toggleProgressDisplay === "function") {
    window.toggleProgressDisplay()
  } else {
    // Intentar importar la función dinámicamente
    import("./progressButton.js")
      .then((module) => {
        if (typeof module.toggleProgressDisplay === "function") {
          module.toggleProgressDisplay()
        } else {
          console.warn("Función toggleProgressDisplay no encontrada en el módulo")
        }
      })
      .catch((error) => {
        console.error("Error al importar el módulo de progreso:", error)
      })
  }
}

// Manejador para el botón de borrar datos
async function handleClearData() {
  // Cerrar el menú móvil si está abierto
  closeMobileMenu()

  if (confirm("¿Estás seguro de que deseas borrar todos tus datos de progreso? Esta acción no se puede deshacer.")) {
    try {
      // Limpiar todos los datos de localStorage relacionados con el progreso
      const keysToRemove = []
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && (key.includes("user_") || key.includes("courseProgress") || key.includes("examHistory") || key.includes("examResult") || key.includes("local_progress"))) {
          keysToRemove.push(key)
        }
      }
      keysToRemove.forEach(key => localStorage.removeItem(key))
      localStorage.removeItem("userAuth")
      
      console.log("Datos de progreso eliminados")
      alert("Tus datos han sido eliminados. La página se recargará.")
      window.location.reload()
    } catch (error) {
      console.error("Error al borrar datos:", error)
      alert("Error al borrar los datos. Por favor, intenta de nuevo.")
    }
  }
}

// Función para navegar a la página de inicio
function navigateToHome() {
  // Cerrar el menú móvil si está abierto
  closeMobileMenu()

  try {
    console.log("Intentando navegar a la página de inicio...")

    // Enfoque simplificado: usar una lista de posibles rutas y probar cada una
    const possiblePaths = [
      "index.html", // Mismo directorio
      "../index.html", // Un nivel arriba
      "../../index.html", // Dos niveles arriba
      "/index.html", // Desde la raíz
      "/", // Raíz del sitio
      "https://opotai.netlify.app/index.html", // URL absoluta para producción
      "https://opotai.netlify.app/", // URL absoluta alternativa
    ]

    // Intentar determinar la mejor ruta basada en la ubicación actual
    let bestPath = "index.html"

    // Si estamos en un subdirectorio conocido, ajustar la ruta
    const currentPath = window.location.pathname
    console.log("Ruta actual:", currentPath)

    if (currentPath.includes("/bloques/")) {
      // Estamos en un bloque, necesitamos subir dos niveles
      bestPath = "../../index.html"
      console.log("Detectada ruta de bloque, usando:", bestPath)
    } else if (currentPath.includes("/examenes/")) {
      // Estamos en exámenes, necesitamos subir dos niveles
      bestPath = "../../index.html"
      console.log("Detectada ruta de exámenes, usando:", bestPath)
    } else if (currentPath.split("/").filter((p) => p).length > 1) {
      // Estamos en algún otro subdirectorio, subir un nivel
      bestPath = "../index.html"
      console.log("Detectado subdirectorio, usando:", bestPath)
    }

    // Si estamos en producción, usar URL absoluta
    if (window.location.hostname.includes("netlify")) {
      bestPath = "https://opotai.netlify.app/"
      console.log("Detectado entorno de producción, usando URL absoluta:", bestPath)
    }

    // Navegar a la mejor ruta determinada
    console.log("Navegando a:", bestPath)
    window.location.href = bestPath
  } catch (error) {
    console.error("Error al navegar a la página de inicio:", error)

    // Como último recurso, intentar con window.location.origin
    try {
      const origin = window.location.origin
      console.log("Intentando navegar al origen:", origin)
      window.location.href = origin
    } catch (e) {
      console.error("Todos los intentos fallaron. Usando ruta absoluta básica.")
      window.location.href = "/"
    }
  }
}

// Función para cerrar el menú móvil
function closeMobileMenu() {
  const hamburgerMenu = document.querySelector(".hamburger-menu")
  const mobileMenu = document.querySelector(".mobile-menu")
  const overlay = document.querySelector(".mobile-overlay")

  if (hamburgerMenu) hamburgerMenu.classList.remove("active")
  if (mobileMenu) mobileMenu.classList.remove("active")
  if (overlay) overlay.classList.remove("active")

  document.body.style.overflow = ""
}

// Inicializar el header cuando el DOM esté cargado
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDynamicHeader)
} else {
  initDynamicHeader()
}

// Exportar funciones para uso externo
export { initDynamicHeader }

