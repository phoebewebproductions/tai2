/**
 * Módulo para cargar y gestionar la estructura del curso
 * Incluye funciones para calcular el progreso basado en la estructura real
 */

// Variable para controlar si ya se intentó cargar las estructuras
let estructurasIntentadas = false

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
  // Si ya intentamos cargar las estructuras y no están disponibles, no intentar de nuevo
  if (estructurasIntentadas && !estructuraGlobal[bloqueId]) {
    return 0
  }

  if (!estructuraGlobal[bloqueId]) {
    // Intentar cargar la estructura si no está disponible
    try {
      await cargarEstructuraBloque(bloqueId)
    } catch (error) {
      console.warn(`No se pudo cargar la estructura para el bloque ${bloqueId}:`, error)
      return 0
    }

    // Verificar nuevamente si la estructura está disponible
    if (!estructuraGlobal[bloqueId]) {
      return 0
    }
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

  // Si no hay subpuntos, evitar división por cero
  if (totalSubpuntos === 0) {
    return 0
  }

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

// Función para determinar la ruta correcta para cargar las estructuras
function determinarRutaBase() {
  // Verificar si estamos en una página de estudio (contiene /bloques/bloque[1-4]/)
  const currentPath = window.location.pathname

  // Si estamos en una página de estudio
  if (currentPath.match(/\/bloques\/bloque[1-4]\//i)) {
    return "./../../bloques"
  }

  // Si estamos en la raíz o en cualquier otra página
  return "./bloques"
}

// Función para cargar la estructura de un bloque con una ruta personalizada
export async function cargarEstructuraBloqueConRuta(bloqueId, rutaPersonalizada = null) {
  // Si ya intentamos cargar las estructuras y falló, no intentar de nuevo
  if (estructurasIntentadas && !rutaPersonalizada) {
    return null
  }

  try {
    // Determinar la ruta correcta
    let ruta

    if (rutaPersonalizada) {
      // Si se proporciona una ruta personalizada, usarla
      ruta = `${rutaPersonalizada}/bloque${bloqueId}/estructura.json`
    } else {
      // Usar la función para determinar la ruta base
      const rutaBase = determinarRutaBase()
      ruta = `${rutaBase}/bloque${bloqueId}/estructura.json`
    }

    console.log(`Intentando cargar estructura para bloque ${bloqueId} desde: ${ruta}`)

    const response = await fetch(ruta)
    if (!response.ok) {
      throw new Error(`Error al cargar estructura: ${response.status}`)
    }

    const estructura = await response.json()

    if (!estructura || !estructura.temas || estructura.temas.length === 0) {
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
    // Si falla, intentar con la ruta alternativa
    try {
      // Si ya intentamos con una ruta alternativa, no intentar de nuevo
      if (rutaPersonalizada) {
        return null
      }

      // Intentar con la ruta alternativa (invertir la lógica)
      const rutaAlternativa =
        determinarRutaBase() === "./bloques"
          ? "./../../bloques/bloque" + bloqueId + "/estructura.json"
          : "./bloques/bloque" + bloqueId + "/estructura.json"

      console.log(`Intentando ruta alternativa para bloque ${bloqueId}: ${rutaAlternativa}`)

      const response = await fetch(rutaAlternativa)
      if (!response.ok) {
        throw new Error()
      }

      const estructura = await response.json()

      if (!estructura || !estructura.temas || estructura.temas.length === 0) {
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
    } catch (secondError) {
      // Si ambos intentos fallan, retornar null silenciosamente
      return null
    }
  }
}

// Función para cargar la estructura de un bloque
export async function cargarEstructuraBloque(bloqueId) {
  // Usar directamente la función con detección automática
  return cargarEstructuraBloqueConRuta(bloqueId)
}

// Función para cargar todas las estructuras al inicio con una ruta personalizada
export async function cargarTodasLasEstructurasConRuta(rutaPersonalizada = null) {
  // Si ya intentamos cargar las estructuras y no se proporciona una ruta personalizada, no intentar de nuevo
  if (estructurasIntentadas && !rutaPersonalizada) {
    return estructuraGlobal
  }

  try {
    const promesas = []
    for (let i = 1; i <= 4; i++) {
      // Usar Promise.allSettled para continuar incluso si alguna estructura falla
      promesas.push(
        cargarEstructuraBloqueConRuta(i, rutaPersonalizada).catch(() => {
          // Capturar error silenciosamente sin log
          return null
        }),
      )
    }

    await Promise.allSettled(promesas)

    // Marcar que ya intentamos cargar las estructuras solo si no se proporcionó una ruta personalizada
    if (!rutaPersonalizada) {
      estructurasIntentadas = true
    }

    return estructuraGlobal
  } catch (error) {
    // Silenciar errores
    if (!rutaPersonalizada) {
      estructurasIntentadas = true
    }
    return estructuraGlobal
  }
}

// Función para cargar todas las estructuras al inicio
export async function cargarTodasLasEstructuras() {
  // Usar siempre la ruta por defecto para evitar problemas
  return cargarTodasLasEstructurasConRuta()
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

// NUEVAS FUNCIONES PARA CONTAR TEMAS COMPLETADOS

/**
 * Cuenta cuántos subpuntos tiene cada tema en un bloque
 * @param {number} bloqueId - ID del bloque
 * @returns {Array} - Array con el número de subpuntos por tema
 */
export function countSubpuntosPorTema(bloqueId) {
  if (!estructuraGlobal[bloqueId] || !estructuraGlobal[bloqueId].temas) {
    console.error(`Estructura no cargada para el bloque ${bloqueId}`)
    return []
  }

  return estructuraGlobal[bloqueId].temas.map((tema) => {
    return tema.puntos ? tema.puntos.length : 0
  })
}

/**
 * Intenta cargar la estructura de un bloque si no está disponible
 * @param {number} bloqueId - ID del bloque
 * @param {string} rutaPersonalizada - Ruta personalizada opcional
 * @returns {boolean} - true si la estructura está disponible, false en caso contrario
 */
async function asegurarEstructuraCargada(bloqueId, rutaPersonalizada = null) {
  // Si ya intentamos cargar las estructuras y no están disponibles, no intentar de nuevo
  // a menos que se proporcione una ruta personalizada
  if (estructurasIntentadas && !rutaPersonalizada && !estructuraGlobal[bloqueId]) {
    return false
  }

  if (!estructuraGlobal[bloqueId]) {
    try {
      await cargarEstructuraBloqueConRuta(bloqueId, rutaPersonalizada)
      return !!estructuraGlobal[bloqueId]
    } catch (error) {
      // Capturar error silenciosamente sin log
      return false
    }
  }
  return true
}

/**
 * Calcula cuántos temas están completados en un bloque
 * @param {number} bloqueId - ID del bloque
 * @param {string} rutaPersonalizada - Ruta personalizada opcional
 * @returns {Object} - Objeto con temas completados y total de temas
 */
export async function calculateCompletedThemes(bloqueId, rutaPersonalizada = null) {
  // Intentar cargar la estructura si no está disponible
  await asegurarEstructuraCargada(bloqueId, rutaPersonalizada)

  // Si la estructura global está disponible, usarla
  if (estructuraGlobal[bloqueId] && estructuraGlobal[bloqueId].temas) {
    // Reducir logs - usar mensaje más simple

    // Obtener el último índice completado
    const lastCompletedIndex = getLastCompletedIndex(bloqueId)

    // Si no hay progreso, devolver 0 temas completados
    if (lastCompletedIndex < 0) {
      return { completed: 0, total: estructuraGlobal[bloqueId].temas.length }
    }

    // Contar subpuntos por tema
    const subpuntosPorTema = countSubpuntosPorTema(bloqueId)
    let remainingSubpuntos = lastCompletedIndex + 1 // +1 porque lastCompletedIndex es un índice (comienza en 0)
    let completedThemes = 0

    // Contar temas completados consumiendo subpuntos
    for (const subpuntosInTheme of subpuntosPorTema) {
      if (remainingSubpuntos >= subpuntosInTheme) {
        // Este tema está completamente completado
        completedThemes++
        remainingSubpuntos -= subpuntosInTheme
      } else {
        // Este tema está parcialmente completado, pero no lo contamos como completado
        break
      }
    }

    return {
      completed: completedThemes,
      total: estructuraGlobal[bloqueId].temas.length,
    }
  } else {
    // Si la estructura global no está disponible, usar valores predeterminados

    // Definir el número total de temas por bloque según la estructura del curso
    const temasPorBloque = {
      1: 9, // Bloque 1 tiene 9 temas
      2: 5, // Bloque 2 tiene 5 temas
      3: 10, // Bloque 3 tiene 10 temas
      4: 10, // Bloque 4 tiene 10 temas
    }

    // Obtener el progreso como porcentaje
    const userId = getCurrentUserId()
    const key = `user_${userId}_courseProgress_block${bloqueId}`
    const savedProgress = localStorage.getItem(key)

    let completedThemes = 0
    const totalThemes = temasPorBloque[bloqueId] || 0

    if (savedProgress !== null) {
      try {
        const progress = JSON.parse(savedProgress)
        const progressValue = typeof progress === "number" ? progress : 0

        // Calcular temas completados basados en el porcentaje de progreso
        if (progressValue > 0) {
          // Si hay progreso, consideramos al menos 1 tema completado
          completedThemes = 1
        }
      } catch (error) {
        // Capturar error silenciosamente
      }
    }

    return { completed: completedThemes, total: totalThemes }
  }
}

/**
 * Obtiene el total de temas completados en todos los bloques
 * @param {string} rutaPersonalizada - Ruta personalizada opcional
 * @returns {string} - String en formato "completados/total"
 */
export async function getCompletedTopicsCount(rutaPersonalizada = null) {
  let totalCompleted = 0
  let totalThemes = 0

  // Definir el número total de temas por bloque según la estructura del curso
  const temasPorBloque = {
    1: 9, // Bloque 1 tiene 9 temas
    2: 5, // Bloque 2 tiene 5 temas
    3: 10, // Bloque 3 tiene 10 temas
    4: 10, // Bloque 4 tiene 10 temas
  }

  // Total de temas en el curso
  totalThemes = temasPorBloque[1] + temasPorBloque[2] + temasPorBloque[3] + temasPorBloque[4]

  // Intentar cargar todas las estructuras primero (solo si no se ha intentado antes o si se proporciona una ruta personalizada)
  if (!estructurasIntentadas || rutaPersonalizada) {
    await cargarTodasLasEstructurasConRuta(rutaPersonalizada)
  }

  // Calcular temas completados para cada bloque
  for (let bloqueId = 1; bloqueId <= 4; bloqueId++) {
    const { completed } = await calculateCompletedThemes(bloqueId, rutaPersonalizada)
    totalCompleted += completed
  }

  return `${totalCompleted}/${totalThemes}`
}

// Exponer funciones al objeto window para que otros módulos puedan usarlas
window.structureLoader = {
  cargarEstructuraBloque,
  cargarEstructuraBloqueConRuta,
  cargarTodasLasEstructuras,
  cargarTodasLasEstructurasConRuta,
  calculateBlockProgress,
  countSubpuntosInBloque,
  getCompletedTopicsCount,
  calculateCompletedThemes,
  getAllStructures: () => estructuraGlobal,
}

// Modificar la carga inicial para reducir los mensajes de error
// Cargar todas las estructuras al iniciar (solo una vez)
cargarTodasLasEstructuras()
  .then(() => {
    // Reducir logs - eliminar mensaje de éxito
  })
  .catch(() => {
    // Capturar error silenciosamente sin log
  })

