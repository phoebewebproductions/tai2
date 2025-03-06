// Función para obtener el ID del usuario actual
function getCurrentUserId() {
    const userAuth = localStorage.getItem("userAuth")
    if (!userAuth) return null
  
    try {
      const userData = JSON.parse(userAuth)
      return userData.id // El ID único de Google
    } catch (error) {
      console.error("Error al obtener el ID del usuario:", error)
      return null
    }
  }
  
  // Función para generar claves de progreso específicas para cada usuario
  function getUserProgressKey(bloqueId) {
    const userId = getCurrentUserId()
    if (!userId) {
      console.warn("No hay usuario autenticado, usando clave de progreso genérica")
      return `courseProgress_block${bloqueId}`
    }
  
    // Crear una clave única que incluya el ID del usuario
    return `user_${userId}_courseProgress_block${bloqueId}`
  }
  
  export function saveProgress(bloqueId, lastCompletedIndex) {
    try {
      const key = getUserProgressKey(bloqueId)
      localStorage.setItem(key, JSON.stringify(lastCompletedIndex))
      console.log(`Progreso guardado para el bloque ${bloqueId}: ${lastCompletedIndex}`)
    } catch (error) {
      console.error("Error al guardar el progreso:", error)
    }
  }
  
  export function loadProgress(bloqueId) {
    try {
      const key = getUserProgressKey(bloqueId)
      const savedProgress = localStorage.getItem(key)
  
      if (savedProgress !== null) {
        const progress = JSON.parse(savedProgress)
        return progress
      } else {
        console.log(`No se encontró progreso guardado para el bloque ${bloqueId}`)
        return -1
      }
    } catch (error) {
      console.error("Error al cargar el progreso:", error)
      return -1
    }
  }
  
  // El resto del código permanece igual
  export function updateProgress(bloqueId, newCompletedIndex) {
    if (bloqueId < 1 || bloqueId > 4) {
      console.error("ID de bloque inválido. Debe ser entre 1 y 4.")
      return
    }
    saveProgress(bloqueId, newCompletedIndex)
    console.log(`Progreso actualizado para el bloque ${bloqueId}: índice ${newCompletedIndex} completado`)
  }
  
  export function getLastCompletedIndex(bloqueId) {
    return loadProgress(bloqueId)
  }
  
  export function isPointUnlocked(bloqueId, puntoIndex) {
    const lastCompletedIndex = getLastCompletedIndex(bloqueId)
    return puntoIndex <= lastCompletedIndex + 1
  }
  
  export function getBloqueId(puntoId) {
    if (!puntoId) return null
    const primerDigito = Number.parseInt(puntoId.toString()[0])
    return primerDigito >= 1 && primerDigito <= 4 ? primerDigito : null
  }
  
  export function isPointCompleted(bloqueId, puntoIndex) {
    const lastCompletedIndex = getLastCompletedIndex(bloqueId)
    return puntoIndex <= lastCompletedIndex
  }
  
  export async function countSubpuntosInBloque(bloqueId) {
    if (!estructuraGlobal[bloqueId]) {
      console.error(`Estructura no cargada para el bloque ${bloqueId}`)
      return 0
    }
    const totalSubpuntos = estructuraGlobal[bloqueId].puntosLineales.length
    console.log(`Total subpuntos in block ${bloqueId}: ${totalSubpuntos}`)
    return totalSubpuntos
  }
  
  export async function calculateBlockProgress(bloqueId) {
    if (bloqueId < 1 || bloqueId > 4) {
      console.error("ID de bloque inválido. Debe ser entre 1 y 4.")
      return 0
    }
  
    const totalSubpuntos = await countSubpuntosInBloque(bloqueId)
    const lastCompletedIndex = getLastCompletedIndex(bloqueId)
    const completedSubpuntos = lastCompletedIndex + 1
    const progressPercentage = (completedSubpuntos / totalSubpuntos) * 100
  
    console.log(
      `Progreso del Bloque ${bloqueId}: ${completedSubpuntos}/${totalSubpuntos} = ${progressPercentage.toFixed(2)}%`,
    )
  
    return Math.min(progressPercentage, 100)
  }
  
  export function countUnlockedPoints(bloqueId) {
    const lastCompletedIndex = getLastCompletedIndex(bloqueId)
    return lastCompletedIndex + 2
  }
  
  export const estructuraGlobal = {}
  
  export async function cargarEstructuraBloque(bloqueId) {
    try {
      console.log(`Iniciando carga de estructura para el bloque ${bloqueId}`)
      const response = await fetch(`./../../bloques/bloque${bloqueId}/estructura.json`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const estructura = await response.json()
      console.log(`Estructura cargada para el bloque ${bloqueId}:`, estructura)
  
      if (!estructura || !estructura.temas || estructura.temas.length === 0) {
        console.error(`La estructura cargada está vacía o no tiene temas para el bloque ${bloqueId}`)
        return null
      }
  
      // Add an id property to the estructura object
      estructura.id = bloqueId
  
      // Create a linear array of all points
      estructura.puntosLineales = estructura.temas.flatMap((tema, temaIndex) =>
        tema.puntos.map((punto, puntoIndex) => ({
          ...punto,
          temaIndex,
          puntoIndex,
          completado: false,
        })),
      )
  
      estructuraGlobal[bloqueId] = estructura // Agregar la estructura al objeto global
      return estructura
    } catch (error) {
      console.error(`Error loading estructura.json for bloque ${bloqueId}:`, error)
      throw error
    }
  }
  
  export async function cargarTodasLasEstructuras() {
    try {
      console.log("Iniciando carga de todas las estructuras")
  
      for (let i = 1; i <= 4; i++) {
        await cargarEstructuraBloque(i) // Llamar a cargarEstructuraBloque para cada bloque
      }
  
      console.log("Todas las estructuras cargadas:", estructuraGlobal)
      return estructuraGlobal
    } catch (error) {
      console.error("Error loading estructuras:", error)
      throw error
    }
  }
  
  export function updateEstructuraGlobal() {
    Object.values(estructuraGlobal).forEach((estructura) => {
      if (estructura && estructura.puntosLineales) {
        estructura.puntosLineales.forEach((punto, index) => {
          const bloqueId = getBloqueId(punto.id)
          if (bloqueId) {
            punto.completado = isPointCompleted(bloqueId, index)
          }
        })
      }
    })
  }
  
  