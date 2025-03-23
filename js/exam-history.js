/**
 * Módulo para gestionar el historial de exámenes
 */

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
  
      return true
    } catch (error) {
      console.error("Error al guardar resultado del examen:", error)
      return false
    }
  }
  
// Función para obtener el historial de exámenes
export function getExamHistory() {
  try {
      // Intentar obtener el historial de exámenes del almacenamiento local
      const storedHistory = localStorage.getItem('examHistory');
      
      if (storedHistory) {
          return JSON.parse(storedHistory);
      }
      
      // Si no hay historial almacenado, devolver un array vacío
      return [];
  } catch (error) {
      console.error('Error al obtener el historial de exámenes:', error);
      return [];
  }
}

// Función para guardar un nuevo examen en el historial
export function saveExamToHistory(examData) {
  try {
      // Obtener el historial actual
      const currentHistory = getExamHistory();
      
      // Añadir el nuevo examen al historial
      currentHistory.push({
          ...examData,
          date: new Date().toISOString()
      });
      
      // Guardar el historial actualizado
      localStorage.setItem('examHistory', JSON.stringify(currentHistory));
      
      console.log('Examen guardado en el historial:', examData);
      return true;
  } catch (error) {
      console.error('Error al guardar el examen en el historial:', error);
      return false;
  }
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
  
      return true
    } catch (error) {
      console.error("Error al eliminar examen del historial:", error)
      return false
    }
  }
  // Función para calcular estadísticas de exámenes
export function calculateExamStats() {
  try {
      const history = getExamHistory();
      
      if (!history || history.length === 0) {
          return {
              totalExams: 0,
              avgScore: 0,
              passRate: 0,
              bestScore: 0,
              worstScore: 0
          };
      }
      
      // Calcular estadísticas
      const totalExams = history.length;
      const totalScore = history.reduce((sum, exam) => sum + exam.score, 0);
      const avgScore = totalScore / totalExams;
      
      const passedExams = history.filter(exam => exam.passed).length;
      const passRate = (passedExams / totalExams) * 100;
      
      const scores = history.map(exam => exam.score);
      const bestScore = Math.max(...scores);
      const worstScore = Math.min(...scores);
      
      return {
          totalExams,
          avgScore,
          passRate,
          bestScore,
          worstScore
      };
  } catch (error) {
      console.error('Error al calcular estadísticas de exámenes:', error);
      return {
          totalExams: 0,
          avgScore: 0,
          passRate: 0,
          bestScore: 0,
          worstScore: 0
      };
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
// Botón para repetir examen
repeatButton.addEventListener("click", () => {
  // Load the exam from history
  const examData = loadExamFromHistory(exam.id);
  
  // Check if we have the CustomExamGenerator instance
  const examGenerator = window.customExamGenerator;
  
  if (examData && examGenerator) {
    // Verificar si tenemos las preguntas originales o las preguntas con toda la información
    if (examData.originalQuestions && examData.originalQuestions.length > 0) {
      // Usar las preguntas originales
      examGenerator.generatedExam = examData.originalQuestions;
    } else if (examData.questions && examData.questions.length > 0 && 
               examData.questions[0].pregunta && examData.questions[0].opciones) {
      // Si no hay originalQuestions pero las questions tienen toda la información
      examGenerator.generatedExam = examData.questions;
    } else {
      // Fallback - intentar cargar preguntas nuevas basadas en los temas del examen
      console.warn("No se encontraron preguntas completas. Intentando generar nuevas preguntas.");
      
      // Configurar los temas del examen original
      if (examData.topics && examData.topics.length > 0) {
        examGenerator.selectedTopics = examData.topics.map(t => ({
          id: t.topicId || `${t.blockId}${(t.topicIndex + 1).toString().padStart(2, "0")}`,
          bloqueId: t.blockId,
          temaIndex: t.topicIndex
        }));
        
        // Generar nuevas preguntas (esto se hará en startExam)
        examGenerator.questionCount = examData.totalQuestions;
        examGenerator.examReady = true;
        
        // Actualizar la interfaz si es necesario
        if (examGenerator.updateExamSummary) {
          examGenerator.updateExamSummary();
        }
      } else {
        alert("No se pudieron recuperar los temas del examen original.");
        return;
      }
    }
    
    // Asegurarse de que el examen esté listo para iniciar
    examGenerator.examReady = true;
    
    // Iniciar el examen
    examGenerator.startExam();
  } else {
    // Fallback if we can't find the exam generator
    console.error("No se pudo cargar el examen o no se encontró el generador de exámenes");
    alert("No se pudo cargar el examen. Por favor, intenta generar un nuevo examen.");
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
  
  // Inicializar interfaz cuando el DOM esté cargado
  document.addEventListener("DOMContentLoaded", () => {
    updateExamHistoryUI()
  })
  
  