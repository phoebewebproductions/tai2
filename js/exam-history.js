/**
 * Módulo para gestionar el historial de exámenes
 */

// Importar función de sincronización
let syncUserProgress

try {
  // Importar dinámicamente para evitar problemas de carga
  import("./aws-sync.js").then((module) => {
    syncUserProgress = module.syncUserProgress
    console.log("Módulo de sincronización cargado correctamente")
  })
} catch (error) {
  console.warn("No se pudo cargar el módulo de sincronización:", error)
  // Función de respaldo si no se puede cargar el módulo
  syncUserProgress = async () => {
    console.log("Sincronización no disponible")
    return false
  }
}

// Función para guardar el resultado de un examen
export function saveExamResult(examResult) {
  try {
    // Obtener historial existente
    const history = getExamHistory()

    // Añadir nuevo resultado
    history.unshift(examResult)

    // Limitar a 50 exámenes
    if (history.length > 50) {
      history.length = 50
    }

    // Guardar historial actualizado
    localStorage.setItem("examHistory", JSON.stringify(history))

    // Actualizar interfaz
    updateExamHistoryUI()

    // Sincronizar con AWS después de guardar
    syncWithAWS()

    return true
  } catch (error) {
    console.error("Error al guardar resultado del examen:", error)
    return false
  }
}

// Función para sincronizar con AWS
async function syncWithAWS() {
  try {
    if (typeof syncUserProgress === "function") {
      console.log("Iniciando sincronización con AWS después de guardar examen...")
      const success = await syncUserProgress()
      console.log("Sincronización completada:", success ? "exitosa" : "fallida")

      // Mostrar notificación de sincronización
      showSyncNotification(success)
    } else {
      console.warn("Función de sincronización no disponible")
    }
  } catch (error) {
    console.error("Error durante la sincronización:", error)
    showSyncNotification(false)
  }
}

// Función para mostrar notificación de sincronización
function showSyncNotification(success) {
  // Crear elemento de notificación
  const notification = document.createElement("div")
  notification.className = `sync-notification ${success ? "success" : "error"}`
  notification.innerHTML = `
    <i class="fa-solid ${success ? "fa-check" : "fa-exclamation-triangle"}"></i>
    <span>${success ? "Datos sincronizados correctamente" : "Error al sincronizar datos"}</span>
  `

  // Añadir estilos si no existen
  if (!document.getElementById("sync-notification-styles")) {
    const style = document.createElement("style")
    style.id = "sync-notification-styles"
    style.textContent = `
      .sync-notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 15px;
        border-radius: 4px;
        background-color: #333;
        color: white;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        transform: translateY(100px);
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
        z-index: 9999;
      }
      
      .sync-notification.show {
        transform: translateY(0);
        opacity: 1;
      }
      
      .sync-notification.success {
        background-color: #4CAF50;
      }
      
      .sync-notification.error {
        background-color: #F44336;
      }
    `
    document.head.appendChild(style)
  }

  // Añadir al DOM
  document.body.appendChild(notification)

  // Mostrar y ocultar después de 3 segundos
  setTimeout(() => {
    notification.classList.add("show")
    setTimeout(() => {
      notification.classList.remove("show")
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 3000)
  }, 100)
}

// Función para obtener el historial de exámenes
export function getExamHistory() {
  try {
    // Intentar obtener el historial de exámenes del almacenamiento local
    const storedHistory = localStorage.getItem("examHistory")

    if (storedHistory) {
      return JSON.parse(storedHistory)
    }

    // Si no hay historial almacenado, devolver un array vacío
    return []
  } catch (error) {
    console.error("Error al obtener el historial de exámenes:", error)
    return []
  }
}

// Función para guardar un nuevo examen en el historial
export function saveExamToHistory(examData) {
  try {
    // Obtener el historial actual
    const currentHistory = getExamHistory()

    // Añadir el nuevo examen al historial
    currentHistory.push({
      ...examData,
      date: new Date().toISOString(),
    })

    // Guardar el historial actualizado
    localStorage.setItem("examHistory", JSON.stringify(currentHistory))

    console.log("Examen guardado en el historial:", examData)

    // Sincronizar con AWS después de guardar
    syncWithAWS()

    return true
  } catch (error) {
    console.error("Error al guardar el examen en el historial:", error)
    return false
  }
}

// Función para actualizar la interfaz del historial de exámenes
export function updateExamHistoryUI() {
  const historyContainer = document.getElementById("exams-history-list")
  if (!historyContainer) return

  // Obtener historial
  const history = getExamHistory()

  // Limpiar contenedor
  historyContainer.innerHTML = ""

  // Si no hay exámenes, mostrar mensaje
  if (history.length === 0) {
    historyContainer.innerHTML = '<div class="no-exams-message">No hay exámenes realizados todavía.</div>'
    return
  }

  // Crear elementos para cada examen
  history.forEach((exam) => {
    // Crear elemento de examen
    const examElement = document.createElement("div")
    examElement.className = "exam-history-item"

    // Información del examen
    const infoContainer = document.createElement("div")
    infoContainer.className = "exam-history-info"

    // Título del examen
    const title = document.createElement("div")
    title.className = "exam-history-title"

    // Determinar título basado en los temas
    let examTitle = "Examen personalizado"
    if (exam.topics && exam.topics.length > 0) {
      // Limitar a 2 temas para el título
      const topicNames = exam.topics.slice(0, 2).map((t) => `Bloque ${t.blockId}, Tema ${t.topicIndex + 1}`)
      examTitle = topicNames.join(", ")

      // Si hay más temas, añadir "y X más"
      if (exam.topics.length > 2) {
        examTitle += ` y ${exam.topics.length - 2} más`
      }
    }

    title.textContent = examTitle

    // Fecha del examen
    const date = document.createElement("div")
    date.className = "exam-history-date"

    // Formatear fecha
    const examDate = new Date(exam.date)
    const formattedDate = examDate.toLocaleDateString() + " " + examDate.toLocaleTimeString()
    date.textContent = formattedDate

    // Añadir elementos al contenedor de información
    infoContainer.appendChild(title)
    infoContainer.appendChild(date)

    // Puntuación del examen
    const score = document.createElement("div")
    score.className = `exam-history-score ${exam.passed ? "score-pass" : "score-fail"}`
    score.textContent = `${exam.score}/100`

    // Acciones del examen
    const actionsContainer = document.createElement("div")
    actionsContainer.className = "exam-history-actions"

    // Botón para repetir examen
    const repeatButton = document.createElement("button")
    repeatButton.className = "exam-history-btn"
    repeatButton.innerHTML = '<i class="fas fa-redo"></i>'
    repeatButton.title = "Repetir examen"
    repeatButton.addEventListener("click", () => {
      // Implementación existente para repetir examen
      if (typeof window.customExamGenerator !== "undefined" && window.customExamGenerator) {
        const examData = loadExamFromHistory(exam.id)
        if (examData) {
          window.customExamGenerator.startExam(examData)
        }
      } else {
        console.warn("No se encontró el generador de exámenes")
      }
    })

    // Botón para eliminar examen
    const deleteButton = document.createElement("button")
    deleteButton.className = "exam-history-btn"
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.title = "Eliminar del historial"
    deleteButton.addEventListener("click", () => {
      if (confirm("¿Estás seguro de que quieres eliminar este examen del historial?")) {
        deleteExamFromHistory(exam.id)
      }
    })

    // Añadir botones al contenedor de acciones
    actionsContainer.appendChild(repeatButton)
    actionsContainer.appendChild(deleteButton)

    // Añadir elementos al examen
    examElement.appendChild(infoContainer)
    examElement.appendChild(score)
    examElement.appendChild(actionsContainer)

    // Añadir examen al contenedor
    historyContainer.appendChild(examElement)
  })
}

// Función para cargar un examen del historial
export function loadExamFromHistory(examId) {
  try {
    const history = getExamHistory()
    return history.find((exam) => exam.id === examId) || null
  } catch (error) {
    console.error("Error al cargar examen del historial:", error)
    return null
  }
}

// Función para eliminar un examen del historial
export function deleteExamFromHistory(examId) {
  try {
    // Obtener historial existente
    const history = getExamHistory()

    // Filtrar examen a eliminar
    const updatedHistory = history.filter((exam) => exam.id !== examId)

    // Guardar historial actualizado
    localStorage.setItem("examHistory", JSON.stringify(updatedHistory))

    // Actualizar interfaz
    updateExamHistoryUI()

    // Sincronizar con AWS después de eliminar
    syncWithAWS()

    return true
  } catch (error) {
    console.error("Error al eliminar examen del historial:", error)
    return false
  }
}

// Inicializar interfaz cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  updateExamHistoryUI()
})

