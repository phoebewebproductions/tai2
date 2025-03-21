/**
 * DarkReader Integration for Dark Mode
 * This script provides enhanced dark mode functionality using DarkReader
 */

// Importar DarkReader (asegúrate de que el path sea correcto según tu entorno)
// Si estás usando un bundler (webpack, rollup, etc.):
// import { enable, disable, setFetchMethod, auto } from 'darkreader';

// Si estás usando CDN directamente en el HTML, no necesitas importar nada
// DarkReader ya estará disponible globalmente

// Estado del modo oscuro
let darkModeEnabled = false;

/**
 * Activar DarkReader con configuraciones personalizadas
 */
function enableDarkReader() {
  // Verificar si DarkReader está disponible
  if (typeof DarkReader === 'undefined') {
    console.error('DarkReader no está disponible. Asegúrate de incluirlo en tu HTML.');
    return;
  }

  // Configurar DarkReader
  DarkReader.enable({
    brightness: 100,
    contrast: 90,
    sepia: 10,
    
    // Configuración avanzada
    darkSchemeBackgroundColor: '#121212',
    darkSchemeTextColor: '#e0e0e0',
    
    // CSS personalizado para exclusiones
    css: `
      /* Excluir elementos dentro del header */
      header, header * {
        -darkreader-inline-color: initial !important;
        -darkreader-inline-background-color: initial !important;
        -darkreader-inline-border-color: initial !important;
        -darkreader-inline-fill: initial !important;
        -darkreader-inline-stroke: initial !important;
        -darkreader-inline-outline-color: initial !important;
        -darkreader-inline-box-shadow: initial !important;
      }
      
      /* Excluir elementos dentro del aside */
      aside, aside * {
        -darkreader-inline-color: initial !important;
        -darkreader-inline-background-color: initial !important;
        -darkreader-inline-border-color: initial !important;
        -darkreader-inline-fill: initial !important;
        -darkreader-inline-stroke: initial !important;
        -darkreader-inline-outline-color: initial !important;
        -darkreader-inline-box-shadow: initial !important;
      }
      
      /* Mantener colores originales para clases específicas */
      .completado, button.completado {
        background-color: #22c55e !important; /* Verde */
        color: white !important;
        -darkreader-inline-color: white !important;
        -darkreader-inline-background-color: #22c55e !important;
      }
      
      .disponible, button.disponible {
        background-color: #3b82f6 !important; /* Azul */
        color: white !important;
        -darkreader-inline-color: white !important;
        -darkreader-inline-background-color: #3b82f6 !important;
      }
      
      /* Preservar el div buttonsHeader en el header */
      .buttonsHeader, .buttonsHeader * {
        -darkreader-inline-color: initial !important;
        -darkreader-inline-background-color: initial !important;
        -darkreader-inline-border-color: initial !important;
      }
      
      /* Excluir elementos con clases específicas */
      [class*="-title"], 
      [class*="-header"],
      [class*="title"], 
      [class*="header"] {
        -darkreader-inline-color: unset !important;
        -darkreader-inline-background-color: unset !important;
      }
    `
  });
}

/**
 * Desactivar DarkReader
 */
function disableDarkReader() {
  if (typeof DarkReader !== 'undefined') {
    DarkReader.disable();
  }
}

/**
 * Alternar modo oscuro
 */
function toggleDarkMode() {
  darkModeEnabled = !darkModeEnabled;

  if (darkModeEnabled) {
    // Aplicar clase CSS personalizada
    document.documentElement.classList.add("dark-mode");
    
    // Activar DarkReader
    enableDarkReader();
  } else {
    // Quitar clase CSS personalizada
    document.documentElement.classList.remove("dark-mode");
    
    // Desactivar DarkReader
    disableDarkReader();
  }

  // Actualizar botón
  updateDarkModeButton(darkModeEnabled);
  
  // Guardar preferencia
  savePreference(darkModeEnabled);

  return darkModeEnabled;
}

/**
 * Actualizar el botón de modo oscuro
 */
function updateDarkModeButton(isDarkMode) {
  const darkModeIcon = document.getElementById("darkModeIcon");
  if (darkModeIcon) {
    if (isDarkMode) {
      darkModeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
      darkModeIcon.classList.replace("fa-sun", "fa-moon");
    }
  }
}

/**
 * Guardar preferencia de usuario
 */
function savePreference(isDarkMode) {
  const userAuth = localStorage.getItem("userAuth");
  if (userAuth) {
    const userData = JSON.parse(userAuth);
    localStorage.setItem(`user_${userData.id}_darkMode`, isDarkMode);
  } else {
    localStorage.setItem("darkMode", isDarkMode);
  }
}

/**
 * Cargar preferencia de usuario
 */
function loadPreference() {
  let preference = false;

  const userAuth = localStorage.getItem("userAuth");
  if (userAuth) {
    const userData = JSON.parse(userAuth);
    preference = localStorage.getItem(`user_${userData.id}_darkMode`) === "true";
  } else {
    preference = localStorage.getItem("darkMode") === "true";
  }

  return preference;
}

/**
 * Inicializar modo oscuro
 */
function initializeDarkMode() {
  // Cargar preferencia de usuario
  darkModeEnabled = loadPreference();

  // Aplicar modo oscuro si está habilitado
  if (darkModeEnabled) {
    document.documentElement.classList.add("dark-mode");
    enableDarkReader();
    updateDarkModeButton(true);
  }

  // Verificar preferencia del sistema si no hay preferencia de usuario
  const userAuth = localStorage.getItem("userAuth");
  if (localStorage.getItem("darkMode") === null && !userAuth) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      toggleDarkMode();
    }
  }

  // Configurar observador para contenido dinámico
  setupContentObserver();
}

/**
 * Configurar observador para contenido dinámico
 */
function setupContentObserver() {
  // Crear un observador de mutaciones para vigilar cambios en el DOM
  const observer = new MutationObserver((mutations) => {
    let hasNewContent = false;

    mutations.forEach((mutation) => {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        hasNewContent = true;
      } else if (
        mutation.type === "attributes" &&
        (mutation.attributeName === "style" || mutation.attributeName === "class")
      ) {
        hasNewContent = true;
      }
    });

    // Si hay nuevo contenido y el modo oscuro está activado, actualizar DarkReader
    if (hasNewContent && darkModeEnabled && typeof DarkReader !== 'undefined') {
      // Refrescar DarkReader para aplicar estilos al nuevo contenido
      DarkReader.disable();
      enableDarkReader();
    }
  });

  // Comenzar a observar el documento
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style", "class"],
  });
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", toggleDarkMode);
  }

  initializeDarkMode();
});

// Manejar contenido cargado después de la carga inicial de la página
window.addEventListener("load", () => {
  if (darkModeEnabled && typeof DarkReader !== 'undefined') {
    // Refrescar DarkReader para asegurarse de que se aplique a todo el contenido
    DarkReader.disable();
    enableDarkReader();
  }
});

// Exportar funciones para uso en otros módulos
window.darkReaderToggle = toggleDarkMode;
window.darkReaderInit = initializeDarkMode;

// Si estás usando módulos ES
