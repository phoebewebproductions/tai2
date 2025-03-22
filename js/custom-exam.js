import { cargarTodasLasEstructuras, estructuraGlobal } from "./structureLoader.js"
import CustomExamDisplay from "./custom-exam-display.js"
import { loadQuestionsForCustomExam } from "./custom-exam-adapter.js"
import { saveExamResult } from "./exam-history.js"
import { updateStats, initializeStats } from "./exam-stats.js"

// Función para seleccionar preguntas aleatorias
function selectRandomQuestions(questions, count) {
  // Si hay menos preguntas que las solicitadas, devolver todas
  if (questions.length <= count) {
    return [...questions]
  }

  // Clonar el array para no modificar el original
  const availableQuestions = [...questions]
  const selectedQuestions = []

  // Seleccionar preguntas aleatorias
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * availableQuestions.length)
    selectedQuestions.push(availableQuestions[randomIndex])
    availableQuestions.splice(randomIndex, 1)
  }

  return selectedQuestions
}

// Función para crear un gráfico de barras simple
function createSimpleBarChart(container, data, maxValue) {
    // Clear the container
    container.innerHTML = "";
    
    // Create chart container
    const chartContainer = document.createElement("div");
    chartContainer.className = "chart-container";
    chartContainer.style.height = "100%";
    chartContainer.style.width = "100%";
    chartContainer.style.display = "flex";
    chartContainer.style.flexDirection = "column";
    chartContainer.style.justifyContent = "space-around";
    chartContainer.style.gap = "8px";
    
    // Create a bar for each data point
    data.forEach((item) => {
      // Create bar row container
      const barRow = document.createElement("div");
      barRow.style.display = "flex";
      barRow.style.alignItems = "center";
      barRow.style.height = "20px";
      barRow.style.width = "100%";
      barRow.style.gap = "8px";
      
      // Create label
      const label = document.createElement("div");
      label.textContent = item.shortLabel || "";
      label.title = item.label;
      label.style.width = "20px";
      label.style.fontSize = "10px";
      label.style.fontWeight = "bold";
      label.style.textAlign = "center";
      
      // Create bar container
      const barContainer = document.createElement("div");
      barContainer.style.flex = "1";
      barContainer.style.height = "100%";
      barContainer.style.backgroundColor = "#f1f1f1";
      barContainer.style.borderRadius = "3px";
      barContainer.style.overflow = "hidden";
      
      // Calculate width percentage
      const widthPercent = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
      
      // Create the actual bar
      const bar = document.createElement("div");
      bar.style.height = "100%";
      bar.style.width = `${Math.max(widthPercent, 3)}%`; // Minimum 3% to be visible
      bar.style.backgroundColor = getColorForType(item.type);
      bar.title = `${item.label}: ${item.value}`;
      
      // Add value label inside the bar if there's enough space
      if (widthPercent > 15) {
        bar.style.position = "relative";
        
        const valueLabel = document.createElement("span");
        valueLabel.textContent = item.value;
        valueLabel.style.position = "absolute";
        valueLabel.style.right = "5px";
        valueLabel.style.top = "50%";
        valueLabel.style.transform = "translateY(-50%)";
        valueLabel.style.fontSize = "10px";
        valueLabel.style.color = "#fff";
        valueLabel.style.fontWeight = "bold";
        
        bar.appendChild(valueLabel);
      }
      
      // Assemble the components
      barContainer.appendChild(bar);
      barRow.appendChild(label);
      barRow.appendChild(barContainer);
      chartContainer.appendChild(barRow);
    });
    
    // Add the chart to the container
    container.appendChild(chartContainer);
  }
  
  // Helper function to get color based on type
  function getColorForType(type) {
    switch (type) {
      case "correct":
        return "#34a853"; // Green
      case "incorrect":
        return "#ea4335"; // Red
      case "not-answered":
        return "#dadce0"; // Gray
      default:
        return "#1a73e8"; // Blue
    }
  }

// Clase para manejar el generador de exámenes personalizados
class CustomExamGenerator {
  constructor() {
    this.estructuraGlobal = {}
    this.selectedBlocks = []
    this.selectedTopics = []
    this.questionCount = 10
    this.selectionMode = "blocks" // 'blocks' o 'topics'
    this.examReady = false
    this.generatedExam = []
    this.examDisplay = new CustomExamDisplay() // Instancia del visualizador de exámenes
    this.answeredQuestions = {} // Registro de preguntas respondidas

    // Referencias a elementos DOM
    this.blocksContainer = null
    this.topicsContainer = null
    this.questionCountSlider = null
    this.questionCountValue = null
    this.generateExamBtn = null
    this.examSummary = null
    this.examSummaryList = null
    this.startExamBtn = null
    this.resetExamBtn = null
    this.tabButtons = null
    this.tabContents = null
    this.loadingSpinner = null
    this.errorContainer = null

    // Inicializar la interfaz
    this.init()
  }

  async init() {
    try {
      // Cargar la estructura global
      await cargarTodasLasEstructuras()
      this.estructuraGlobal = estructuraGlobal

      // Cargar registro de preguntas respondidas
      this.loadAnsweredQuestions()

      // Inicializar elementos DOM
      this.initDOMElements()

      // Cargar bloques y temas
      this.loadBlocks()
      this.loadTopics()

      // Configurar eventos
      this.setupEventListeners()

      // Inicializar estadísticas
      initializeStats()

      console.log("Generador de exámenes personalizado inicializado")
    } catch (error) {
      console.error("Error al inicializar el generador de exámenes:", error)
      this.showError("Error al cargar la estructura del curso. Por favor, recarga la página.")
    }
  }

  // Cargar registro de preguntas respondidas
  loadAnsweredQuestions() {
    try {
      const savedData = localStorage.getItem("answeredQuestions")
      if (savedData) {
        this.answeredQuestions = JSON.parse(savedData)
      }
    } catch (error) {
      console.error("Error al cargar registro de preguntas respondidas:", error)
      this.answeredQuestions = {}
    }
  }

  // Guardar registro de preguntas respondidas
  saveAnsweredQuestions() {
    try {
      localStorage.setItem("answeredQuestions", JSON.stringify(this.answeredQuestions))
    } catch (error) {
      console.error("Error al guardar registro de preguntas respondidas:", error)
    }
  }

  // Inicializar referencias a elementos DOM
  initDOMElements() {
    // Contenedores principales
    this.blocksContainer = document.getElementById("blocks-container")
    this.topicsContainer = document.querySelector(".topics-container")

    // Elementos de control
    this.questionCountSlider = document.getElementById("question-count-slider")
    this.questionCountValue = document.getElementById("question-count-value")
    this.generateExamBtn = document.getElementById("generate-exam-btn")

    // Elementos de resumen y acciones
    this.examSummary = document.querySelector(".custom-exam-summary")
    this.examSummaryList = document.getElementById("exam-summary-list")
    this.startExamBtn = document.getElementById("start-exam-btn")
    this.resetExamBtn = document.getElementById("reset-exam-btn")

    // Elementos de estado
    this.loadingSpinner = document.createElement("div")
    this.loadingSpinner.className = "loading-spinner"
    this.loadingSpinner.textContent = "Cargando..."
    this.loadingSpinner.style.display = "none"
    document.querySelector(".custom-exam-container").appendChild(this.loadingSpinner)

    // Contenedor de errores
    this.errorContainer = document.createElement("div")
    this.errorContainer.className = "error-message"
    this.errorContainer.style.display = "none"
    document.querySelector(".custom-exam-container").appendChild(this.errorContainer)
  }

  // Cargar bloques en la interfaz
  loadBlocks() {
    if (!this.blocksContainer) return;
  
    // Clear container
    this.blocksContainer.innerHTML = "";
  
    // Check if there's a global structure
    if (!this.estructuraGlobal || Object.keys(this.estructuraGlobal).length === 0) {
      this.blocksContainer.innerHTML = '<div class="error-message">No se pudo cargar la estructura del curso.</div>';
      return;
    }
  
    // Create elements for each block
    for (const bloqueId in this.estructuraGlobal) {
      const bloque = this.estructuraGlobal[bloqueId];
  
      // Calculate block statistics
      const blockStats = this.calculateBlockStats(bloqueId);
  
      // Create block element
      const bloqueElement = document.createElement("div");
      bloqueElement.className = "block-item";
      bloqueElement.dataset.blockId = bloqueId;
  
      // Create block header
      const blockHeader = document.createElement("div");
      blockHeader.className = "block-header";
  
      // Create select button for the block
      const selectBtn = document.createElement("button");
      selectBtn.className = "block-select-btn";
      selectBtn.textContent = "Seleccionar bloque";
      selectBtn.dataset.blockId = bloqueId;
  
      // Check if block is already selected
      if (this.selectedBlocks.includes(bloqueId)) {
        selectBtn.classList.add("selected");
      }
  
      // Add event listener
      selectBtn.addEventListener("click", () => {
        const isSelected = selectBtn.classList.contains("selected");
        this.handleBlockSelection(bloqueId, !isSelected);
        selectBtn.classList.toggle("selected");
      });
  
      // Block info container
      const infoContainer = document.createElement("div");
      infoContainer.className = "block-info";
  
      // Block title
      const title = document.createElement("div");
      title.className = "block-title";
      title.textContent = bloque.titulo || `Bloque ${bloqueId}`;
  
      // Block description
      const description = document.createElement("div");
      description.className = "block-description";
      const numTemas = bloque.temas ? bloque.temas.length : 0;
      const numPuntos = bloque.temas
        ? bloque.temas.reduce((acc, tema) => acc + (tema.puntos ? tema.puntos.length : 0), 0)
        : 0;
      description.textContent = `${numTemas} temas, ${numPuntos} puntos`;
  
      // Block statistics
      const statsContainer = document.createElement("div");
      statsContainer.className = "block-stats";
  
      // Progress bar
      const progressBar = document.createElement("div");
      progressBar.className = "block-progress";
  
      // Correct answers bar
      const correctBar = document.createElement("div");
      correctBar.className = "progress-correct";
      correctBar.style.width = `${blockStats.correctPercentage}%`;
  
      // Incorrect answers bar
      const incorrectBar = document.createElement("div");
      incorrectBar.className = "progress-incorrect";
      incorrectBar.style.width = `${blockStats.incorrectPercentage}%`;
      incorrectBar.style.left = `${blockStats.correctPercentage}%`;
  
      // Add bars to progress container
      progressBar.appendChild(correctBar);
      progressBar.appendChild(incorrectBar);
  
      // Progress text
      const progressText = document.createElement("div");
      progressText.className = "block-progress-text";
      progressText.textContent = `${blockStats.answeredCount}/${blockStats.totalCount} preguntas respondidas`;
  
      // Add elements to stats container
      statsContainer.appendChild(progressBar);
      statsContainer.appendChild(progressText);
  
      // Create chart container
      const chartContainer = document.createElement("div");
      chartContainer.className = "topic-chart";
      chartContainer.style.width = "90%";
      chartContainer.style.maxWidth = "90%";
      chartContainer.style.overflow = "hidden";
      chartContainer.style.height = "60px"; // Fixed height to prevent vertical overflow
      chartContainer.style.margin = "0px";
  
      // Generate chart data
      const chartData = [
        { value: blockStats.correctCount, type: "correct", label: "Correctas", shortLabel: "C" },
        { value: blockStats.incorrectCount, type: "incorrect", label: "Incorrectas", shortLabel: "I" },
        {
          value: blockStats.totalCount - blockStats.answeredCount,
          type: "not-answered",
          label: "Sin responder",
          shortLabel: "SR",
        },
      ];
  
      // Create chart
      createSimpleBarChart(chartContainer, chartData, blockStats.totalCount);
  
      // Add elements to info container
      infoContainer.appendChild(title);
      infoContainer.appendChild(description);
      infoContainer.appendChild(statsContainer);
      infoContainer.appendChild(chartContainer);
  
      // Add elements to header
      blockHeader.appendChild(infoContainer);
  
      // Add header and select button to block
      bloqueElement.appendChild(selectBtn);
      bloqueElement.appendChild(blockHeader);
  
      // Add block to blocks container
      this.blocksContainer.appendChild(bloqueElement);
    }
  }

  // Calcular estadísticas de un bloque
  calculateBlockStats(blockId) {
    let totalCount = 0
    let answeredCount = 0
    let correctCount = 0
    let incorrectCount = 0

    // Recorrer todos los temas del bloque
    const bloque = this.estructuraGlobal[blockId]
    if (bloque && bloque.temas) {
      for (let i = 0; i < bloque.temas.length; i++) {
        const tema = bloque.temas[i]
        const temaId = tema.id || `${blockId}${(i + 1).toString().padStart(2, "0")}`

        // Obtener estadísticas del tema
        const topicStats = this.calculateTopicStats(blockId, temaId)

        // Sumar a las estadísticas del bloque
        totalCount += topicStats.totalCount
        answeredCount += topicStats.answeredCount
        correctCount += topicStats.correctCount
        incorrectCount += topicStats.incorrectCount
      }
    }

    // Calcular porcentajes
    const correctPercentage = totalCount > 0 ? (correctCount / totalCount) * 100 : 0
    const incorrectPercentage = totalCount > 0 ? (incorrectCount / totalCount) * 100 : 0

    return {
      totalCount,
      answeredCount,
      correctCount,
      incorrectCount,
      correctPercentage,
      incorrectPercentage,
    }
  }

  // Calcular estadísticas de un tema
  calculateTopicStats(blockId, topicId) {
    // En una implementación real, esto se basaría en datos reales de preguntas respondidas
    // Por ahora, usamos datos simulados o del registro local

    // Obtener preguntas respondidas para este tema
    const answeredQuestions = this.answeredQuestions[`${blockId}_${topicId}`] || {}

    // Contar preguntas
    const totalCount = 20 // Número estimado de preguntas por tema
    const answeredIds = Object.keys(answeredQuestions)
    const answeredCount = answeredIds.length

    // Contar respuestas correctas e incorrectas
    let correctCount = 0
    let incorrectCount = 0

    for (const questionId of answeredIds) {
      if (answeredQuestions[questionId].correct) {
        correctCount++
      } else {
        incorrectCount++
      }
    }

    // Calcular porcentajes
    const correctPercentage = totalCount > 0 ? (correctCount / totalCount) * 100 : 0
    const incorrectPercentage = totalCount > 0 ? (incorrectCount / totalCount) * 100 : 0

    return {
      totalCount,
      answeredCount,
      correctCount,
      incorrectCount,
      correctPercentage,
      incorrectPercentage,
    }
  }

  // Cargar temas en la interfaz
  loadTopics() {
    if (!this.topicsContainer) return

    // Clear container
    this.topicsContainer.innerHTML = ""

    // Check if there's a global structure
    if (!this.estructuraGlobal || Object.keys(this.estructuraGlobal).length === 0) {
      this.topicsContainer.innerHTML = '<div class="error-message">No se pudo cargar la estructura del curso.</div>'
      return
    }

    // Create elements for each block and its themes
    for (const bloqueId in this.estructuraGlobal) {
      const bloque = this.estructuraGlobal[bloqueId]

      // Create block container
      const bloqueContainer = document.createElement("div")
      bloqueContainer.className = "block-topics-container"

      // Create block title
      const bloqueTitle = document.createElement("h4")
      bloqueTitle.className = "block-topics-title"
      bloqueTitle.textContent = bloque.titulo || `Bloque ${bloqueId}`

      // Add title to container
      bloqueContainer.appendChild(bloqueTitle)

      // Check if there are themes
      if (!bloque.temas || bloque.temas.length === 0) {
        const noTopics = document.createElement("p")
        noTopics.className = "no-topics-message"
        noTopics.textContent = "No hay temas disponibles para este bloque."
        bloqueContainer.appendChild(noTopics)
      } else {
        // Create themes container
        const temasContainer = document.createElement("div")
        temasContainer.className = "topics-grid";
temasContainer.style.display = "grid";
temasContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(calc(50% - 10px), 1fr))";
temasContainer.style.gap = "20px";
temasContainer.style.width = "100%";

        // Create elements for each theme
        for (let i = 0; i < bloque.temas.length; i++) {
          const tema = bloque.temas[i]

          // Generate an ID for the theme if it doesn't exist
          const temaId = tema.id || `${bloqueId}${(i + 1).toString().padStart(2, "0")}`

          // Calculate theme statistics
          const topicStats = this.calculateTopicStats(bloqueId, temaId)

          // Create theme element
          const temaElement = document.createElement("div")
          temaElement.className = "topic-item"

          // Create select button for the theme
          const selectBtn = document.createElement("button")
          selectBtn.className = "topic-select-btn"
          selectBtn.textContent = "Seleccionar tema"
          selectBtn.dataset.topicId = temaId
          selectBtn.dataset.bloqueId = bloqueId
          selectBtn.dataset.temaIndex = i.toString()

          // Check if topic is already selected
          if (this.selectedTopics.some((t) => t.id === temaId)) {
            selectBtn.classList.add("selected")
          }

          // Add event listener
          selectBtn.addEventListener("click", () => {
            const isSelected = selectBtn.classList.contains("selected")
            this.handleTopicSelection(temaId, !isSelected, bloqueId, i)
            selectBtn.classList.toggle("selected")
          })

          // Create theme header
          const themeHeader = document.createElement("div")
          themeHeader.className = "topic-header"

          // Theme info container
          const infoContainer = document.createElement("div")
          infoContainer.className = "topic-info"

          // Theme title
          const title = document.createElement("div")
          title.className = "topic-title"
          title.textContent = tema.titulo || `Tema ${i + 1}`

          // Theme description
          const description = document.createElement("div")
          description.className = "topic-description"
          const numPuntos = tema.puntos ? tema.puntos.length : 0
          description.textContent = `${numPuntos} puntos`

          // Add elements to info container
          infoContainer.appendChild(title)
          infoContainer.appendChild(description)

          // Add elements to theme header
          themeHeader.appendChild(infoContainer)

          // Theme statistics
          const statsContainer = document.createElement("div")
          statsContainer.className = "topic-stats"

          // Progress bar
          const progressBar = document.createElement("div")
          progressBar.className = "topic-progress"

          // Correct answers bar
          const correctBar = document.createElement("div")
          correctBar.className = "topic-progress-correct"
          correctBar.style.width = `${topicStats.correctPercentage}%`

          // Incorrect answers bar
          const incorrectBar = document.createElement("div")
          incorrectBar.className = "topic-progress-incorrect"
          incorrectBar.style.width = `${topicStats.incorrectPercentage}%`
          incorrectBar.style.left = `${topicStats.correctPercentage}%`

          // Add bars to progress container
          progressBar.appendChild(correctBar)
          progressBar.appendChild(incorrectBar)

          // Progress text
          const progressText = document.createElement("div")
          progressText.className = "topic-progress-text"
          progressText.textContent = `${topicStats.answeredCount}/${topicStats.totalCount} preguntas respondidas`

          // Add elements to stats container
          statsContainer.appendChild(progressBar)
          statsContainer.appendChild(progressText)

          // Create chart container
          const chartContainer = document.createElement("div");
          chartContainer.className = "topic-chart";
          chartContainer.style.width = "90%";
          chartContainer.style.maxWidth = "90%";
          chartContainer.style.overflow = "hidden";
          chartContainer.style.height = "60px"; // Fixed height to prevent vertical overflow
          chartContainer.style.margin='0px';

          // Generate chart data
          const chartData = [
            { value: topicStats.correctCount, type: "correct", label: "Correctas", shortLabel: "C" },
            { value: topicStats.incorrectCount, type: "incorrect", label: "Incorrectas", shortLabel: "I" },
            {
              value: topicStats.totalCount - topicStats.answeredCount,
              type: "not-answered",
              label: "Sin responder",
              shortLabel: "SR",
            },
          ]

          // Create chart
          createSimpleBarChart(chartContainer, chartData, topicStats.totalCount)

          // Add elements to theme
          temaElement.appendChild(selectBtn)
          temaElement.appendChild(themeHeader)
          temaElement.appendChild(statsContainer)
          temaElement.appendChild(chartContainer)

          // Add theme to themes container
          temasContainer.appendChild(temaElement)
        }

        // Add themes container to block container
        bloqueContainer.appendChild(temasContainer)
      }

      // Add separator
      const separator = document.createElement("hr")
      separator.className = "topics-separator"

      // Add to main container
      this.topicsContainer.appendChild(bloqueContainer)
      this.topicsContainer.appendChild(separator)
    }
  }

  // Configurar eventos
  setupEventListeners() {
    // Event for switching between tabs
    const tabButtons = document.querySelectorAll(".tab-button")
    const tabContents = document.querySelectorAll(".tab-content")

    if (tabButtons.length > 0) {
      tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Update buttons
          tabButtons.forEach((btn) => btn.classList.remove("active"))
          button.classList.add("active")

          // Update content
          const tabId = button.dataset.tab
          tabContents.forEach((content) => content.classList.remove("active"))
          document.getElementById(`${tabId}-tab`).classList.add("active")

          // Update selection mode
          this.selectionMode = tabId

          // Update generate button state
          this.updateGenerateButtonState()
        })
      })
    }

    // Evento para cambiar el número de preguntas
    if (this.questionCountSlider) {
      this.questionCountSlider.addEventListener("input", () => {
        const value = this.questionCountSlider.value
        this.questionCount = Number.parseInt(value)
        if (this.questionCountValue) {
          this.questionCountValue.textContent = value
        }
      })
    }

    // Evento para generar examen
    if (this.generateExamBtn) {
      this.generateExamBtn.addEventListener("click", () => this.generateExam())
    }

    // Evento para iniciar examen
    if (this.startExamBtn) {
      this.startExamBtn.addEventListener("click", () => this.startExam())
    }

    // Evento para reiniciar configuración
    if (this.resetExamBtn) {
      this.resetExamBtn.addEventListener("click", () => this.resetExam())
    }
  }

  // Manejar selección de bloque
  handleBlockSelection(blockId, isSelected) {
    if (isSelected) {
      // Añadir bloque si no está ya seleccionado
      if (!this.selectedBlocks.includes(blockId)) {
        this.selectedBlocks.push(blockId)
      }

      // Seleccionar todos los temas del bloque
      const blockElement = document.querySelector(`.block-item[data-block-id="${blockId}"]`)
      if (blockElement) {
        const topicButtons = blockElement.querySelectorAll(".topic-select-btn")
        topicButtons.forEach((button) => {
          button.classList.add("selected")

          // Asegurarse de que los datos del dataset estén disponibles
          if (button.dataset.topicId && button.dataset.bloqueId) {
            this.handleTopicSelection(
              button.dataset.topicId,
              true,
              button.dataset.bloqueId,
              Number.parseInt(button.dataset.temaIndex || "0"),
            )
          }
        })
      }
    } else {
      // Eliminar bloque
      this.selectedBlocks = this.selectedBlocks.filter((id) => id !== blockId)

      // Deseleccionar todos los temas del bloque
      const blockElement = document.querySelector(`.block-item[data-block-id="${blockId}"]`)
      if (blockElement) {
        const topicButtons = blockElement.querySelectorAll(".topic-select-btn")
        topicButtons.forEach((button) => {
          button.classList.remove("selected")

          // Asegurarse de que los datos del dataset estén disponibles
          if (button.dataset.topicId && button.dataset.bloqueId) {
            this.handleTopicSelection(
              button.dataset.topicId,
              false,
              button.dataset.bloqueId,
              Number.parseInt(button.dataset.temaIndex || "0"),
            )
          }
        })
      }
    }

    // Actualizar estado del botón de generar
    this.updateGenerateButtonState()
  }

  // Manejar selección de tema
  handleTopicSelection(topicId, isSelected, bloqueId, temaIndex) {
    // Verificar que el ID sea válido
    if (!topicId) {
      console.error("ID de tema inválido:", topicId)
      return
    }

    // Crear un objeto con la información completa del tema
    const temaInfo = {
      id: topicId,
      bloqueId: bloqueId,
      temaIndex: temaIndex,
    }

    if (isSelected) {
      // Añadir tema si no está ya seleccionado
      if (!this.selectedTopics.some((t) => t.id === topicId)) {
        this.selectedTopics.push(temaInfo)
      }
    } else {
      // Eliminar tema
      this.selectedTopics = this.selectedTopics.filter((t) => t.id !== topicId)
    }

    // Actualizar estado del botón de generar
    this.updateGenerateButtonState()
  }

  // Actualizar estado del botón de generar
  updateGenerateButtonState() {
    if (!this.generateExamBtn) return

    // Habilitar botón si hay bloques o temas seleccionados
    if (
      (this.selectionMode === "blocks" && this.selectedBlocks.length > 0) ||
      (this.selectionMode === "topics" && this.selectedTopics.length > 0)
    ) {
      this.generateExamBtn.disabled = false
    } else {
      this.generateExamBtn.disabled = true
    }
  }

  // Generar examen
  async generateExam() {
    try {
      // Mostrar cargando
      this.showLoading(true)

      // Generar preguntas
      const questions = await this.generateExamQuestions()

      // Guardar examen generado
      this.generatedExam = questions
      this.examReady = questions.length > 0

      // Actualizar interfaz
      this.updateExamSummary()

      // Ocultar cargando
      this.showLoading(false)

      console.log("Examen generado con éxito:", questions)
    } catch (error) {
      console.error("Error al generar el examen:", error)
      this.showError("Error al generar el examen. Por favor, inténtalo de nuevo.")
      this.showLoading(false)
    }
  }

  // Generar preguntas para el examen
  async generateExamQuestions() {
    try {
      this.showLoading(true)
  
      let questions = []
  
      // Si estamos en modo bloques, cargar preguntas directamente por bloques
      if (this.selectionMode === "blocks" && this.selectedBlocks.length > 0) {
        console.log("Cargando preguntas para bloques seleccionados:", this.selectedBlocks)
        
        // Cargar preguntas directamente por bloques
        const blockQuestions = await loadQuestionsForCustomExam("blocks", this.selectedBlocks, this.questionCount * 2)
        
        if (blockQuestions && blockQuestions.length > 0) {
          console.log(`Encontradas ${blockQuestions.length} preguntas para los bloques seleccionados`)
          questions = blockQuestions
        } else {
          console.warn("No se encontraron preguntas para los bloques. Intentando cargar por temas...")
          
          // Si no hay preguntas, intentar convertir bloques a temas
          this.selectedTopics = []
          
          // Para cada bloque seleccionado, añadir todos sus temas
          for (const blockId of this.selectedBlocks) {
            const bloque = this.estructuraGlobal[blockId]
            if (bloque && bloque.temas) {
              for (let i = 0; i < bloque.temas.length; i++) {
                const tema = bloque.temas[i]
                const temaId = tema.id || `${blockId}${(i + 1).toString().padStart(2, "0")}`
                
                // Crear objeto de tema y añadirlo a selectedTopics
                const temaInfo = {
                  id: temaId,
                  bloqueId: blockId,
                  temaIndex: i,
                }
                
                this.selectedTopics.push(temaInfo)
              }
            }
          }
          
          console.log(`Convertidos ${this.selectedTopics.length} temas de los bloques seleccionados`)
          
          // Ahora cargar preguntas por temas
          if (this.selectedTopics.length > 0) {
            const topicIds = this.selectedTopics.map(t => t.id)
            const topicQuestions = await loadQuestionsForCustomExam("topics", topicIds, this.questionCount * 2)
            
            if (topicQuestions && topicQuestions.length > 0) {
              console.log(`Encontradas ${topicQuestions.length} preguntas para los temas convertidos`)
              questions = topicQuestions
            }
          }
        }
      } 
      // Si estamos en modo temas, cargar preguntas por temas
      else if (this.selectionMode === "topics" && this.selectedTopics.length > 0) {
        console.log("Cargando preguntas para temas seleccionados:", this.selectedTopics.map(t => t.id))
        
        const topicIds = this.selectedTopics.map(t => t.id)
        const topicQuestions = await loadQuestionsForCustomExam("topics", topicIds, this.questionCount * 2)
        
        if (topicQuestions && topicQuestions.length > 0) {
          console.log(`Encontradas ${topicQuestions.length} preguntas para los temas seleccionados`)
          questions = topicQuestions
        }
      }
  
      // Si no hay preguntas, generar preguntas de ejemplo
      if (questions.length === 0) {
        console.warn("No se encontraron preguntas. Generando preguntas de ejemplo.")
        questions = this.generateSampleQuestions()
      } 
      // Si hay más preguntas que las solicitadas, seleccionar aleatoriamente
      else if (questions.length > this.questionCount) {
        questions = selectRandomQuestions(questions, this.questionCount)
      }
  
      this.showLoading(false)
      return questions
    } catch (error) {
      console.error("Error al generar preguntas para el examen:", error)
      this.showLoading(false)
      this.showError("Error al generar preguntas para el examen. Por favor, inténtalo de nuevo.")
      return this.generateSampleQuestions() // Devolver preguntas de ejemplo en caso de error
    }
  }

  // Método para generar preguntas de ejemplo
  generateSampleQuestions() {
    const sampleQuestions = []

    for (let i = 0; i < this.questionCount; i++) {
      // Determinar bloque y tema
      let bloque, tema
      if (this.selectionMode === "blocks") {
        // Usar un bloque seleccionado o un valor por defecto
        bloque =
          this.selectedBlocks.length > 0
            ? this.selectedBlocks[Math.floor(Math.random() * this.selectedBlocks.length)]
            : "1"
        tema = Math.floor(Math.random() * 5) + 1 // Tema aleatorio entre 1 y 5
      } else {
        // Usar un tema seleccionado o valores por defecto
        if (this.selectedTopics.length > 0) {
          const temaInfo = this.selectedTopics[Math.floor(Math.random() * this.selectedTopics.length)]
          bloque = temaInfo.bloqueId || "1"
          tema = temaInfo.temaIndex ? temaInfo.temaIndex + 1 : 1
        } else {
          bloque = "1"
          tema = 1
        }
      }

      // Crear pregunta de ejemplo
      sampleQuestions.push({
        id: `${bloque}${tema.toString().padStart(2, "0")}${(i + 1).toString().padStart(2, "0")}0000`,
        pregunta: `Pregunta de ejemplo ${i + 1} del bloque ${bloque}, tema ${tema}`,
        opciones: [
          `Opción A para pregunta ${i + 1}`,
          `Opción B para pregunta ${i + 1}`,
          `Opción C para pregunta ${i + 1}`,
          `Opción D para pregunta ${i + 1}`,
        ],
        correcta: Math.floor(Math.random() * 4),
        explicacion: `Esta es una explicación de ejemplo para la pregunta ${i + 1} del bloque ${bloque}, tema ${tema}.`,
      })
    }

    return sampleQuestions
  }

  // Actualizar resumen del examen
  updateExamSummary() {
    if (!this.examSummary || !this.examSummaryList) return

    // Show summary
    this.examSummary.style.display = "block"

    // Clear list
    this.examSummaryList.innerHTML = ""

    // Calculate minimum to pass (60%)
    const minimumToPass = Math.ceil(this.generatedExam.length * 0.6)

    // Add items to the list
    const items = [
      `<li>Número de preguntas: ${this.generatedExam.length}</li>`,
      `<li>Mínimo para aprobar: ${minimumToPass} respuestas correctas (60%)</li>`,
      `<li>Sistema de puntuación: Cada respuesta incorrecta resta 1/3 del valor de una correcta</li>`,
    ]

    // Add selected blocks or topics
    if (this.selectionMode === "blocks") {
      const blockNames = this.selectedBlocks.map((id) => {
        const bloque = this.estructuraGlobal[id]
        return bloque ? bloque.titulo || `Bloque ${id}` : `Bloque ${id}`
      })
      items.push(`<li>Bloques incluidos: ${blockNames.join(", ")}</li>`)
    } else {
      // Check if there are selected topics
      if (this.selectedTopics && this.selectedTopics.length > 0) {
        const topicNames = this.selectedTopics.map((temaInfo) => {
          // Check if the topic information is valid
          if (!temaInfo || !temaInfo.bloqueId) {
            return `Tema desconocido`
          }

          const bloque = this.estructuraGlobal[temaInfo.bloqueId]
          if (!bloque || !bloque.temas || temaInfo.temaIndex === undefined) {
            return `Tema ${temaInfo.id || "desconocido"}`
          }

          const tema = bloque.temas[temaInfo.temaIndex]
          return tema ? tema.titulo || `Tema ${temaInfo.temaIndex + 1}` : `Tema ${temaInfo.temaIndex + 1}`
        })
        items.push(`<li>Temas incluidos: ${topicNames.join(", ")}</li>`)
      } else {
        items.push(`<li>Temas incluidos: Ninguno</li>`)
      }
    }

    // Update list
    this.examSummaryList.innerHTML = items.join("")
  }

  // Iniciar examen
  startExam() {
    if (!this.examReady || this.generatedExam.length === 0) {
      console.error("No hay examen generado para iniciar")
      return
    }
  
    try {
      // Determinar el bloque para el examen
      let bloqueId, temaId
  
      if (this.selectedTopics.length > 0) {
        const temaInfo = this.selectedTopics[0]
        bloqueId = temaInfo.bloqueId || "1"
        temaId = temaInfo.temaIndex !== undefined ? (temaInfo.temaIndex + 1).toString().padStart(2, "0") : "01"
      } else {
        bloqueId = "1"
        temaId = "01"
      }
  
      // ID para el examen personalizado
      const examId = `custom_${bloqueId}${temaId}_${Date.now()}`
  
      // Mínimo para aprobar (60%)
      const minimoParaAprobar = Math.ceil(this.generatedExam.length * 0.6)
  
      console.log("Iniciando examen personalizado:", {
        bloqueId,
        temaId,
        examId,
        preguntas: this.generatedExam,
        minimoParaAprobar,
      })
  
      // Configurar callback para cuando se complete el examen
      const onExamComplete = (aprobado, respuestasCorrectas, respuestasUsuario) => {
        // Calcular puntuación (sobre 100)
        const totalPreguntas = this.generatedExam.length
        const puntosCorrectas = respuestasCorrectas * (100 / totalPreguntas)
        const puntosIncorrectas = ((totalPreguntas - respuestasCorrectas) * (100 / totalPreguntas)) / 3
        const puntuacionFinal = Math.max(0, Math.round(puntosCorrectas - puntosIncorrectas))
  
        // Guardar resultado del examen
        const examResult = {
          id: examId,
          date: new Date().toISOString(),
          totalQuestions: totalPreguntas,
          correctAnswers: respuestasCorrectas,
          score: puntuacionFinal,
          passed: aprobado,
          topics: this.selectedTopics.map((t) => ({
            blockId: t.bloqueId,
            topicId: t.id,
            topicIndex: t.temaIndex,
          })),
          // Guardar las preguntas originales completas
          originalQuestions: JSON.parse(JSON.stringify(this.generatedExam)),
          // También guardar información completa en el array questions
          questions: this.generatedExam.map((q, index) => ({
            id: q.id,
            pregunta: q.pregunta,
            opciones: q.opciones,
            correcta: q.correcta,
            explicacion: q.explicacion,
            correct: respuestasUsuario[index] === q.correcta,
          })),
        }
  
        // Guardar en el historial
        saveExamResult(examResult)
  
        // Actualizar registro de preguntas respondidas
        this.updateAnsweredQuestions(examResult)
  
        // Actualizar estadísticas
        updateStats()
  
        // Actualizar interfaz
        this.loadBlocks()
      }
  
      // Asegurarnos de que el visualizador de exámenes esté en un estado limpio
      // Crear una nueva instancia si es necesario
      if (!this.examDisplay) {
        this.examDisplay = new CustomExamDisplay()
      }
  
      // Usar nuestro propio visualizador de exámenes
      this.examDisplay.iniciarExamen(this.generatedExam, minimoParaAprobar, examId, onExamComplete)
    } catch (error) {
      console.error("Error al iniciar el examen:", error)
      this.showError("Error al iniciar el examen. Por favor, inténtalo de nuevo.")
    }
  }

  // Actualizar registro de preguntas respondidas
  updateAnsweredQuestions(examResult) {
    // Recorrer todas las preguntas del examen
    for (const question of examResult.questions) {
      // Extraer información del ID de la pregunta
      const questionId = question.id
      const blockId = questionId.substring(0, 1)
      const topicId = questionId.substring(0, 3)

      // Crear clave para el registro
      const key = `${blockId}_${topicId}`

      // Inicializar si no existe
      if (!this.answeredQuestions[key]) {
        this.answeredQuestions[key] = {}
      }

      // Actualizar registro
      this.answeredQuestions[key][questionId] = {
        timestamp: Date.now(),
        correct: question.correct,
        examId: examResult.id,
      }
    }

    // Guardar cambios
    this.saveAnsweredQuestions()
  }

  // Reiniciar examen
  resetExam() {
    // Reiniciar estado
    this.examReady = false
    this.generatedExam = []

    // Ocultar resumen
    if (this.examSummary) {
      this.examSummary.style.display = "none"
    }
  }

  // Mostrar/ocultar indicador de carga
  showLoading(show) {
    if (!this.loadingSpinner) return

    this.loadingSpinner.style.display = show ? "flex" : "none"

    // Deshabilitar/habilitar controles
    const controls = [
      this.generateExamBtn,
      this.startExamBtn,
      this.resetExamBtn,
      ...document.querySelectorAll(".block-select-btn, .topic-select-btn"),
    ]

    controls.forEach((control) => {
      if (control) {
        control.disabled = show
      }
    })
  }

  // Mostrar mensaje de error
  showError(message) {
    if (!this.errorContainer) return

    this.errorContainer.textContent = message
    this.errorContainer.style.display = "block"

    // Ocultar después de 5 segundos
    setTimeout(() => {
      this.errorContainer.style.display = "none"
    }, 5000)
  }
}

// Inicializar el generador de exámenes cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  const examGenerator = new CustomExamGenerator()
});
// Modify the initialization to make the generator globally accessible
document.addEventListener("DOMContentLoaded", () => {
  // Create the generator and make it globally accessible
  window.customExamGenerator = new CustomExamGenerator();
})