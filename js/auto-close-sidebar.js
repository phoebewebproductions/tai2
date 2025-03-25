// Versión simplificada para evitar bloqueos
document.addEventListener("DOMContentLoaded", () => {
  // Función básica para cerrar el sidebar
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

  // Función para hacer scroll al principio
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Delegación de eventos - más eficiente que añadir listeners a cada botón
  document.body.addEventListener("click", (event) => {
    // Verificar si el clic fue en un botón de punto o dentro de uno
    const puntoBtn = event.target.closest(".punto-btn")

    if (puntoBtn) {
      // Solo en versión móvil
      if (window.innerWidth <= 1024) {
        // Pequeño retraso para permitir que se procese el clic primero
        setTimeout(closeSidebar, 100)
      }

      // Hacer scroll al principio en todos los casos
      setTimeout(scrollToTop, 200)
    }
  })

  // También escuchar el evento examCompleted para hacer scroll
  document.addEventListener("examCompleted", () => {
    setTimeout(scrollToTop, 300)
  })
})

