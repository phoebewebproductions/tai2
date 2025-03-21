/**
 * Solución específica para DarkReader con corrección de CORS
 * Este script corrige los problemas con los botones en aside y buttonsHeader
 * y soluciona los errores de CORS
 */

// Configuración personalizada para DarkReader
const darkReaderConfig = {
    brightness: 100,
    contrast: 90,
    sepia: 10,
  
    // Configuración avanzada
    darkSchemeBackgroundColor: "#121212",
    darkSchemeTextColor: "#e0e0e0",
  
    // CSS personalizado con reglas más específicas
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
      .tema-navigation,
      .tema-navigation * {
        -darkreader-inline-color: initial !important;
        -darkreader-inline-background-color: initial !important;
        -darkreader-inline-border-color: initial !important;
        -darkreader-inline-fill: initial !important;
        -darkreader-inline-stroke: initial !important;
        -darkreader-inline-outline-color: initial !important;
        -darkreader-inline-box-shadow: initial !important;
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
      
      /* Reglas específicas para los botones de estado */
      .completado, 
      button.completado,
      .disponible, 
      button.disponible,
      [class*="completado"],
      [class*="disponible"] {
        -darkreader-inline-color: initial !important;
        -darkreader-inline-background-color: initial !important;
        -darkreader-inline-border-color: initial !important;
        -darkreader-inline-fill: initial !important;
        -darkreader-inline-stroke: initial !important;
      }
      
      /* Forzar colores específicos para los botones de estado */
      .completado, button.completado {
        background-color: #22c55e !important; /* Verde */
        color: white !important;
      }
      
      .disponible, button.disponible {
        background-color: #3b82f6 !important; /* Azul */
        color: white !important;
      }
      
      /* Excluir elementos con clases específicas */
      [class*="-title"], 
      [class*="-header"],
      [class*="title"], 
      [class*="header"] {
        -darkreader-inline-color: unset !important;
        -darkreader-inline-background-color: unset !important;
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
  function enableFixedDarkReader() {
    if (typeof window.DarkReader !== "undefined") {
      try {
        // IMPORTANTE: Configurar el método fetch antes de activar DarkReader
        // Esto soluciona los errores de CORS
        window.DarkReader.setFetchMethod(window.fetch)
  
        // Desactivar primero para evitar problemas
        window.DarkReader.disable()
  
        // Activar con la configuración personalizada
        window.DarkReader.enable(darkReaderConfig)
  
        console.log("DarkReader activado con configuración personalizada")
      } catch (error) {
        console.error("Error al activar DarkReader:", error)
  
        // Si falla, intentar con modo básico
        try {
          window.DarkReader.enable({
            brightness: 100,
            contrast: 90,
            sepia: 10,
            // Sin CSS personalizado para evitar problemas
          })
        } catch (fallbackError) {
          console.error("Error al activar DarkReader en modo básico:", fallbackError)
        }
      }
    }
  }
  
  /**
   * Desactivar DarkReader
   */
  function disableFixedDarkReader() {
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
  function toggleFixedDarkMode() {
    // Verificar el estado actual
    const isDarkMode = document.documentElement.classList.contains("dark-mode")
  
    if (!isDarkMode) {
      // Activar modo oscuro
      document.documentElement.classList.add("dark-mode")
      enableFixedDarkReader()
  
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
      disableFixedDarkReader()
  
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
  function initializeFixedDarkMode() {
    // Cargar preferencia
    const darkModePreference = localStorage.getItem("darkMode") === "true"
  
    // Aplicar modo oscuro si está habilitado
    if (darkModePreference) {
      document.documentElement.classList.add("dark-mode")
      enableFixedDarkReader()
  
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
      newButton.addEventListener("click", toggleFixedDarkMode)
    }
  }
  
  // Inicializar cuando el DOM esté listo
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeFixedDarkMode)
  } else {
    initializeFixedDarkMode()
  }
  
  // Exportar funciones
  window.enableFixedDarkReader = enableFixedDarkReader
  window.disableFixedDarkReader = disableFixedDarkReader
  window.toggleFixedDarkMode = toggleFixedDarkMode
  
  