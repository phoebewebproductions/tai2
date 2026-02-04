/**
 * Módulo de sincronización - Modo Local
 * En modo local, todos los datos se guardan únicamente en localStorage
 * No hay conexión con AWS ni servicios externos
 */

import { getCurrentUserId } from "./user-utils.js"
import { collectUserProgressData } from "./data-collection.js"
import { updateLastSyncTimestamp } from "./data-persistence.js"

// Función para "sincronizar" datos (en modo local solo guarda en localStorage)
export async function syncUserProgress() {
  const userId = getCurrentUserId()
  if (!userId) {
    console.warn("No hay usuario, creando usuario local...")
    return false
  }

  try {
    console.log("Guardando progreso localmente...")

    // Recopilar todos los datos de progreso del usuario
    const userProgress = collectUserProgressData(userId)
    
    // Guardar en localStorage con marca de tiempo
    const progressKey = `local_progress_${userId}`
    const progressData = {
      userId: userId,
      timestamp: new Date().toISOString(),
      progressData: userProgress
    }
    
    localStorage.setItem(progressKey, JSON.stringify(progressData))

    // Actualizar la marca de tiempo de última sincronización
    updateLastSyncTimestamp(userId)
    
    console.log("Progreso guardado localmente")
    return true
  } catch (error) {
    console.error("Error al guardar progreso:", error)
    return false
  }
}

// Función para sincronizar datos pendientes (en modo local no hace nada)
export async function syncPendingData() {
  console.log("Modo local - No hay datos pendientes de sincronización")
  return true
}

// Función para obtener datos de progreso (en modo local lee de localStorage)
export async function fetchUserProgressFromCloud() {
  const userId = getCurrentUserId()
  if (!userId) {
    console.warn("No hay usuario")
    return null
  }

  try {
    console.log("Cargando progreso desde almacenamiento local...")
    
    const progressKey = `local_progress_${userId}`
    const storedData = localStorage.getItem(progressKey)
    
    if (storedData) {
      const progressData = JSON.parse(storedData)
      console.log("Progreso cargado:", progressData)
      return progressData
    }
    
    console.log("No se encontraron datos de progreso guardados")
    return null
  } catch (error) {
    console.error("Error al cargar progreso:", error)
    return null
  }
}

// Inicialización - no hace nada en modo local
document.addEventListener("DOMContentLoaded", () => {
  console.log("Modo local activo - Los datos se guardan únicamente en este dispositivo")
})
