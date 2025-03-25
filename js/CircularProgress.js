/**
 * Obtiene el color correspondiente a un bloque específico
 * @param {number} blockNumber - Número del bloque (1-4)
 * @returns {string} Color en formato hexadecimal
 */
export function getColorForBlock(blockNumber) {
    const colors = ["#22c55e", "#00235ab3", "#f59e0b", "#ef4444"]
    return colors[(blockNumber - 1) % colors.length]
  }
  
  /**
   * Crea un componente de progreso circular SVG
   * @param {Object} options - Opciones de configuración
   * @param {number} options.progress - Porcentaje de progreso (0-100)
   * @param {number} options.size - Tamaño del círculo en píxeles
   * @param {number} options.strokeWidth - Ancho del trazo
   * @param {string} options.color - Color del progreso
   * @param {string} options.id - ID opcional para el elemento SVG
   * @param {boolean} options.showText - Si se debe mostrar el texto de porcentaje
   * @param {string} options.label - Etiqueta opcional para mostrar debajo del círculo
   * @returns {SVGElement} Elemento SVG del progreso circular
   */
  export function CircularProgress({
    progress,
    size = 80,
    strokeWidth = 8,
    color = "#22c55e",
    id,
    showText = true,
    label,
  }) {
    console.log(
      `CircularProgress called with progress: ${progress}, size: ${size}, strokeWidth: ${strokeWidth}, color: ${color}, id: ${id}`,
    )
  
    try {
      const radius = (size - strokeWidth) / 2
      const circumference = radius * 2 * Math.PI
      const strokeDashoffset = circumference - ((progress || 0) / 100) * circumference
  
      // Crear el contenedor SVG
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      svg.setAttribute("width", size.toString())
      svg.setAttribute("height", size.toString())
      svg.setAttribute("viewBox", `0 0 ${size} ${size}`)
      if (id) {
        svg.setAttribute("id", id)
      }
      svg.style.display = "block"
  
      // Crear el círculo de fondo
      const backgroundCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
      backgroundCircle.setAttribute("stroke", "#e5e7eb") // Color gris claro para el fondo
      backgroundCircle.setAttribute("stroke-width", strokeWidth.toString())
      backgroundCircle.setAttribute("fill", "transparent")
      backgroundCircle.setAttribute("r", radius.toString())
      backgroundCircle.setAttribute("cx", (size / 2).toString())
      backgroundCircle.setAttribute("cy", (size / 2).toString())
  
      // Crear el círculo de progreso
      const progressCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
      progressCircle.setAttribute("stroke", color)
      progressCircle.setAttribute("stroke-width", strokeWidth.toString())
      progressCircle.setAttribute("stroke-dasharray", circumference.toString())
      progressCircle.setAttribute("stroke-dashoffset", strokeDashoffset.toString())
      progressCircle.setAttribute("stroke-linecap", "round")
      progressCircle.setAttribute("fill", "transparent")
      progressCircle.setAttribute("r", radius.toString())
      progressCircle.setAttribute("cx", (size / 2).toString())
      progressCircle.setAttribute("cy", (size / 2).toString())
      progressCircle.setAttribute("transform", `rotate(-90 ${size / 2} ${size / 2})`)
  
      // Añadir los círculos al SVG
      svg.appendChild(backgroundCircle)
      svg.appendChild(progressCircle)
  
      // Añadir texto de porcentaje si está habilitado
      if (showText) {
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text")
        text.setAttribute("x", "50%")
        text.setAttribute("y", "50%")
        text.setAttribute("dominant-baseline", "central")
        text.setAttribute("text-anchor", "middle")
        text.setAttribute("font-size", Math.max(size / 4, 12).toString())
        text.setAttribute("font-weight", "bold")
        text.setAttribute("fill", color)
        text.textContent = `${Math.round(progress || 0)}%`
        svg.appendChild(text)
      }
  
      // Si se proporciona una etiqueta, crear un contenedor para el SVG y la etiqueta
      if (label) {
        const container = document.createElement("div")
        container.style.display = "flex"
        container.style.flexDirection = "column"
        container.style.alignItems = "center"
        container.style.justifyContent = "center"
  
        container.appendChild(svg)
  
        const labelElement = document.createElement("div")
        labelElement.textContent = label
        labelElement.style.marginTop = "8px"
        labelElement.style.fontSize = "0.8rem"
        labelElement.style.textAlign = "center"
  
        container.appendChild(labelElement)
  
        console.log("CircularProgress component with label created successfully")
        return container
      }
  
      console.log("CircularProgress component created successfully")
      return svg
    } catch (error) {
      console.error("Error in CircularProgress:", error)
      throw error
    }
  }
  
  /**
   * Crea un conjunto de indicadores de progreso circular para los bloques
   * @param {Array} progressValues - Array con los valores de progreso para cada bloque
   * @returns {HTMLElement} Contenedor con los indicadores de progreso
   */
  export function createBlockProgressIndicators(progressValues) {
    try {
      // Crear contenedor para los indicadores
      const container = document.createElement("div")
      container.className = "block-progress-indicators"
      container.style.display = "flex"
      container.style.justifyContent = "center"
      container.style.gap = "10px"
      container.style.marginTop = "10px"
  
      // Crear un indicador para cada bloque
      for (let i = 0; i < 4; i++) {
        const blockId = i + 1
        const progress = progressValues[i] || 0
        const color = getColorForBlock(blockId)
  
        // Crear el progreso circular con tamaño pequeño
        const circularProgress = CircularProgress({
          progress,
          size: 24,
          strokeWidth: 3,
          color,
          id: `header-block-progress-${blockId}`,
          showText: false,
        })
  
        // Crear contenedor para el círculo y el porcentaje
        const blockContainer = document.createElement("div")
        blockContainer.style.display = "flex"
        blockContainer.style.alignItems = "center"
        blockContainer.style.gap = "4px"
  
        // Añadir el círculo
        blockContainer.appendChild(circularProgress)
  
        // Añadir el texto de porcentaje
        const percentText = document.createElement("span")
        percentText.textContent = `${Math.round(progress)}%`
        percentText.style.fontSize = "0.8rem"
        percentText.style.fontWeight = "bold"
        percentText.style.color = color
        blockContainer.appendChild(percentText)
  
        container.appendChild(blockContainer)
      }
  
      return container
    } catch (error) {
      console.error("Error creating block progress indicators:", error)
      const errorElement = document.createElement("div")
      errorElement.textContent = "Error al cargar indicadores de progreso"
      return errorElement
    }
  }
  
  /**
   * Crea un dashboard completo con información de progreso
   * @param {Object} options - Opciones de configuración
   * @param {string} options.userName - Nombre del usuario
   * @param {number} options.averageScore - Nota media
   * @param {Array} options.blockProgressValues - Valores de progreso para cada bloque
   * @param {string} options.lastSyncDate - Fecha de última sincronización
   * @returns {HTMLElement} Elemento HTML del dashboard completo
   */
  export function createProgressDashboard({
    userName = "Usuario",
    averageScore = 0,
    blockProgressValues = [0, 0, 0, 0],
    lastSyncDate = "",
  }) {
    try {
      console.log("Creando dashboard de progreso con:", { userName, averageScore, blockProgressValues, lastSyncDate })
  
      // Crear el contenedor principal del dashboard
      const dashboardContainer = document.createElement("div")
      dashboardContainer.className = "progress-dashboard"
      dashboardContainer.style.position = "relative"
      dashboardContainer.style.backgroundColor = "white"
      dashboardContainer.style.borderRadius = "8px"
      dashboardContainer.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
      dashboardContainer.style.padding = "15px 20px"
      dashboardContainer.style.marginBottom = "20px"
  
      // Crear la sección de bienvenida
      const welcomeSection = document.createElement("div")
      welcomeSection.className = "welcome-section"
      welcomeSection.style.borderBottom = "1px solid #eaeaea"
      welcomeSection.style.paddingBottom = "10px"
      welcomeSection.style.marginBottom = "15px"
      welcomeSection.style.display = "flex"
      welcomeSection.style.justifyContent = "space-between"
      welcomeSection.style.alignItems = "center"
  
      // Título de bienvenida
      const welcomeTitle = document.createElement("h2")
      welcomeTitle.textContent = `Bienvenido/a, ${userName}`
      welcomeTitle.style.margin = "0"
      welcomeTitle.style.fontSize = "1.2rem"
      welcomeTitle.style.fontWeight = "bold"
      welcomeTitle.style.color = "#333"
      welcomeSection.appendChild(welcomeTitle)
  
      // Nota media
      const scoreContainer = document.createElement("div")
      scoreContainer.className = "score-container"
      scoreContainer.style.textAlign = "center"
  
      const scoreValue = document.createElement("div")
      scoreValue.textContent = averageScore.toFixed(1)
      scoreValue.style.fontSize = "1.8rem"
      scoreValue.style.fontWeight = "bold"
      scoreValue.style.color = "#22c55e"
      scoreContainer.appendChild(scoreValue)
  
      const scoreLabel = document.createElement("div")
      scoreLabel.textContent = "Nota media"
      scoreLabel.style.fontSize = "0.8rem"
      scoreLabel.style.color = "#666"
      scoreContainer.appendChild(scoreLabel)
  
      welcomeSection.appendChild(scoreContainer)
  
      // Añadir sección de bienvenida al dashboard
      dashboardContainer.appendChild(welcomeSection)
  
      // Crear sección de progreso por bloques
      const progressSection = document.createElement("div")
      progressSection.className = "progress-section"
  
      // Añadir indicadores de progreso por bloque
      const blockIndicators = createBlockProgressIndicators(blockProgressValues)
      progressSection.appendChild(blockIndicators)
  
      // Añadir información de última sincronización
      if (lastSyncDate) {
        const syncInfo = document.createElement("div")
        syncInfo.className = "sync-info"
        syncInfo.textContent = `Última sincronización: ${lastSyncDate}`
        syncInfo.style.fontSize = "0.8rem"
        syncInfo.style.color = "#666"
        syncInfo.style.textAlign = "right"
        syncInfo.style.marginTop = "10px"
        progressSection.appendChild(syncInfo)
      }
  
      // Añadir sección de progreso al dashboard
      dashboardContainer.appendChild(progressSection)
  
      console.log("Dashboard de progreso creado correctamente")
      return dashboardContainer
    } catch (error) {
      console.error("Error al crear dashboard de progreso:", error)
      const errorElement = document.createElement("div")
      errorElement.textContent = "Error al cargar el dashboard de progreso"
      return errorElement
    }
  }
  
  /**
   * Crea una ventana modal con información de progreso detallada
   * @param {Array} blockProgressValues - Valores de progreso para cada bloque
   * @returns {HTMLElement} Elemento HTML de la ventana modal
   */
  export function createProgressModal(blockProgressValues = [0, 0, 0, 0]) {
    try {
      // Crear el contenedor de la modal
      const modalContainer = document.createElement("div")
      modalContainer.className = "progress-modal"
      modalContainer.style.position = "fixed"
      modalContainer.style.top = "0"
      modalContainer.style.left = "0"
      modalContainer.style.width = "100%"
      modalContainer.style.height = "100%"
      modalContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
      modalContainer.style.display = "flex"
      modalContainer.style.justifyContent = "center"
      modalContainer.style.alignItems = "center"
      modalContainer.style.zIndex = "9999"
  
      // Crear el contenido de la modal
      const modalContent = document.createElement("div")
      modalContent.className = "progress-modal-content"
      modalContent.style.backgroundColor = "rgba(51, 51, 51, 0.95)"
      modalContent.style.borderRadius = "8px"
      modalContent.style.padding = "30px"
      modalContent.style.width = "80%"
      modalContent.style.maxWidth = "600px"
      modalContent.style.position = "relative"
  
      // Botón de cierre
      const closeButton = document.createElement("button")
      closeButton.innerHTML = "&times;"
      closeButton.style.position = "absolute"
      closeButton.style.top = "10px"
      closeButton.style.right = "15px"
      closeButton.style.border = "none"
      closeButton.style.background = "none"
      closeButton.style.color = "white"
      closeButton.style.fontSize = "24px"
      closeButton.style.cursor = "pointer"
      closeButton.onclick = () => {
        document.body.removeChild(modalContainer)
      }
      modalContent.appendChild(closeButton)
  
      // Título de la modal
      const modalTitle = document.createElement("h2")
      modalTitle.textContent = "Tu progreso"
      modalTitle.style.color = "white"
      modalTitle.style.textAlign = "center"
      modalTitle.style.marginTop = "0"
      modalTitle.style.marginBottom = "30px"
      modalTitle.style.fontSize = "1.8rem"
      modalContent.appendChild(modalTitle)
  
      // Línea decorativa
      const decorativeLine = document.createElement("div")
      decorativeLine.style.height = "4px"
      decorativeLine.style.background = "linear-gradient(to right, #22c55e, #00235ab3, #f59e0b, #ef4444)"
      decorativeLine.style.marginBottom = "40px"
      decorativeLine.style.borderRadius = "2px"
      modalContent.appendChild(decorativeLine)
  
      // Contenedor de círculos de progreso
      const circlesContainer = document.createElement("div")
      circlesContainer.style.display = "flex"
      circlesContainer.style.justifyContent = "space-around"
      circlesContainer.style.flexWrap = "wrap"
      circlesContainer.style.gap = "20px"
  
      // Crear círculos de progreso para cada bloque
      for (let i = 0; i < 4; i++) {
        const blockId = i + 1
        const progress = blockProgressValues[i] || 0
        const color = getColorForBlock(blockId)
  
        // Crear el progreso circular con etiqueta
        const circularProgress = CircularProgress({
          progress,
          size: 120,
          strokeWidth: 10,
          color,
          id: `modal-block-progress-${blockId}`,
          label: `Bloque ${blockId}`,
        })
  
        // Estilizar la etiqueta
        const label = circularProgress.querySelector("div")
        if (label) {
          label.style.color = "white"
          label.style.fontSize = "1rem"
          label.style.marginTop = "15px"
        }
  
        circlesContainer.appendChild(circularProgress)
      }
  
      modalContent.appendChild(circlesContainer)
      modalContainer.appendChild(modalContent)
  
      // Añadir evento para cerrar al hacer clic fuera del contenido
      modalContainer.addEventListener("click", (event) => {
        if (event.target === modalContainer) {
          document.body.removeChild(modalContainer)
        }
      })
  
      return modalContainer
    } catch (error) {
      console.error("Error al crear modal de progreso:", error)
      const errorElement = document.createElement("div")
      errorElement.textContent = "Error al cargar la ventana de progreso"
      return errorElement
    }
  }
  
  /**
   * Inicializa el dashboard de progreso en la página
   * @param {Object} options - Opciones de configuración
   */
  export function initializeProgressDashboard(options = {}) {
    try {
      console.log("Inicializando dashboard de progreso")
  
      // Obtener datos del usuario y progreso
      const userName = options.userName || getUserName()
      const averageScore = options.averageScore || getAverageScore()
      const blockProgressValues = options.blockProgressValues || getBlockProgressValues()
      const lastSyncDate = options.lastSyncDate || getLastSyncDate()
  
      // Crear el dashboard
      const dashboard = createProgressDashboard({
        userName,
        averageScore,
        blockProgressValues,
        lastSyncDate,
      })
  
      // Buscar el contenedor donde insertar el dashboard
      const container = document.querySelector(options.container || ".dashboard-container")
      if (!container) {
        // Si no existe el contenedor específico, insertar al principio del contenido principal
        const mainContent = document.querySelector("main") || document.body
        mainContent.insertBefore(dashboard, mainContent.firstChild)
      } else {
        // Insertar al principio del contenedor especificado
        container.insertBefore(dashboard, container.firstChild)
      }
  
      // Añadir botón de progreso detallado
      addProgressButton(blockProgressValues)
  
      console.log("Dashboard de progreso inicializado correctamente")
    } catch (error) {
      console.error("Error al inicializar dashboard de progreso:", error)
    }
  }
  
  /**
   * Añade un botón para mostrar el progreso detallado
   * @param {Array} blockProgressValues - Valores de progreso para cada bloque
   */
  export function addProgressButton(blockProgressValues) {
    try {
      // Verificar si ya existe el botón
      if (document.querySelector(".progress-button")) {
        return
      }
  
      // Crear el botón
      const progressButton = document.createElement("button")
      progressButton.className = "progress-button"
      progressButton.innerHTML = '<i class="fa-solid fa-chart-pie"></i> Ver progreso'
      progressButton.style.position = "fixed"
      progressButton.style.bottom = "20px"
      progressButton.style.right = "20px"
      progressButton.style.backgroundColor = "#22c55e"
      progressButton.style.color = "white"
      progressButton.style.border = "none"
      progressButton.style.borderRadius = "30px"
      progressButton.style.padding = "10px 20px"
      progressButton.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)"
      progressButton.style.cursor = "pointer"
      progressButton.style.display = "flex"
      progressButton.style.alignItems = "center"
      progressButton.style.gap = "8px"
      progressButton.style.zIndex = "100"
  
      // Añadir evento para mostrar la modal
      progressButton.addEventListener("click", () => {
        const modal = createProgressModal(blockProgressValues)
        document.body.appendChild(modal)
      })
  
      // Añadir el botón al body
      document.body.appendChild(progressButton)
      console.log("Progress button initialized")
    } catch (error) {
      console.error("Error al añadir botón de progreso:", error)
    }
  }
  
  /**
   * Obtiene el nombre del usuario desde localStorage
   * @returns {string} Nombre del usuario
   */
  function getUserName() {
    try {
      const userAuth = localStorage.getItem("userAuth")
      if (userAuth) {
        const userData = JSON.parse(userAuth)
        return userData.name || "Usuario"
      }
      return "Usuario"
    } catch (error) {
      console.error("Error al obtener nombre de usuario:", error)
      return "Usuario"
    }
  }
  
  /**
   * Obtiene la nota media desde el historial de exámenes
   * @returns {number} Nota media
   */
  function getAverageScore() {
    try {
      // Intentar importar la función getExamHistory
      let examHistory = []
      try {
        // Obtener directamente del localStorage
        const examHistoryStr = localStorage.getItem("examHistory")
        if (examHistoryStr) {
          examHistory = JSON.parse(examHistoryStr)
        }
      } catch (e) {
        console.warn("No se pudo obtener el historial de exámenes:", e)
      }
  
      // Calcular nota media
      if (examHistory && examHistory.length > 0) {
        const totalScore = examHistory.reduce((sum, exam) => sum + exam.score, 0)
        return totalScore / examHistory.length
      }
  
      return 80.0 // Valor por defecto
    } catch (error) {
      console.error("Error al obtener nota media:", error)
      return 80.0 // Valor por defecto
    }
  }
  
  /**
   * Obtiene los valores de progreso de cada bloque
   * @returns {Array} Array con los valores de progreso
   */
  function getBlockProgressValues() {
    try {
      const userId = getCurrentUserId()
      const progressValues = []
  
      // Obtener progreso de cada bloque
      for (let i = 1; i <= 4; i++) {
        let progress = 0
  
        if (userId) {
          const key = `user_${userId}_courseProgress_block${i}`
          const blockProgressData = localStorage.getItem(key)
  
          if (blockProgressData) {
            const progressData = JSON.parse(blockProgressData)
  
            if (progressData.percentage !== undefined) {
              progress = progressData.percentage
            } else if (progressData.completed !== undefined && progressData.total !== undefined) {
              progress = (progressData.completed / progressData.total) * 100
            } else if (progressData.progress !== undefined) {
              progress = progressData.progress
            }
          }
        }
  
        progressValues.push(progress)
      }
  
      // Si no hay datos, usar valores por defecto
      if (progressValues.every((val) => val === 0)) {
        return [4, 2, 0, 6] // Valores de ejemplo
      }
  
      return progressValues
    } catch (error) {
      console.error("Error al obtener valores de progreso:", error)
      return [4, 2, 0, 6] // Valores por defecto
    }
  }
  
  /**
   * Obtiene la fecha de última sincronización
   * @returns {string} Fecha formateada
   */
  function getLastSyncDate() {
    try {
      const userAuth = localStorage.getItem("userAuth")
      if (userAuth) {
        const userData = JSON.parse(userAuth)
        if (userData.lastSync) {
          const date = new Date(userData.lastSync)
          return `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`
        }
      }
  
      // Fecha por defecto
      return new Date().toLocaleString()
    } catch (error) {
      console.error("Error al obtener fecha de sincronización:", error)
      return new Date().toLocaleString()
    }
  }
  
  /**
   * Obtiene el ID del usuario actual
   * @returns {string|null} ID del usuario o null si no está autenticado
   */
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
  /**
   * Actualiza la tarjeta de bienvenida con progreso circular
   * @param {number} generalProgress - Progreso general (0-100)
   * @param {number} averageScore - Nota media
   * @param {string} completedTopics - Temas completados (formato "X/Y")
   * @param {Array} blockProgressValues - Valores de progreso para cada bloque
   */
  export function updateWelcomeCardWithCircularProgress(
    generalProgress,
    averageScore,
    completedTopics,
    blockProgressValues,
  ) {
    try {
      // Obtener la tarjeta de bienvenida
      const welcomeCard = document.querySelector(".welcome-card")
      if (!welcomeCard) {
        console.error("No se encontró la tarjeta de bienvenida")
        return
      }
  
      // Actualizar la barra de progreso general si existe
      const progressBar = welcomeCard.querySelector(".progress-fill")
      if (progressBar) {
        progressBar.style.width = `${generalProgress}%`
  
        // Actualizar el valor de progreso si existe
        const progressValue = welcomeCard.querySelector(".progress-value")
        if (progressValue) {
          progressValue.textContent = `${generalProgress}%`
        }
      }
  
      // Actualizar la nota media si existe
      const scoreValue = welcomeCard.querySelector(".stat-value:first-child")
      if (scoreValue) {
        scoreValue.textContent = averageScore
      }
  
      // Actualizar los temas completados si existe
      const topicsValue = welcomeCard.querySelectorAll(".stat-value")[1]
      if (topicsValue) {
        topicsValue.textContent = completedTopics
      }
  
      console.log("Tarjeta de bienvenida actualizada con valores actuales")
    } catch (error) {
      console.error("Error al actualizar la tarjeta de bienvenida:", error)
    }
  }
  
  