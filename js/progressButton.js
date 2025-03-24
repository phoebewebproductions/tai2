/**
 * Módulo para añadir un botón de progreso a la página
 */

import { calculateBlockProgress } from "./structureLoader.js"
import { CircularProgress, getColorForBlock } from "./../components/CircularProgress.js"

let progressDisplayVisible = false

// Modificar la función initializeProgressButton en progressButton.js
export function initializeProgressButton() {
  let progressButton = document.getElementById("progress-button")

  if (!progressButton) {
    progressButton = document.createElement("button")
    progressButton.id = "progress-button"
    progressButton.className = "header-button"
    progressButton.setAttribute("aria-label", "Ver progreso")

    // Crear el SVG
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("width", "24")
    svg.setAttribute("height", "24")
    svg.setAttribute("viewBox", "0 0 24 24")
    svg.setAttribute("fill", "none")
    svg.setAttribute("stroke", "currentColor")
    svg.setAttribute("stroke-width", "2")
    svg.setAttribute("stroke-linecap", "round")
    svg.setAttribute("stroke-linejoin", "round")
    svg.className = "progress-icon"

    // Crear el círculo
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    circle.setAttribute("cx", "12")
    circle.setAttribute("cy", "12")
    circle.setAttribute("r", "10")

    // Crear el path para el indicador de tiempo
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.setAttribute("d", "M12 6v6l4 2")

    svg.appendChild(circle)
    svg.appendChild(path)
    progressButton.appendChild(svg)

    const headerdiv = document.querySelector(".buttonsHeader")
    headerdiv.appendChild(progressButton)
  }

  // Crear contenedor de progreso
  const progressDisplay = document.createElement("div")
  progressDisplay.id = "progress-display"
  progressDisplay.style.display = "none"
  document.body.appendChild(progressDisplay)

  progressButton.addEventListener("click", toggleProgressDisplay)
  console.log("Progress button initialized")
}

// Modificar la función toggleProgressDisplay para mejorar la visualización en móvil
async function toggleProgressDisplay() {
  const progressDisplay = document.getElementById("progress-display")
  const progressButton = document.getElementById("progress-button")
  const svg = progressButton.querySelector("svg")

  if (progressDisplayVisible) {
    progressDisplay.style.display = "none"
    progressDisplayVisible = false
    // Restaurar el SVG original
    svg.innerHTML = `
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 6v6l4 2"></path>
    `
  } else {
    progressDisplay.innerHTML = ""
    progressDisplay.style.display = "flex"

    // Cambiar el SVG a pausa
    svg.innerHTML = `
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M10 15V9M14 15V9"></path>
    `

    // Crear la tarjeta de bienvenida con progreso circular
    const welcomeCard = await createWelcomeCardWithProgress()
    progressDisplay.appendChild(welcomeCard)

    progressDisplayVisible = true
  }
}

// Modificar la función createWelcomeCardWithProgress para mejorar la visualización en móvil
async function createWelcomeCardWithProgress() {
  try {
    // Crear la tarjeta de bienvenida
    const welcomeCard = document.createElement("div")
    welcomeCard.className = "welcome-card"
    welcomeCard.style.width = "100%"
    welcomeCard.style.maxWidth = "600px"
    welcomeCard.style.backgroundColor = "var(--color-background)"
    welcomeCard.style.borderRadius = "8px"
    welcomeCard.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)"
    welcomeCard.style.overflow = "hidden"
    welcomeCard.style.position = "relative" // Para posicionar el botón de cerrar

    // Añadir botón de cerrar dentro de la tarjeta
    const closeButton = document.createElement("button")
    closeButton.className = "cerrar-progreso"
    closeButton.innerHTML = "&times;"
    closeButton.style.position = "absolute"
    closeButton.style.top = "10px"
    closeButton.style.right = "10px"
    closeButton.style.background = "none"
    closeButton.style.border = "none"
    closeButton.style.fontSize = "1.5rem"
    closeButton.style.cursor = "pointer"
    closeButton.style.color = "#333"
    closeButton.style.zIndex = "10"
    closeButton.addEventListener("click", toggleProgressDisplay)
    welcomeCard.appendChild(closeButton)

    // Crear el encabezado de la tarjeta
    const welcomeHeader = document.createElement("div")
    welcomeHeader.className = "welcome-header"
    welcomeHeader.style.padding = "15px"
    welcomeHeader.style.borderBottom = "1px solid #eaeaea"
    welcomeHeader.style.display = "flex"
    welcomeHeader.style.justifyContent = "space-between"
    welcomeHeader.style.alignItems = "center"
    welcomeHeader.style.flexWrap = "wrap"
    welcomeHeader.style.paddingRight = "40px" // Espacio para el botón de cerrar

    // Título de bienvenida
    const welcomeTitle = document.createElement("h2")
    welcomeTitle.textContent = "Bienvenido/a"
    welcomeTitle.style.margin = "0"
    welcomeTitle.style.fontSize = "1.2rem"
    welcomeTitle.style.fontWeight = "bold"

    // Último acceso
    const lastAccess = document.createElement("span")
    lastAccess.className = "last-access"
    lastAccess.textContent = getLastAccessDate()
    lastAccess.style.fontSize = "0.8rem"
    lastAccess.style.color = "#666"

    welcomeHeader.appendChild(welcomeTitle)
    welcomeHeader.appendChild(lastAccess)
    welcomeCard.appendChild(welcomeHeader)

    // Crear el contenedor de progreso
    const progressSummary = document.createElement("div")
    progressSummary.className = "progress-summary"
    progressSummary.style.padding = "15px"
    progressSummary.style.maxHeight = "70vh"
    progressSummary.style.overflowY = "auto"

    // Obtener datos de progreso
    const blockProgressValues = await getBlockProgressValues()
    const generalProgress = calculateGeneralProgress(blockProgressValues)
    const averageScore = await getAverageScore()
    const completedTopics = await getCompletedTopics()

    // Crear la sección superior con progreso general
    const topSection = document.createElement("div")
    topSection.className = "progress-top-section"
    topSection.style.display = "flex"
    topSection.style.alignItems = "center"
    topSection.style.marginBottom = "15px"
    topSection.style.width = "100%"

    // Crear el progreso circular grande para el progreso general
    const mainProgress = CircularProgress({
      progress: generalProgress,
      size: 100,
      strokeWidth: 10,
      color: "#22c55e",
      id: "main-progress",
    })

    // Crear el contenedor de información de progreso
    const progressInfo = document.createElement("div")
    progressInfo.className = "progress-info"
    progressInfo.style.marginLeft = "20px"
    progressInfo.style.flex = "1"

    // Añadir etiqueta de progreso general
    const progressLabel = document.createElement("div")
    progressLabel.className = "progress-label"
    progressLabel.textContent = "Progreso general"
    progressLabel.style.marginBottom = "8px"
    progressLabel.style.fontWeight = "bold"
    progressInfo.appendChild(progressLabel)

    // Añadir estadísticas
    const progressStats = document.createElement("div")
    progressStats.className = "progress-stats"
    progressStats.style.display = "flex"
    progressStats.style.gap = "20px"

    // Estadística: Nota media
    const scoreItem = document.createElement("div")
    scoreItem.className = "stat-item"

    const scoreValue = document.createElement("span")
    scoreValue.className = "stat-value"
    scoreValue.textContent = averageScore
    scoreValue.style.fontSize = "1.2rem"
    scoreValue.style.fontWeight = "bold"
    scoreValue.style.display = "block"

    const scoreLabel = document.createElement("span")
    scoreLabel.className = "stat-label"
    scoreLabel.textContent = "Nota media"
    scoreLabel.style.fontSize = "0.8rem"

    scoreItem.appendChild(scoreValue)
    scoreItem.appendChild(scoreLabel)
    progressStats.appendChild(scoreItem)

    // Estadística: Temas completados
    const topicsItem = document.createElement("div")
    topicsItem.className = "stat-item"

    const topicsValue = document.createElement("span")
    topicsValue.className = "stat-value"
    topicsValue.textContent = completedTopics
    topicsValue.style.fontSize = "1.2rem"
    topicsValue.style.fontWeight = "bold"
    topicsValue.style.display = "block"

    const topicsLabel = document.createElement("span")
    topicsLabel.className = "stat-label"
    topicsLabel.textContent = "Temas completados"
    topicsLabel.style.fontSize = "0.8rem"

    topicsItem.appendChild(topicsValue)
    topicsItem.appendChild(topicsLabel)
    progressStats.appendChild(topicsItem)

    // Añadir estadísticas al contenedor de información
    progressInfo.appendChild(progressStats)

    // Añadir progreso circular y contenedor de información a la sección superior
    topSection.appendChild(mainProgress)
    topSection.appendChild(progressInfo)

    // Añadir la sección superior al resumen de progreso
    progressSummary.appendChild(topSection)

    // Añadir título para los indicadores de progreso por bloque
    const blockTitle = document.createElement("div")
    blockTitle.className = "block-progress-title"
    blockTitle.textContent = "Progreso por Bloque"
    blockTitle.style.fontWeight = "bold"
    blockTitle.style.marginTop = "15px"
    blockTitle.style.marginBottom = "10px"
    blockTitle.style.textAlign = "center"
    progressSummary.appendChild(blockTitle)

    // Crear contenedor para los bloques de progreso
    const blocksContainer = document.createElement("div")
    blocksContainer.style.display = "grid"
    blocksContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(120px, 1fr))"
    blocksContainer.style.gap = "15px"
    blocksContainer.style.width = "100%"
    blocksContainer.style.justifyItems = "center"
    progressSummary.appendChild(blocksContainer)

    // Añadir indicadores de progreso para cada bloque
    for (let i = 0; i < 4; i++) {
      const blockId = i + 1
      const progress = blockProgressValues[i] || 0
      const color = getColorForBlock(blockId)

      // Crear contenedor para el bloque
      const blockContainer = document.createElement("div")
      blockContainer.style.textAlign = "center"
      blockContainer.style.margin = "5px"
      blockContainer.style.width = "100%"
      blockContainer.style.display = "flex"
      blockContainer.style.flexDirection = "column"
      blockContainer.style.alignItems = "center"

      // Crear el progreso circular con tamaño adaptativo
      const circularProgress = CircularProgress({
        progress,
        size: window.innerWidth < 480 ? 60 : 80, // Más pequeño en móviles muy pequeños
        strokeWidth: window.innerWidth < 480 ? 6 : 8,
        color,
        id: `block-${blockId}-progress`,
      })

      // Añadir etiqueta del bloque
      const blockLabel = document.createElement("div")
      blockLabel.textContent = `Bloque ${blockId}`
      blockLabel.style.marginTop = "5px"
      blockLabel.style.fontWeight = "bold"

      blockContainer.appendChild(circularProgress)
      blockContainer.appendChild(blockLabel)
      blocksContainer.appendChild(blockContainer)
    }

    welcomeCard.appendChild(progressSummary)

    // Aplicar estilos para modo oscuro si es necesario
    applyDarkModeIfNeeded(welcomeCard)

    return welcomeCard
  } catch (error) {
    console.error("Error al crear tarjeta de bienvenida:", error)

    // Crear un mensaje de error como fallback
    const errorMessage = document.createElement("div")
    errorMessage.textContent = "No se pudo cargar la información de progreso"
    errorMessage.style.padding = "20px"
    errorMessage.style.textAlign = "center"

    return errorMessage
  }
}

// Función para obtener la fecha del último acceso
function getLastAccessDate() {
  try {
    const userAuth = localStorage.getItem("userAuth")
    if (userAuth) {
      const userData = JSON.parse(userAuth)
      if (userData.lastLogin) {
        const date = new Date(userData.lastLogin)
        return `Último acceso: ${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`
      }
    }

    // Si no hay fecha guardada, usar la fecha actual
    return `Último acceso: Hoy, ${new Date().toLocaleTimeString()}`
  } catch (error) {
    console.error("Error al obtener fecha de último acceso:", error)
    return "Último acceso: Hoy"
  }
}

// Función para obtener los valores de progreso de cada bloque
async function getBlockProgressValues() {
  try {
    const progressValues = []

    // Obtener progreso para cada bloque
    for (let i = 1; i <= 4; i++) {
      try {
        const progress = await calculateBlockProgress(i)
        progressValues.push(progress)
      } catch (error) {
        console.error(`Error al calcular progreso para bloque ${i}:`, error)
        progressValues.push(0)
      }
    }

    console.log("Valores de progreso por bloque:", progressValues)
    return progressValues
  } catch (error) {
    console.error("Error al obtener valores de progreso:", error)
    return [4, 2, 0, 6] // Valores por defecto
  }
}

// Función para calcular el progreso general
function calculateGeneralProgress(progressValues) {
  try {
    // Calcular el promedio de progreso
    const validProgressValues = progressValues.filter((value) => !isNaN(value))
    const averageProgress =
      validProgressValues.length > 0
        ? validProgressValues.reduce((sum, value) => sum + value, 0) / validProgressValues.length
        : 0

    return Math.round(averageProgress)
  } catch (error) {
    console.error("Error al calcular progreso general:", error)
    return 0
  }
}

// Función para obtener la nota media
async function getAverageScore() {
  try {
    // Intentar obtener el historial de exámenes
    const examHistoryStr = localStorage.getItem("examHistory")
    if (examHistoryStr) {
      const examHistory = JSON.parse(examHistoryStr)

      if (examHistory && examHistory.length > 0) {
        const totalScore = examHistory.reduce((sum, exam) => sum + exam.score, 0)
        return (totalScore / examHistory.length).toFixed(1)
      }
    }

    return "7.5" // Valor por defecto
  } catch (error) {
    console.error("Error al obtener nota media:", error)
    return "7.5" // Valor por defecto
  }
}

// Función para obtener los temas completados
async function getCompletedTopics() {
  try {
    // Aquí deberías implementar la lógica para obtener el número real de temas completados
    // Por ahora, devolvemos un valor estático
    return "12/20"
  } catch (error) {
    console.error("Error al obtener temas completados:", error)
    return "0/20"
  }
}

// Función para aplicar estilos de modo oscuro si es necesario
function applyDarkModeIfNeeded(element) {
  try {
    const isDarkMode = document.body.classList.contains("dark-mode")

    if (isDarkMode) {
      element.style.backgroundColor = "#1e1e1e"
      element.style.color = "#e0e0e0"

      // Aplicar estilos a los elementos internos
      const header = element.querySelector(".welcome-header")
      if (header) {
        header.style.borderBottomColor = "#333"
      }

      const lastAccess = element.querySelector(".last-access")
      if (lastAccess) {
        lastAccess.style.color = "#aaa"
      }

      const statLabels = element.querySelectorAll(".stat-label")
      statLabels.forEach((label) => {
        label.style.color = "#aaa"
      })
    }
  } catch (error) {
    console.error("Error al aplicar modo oscuro:", error)
  }
}

// Modificar la función addProgressStyles para mejorar la visualización en móvil
function addProgressStyles() {
  if (document.getElementById("progress-styles")) return

  const styleElement = document.createElement("style")
  styleElement.id = "progress-styles"
  styleElement.textContent = `
    #progress-display {
      position: fixed;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      padding: 20px;
      box-sizing: border-box;
      inset: 0;
      background-color: transparent;
    }
    
    #progress-display .welcome-card {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      border: 1px solid #ddd;
    }
    
    #progress-display .progress-summary {
      max-height: 70vh;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
    
    .dark-mode #progress-display .welcome-card {
      background-color: #1e1e1e;
      color: #e0e0e0;
      border-color: #444;
    }
    
    .dark-mode #progress-display .welcome-header {
      border-bottom-color: #333;
    }
    
    .dark-mode #progress-display .last-access,
    .dark-mode #progress-display .stat-label {
      color: #aaa;
    }
    
    .dark-mode #progress-display .cerrar-progreso {
      color: #e0e0e0 !important;
    }
    
    @media (max-width: 768px) {
      #progress-display {
        align-items: center;
        padding: 10px;
      }
      
      #progress-display .welcome-card {
        max-width: 100%;
        max-height: 90vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      
      #progress-display .progress-summary {
        flex: 1;
        overflow-y: auto;
      }
      
      #progress-display .progress-top-section {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      
      #progress-display .progress-info {
        margin-left: 0;
        margin-top: 15px;
        text-align: center;
        width: 100%;
      }
      
      #progress-display .progress-stats {
        justify-content: center;
        width: 100%;
      }
    }

    @media (max-width: 480px) {
      #progress-display .welcome-card {
        font-size: 0.9rem;
      }
      
      #progress-display .block-progress-title {
        margin-top: 10px;
        margin-bottom: 5px;
      }
    }
  `

  document.head.appendChild(styleElement)
}

// Inicializar estilos al cargar el módulo
addProgressStyles()

// Inicializar cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", initializeProgressButton)

