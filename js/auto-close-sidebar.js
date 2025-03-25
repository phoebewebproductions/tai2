// Función para cerrar el sidebar automáticamente al seleccionar un punto
document.addEventListener("DOMContentLoaded", () => {
    // Función para cerrar el sidebar
    function closeSidebar() {
      const sidebar = document.querySelector(".sidebar-navigation")
      const overlay = document.querySelector(".sidebar-overlay")
  
      if (sidebar) {
        sidebar.classList.remove("active")
      }
  
      if (overlay) {
        overlay.classList.remove("active")
      }
    }
  
    // Añadir event listener a todos los botones de punto
    function setupAutoCloseSidebar() {
      const puntoBtns = document.querySelectorAll(".punto-btn")
  
      puntoBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          // Solo cerrar en versión móvil
          if (window.innerWidth <= 1024) {
            closeSidebar()
          }
        })
      })
    }
  
    // Configurar inicialmente
    setupAutoCloseSidebar()
  
    // También configurar cuando se completa un examen (para los nuevos puntos desbloqueados)
    document.addEventListener("examCompleted", () => {
      // Esperar un momento para que se actualice el DOM
      setTimeout(setupAutoCloseSidebar, 100)
    })
  })
  
  