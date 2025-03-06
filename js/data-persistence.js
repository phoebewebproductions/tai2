// Archivo para manejar la persistencia de datos

/**
 * Actualiza la marca de tiempo de última sincronización
 * @param {string} userId - ID del usuario
 */
export function updateLastSyncTimestamp(userId) {
    try {
      const userAuth = localStorage.getItem("userAuth")
      if (!userAuth) return
  
      const userData = JSON.parse(userAuth)
      userData.lastSync = new Date().toISOString()
  
      localStorage.setItem("userAuth", JSON.stringify(userData))
      console.log(`Marca de tiempo de sincronización actualizada para el usuario ${userId}`)
    } catch (error) {
      console.error("Error al actualizar marca de tiempo de sincronización:", error)
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
  
  