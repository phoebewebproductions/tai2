/**
 * Solución específica para preservar los estilos de los botones del sidebar
 * en modo oscuro con DarkReader
 */

// Configuración personalizada para DarkReader
const darkReaderConfig = {
    brightness: 100,
    contrast: 90,
    sepia: 10,
  
    // CSS personalizado con reglas específicas para los botones del sidebar
    css: `
      /* Reglas específicas para el header y sus elementos */
      header, 
      header *,
      #bloque-header,
      #bloque-header * {
        -darkreader-inline-color: initial !important;
        -darkreader-inline-background-color: initial !important;
        -darkreader-inline-border-color: initial !important;
        -darkreader-inline-fill: initial !important;
        -darkreader-inline-stroke: initial !important;
        -darkreader-inline-outline-color: initial !important;
        -darkreader-inline-box-shadow: initial !important;
      }
      
      /* Reglas específicas para el aside y sus elementos */
      aside, 
      aside *,
      .sidebar-navigation,
      .sidebar-navigation *,
      .sidebar-header,
      .tema-navigation,
      .tema-navigation *,
      .tema-wrapper,
      .tema-wrapper *,
      .tema-btn,
      .puntos-container,
      .puntos-container * {
        -darkreader-inline-color: initial !important;
        -darkreader-inline-background-color: initial !important;
        -darkreader-inline-border-color: initial !important;
        -darkreader-inline-fill: initial !important;
        -darkreader-inline-stroke: initial !important;
        -darkreader-inline-outline-color: initial !important;
        -darkreader-inline-box-shadow: initial !important;
      }
      
      /* Reglas SUPER específicas para los botones de punto */
      .punto-btn,
      button.punto-btn,
      .punto-btn.active,
      .punto-btn.completado,
      .punto-btn.disponible,
      .punto-btn.bloqueado,
      button.punto-btn.active,
      button.punto-btn.completado,
      button.punto-btn.disponible,
      button.punto-btn.bloqueado {
        -darkreader-inline-color: initial !important;
        -darkreader-inline-background-color: initial !important;
        -darkreader-inline-border-color: initial !important;
        -darkreader-inline-fill: initial !important;
        -darkreader-inline-stroke: initial !important;
        -darkreader-inline-outline-color: initial !important;
        -darkreader-inline-box-shadow: initial !important;
        filter: none !important;
      }
      
      /* Reglas específicas para los botones del header */
      .buttonsHeader,
      .buttonsHeader *,
      #darkModeToggle,
      #progress-button,
      #sidebar-toggle,
      .header-button,
      .volver {
        -darkreader-inline-color: initial !important;
        -darkreader-inline-background-color: initial !important;
        -darkreader-inline-border-color: initial !important;
        -darkreader-inline-fill: initial !important;
        -darkreader-inline-stroke: initial !important;
        -darkreader-inline-outline-color: initial !important;
        -darkreader-inline-box-shadow: initial !important;
      }
      
      /* Reglas para iconos */
      .fa-solid,
      .fa-moon,
      .fa-sun,
      .fa-bars,
      svg,
      .volver-icon,
      .progress-icon {
        -darkreader-inline-color: initial !important;
        -darkreader-inline-fill: initial !important;
        -darkreader-inline-stroke: initial !important;
      }
    `,
  }
  
  /**
   * Activar DarkReader con configuración personalizada
   */
  function enableSidebarButtonsFix() {
    if (typeof window.DarkReader !== "undefined") {
      try {
        // IMPORTANTE: Configurar el método fetch antes de activar DarkReader
        // Esto soluciona los errores de CORS
        window.DarkReader.setFetchMethod(window.fetch)
  
        // Desactivar primero para evitar problemas
        window.DarkReader.disable()
  
        // Activar con la configuración personalizada
        window.DarkReader.enable(darkReaderConfig)
  
        console.log("DarkReader activado con configuración personalizada para botones del sidebar")
  
        // Aplicar estilos adicionales directamente a los botones
        fixSidebarButtonsDirectly()
      } catch (error) {
        console.error("Error al activar DarkReader:", error)
  
        // Si falla, intentar con modo básico
        try {
          window.DarkReader.enable({
            brightness: 100,
            contrast: 90,
            sepia: 10,
          })
  
          // Aplicar estilos adicionales directamente a los botones
          fixSidebarButtonsDirectly()
        } catch (fallbackError) {
          console.error("Error al activar DarkReader en modo básico:", fallbackError)
        }
      }
    }
  }
  
  /**
   * Aplicar estilos directamente a los botones del sidebar
   * Esta función aplica estilos inline a los botones para asegurar que
   * mantengan sus estilos originales incluso si DarkReader falla
   */
  function fixSidebarButtonsDirectly() {
    // Seleccionar todos los botones de punto
    const puntoBtns = document.querySelectorAll(".punto-btn")
  
    // Aplicar estilos inline a cada botón
    puntoBtns.forEach((btn) => {
      // Guardar los estilos originales
      const computedStyle = window.getComputedStyle(btn)
      const originalColor = computedStyle.color
      const originalBgColor = computedStyle.backgroundColor
      const originalBorderColor = computedStyle.borderColor
  
      // Aplicar estilos inline
      btn.style.setProperty("color", originalColor, "important")
      btn.style.setProperty("background-color", originalBgColor, "important")
      btn.style.setProperty("border-color", originalBorderColor, "important")
      btn.style.setProperty("filter", "none", "important")
  
      // Añadir atributo para evitar que DarkReader modifique estos elementos
      btn.setAttribute("data-darkreader-inline-color", "initial")
      btn.setAttribute("data-darkreader-inline-bgcolor", "initial")
      btn.setAttribute("data-darkreader-inline-border-color", "initial")
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
                btn.style.setProperty("color", "inherit", "important")
                btn.style.setProperty("background-color", "inherit", "important")
                btn.style.setProperty("border-color", "inherit", "important")
                btn.style.setProperty("filter", "none", "important")
  
                btn.setAttribute("data-darkreader-inline-color", "initial")
                btn.setAttribute("data-darkreader-inline-bgcolor", "initial")
                btn.setAttribute("data-darkreader-inline-border-color", "initial")
              })
  
              // Si el nodo mismo es un botón
              if (node.classList && node.classList.contains("punto-btn")) {
                node.style.setProperty("color", "inherit", "important")
                node.style.setProperty("background-color", "inherit", "important")
                node.style.setProperty("border-color", "inherit", "important")
                node.style.setProperty("filter", "none", "important")
  
                node.setAttribute("data-darkreader-inline-color", "initial")
                node.setAttribute("data-darkreader-inline-bgcolor", "initial")
                node.setAttribute("data-darkreader-inline-border-color", "initial")
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
   * Desactivar DarkReader
   */
  function disableSidebarButtonsFix() {
    if (typeof window.DarkReader !== "undefined") {
      try {
        window.DarkReader.disable()
        console.log("DarkReader desactivado")
      } catch (error) {
        console.error("Error al desactivar DarkReader:", error)
      }
    }
  }
  
  /**
   * Alternar modo oscuro
   */
  function toggleDarkModeWithButtonsFix() {
    // Verificar el estado actual
    const isDarkMode = document.documentElement.classList.contains("dark-mode")
  
    if (!isDarkMode) {
      // Activar modo oscuro
      document.documentElement.classList.add("dark-mode")
      enableSidebarButtonsFix()
  
      // Actualizar icono
      const darkModeIcon = document.getElementById("darkModeIcon")
      if (darkModeIcon) {
        darkModeIcon.classList.replace("fa-moon", "fa-sun")
      }
  
      // Guardar preferencia
      localStorage.setItem("darkMode", "true")
    } else {
      // Desactivar modo oscuro
      document.documentElement.classList.remove("dark-mode")
      disableSidebarButtonsFix()
  
      // Actualizar icono
      const darkModeIcon = document.getElementById("darkModeIcon")
      if (darkModeIcon) {
        darkModeIcon.classList.replace("fa-sun", "fa-moon")
      }
  
      // Guardar preferencia
      localStorage.setItem("darkMode", "false")
    }
  }
  
  /**
   * Inicializar modo oscuro
   */
  function initializeDarkModeWithButtonsFix() {
    // Cargar preferencia
    const darkModePreference = localStorage.getItem("darkMode") === "true"
  
    // Aplicar modo oscuro si está habilitado
    if (darkModePreference) {
      document.documentElement.classList.add("dark-mode")
      enableSidebarButtonsFix()
  
      // Actualizar icono
      const darkModeIcon = document.getElementById("darkModeIcon")
      if (darkModeIcon) {
        darkModeIcon.classList.replace("fa-moon", "fa-sun")
      }
    }
  
    // Configurar botón
    const darkModeToggle = document.getElementById("darkModeToggle")
    if (darkModeToggle) {
      // Eliminar cualquier event listener existente
      const newButton = darkModeToggle.cloneNode(true)
      darkModeToggle.parentNode.replaceChild(newButton, darkModeToggle)
  
      // Añadir nuevo event listener
      newButton.addEventListener("click", toggleDarkModeWithButtonsFix)
    }
  }
  
  // Inicializar cuando el DOM esté listo
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeDarkModeWithButtonsFix)
  } else {
    initializeDarkModeWithButtonsFix()
  }
  
  // Exportar funciones
  window.enableSidebarButtonsFix = enableSidebarButtonsFix
  window.disableSidebarButtonsFix = disableSidebarButtonsFix
  window.toggleDarkModeWithButtonsFix = toggleDarkModeWithButtonsFix
  
  