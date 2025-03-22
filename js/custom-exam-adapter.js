/**
 * Adaptador para cargar preguntas reales para el examen personalizado
 * Este archivo sirve como puente entre el generador de exámenes personalizados
 * y el sistema existente de preguntas
 */

/**
 * Carga preguntas para un examen personalizado basado en bloques o temas seleccionados
 * @param {string} mode - Modo de selección ('blocks' o 'topics')
 * @param {string[]} selectedIds - IDs de bloques o temas seleccionados
 * @param {number} questionCount - Número de preguntas a generar
 * @returns {Promise<Array>} - Array de preguntas para el examen
 */
export async function loadQuestionsForCustomExam(mode, selectedIds, questionCount) {
  try {
    console.log(`Cargando preguntas en modo ${mode} para IDs:`, selectedIds)

    // Array para almacenar todas las preguntas disponibles
    let availableQuestions = []
    const loadedFiles = new Set() // Para evitar cargar el mismo archivo múltiples veces

    // Cargar preguntas según el modo de selección
    if (mode === "blocks") {
      // Cargar preguntas para bloques seleccionados
      for (const blockId of selectedIds) {
        const blockQuestions = await loadQuestionsForBlock(blockId)
        availableQuestions = availableQuestions.concat(blockQuestions)
      }
    } else {
      // Cargar preguntas para temas seleccionados
      for (const topicId of selectedIds) {
        const topicQuestions = await loadQuestionsForTopic(topicId)
        availableQuestions = availableQuestions.concat(topicQuestions)
      }
    }

    console.log(`Total de preguntas encontradas: ${availableQuestions.length}`)

    // Si no hay suficientes preguntas disponibles
    if (availableQuestions.length === 0) {
      console.warn("No se encontraron preguntas. Generando preguntas de ejemplo.")
      return generateSampleQuestions(questionCount, mode, selectedIds)
    }

    if (availableQuestions.length < questionCount) {
      console.warn(`Solo se encontraron ${availableQuestions.length} preguntas disponibles`)
      return availableQuestions
    }

    // Seleccionar preguntas aleatorias
    return selectRandomQuestions(availableQuestions, questionCount)
  } catch (error) {
    console.error("Error al cargar preguntas para el examen personalizado:", error)
    // En caso de error, generar preguntas de ejemplo
    return generateSampleQuestions(questionCount, mode, selectedIds)
  }
}

/**
 * Carga preguntas para un bloque específico
 * @param {string} blockId - ID del bloque
 * @returns {Promise<Array>} - Array de preguntas para el bloque
 */
async function loadQuestionsForBlock(blockId) {
  try {
    console.log(`Cargando preguntas para el bloque ${blockId}`)

    // Intentar cargar directamente el archivo de preguntas del bloque
    const rutaPreguntas = `/tai2/bloques/bloque${blockId}/preguntas.js`

    try {
      const questions = await loadQuestionsFromFile(rutaPreguntas)
      if (questions.length > 0) {
        console.log(`Encontradas ${questions.length} preguntas en ${rutaPreguntas}`)
        return questions
      }
    } catch (e) {
      console.log(`No se encontró archivo de preguntas en ${rutaPreguntas}`)
    }

    // Si no hay archivo de preguntas para el bloque, intentar cargar preguntas de todos los temas
    let allBlockQuestions = []

    // Intentar cargar los primeros 15 temas del bloque (aumentamos de 9 a 15 para ser más exhaustivos)
    for (let tema = 1; tema <= 15; tema++) {
      const temaId = `${blockId}${tema.toString().padStart(2, "0")}`
      try {
        const temaQuestions = await loadQuestionsForTopic(temaId)
        if (temaQuestions.length > 0) {
          console.log(`Encontradas ${temaQuestions.length} preguntas para el tema ${temaId}`)
          allBlockQuestions = allBlockQuestions.concat(temaQuestions)
        }
      } catch (error) {
        // Simplemente continuamos con el siguiente tema
      }
    }

    console.log(`Total de preguntas encontradas para el bloque ${blockId}: ${allBlockQuestions.length}`)
    return allBlockQuestions
  } catch (error) {
    console.error(`Error al cargar preguntas para el bloque ${blockId}:`, error)
    return []
  }
}

/**
 * Carga preguntas para un tema específico
 * @param {string} topicId - ID del tema
 * @returns {Promise<Array>} - Array de preguntas para el tema
 */
async function loadQuestionsForTopic(topicId) {
  try {
    // Verificar que topicId sea válido
    if (!topicId) {
      console.error("ID de tema inválido:", topicId)
      return []
    }

    // Extraer bloque y tema del ID
    // Asumimos que el formato es "BTTXXXX" donde B es el bloque y TT es el tema
    let blockId, temaId

    if (typeof topicId === "string" && topicId.length >= 3) {
      blockId = topicId.substring(0, 1)
      temaId = topicId.substring(1, 3)
    } else {
      console.error("Formato de ID de tema inválido:", topicId)
      return []
    }

    console.log(`Cargando preguntas para el tema ${blockId}${temaId}`)

    // Intentar cargar directamente el archivo de preguntas del tema
    const rutaPreguntas = `/tai2/bloques/bloque${blockId}/temas/tema${Number.parseInt(temaId)}/preguntas.js`

    try {
      const questions = await loadQuestionsFromFile(rutaPreguntas)
      if (questions.length > 0) {
        console.log(`Encontradas ${questions.length} preguntas en ${rutaPreguntas}`)
        return questions
      }
    } catch (e) {
      console.log(`No se encontró archivo de preguntas en ${rutaPreguntas}`)
    }

    // Intentar rutas alternativas
    const rutasAlternativas = [
      `/tai2/bloques/bloque${blockId}/tema${Number.parseInt(temaId)}/preguntas.js`,
      `/tai2/bloques/bloque${blockId}/temas/tema${Number.parseInt(temaId)}.js`,
      `/tai2/bloques/bloque${blockId}/tema${Number.parseInt(temaId)}.js`
    ]

    for (const ruta of rutasAlternativas) {
      try {
        const questions = await loadQuestionsFromFile(ruta)
        if (questions.length > 0) {
          console.log(`Encontradas ${questions.length} preguntas en ${ruta}`)
          return questions
        }
      } catch (e) {
        console.log(`No se encontró archivo de preguntas en ${ruta}`)
      }
    }

    return []
  } catch (error) {
    console.error(`Error al cargar preguntas para el tema ${topicId}:`, error)
    return []
  }
}

/**
 * Carga preguntas desde un archivo
 * @param {string} filePath - Ruta al archivo de preguntas
 * @returns {Promise<Array>} - Array de preguntas
 */
async function loadQuestionsFromFile(filePath) {
  try {
    console.log(`Intentando cargar preguntas desde: ${filePath}`)

    // Cargar archivo de preguntas
    const response = await fetch(filePath)
    if (!response.ok) {
      console.warn(`No se pudo cargar el archivo: ${filePath}`)
      return []
    }

    // Procesar el archivo de preguntas
    const text = await response.text()
    
    // Intentar diferentes formatos de archivo
    let preguntasModule = null
    
    try {
      // Formato 1: export const preguntas = ...
      const moduleText = text.replace("export const preguntas =", "const preguntas =")
      const module = { exports: {} }
      const moduleFunc = new Function("module", "exports", moduleText + "; return preguntas;")
      preguntasModule = moduleFunc(module, module.exports)
    } catch (e) {
      console.log("Error al procesar formato 1, intentando formato 2:", e)
      
      try {
        // Formato 2: export default { ... }
        const moduleText = text.replace("export default", "return")
        const moduleFunc = new Function(moduleText)
        preguntasModule = moduleFunc()
      } catch (e2) {
        console.log("Error al procesar formato 2, intentando formato 3:", e2)
        
        try {
          // Formato 3: module.exports = { ... }
          const moduleText = text.replace("module.exports =", "return")
          const moduleFunc = new Function(moduleText)
          preguntasModule = moduleFunc()
        } catch (e3) {
          console.error("No se pudo procesar ningún formato conocido:", e3)
          return []
        }
      }
    }

    if (!preguntasModule) {
      console.warn(`No se encontraron preguntas en el archivo ${filePath}`)
      return []
    }

    // Extraer todas las preguntas de todos los exámenes
    let allQuestions = []

    // Recorrer todos los exámenes en el archivo
    if (typeof preguntasModule === 'object') {
      // Caso 1: Objeto con exámenes
      for (const examId in preguntasModule) {
        if (preguntasModule[examId] && preguntasModule[examId].preguntas) {
          const examQuestions = preguntasModule[examId].preguntas
          console.log(`Encontradas ${examQuestions.length} preguntas para el examen ${examId}`)
          allQuestions = allQuestions.concat(examQuestions)
        }
      }
      
      // Si no encontramos preguntas en el formato anterior, verificar si el objeto mismo es un array de preguntas
      if (allQuestions.length === 0 && Array.isArray(preguntasModule)) {
        console.log(`Encontradas ${preguntasModule.length} preguntas en formato array directo`)
        allQuestions = preguntasModule
      }
      
      // O si el objeto tiene una propiedad 'preguntas' que es un array
      if (allQuestions.length === 0 && preguntasModule.preguntas && Array.isArray(preguntasModule.preguntas)) {
        console.log(`Encontradas ${preguntasModule.preguntas.length} preguntas en propiedad 'preguntas'`)
        allQuestions = preguntasModule.preguntas
      }
    } else if (Array.isArray(preguntasModule)) {
      // Caso 2: Array directo de preguntas
      console.log(`Encontradas ${preguntasModule.length} preguntas en formato array`)
      allQuestions = preguntasModule
    }

    console.log(`Total de preguntas extraídas del archivo ${filePath}: ${allQuestions.length}`)
    return allQuestions
  } catch (error) {
    console.error(`Error al cargar preguntas desde el archivo ${filePath}:`, error)
    return []
  }
}

/**
 * Selecciona un número específico de preguntas aleatorias de un array
 * @param {Array} questions - Array de preguntas disponibles
 * @param {number} count - Número de preguntas a seleccionar
 * @returns {Array} - Array de preguntas seleccionadas aleatoriamente
 */
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

/**
 * Genera preguntas de ejemplo cuando no se encuentran preguntas reales
 * @param {number} count - Número de preguntas a generar
 * @param {string} mode - Modo de selección ('blocks' o 'topics')
 * @param {string[]} selectedIds - IDs seleccionados
 * @returns {Array} - Array de preguntas de ejemplo
 */
function generateSampleQuestions(count, mode, selectedIds) {
  console.log(
    `Generando ${count} preguntas de ejemplo para ${mode}: ${selectedIds ? selectedIds.join(", ") : "ninguno"}`,
  )

  // Verificar que haya IDs seleccionados
  if (!selectedIds || selectedIds.length === 0) {
    console.warn("No hay IDs seleccionados para generar preguntas de ejemplo")
    // Generar preguntas con IDs genéricos
    return generateGenericSampleQuestions(count)
  }

  const sampleQuestions = []

  for (let i = 0; i < count; i++) {
    // Seleccionar un ID aleatorio de los seleccionados
    const sourceId = selectedIds[Math.floor(Math.random() * selectedIds.length)]

    // Determinar bloque y tema
    let bloque, tema
    if (mode === "blocks") {
      bloque = sourceId
      tema = Math.floor(Math.random() * 5) + 1 // Tema aleatorio entre 1 y 5
    } else {
      // Verificar que sourceId sea válido
      if (!sourceId || typeof sourceId !== "string" || sourceId.length < 3) {
        bloque = "1"
        tema = 1
      } else {
        try {
          bloque = sourceId.substring(0, 1)
          tema = Number.parseInt(sourceId.substring(1, 3))
        } catch (error) {
          console.error("Error al procesar ID de tema:", error)
          bloque = "1"
          tema = 1
        }
      }
    }

    // Generar ID único para la pregunta
    const preguntaId = `${bloque}${tema.toString().padStart(2, "0")}${(i + 1).toString().padStart(2, "0")}0000`

    // Crear pregunta de ejemplo
    sampleQuestions.push({
      id: preguntaId,
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

// Añadir una nueva función para generar preguntas genéricas cuando no hay IDs
function generateGenericSampleQuestions(count) {
  const sampleQuestions = []

  for (let i = 0; i < count; i++) {
    // Usar valores por defecto
    const bloque = "1"
    const tema = "01"

    sampleQuestions.push({
      id: `${bloque}${tema}${(i + 1).toString().padStart(2, "0")}0000`,
      pregunta: `Pregunta de ejemplo ${i + 1}`,
      opciones: [
        `Opción A para pregunta ${i + 1}`,
        `Opción B para pregunta ${i + 1}`,
        `Opción C para pregunta ${i + 1}`,
        `Opción D para pregunta ${i + 1}`,
      ],
      correcta: Math.floor(Math.random() * 4),
      explicacion: `Esta es una explicación de ejemplo para la pregunta ${i + 1}.`,
    })
  }

  return sampleQuestions
}