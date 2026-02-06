/**
 * Loads estructura JSON for a given bloque.
 * The JSON files live at /bloques/bloqueN/estructura.json in the public folder.
 */

const cache = {}

export async function loadEstructura(bloqueId) {
  if (cache[bloqueId]) return cache[bloqueId]

  const url = `/bloques/bloque${bloqueId}/estructura.json`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to load estructura for bloque ${bloqueId}`)

  const data = await res.json()
  data.id = bloqueId

  // Build a flat linear array of all points across all temas
  data.puntosLineales = data.temas.flatMap((tema, temaIndex) =>
    tema.puntos.map((punto, puntoIndex) => ({
      ...punto,
      temaIndex,
      puntoIndex,
    }))
  )

  cache[bloqueId] = data
  return data
}

export async function loadAllEstructuras() {
  const results = {}
  for (let i = 1; i <= 4; i++) {
    try {
      results[i] = await loadEstructura(i)
    } catch {
      // silently skip missing blocks
    }
  }
  return results
}

/**
 * Loads the preguntas (questions) module for a given tema inside a bloque.
 * Files live at /bloques/bloqueN/temas/temaN/preguntas.js
 */
export async function loadPreguntas(bloqueId, temaIndex) {
  const url = `/bloques/bloque${bloqueId}/temas/tema${temaIndex}/preguntas.js`
  const mod = await import(/* @vite-ignore */ url)
  return mod.preguntas
}

/**
 * Loads a single explanation HTML file.
 * Files live at /bloques/bloqueN/temas/temaN/IDe.html
 */
export async function loadExplanationHtml(bloqueId, temaNum, pointId) {
  const url = `/bloques/bloque${bloqueId}/temas/tema${temaNum}/${pointId}e.html`
  const res = await fetch(url)
  if (!res.ok) return null
  return res.text()
}

/**
 * Loads all preguntas for a given bloque by iterating through all temas.
 */
export async function loadAllPreguntasForBloque(bloqueId, estructura) {
  const allPreguntas = {}
  if (!estructura || !estructura.temas) return allPreguntas

  for (let i = 0; i < estructura.temas.length; i++) {
    try {
      const preguntas = await loadPreguntas(bloqueId, i + 1)
      Object.assign(allPreguntas, preguntas)
    } catch {
      // skip if no preguntas file
    }
  }
  return allPreguntas
}
