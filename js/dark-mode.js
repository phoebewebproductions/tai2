// js/dark-mode.js
import { 
  enable as enableDarkMode, 
  disable as disableDarkMode,
  auto as followSystemColorScheme,
  setFetchMethod,
  isEnabled
} from 'darkreader';

// Estado del modo oscuro
let darkModeEnabled = false;

/**
 * Activa el modo oscuro
 */
function enableDark() {
  enableDarkMode({
    brightness: 100,
    contrast: 90,
    sepia: 10
  });
  darkModeEnabled = true;
  
  // Actualizar el botón si existe
  updateDarkModeButton(true);
  
  // Guardar preferencia
  savePreference(true);
}

/**
 * Desactiva el modo oscuro
 */
function disableDark() {
  disableDarkMode();
  darkModeEnabled = false;
  
  // Actualizar el botón si existe
  updateDarkModeButton(false);
  
  // Guardar preferencia
  savePreference(false);
}

/**
 * Alterna el modo oscuro
 */
function toggleDarkMode() {
  if (isEnabled()) {
    disableDark();
  } else {
    enableDark();
  }
  
  return darkModeEnabled;
}

/**
 * Actualiza el botón de modo oscuro
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
 * Guarda la preferencia del usuario
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
 * Carga la preferencia del usuario
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
 * Inicializa el modo oscuro
 */
function initializeDarkMode() {
  // Si estamos en un entorno que usa fetch personalizado
  // setFetchMethod(window.fetch);
  
  // Cargar preferencia del usuario
  darkModeEnabled = loadPreference();
  
  // Aplicar modo oscuro si está habilitado
  if (darkModeEnabled) {
    enableDark();
  } else {
    // Verificar preferencia del sistema si no hay preferencia guardada
    const userAuth = localStorage.getItem("userAuth");
    if (localStorage.getItem("darkMode") === null && !userAuth) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        enableDark();
      }
    }
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", toggleDarkMode);
  }

  initializeDarkMode();
});

// Exportar funciones para uso en otros módulos
export { initializeDarkMode, toggleDarkMode };