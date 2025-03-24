/**
 * Recopila todos los datos de progreso del usuario
 * @param {string} userId - ID del usuario
 * @returns {Object} Objeto con todos los datos de progreso
 */
export function collectUserProgressData(userId) {
  try {
    console.log(`Recopilando datos de progreso para el usuario: ${userId}`)

    // Objeto para almacenar todos los datos
    const progressData = {
      courseProgress: {},
      examResults: {},
      preferences: {},
      examHistory: null, // Añadir campo para el historial de exámenes
    }

    // Recopilar progreso del curso (bloques 1-4)
    for (let i = 1; i <= 4; i++) {
      const key = `user_${userId}_courseProgress_block${i}`
      const blockProgress = localStorage.getItem(key)

      if (blockProgress) {
        progressData.courseProgress[`block${i}`] = JSON.parse(blockProgress)
      }
    }

    // Recopilar resultados de exámenes
    const examKeys = Object.keys(localStorage).filter((key) => key.startsWith(`user_${userId}_exam_`))

    examKeys.forEach((key) => {
      const examId = key.replace(`user_${userId}_exam_`, "")
      const examData = localStorage.getItem(key)

      if (examData) {
        progressData.examResults[examId] = JSON.parse(examData)
      }
    })

    // Recopilar historial de exámenes (añadido)
    const examHistory = localStorage.getItem("examHistory")
    if (examHistory) {
      progressData.examHistory = JSON.parse(examHistory)
      console.log(`Recopilado historial de exámenes con ${progressData.examHistory.length} entradas`)
    }

    // Recopilar preferencias (como modo oscuro)
    const darkModeKey = `user_${userId}_darkMode`
    const darkMode = localStorage.getItem(darkModeKey)

    if (darkMode !== null) {
      progressData.preferences.darkMode = darkMode === "true"
    }

    // Recopilar otras preferencias personalizadas
    const customSettingsKeys = Object.keys(localStorage).filter(
      (key) =>
        key.startsWith(`user_${userId}_`) &&
        !key.includes("courseProgress_") &&
        !key.includes("exam_") &&
        key !== darkModeKey,
    )

    customSettingsKeys.forEach((key) => {
      const settingName = key.replace(`user_${userId}_`, "")
      const settingValue = localStorage.getItem(key)

      if (settingValue) {
        try {
          progressData.preferences[settingName] = JSON.parse(settingValue)
        } catch (e) {
          progressData.preferences[settingName] = settingValue
        }
      }
    })

    console.log("Datos recopilados:", progressData)
    return progressData
  } catch (error) {
    console.error("Error al recopilar datos de progreso:", error)
    return {}
  }
}

