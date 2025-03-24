/**
 * Actualiza la marca de tiempo de última sincronización
 * @param {string} userId - ID del usuario
 */
export function updateLastSyncTimestamp(userId) {
  try {
    // Obtener datos de autenticación
    const userAuth = localStorage.getItem("userAuth")
    if (!userAuth) {
      console.warn("No hay datos de autenticación para actualizar timestamp")
      return false
    }

    // Actualizar marca de tiempo
    const userData = JSON.parse(userAuth)
    userData.lastSync = new Date().toISOString()
    localStorage.setItem("userAuth", JSON.stringify(userData))

    console.log("Marca de tiempo de última sincronización actualizada:", userData.lastSync)
    return true
  } catch (error) {
    console.error("Error al actualizar marca de tiempo de sincronización:", error)
    return false
  }
}

/**
 * Aplica los datos de la nube al almacenamiento local
 * @param {Object} cloudData - Datos obtenidos de la nube
 */
export function applyCloudDataToLocalStorage(cloudData) {
  try {
    if (!cloudData || !cloudData.userId || !cloudData.progressData) {
      console.warn("Datos de la nube incompletos o inválidos")
      return false
    }

    const userId = cloudData.userId
    const progressData = cloudData.progressData

    console.log(`Aplicando datos de la nube para el usuario ${userId}`)

    // Aplicar progreso del curso
    if (progressData.courseProgress) {
      Object.entries(progressData.courseProgress).forEach(([blockKey, blockValue]) => {
        const blockId = blockKey.replace("block", "")
        const key = `user_${userId}_courseProgress_block${blockId}`

        localStorage.setItem(key, JSON.stringify(blockValue))
        console.log(`Progreso del bloque ${blockId} actualizado`)
      })
    }

    // Aplicar resultados de exámenes
    if (progressData.examResults) {
      Object.entries(progressData.examResults).forEach(([examId, examData]) => {
        const key = `user_${userId}_exam_${examId}`

        localStorage.setItem(key, JSON.stringify(examData))
        console.log(`Resultado del examen ${examId} actualizado`)
      })
    }

    // Aplicar historial de exámenes (añadido)
    if (progressData.examHistory && Array.isArray(progressData.examHistory)) {
      // Obtener historial local
      let localHistory = []
      try {
        const localHistoryStr = localStorage.getItem("examHistory")
        if (localHistoryStr) {
          localHistory = JSON.parse(localHistoryStr)
        }
      } catch (e) {
        console.error("Error al leer historial local:", e)
      }

      // Combinar historiales (cloud tiene prioridad para entradas con el mismo ID)
      const combinedHistory = [...localHistory]
      const localIds = new Set(localHistory.map((exam) => exam.id))

      // Añadir entradas de la nube que no existen localmente
      progressData.examHistory.forEach((cloudExam) => {
        if (!localIds.has(cloudExam.id)) {
          combinedHistory.push(cloudExam)
        }
      })

      // Ordenar por fecha (más reciente primero)
      combinedHistory.sort((a, b) => new Date(b.date) - new Date(a.date))

      // Limitar a 50 entradas
      if (combinedHistory.length > 50) {
        combinedHistory.length = 50
      }

      // Guardar historial combinado
      localStorage.setItem("examHistory", JSON.stringify(combinedHistory))
      console.log(`Historial de exámenes actualizado con ${combinedHistory.length} entradas`)
    }

    // Aplicar preferencias
    if (progressData.preferences) {
      Object.entries(progressData.preferences).forEach(([prefName, prefValue]) => {
        const key = `user_${userId}_${prefName}`

        localStorage.setItem(key, typeof prefValue === "object" ? JSON.stringify(prefValue) : String(prefValue))
        console.log(`Preferencia ${prefName} actualizada`)
      })
    }

    console.log("Datos de la nube aplicados correctamente")
    return true
  } catch (error) {
    console.error("Error al aplicar datos de la nube:", error)
    return false
  }
}

