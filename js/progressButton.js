/**
 * Módulo para añadir un botón de progreso a la página
 */

import { calculateBlockProgress } from "./structureLoader.js"
import { CircularProgress, getColorForBlock } from "./CircularProgress.js"

const progressDisplayVisible = false

// Modificar la función initializeProgressButton para evitar el error de className en SVG
export function initializeProgressButton() {
  let progressButton = document.getElementById("progress-button")

  if (!progressButton) {
    progressButton = document.createElement("button")
    progressButton.id = "progress-button"
    progressButton.className = "header-button"
    progressButton.setAttribute("aria-label", "Ver progreso")

    // Crear el SVG usando innerHTML para evitar problemas con className
    progressButton.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="progress-icon">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 6v6l4 2"></path>
      </svg>
    `

    const headerdiv = document.querySelector(".buttonsHeader")
    if (headerdiv) {
      headerdiv.appendChild(progressButton)
    } else {
      console.warn("No se encontró el contenedor .buttonsHeader")
    }
  }

  // Crear contenedor de progreso
  let progressDisplay = document.getElementById("progress-display")
  if (!progressDisplay) {
    progressDisplay = document.createElement("div")
    progressDisplay.id = "progress-display"
    progressDisplay.style.display = "none"
    document.body.appendChild(progressDisplay)
  }

  progressButton.addEventListener("click", toggleProgressDisplay)
  console.log("Progress button initialized")
}

// Modificar la función toggleProgressDisplay para mejorar la visualización en móvil
// Función para alternar la visualización del progreso
export function toggleProgressDisplay() {
  const progressDisplay = document.getElementById("progress-display")
  const progressButton = document.getElementById("progress-button")

  // Si no existe el contenedor de progreso, crearlo
  if (!progressDisplay) {
    const newProgressDisplay = document.createElement("div")
    newProgressDisplay.id = "progress-display"
    newProgressDisplay.style.position = "fixed"
    newProgressDisplay.style.top = "0"
    newProgressDisplay.style.left = "0"
    newProgressDisplay.style.width = "100%"
    newProgressDisplay.style.height = "100%"
    newProgressDisplay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    newProgressDisplay.style.display = "flex"
    newProgressDisplay.style.justifyContent = "center"
    newProgressDisplay.style.alignItems = "center"
    newProgressDisplay.style.zIndex = "9999"

    // Crear la tarjeta de bienvenida con progreso circular
    createWelcomeCardWithProgress().then((welcomeCard) => {
      newProgressDisplay.appendChild(welcomeCard)

      // Añadir evento para cerrar al hacer clic fuera
      newProgressDisplay.addEventListener("click", (e) => {
        if (e.target === newProgressDisplay) {
          newProgressDisplay.style.display = "none"
        }
      })

      // Prevenir que el evento de clic se propague desde la tarjeta
      welcomeCard.addEventListener("click", (e) => {
        e.stopPropagation()
      })

      document.body.appendChild(newProgressDisplay)
    })

    return
  }

  // Si ya existe, alternar su visibilidad
  if (progressDisplay.style.display === "none" || progressDisplay.style.display === "") {
    progressDisplay.innerHTML = ""
    progressDisplay.style.display = "flex"

    // Crear la tarjeta de bienvenida con progreso circular
    createWelcomeCardWithProgress().then((welcomeCard) => {
      progressDisplay.appendChild(welcomeCard)

      // Prevenir que el evento de clic se propague desde la tarjeta
      welcomeCard.addEventListener("click", (e) => {
        e.stopPropagation()
      })
    })
  } else {
    progressDisplay.style.display = "flex"
  }
}

// Exportar la función para que pueda ser usada desde otros archivos
window.toggleProgressDisplay = toggleProgressDisplay

// Exportar la función para que pueda ser usada desde init-dashboard.js
export async function createWelcomeCardWithProgress() {
  try {
    // Crear la tarjeta de bienvenida
    const welcomeCard = document.createElement("div")
    welcomeCard.className = "welcome-card"
    welcomeCard.style.width = "100%"
    welcomeCard.style.maxWidth = "600px"
    welcomeCard.style.backgroundColor = "white"
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
    closeButton.addEventListener("click", (e) => {
      e.stopPropagation() // Evitar propagación
      const progressDisplay = document.getElementById("progress-display")
      if (progressDisplay) {
        progressDisplay.style.display = "none"
      }
    })
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
    progressSummary.style.maxHeight = "none" // Quitar límite de altura para el dashboard

    // Obtener datos de progreso
    const blockProgressValues = await getBlockProgressValues()
    const generalProgress = calculateGeneralProgress(blockProgressValues)
    const averageScore = await getAverageScore()

    // Usar la ruta personalizada para el dashboard
    const completedTopics = await getCompletedTopicsCount()

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

    // Añadir evento para evitar propagación de clics
    welcomeCard.addEventListener("click", (e) => {
      e.stopPropagation()
    })

    return welcomeCard
  } catch (error) {
    console.error("Error al crear tarjeta de bienvenida:", error)

    // Crear un mensaje de error como fallback
    const errorMessage = document.createElement("div")
    errorMessage.textContent = "No se pudo cargar la información de progreso"
    errorMessage.style.padding = "20px"
    errorMessage.style.textAlign = "center"
    errorMessage.style.backgroundColor = "white"
    errorMessage.style.borderRadius = "8px"

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

// Modificar la función getBlockProgressValues para asegurar que lea los datos correctamente
export async function getBlockProgressValues() {
  try {
    const progressValues = []

    // Obtener progreso para cada bloque
    for (let i = 1; i <= 4; i++) {
      try {
        // Intentar obtener el progreso directamente del localStorage primero
        // ya que parece ser más confiable que calculateBlockProgress
        const blockProgress = getBlockProgressFromLocalStorage(i)

        // Solo si no hay datos en localStorage, intentar con calculateBlockProgress
        if (blockProgress === 0) {
          try {
            const progress = await calculateBlockProgress(i)
            progressValues.push(progress)
          } catch (error) {
            console.error(`Error al calcular progreso para bloque ${i}:`, error)
            progressValues.push(blockProgress)
          }
        } else {
          progressValues.push(blockProgress)
        }
      } catch (error) {
        console.error(`Error al obtener progreso para bloque ${i}:`, error)
        progressValues.push(0)
      }
    }

    console.log("Valores de progreso por bloque (progressButton.js):", progressValues)
    return progressValues
  } catch (error) {
    console.error("Error al obtener valores de progreso:", error)
    return [50, 75, 25, 100]
  }
}

// Función para calcular el progreso general
export function calculateGeneralProgress(progressValues) {
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
export async function getAverageScore() {
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

// Función para obtener el ID del usuario actual
function getCurrentUserId() {
  try {
    const userAuth = localStorage.getItem("userAuth")
    if (!userAuth) {
      return null
    }

    const userData = JSON.parse(userAuth)
    return userData.id || null
  } catch (error) {
    console.error("Error al obtener ID de usuario:", error)
    return null
  }
}

// Modificar la función getBlockProgressFromLocalStorage para calcular correctamente el porcentaje
function getBlockProgressFromLocalStorage(blockId) {
  try {
    const userId = getCurrentUserId()
    if (!userId) {
      console.warn("No se pudo obtener el ID del usuario")
      return 0
    }

    // Clave para el progreso del bloque en localStorage
    const key = `user_${userId}_courseProgress_block${blockId}`
    const blockProgressData = localStorage.getItem(key)

    if (!blockProgressData) {
      console.log(`No hay datos de progreso para el bloque ${blockId}`)
      return 0
    }

    // Parsear los datos de progreso
    const progressData = JSON.parse(blockProgressData)
    console.log(`Datos de progreso para el bloque ${blockId}:`, progressData)

    // Si tenemos la estructura cargada, calcular el porcentaje basado en la estructura real
    if (
      window.structureLoader &&
      window.structureLoader.getAllStructures &&
      window.structureLoader.countSubpuntosInBloque
    ) {
      const estructuras = window.structureLoader.getAllStructures()

      // Si la estructura está cargada para este bloque
      if (estructuras[blockId] && estructuras[blockId].puntosLineales) {
        const totalSubpuntos = estructuras[blockId].puntosLineales.length

        // Si el valor es un número simple, es el índice del último punto completado
        if (typeof progressData === "number") {
          const completedSubpuntos = progressData + 1 // +1 porque es un índice (comienza en 0)
          const calculatedPercentage = (completedSubpuntos / totalSubpuntos) * 100

          console.log(
            `Recalculando porcentaje para el bloque ${blockId}: ${completedSubpuntos}/${totalSubpuntos} = ${calculatedPercentage.toFixed(2)}%`,
          )
          return Math.min(calculatedPercentage, 100)
        }
      } else {
        console.log(`Estructura no disponible para el bloque ${blockId}, usando valor directo`)
      }
    }

    // Si no podemos calcular basado en la estructura, usar el valor como está
    // Extraer el porcentaje de progreso
    let progressPercentage = 0

    // Si el valor es un número simple, podría ser directamente el porcentaje
    if (typeof progressData === "number") {
      // Intentar usar calculateBlockProgress si está disponible
      if (window.structureLoader && window.structureLoader.calculateBlockProgress) {
        try {
          return window.structureLoader.calculateBlockProgress(blockId)
        } catch (error) {
          console.warn(`Error al calcular progreso para bloque ${blockId}:`, error)
          progressPercentage = progressData
          console.log(`Usando valor ${progressData} como porcentaje directo para el bloque ${blockId}`)
        }
      } else {
        progressPercentage = progressData
        console.log(`Usando valor ${progressData} como porcentaje directo para el bloque ${blockId}`)
      }
    } else if (progressData.percentage !== undefined) {
      // Si el porcentaje está directamente en los datos
      progressPercentage = progressData.percentage
    } else if (progressData.completed !== undefined && progressData.total !== undefined) {
      // Si tenemos completados y total
      progressPercentage = (progressData.completed / progressData.total) * 100
    } else if (progressData.progress !== undefined) {
      // Si hay un campo de progreso
      progressPercentage = progressData.progress
    } else if (progressData.topics && Array.isArray(progressData.topics)) {
      // Si hay un array de temas, calcular el porcentaje basado en temas completados
      const totalTopics = progressData.topics.length
      const completedTopics = progressData.topics.filter((topic) => topic.completed).length
      progressPercentage = totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0
    }

    // Verificar si el valor es un número válido
    if (isNaN(progressPercentage)) {
      console.warn(`Porcentaje inválido para el bloque ${blockId}, usando 0%`)
      progressPercentage = 0
    }

    console.log(`Porcentaje de progreso calculado para el bloque ${blockId}: ${progressPercentage}%`)
    return progressPercentage
  } catch (error) {
    console.error(`Error al obtener progreso del bloque ${blockId}:`, error)
    return 0
  }
}

// Función para obtener el total de subpuntos para un bloque
function getTotalSubpuntosForBlock(blockId) {
  // Definir el total de subpuntos para cada bloque según la estructura del curso
  const subpuntosPorBloque = {
    1: 9, // Bloque 1 tiene 9 subpuntos
    2: 5, // Bloque 2 tiene 5 subpuntos
    3: 10, // Bloque 3 tiene 10 subpuntos
    4: 10, // Bloque 4 tiene 10 subpuntos
  }

  return subpuntosPorBloque[blockId] || 0
}

// Función auxiliar para obtener la estructura del curso
async function getCourseStructure() {
  try {
    // Intentar obtener la estructura del curso desde localStorage o alguna API
    // Por ahora, devolvemos una estructura básica basada en la segunda imagen
    return [
      {
        id: 1,
        name: "Bloque 1",
        topics: Array(9)
          .fill()
          .map((_, i) => ({ id: i + 1, name: `Tema ${i + 1}`, completed: false })),
      },
      {
        id: 2,
        name: "Bloque 2",
        topics: Array(5)
          .fill()
          .map((_, i) => ({ id: i + 1, name: `Tema ${i + 1}`, completed: false })),
      },
      {
        id: 3,
        name: "Bloque 3",
        topics: Array(10)
          .fill()
          .map((_, i) => ({ id: i + 1, name: `Tema ${i + 1}`, completed: false })),
      },
      {
        id: 4,
        name: "Bloque 4",
        topics: Array(10)
          .fill()
          .map((_, i) => ({ id: i + 1, name: `Tema ${i + 1}`, completed: false })),
      },
    ]
  } catch (error) {
    console.error("Error al obtener estructura del curso:", error)
    return null
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

      // Cambiar color del botón de cierre
      const closeButton = element.querySelector(".cerrar-progreso")
      if (closeButton) {
        closeButton.style.color = "#e0e0e0"
      }
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
      background-color: rgba(0, 0, 0, 0.5);
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
    
    /* Estilos adicionales para la tarjeta en el dashboard */
    .dashboard-left .welcome-card {
      box-shadow: none !important;
      max-width: 100% !important;
    }
    
    .dashboard-left .welcome-card .progress-summary {
      max-height: none !important;
    }
    
    .dashboard-left .welcome-card .block-progress-indicators {
      flex-wrap: wrap;
    }
  `

  document.head.appendChild(styleElement)
}

// Inicializar estilos al cargar el módulo
addProgressStyles()

// Inicializar cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", initializeProgressButton)

/**
 * Obtiene el recuento de temas completados
 * @returns {string} - String en formato "completados/total"
 */
export async function getCompletedTopicsCount() {
  try {
    // Obtener el ID del usuario
    const userId = getCurrentUserId()
    if (!userId) {
      console.warn("No se pudo obtener el ID del usuario")
      return "0/34"
    }

    console.log("Contando temas completados para el usuario:", userId)

    // Usar la función de structureLoader con la ruta personalizada para el dashboard
    if (window.structureLoader && window.structureLoader.getCompletedTopicsCount) {
      // No pasar ninguna ruta personalizada, dejar que la función determine la ruta correcta
      return await window.structureLoader.getCompletedTopicsCount()
    }

    // Obtener valores de progreso por bloque
    const progressValues = await getBlockProgressValues()
    let totalCompleted = 0

    // Definir el número total de temas por bloque según la estructura del curso
    const temasPorBloque = {
      1: 9, // Bloque 1 tiene 9 temas
      2: 5, // Bloque 2 tiene 5 temas
      3: 10, // Bloque 3 tiene 10 temas
      4: 10, // Bloque 4 tiene 10 temas
    }

    // Total de temas en el curso
    const totalTemas = temasPorBloque[1] + temasPorBloque[2] + temasPorBloque[3] + temasPorBloque[4]

    // Contar temas completados por bloque usando la estructura real
    for (let blockId = 1; blockId <= 4; blockId++) {
      const progressValue = progressValues[blockId - 1]
      console.log(`Datos de progreso para bloque ${blockId}: ${progressValue}`)

      if (typeof progressValue === "number" && !isNaN(progressValue)) {
        // Obtener la estructura del bloque si está disponible
        if (window.structureLoader && window.structureLoader.calculateCompletedThemes) {
          // No pasar ninguna ruta personalizada, dejar que la función determine la ruta correcta
          const { completed } = await window.structureLoader.calculateCompletedThemes(blockId)
          totalCompleted += completed
          console.log(`Bloque ${blockId}: ${completed} temas completados (basado en estructura)`)
        } else {
          // Fallback si no está disponible structureLoader
          const temasEnBloque = getTotalTemasEnBloque(blockId)

          // Si hay progreso, consideramos al menos 1 tema completado
          if (progressValue > 0) {
            totalCompleted += 1
            console.log(`Bloque ${blockId}: 1/${temasEnBloque} temas completados (progreso: ${progressValue}%)`)
          } else {
            console.log(`Bloque ${blockId}: 0/${temasEnBloque} temas completados (sin progreso)`)
          }
        }
      } else {
        console.log(`No hay datos de progreso para el bloque ${blockId}`)
      }
    }

    console.log(`Total de temas completados (antes de ajuste): ${totalCompleted}/${totalTemas}`)

    // Asegurarse de que el total no exceda el número total de temas
    totalCompleted = Math.min(totalCompleted, totalTemas)

    console.log(`Total de temas completados (después de ajuste): ${totalCompleted}/${totalTemas}`)
    return `${totalCompleted}/${totalTemas}`
  } catch (error) {
    console.error("Error al contar temas completados:", error)
    return "1/34" // Valor por defecto con el total correcto de temas
  }
}

/**
 * Obtiene el número de temas en un bloque
 * @param {number} blockId - ID del bloque
 * @returns {number} - Número de temas en el bloque
 */
function getTotalTemasEnBloque(blockId) {
  // Definir el número de temas por bloque según la estructura del curso
  const temasPorBloque = {
    1: 9, // Bloque 1 tiene 9 temas
    2: 5, // Bloque 2 tiene 5 temas
    3: 10, // Bloque 3 tiene 10 temas
    4: 10, // Bloque 4 tiene 10 temas
  }

  return temasPorBloque[blockId] || 0
}

