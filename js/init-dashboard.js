/**
 * Script para inicializar el dashboard de progreso en las páginas
 */

import { createWelcomeCardWithProgress } from "./progressButton.js"

// Función para inicializar el dashboard cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", async () => {
  console.log("Inicializando dashboard desde init-dashboard.js")

  // Inicializar el dashboard en la página principal
  if (isMainPage()) {
    // Cargar el mismo contenido que genera el botón de progreso directamente en el dashboard
    await loadProgressContentInDashboard()
  }
})

/**
 * Verifica si estamos en la página principal
 * @returns {boolean} true si estamos en la página principal
 */
function isMainPage() {
  const path = window.location.pathname
  return path === "/" || path === "/index.html"
}

// Mejorar la función loadProgressContentInDashboard para asegurar que se cargue correctamente
async function loadProgressContentInDashboard() {
  try {
    // Obtener la tarjeta de bienvenida original
    const originalWelcomeCard = document.querySelector(".welcome-card")
    if (!originalWelcomeCard) {
      console.error("No se encontró la tarjeta de bienvenida")
      return
    }

    console.log("Creando tarjeta de progreso para el dashboard...")

    // Crear la tarjeta de progreso usando la función de progressButton.js
    const progressCard = await createWelcomeCardWithProgress()

    // Eliminar el botón de cerrar si existe
    const closeButton = progressCard.querySelector(".cerrar-progreso")
    if (closeButton) {
      closeButton.remove()
    }

    // Asegurarse de que la tarjeta tenga los estilos correctos para el dashboard
    progressCard.style.boxShadow = "none"
    progressCard.style.maxWidth = "100%"

    console.log("Reemplazando tarjeta original con tarjeta de progreso...")

    // Reemplazar la tarjeta original con la de progreso
    originalWelcomeCard.parentNode.replaceChild(progressCard, originalWelcomeCard)

    console.log("Contenido de progreso cargado en el dashboard")

    // Verificar que los datos se muestren correctamente
    setTimeout(() => {
      const progressValue = document.querySelector(".progress-top-section .stat-value")
      const topicsValue = document.querySelectorAll(".progress-top-section .stat-value")[1]

      console.log("Valores mostrados en la tarjeta:", {
        notaMedia: progressValue ? progressValue.textContent : "No encontrado",
        temasCompletados: topicsValue ? topicsValue.textContent : "No encontrado",
      })
    }, 1000)
  } catch (error) {
    console.error("Error al cargar el contenido de progreso en el dashboard:", error)
  }
}

