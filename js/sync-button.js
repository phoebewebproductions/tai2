/**
 * Módulo para añadir un botón de sincronización a la página de exámenes por temas
 */

// Importar funciones de sincronización
let syncUserProgress;
let syncPendingData;

try {
  // Importar dinámicamente para evitar problemas de carga
  import('./aws-sync.js').then(module => {
    syncUserProgress = module.syncUserProgress;
    syncPendingData = module.syncPendingData;
    console.log("Módulo de sincronización cargado correctamente para el botón");
    
    // Actualizar contador de sincronizaciones pendientes
    updatePendingSyncBadge();
  });
} catch (error) {
  console.warn("No se pudo cargar el módulo de sincronización para el botón:", error);
  // Función de respaldo si no se puede cargar el módulo
  syncUserProgress = async () => {
    console.log("Sincronización no disponible");
    return false;
  };
  syncPendingData = async () => {
    console.log("Sincronización de datos pendientes no disponible");
    return false;
  };
}

// Función para inicializar el botón de sincronización
export function initSyncButton() {
  // Verificar si estamos en la página de exámenes por temas
  if (!document.getElementById('custom-exam')) {
    return;
  }
  
  console.log("Inicializando botón de sincronización en página de exámenes por temas");
  
  // Buscar el contenedor de botones del header
  const buttonsHeader = document.querySelector(".buttonsHeader");
  if (!buttonsHeader) {
    console.error("No se encontró el contenedor de botones del header");
    return;
  }
  
  // Verificar si el botón ya existe
  if (document.getElementById("sync-button")) {
    console.log("El botón de sincronización ya existe");
    return;
  }
  
  // Crear botón de sincronización
  const syncButton = document.createElement("button");
  syncButton.id = "sync-button";
  syncButton.className = "header-button";
  syncButton.setAttribute("aria-label", "Sincronizar progreso");
  syncButton.setAttribute("title", "Sincronizar progreso");
  syncButton.innerHTML = '<i class="fa-solid fa-sync"></i>';
  
  // Añadir contador de sincronizaciones pendientes
  const pendingBadge = document.createElement("span");
  pendingBadge.id = "sync-pending-badge";
  pendingBadge.className = "sync-pending-badge";
  pendingBadge.style.display = "none";
  syncButton.appendChild(pendingBadge);
  
  // Añadir estilos para la animación
  addSyncStyles();
  
  // Actualizar contador de sincronizaciones pendientes
  updatePendingSyncBadge();
  
  // Añadir evento de clic
  syncButton.addEventListener("click", async () => {
    try {
      syncButton.classList.add("rotating");
      
      if (typeof syncUserProgress !== 'function') {
        // Intentar cargar de nuevo si no está disponible
        const module = await import('./aws-sync.js');
        syncUserProgress = module.syncUserProgress;
        syncPendingData = module.syncPendingData;
      }
      
      // Primero intentar sincronizar datos pendientes
      let pendingSuccess = true;
      if (typeof syncPendingData === 'function') {
        pendingSuccess = await syncPendingData();
      }
      
      // Luego sincronizar datos actuales
      const success = await syncUserProgress();
      syncButton.classList.remove("rotating");
      
      // Actualizar contador de sincronizaciones pendientes
      updatePendingSyncBadge();
      
      if (success && pendingSuccess) {
        // Mostrar indicador de éxito
        syncButton.classList.add("sync-success");
        setTimeout(() => {
          syncButton.classList.remove("sync-success");
        }, 2000);
      } else {
        // Mostrar indicador de error
        syncButton.classList.add("sync-error");
        setTimeout(() => {
          syncButton.classList.remove("sync-error");
        }, 2000);
      }
    } catch (error) {
      console.error("Error durante la sincronización:", error);
      syncButton.classList.remove("rotating");
      syncButton.classList.add("sync-error");
      setTimeout(() => {
        syncButton.classList.remove("sync-error");
      }, 2000);
      
      // Actualizar contador de sincronizaciones pendientes
      updatePendingSyncBadge();
    }
  });
  
  // Insertar el botón antes del botón de modo oscuro
  const darkModeButton = document.getElementById("darkModeToggle");
  if (darkModeButton) {
    buttonsHeader.insertBefore(syncButton, darkModeButton);
  } else {
    buttonsHeader.appendChild(syncButton);
  }
  
  console.log("Botón de sincronización añadido correctamente");
  
  // Actualizar contador periódicamente
  setInterval(updatePendingSyncBadge, 30000);
}

// Función para actualizar el contador de sincronizaciones pendientes
function updatePendingSyncBadge() {
  const badge = document.getElementById("sync-pending-badge");
  if (!badge) return;
  
  try {
    const pendingSyncsStr = localStorage.getItem('pendingSyncs');
    if (!pendingSyncsStr) {
      badge.style.display = "none";
      return;
    }
    
    const pendingSyncs = JSON.parse(pendingSyncsStr);
    if (pendingSyncs.length === 0) {
      badge.style.display = "none";
      return;
    }
    
    badge.textContent = pendingSyncs.length > 9 ? "9+" : pendingSyncs.length.toString();
    badge.style.display = "flex";
  } catch (error) {
    console.error("Error al actualizar contador de sincronizaciones pendientes:", error);
    badge.style.display = "none";
  }
}

// Función para añadir estilos CSS para la animación de sincronización
function addSyncStyles() {
  // Verificar si los estilos ya existen
  if (document.getElementById("sync-button-styles")) {
    return;
  }
  
  const styleElement = document.createElement("style");
  styleElement.id = "sync-button-styles";
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
    
    .sync-pending-badge {
      position: absolute;
      top: -5px;
      right: -5px;
      background-color: var(--color-error, #F44336);
      color: white;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      font-size: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    #sync-button {
      position: relative;
    }
  `;
  
  document.head.appendChild(styleElement);
}

// Inicializar cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", initSyncButton);
