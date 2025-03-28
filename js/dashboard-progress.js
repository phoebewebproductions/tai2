/**
 * Módulo para gestionar el progreso en el dashboard principal
 * Integra datos de progreso de lectura y estadísticas de exámenes
 */

import { getExamHistory } from "./exam-history.js"
import { getCurrentUserId } from "./user-utils.js"
import { createWelcomeCardWithProgress } from "./progressButton.js"
import { getCompletedTopicsCount } from "./structureLoader.js"

// Función principal para inicializar el módulo de progreso del dashboard
export async function initializeDashboardProgress() {
  console.log("🚀 Inicializando módulo de progreso del dashboard")

  try {
    // Actualizar la información de progreso en el dashboard
    await updateDashboardProgress()

    // Configurar actualización automática cada 5 minutos
    setInterval(updateDashboardProgress, 5 * 60 * 1000)

    console.log("✅ Módulo de progreso del dashboard inicializado correctamente")
  } catch (error) {
    console.error("❌ Error al inicializar el módulo de progreso:", error)
  }
}

// Función para actualizar toda la información de progreso en el dashboard
async function updateDashboardProgress() {
  console.log("📊 Actualizando información de progreso...")

  try {
    // Actualizar progreso general
    const progressValues = await updateGeneralProgress()

    // Actualizar nota media
    const averageScore = await updateAverageScore()

    // Obtener temas completados usando la nueva función de structureLoader
    // No pasar ninguna ruta personalizada, dejar que la función determine la ruta correcta
    const completedTopics = await getCompletedTopicsCount()

    // Actualizar la tarjeta de bienvenida con los valores calculados
    updateWelcomeCard(calculateGeneralProgress(progressValues), averageScore, completedTopics)

    // Ocultar el elemento de última conexión
    hideLastConnectionElement()

    console.log("✅ Información de progreso actualizada correctamente")
  } catch (error) {
    console.error("❌ Error al actualizar la información de progreso:", error)
  }
}

// Función para actualizar la tarjeta de bienvenida con los valores calculados
function updateWelcomeCard(generalProgress, averageScore, completedTopics) {
  try {
    // Obtener la tarjeta de bienvenida
    const welcomeCard = document.querySelector(".welcome-card")
    if (!welcomeCard) {
      // Silenciosamente retornar si no se encuentra la tarjeta
      return
    }

    // Crear la nueva tarjeta con progreso circular
    createWelcomeCardWithProgress()
      .then((newWelcomeCard) => {
        // Reemplazar la tarjeta original con la nueva
        welcomeCard.parentNode.replaceChild(newWelcomeCard, welcomeCard)
      })
      .catch((error) => {
        // Silenciosamente manejar el error

        // Si falla, actualizar la tarjeta existente con los valores básicos
        const progressBar = welcomeCard.querySelector(".progress-fill")
        if (progressBar) {
          progressBar.style.width = `${generalProgress}%`
        }

        const progressValue = welcomeCard.querySelector(".progress-value")
        if (progressValue) {
          progressValue.textContent = `${generalProgress}%`
        }

        const scoreValue = welcomeCard.querySelector(".stat-value")
        if (scoreValue) {
          scoreValue.textContent = averageScore
        }

        const topicsValue = welcomeCard.querySelectorAll(".stat-value")[1]
        if (topicsValue) {
          topicsValue.textContent = completedTopics
        }
      })
  } catch (error) {
    // Silenciosamente manejar el error
  }
}

// Función para calcular el progreso general a partir de los valores de progreso por bloque
function calculateGeneralProgress(progressValues) {
  // Calcular el promedio de progreso
  const validProgressValues = progressValues.filter((value) => !isNaN(value))
  const averageProgress =
    validProgressValues.length > 0
      ? validProgressValues.reduce((sum, value) => sum + value, 0) / validProgressValues.length
      : 0

  return Math.round(averageProgress)
}

// Modificar la función updateGeneralProgress para usar la misma lógica que progressButton.js
async function updateGeneralProgress() {
  try {
    console.log("📈 Calculando progreso general...")

    // Importar la función getBlockProgressValues desde progressButton.js
    const { getBlockProgressValues } = await import("./progressButton.js")

    // Usar la misma función que usa progressButton.js para obtener los valores de progreso
    const progressValues = await getBlockProgressValues()

    console.log("Valores de progreso por bloque (dashboard-progress.js):", progressValues)
    console.log(`✅ Progreso general calculado`)

    return progressValues
  } catch (error) {
    console.error("❌ Error al calcular el progreso general:", error)

    // Si falla la importación, intentar obtener los valores directamente
    return [
      getBlockProgressFromLocalStorage(1),
      getBlockProgressFromLocalStorage(2),
      getBlockProgressFromLocalStorage(3),
      getBlockProgressFromLocalStorage(4),
    ]
  }
}

// Modificar la función updateAverageScore para usar la misma lógica que progressButton.js
async function updateAverageScore() {
  try {
    console.log("🎓 Calculando nota media...")

    // Importar la función getAverageScore desde progressButton.js
    const { getAverageScore } = await import("./progressButton.js")

    // Usar la misma función que usa progressButton.js para obtener la nota media
    const averageScore = await getAverageScore()

    console.log(`✅ Nota media calculada: ${averageScore}`)
    return averageScore
  } catch (error) {
    console.error("❌ Error al calcular la nota media:", error)

    // Obtener historial de exámenes
    const examHistory = getExamHistory()
    console.log("Historial de exámenes:", examHistory)

    // Calcular nota media
    let averageScore = 0

    if (examHistory && examHistory.length > 0) {
      const totalScore = examHistory.reduce((sum, exam) => sum + exam.score, 0)
      averageScore = totalScore / examHistory.length
    } else {
      // Valor por defecto si no hay exámenes
      averageScore = 7.5
    }

    return averageScore.toFixed(1)
  }
}

// Función para ocultar el elemento de última conexión
function hideLastConnectionElement() {
  try {
    // Buscar el elemento por su ID o clase específica
    const lastConnectionElement = document.querySelector("#last-access") || document.querySelector(".last-access")

    if (lastConnectionElement) {
      lastConnectionElement.style.display = "none"
      console.log("Elemento de última conexión (last-access) ocultado")
    } else {
      // Intentar buscar por el contenido del título
      const statItems = document.querySelectorAll(".stat-item")
      for (const item of statItems) {
        const titleElement = item.querySelector(".stat-title")
        if (
          titleElement &&
          (titleElement.textContent.includes("Última conexión") ||
            titleElement.textContent.includes("Last access") ||
            titleElement.textContent.includes("Último acceso"))
        ) {
          item.style.display = "none"
          console.log("Elemento de última conexión encontrado por texto y ocultado")
          break
        }
      }
    }
  } catch (error) {
    console.error("Error al ocultar el elemento de última conexión:", error)
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

    // Si el valor es un número simple (índice del último subpunto completado)
    if (typeof progressData === "number") {
      // Importar funciones de structureLoader para calcular el progreso
      const { countSubpuntosInBloque, calculateBlockProgress } = window.structureLoader || {}

      if (countSubpuntosInBloque && calculateBlockProgress) {
        // Calcular el progreso basado en la estructura real
        return calculateBlockProgress(blockId)
      } else {
        // Si no están disponibles las funciones, usar el valor como porcentaje directo
        return progressData
      }
    }

    // Si el valor es un objeto con porcentaje
    if (progressData.percentage !== undefined) {
      return progressData.percentage
    }

    // Si el valor es un objeto con completados y total
    if (progressData.completed !== undefined && progressData.total !== undefined) {
      return (progressData.completed / progressData.total) * 100
    }

    // Si el valor es un objeto con progreso
    if (progressData.progress !== undefined) {
      return progressData.progress
    }

    // Si el valor es un objeto con temas
    if (progressData.topics && Array.isArray(progressData.topics)) {
      const totalTopics = progressData.topics.length
      const completedTopics = progressData.topics.filter((topic) => topic.completed).length
      return totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0
    }

    // Si no se pudo determinar el progreso
    console.warn(`No se pudo determinar el progreso para el bloque ${blockId}`)
    return 0
  } catch (error) {
    console.error(`Error al obtener progreso del bloque ${blockId}:`, error)
    return 0
  }
}

