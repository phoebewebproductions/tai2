// Script mejorado para asegurar que el sidebar se muestre correctamente
document.addEventListener("DOMContentLoaded", () => {
    console.log("Inicializando sidebar-fix-enhanced.js")
  
    // Obtener el botón del sidebar
    const sidebarToggle = document.getElementById("sidebar-toggle")
  
    // Obtener el sidebar y el overlay
    const sidebar = document.querySelector(".sidebar-navigation")
    const content = document.querySelector(".content-area")
  
    // Crear overlay para móvil si no existe
    let overlay = document.querySelector(".sidebar-overlay")
    if (!overlay) {
      overlay = document.createElement("div")
      overlay.className = "sidebar-overlay"
      document.body.appendChild(overlay)
      console.log("Overlay creado")
    }
  
    if (sidebarToggle && sidebar) {
      console.log("Elementos del sidebar encontrados")
  
      // Asegurar que el botón tenga los estilos correctos
      sidebarToggle.style.position = "fixed"
      sidebarToggle.style.bottom = "20px"
      sidebarToggle.style.right = "20px"
      sidebarToggle.style.zIndex = "1000000"
      sidebarToggle.style.display = "flex"
      sidebarToggle.style.alignItems = "center"
      sidebarToggle.style.justifyContent = "center"
      sidebarToggle.style.width = "50px"
      sidebarToggle.style.height = "50px"
      sidebarToggle.style.borderRadius = "50%"
      sidebarToggle.style.backgroundColor = "var(--color-background, white)"
      sidebarToggle.style.border = "1px solid var(--color-border, #ccc)"
      sidebarToggle.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)"
  
      // Cambiar el icono para que no se confunda con el menú hamburguesa
      const icon = sidebarToggle.querySelector("i")
      if (icon) {
        icon.className = "fa-solid fa-book-open"
      } else {
        sidebarToggle.innerHTML = '<i class="fa-solid fa-book-open"></i>'
      }
  
      // Configurar el botón para abrir/cerrar el sidebar
      sidebarToggle.addEventListener("click", (e) => {
        e.preventDefault()
        console.log("Clic en botón del sidebar")
  
        // Forzar estilos en el sidebar para asegurar que sea visible
        if (!sidebar.classList.contains("active")) {
          sidebar.style.transform = "translateX(0)"
          sidebar.style.visibility = "visible"
          sidebar.style.display = "block"
          overlay.style.display = "none"
        } else {
          sidebar.style.transform = "translateX(-100%)"
          sidebar.style.visibility = "hidden"
          overlay.style.display = "none"
        }
  
        sidebar.classList.toggle("active")
        overlay.classList.toggle("active")
  
        if (content) {
          content.classList.toggle("sidebar-active")
        }
      })
  
      // Cerrar sidebar al hacer clic en el overlay
      overlay.addEventListener("click", () => {
        console.log("Clic en overlay")
  
        sidebar.style.transform = "translateX(-100%)"
        sidebar.style.visibility = "hidden"
        sidebar.classList.remove("active")
        overlay.classList.remove("active")
        overlay.style.display = "none"
  
        if (content) {
          content.classList.remove("sidebar-active")
        }
      })
  
      // Asegurarse de que el botón esté visible en móvil
      const mediaQuery = window.matchMedia("(max-width: 1024px)")
      function handleMediaChange(e) {
        if (e.matches) {
          sidebarToggle.style.display = "flex"
        } else {
          sidebarToggle.style.display = "none"
        }
      }
  
      // Ejecutar la función inicialmente
      handleMediaChange(mediaQuery)
  
      // Añadir listener para cambios en el tamaño de la pantalla
      mediaQuery.addEventListener("change", handleMediaChange)
  
      // Configurar cierre del sidebar al hacer clic en los puntos
      const puntoBtns = document.querySelectorAll(".punto-btn")
      puntoBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          // Solo cerrar en versión móvil
          if (window.innerWidth <= 1024) {
            console.log("Cerrando sidebar después de clic en punto")
  
            sidebar.style.transform = "translateX(-100%)"
            sidebar.style.visibility = "hidden"
            sidebar.classList.remove("active")
            overlay.classList.remove("active")
            overlay.style.display = "none"
  
            if (content) {
              content.classList.remove("sidebar-active")
            }
  
            // Hacer scroll al principio de la página
            setTimeout(() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }, 300)
          }
        })
      })
  
      console.log("Event listeners configurados correctamente")
    } else {
      console.error("No se encontraron los elementos del sidebar")
    }
  })
  
  