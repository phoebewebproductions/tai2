/**
 * Local progress management - all data stored in localStorage
 */

const LOCAL_USER_ID = 'local_user'

export function getUserId() {
  return LOCAL_USER_ID
}

// ===== Course Progress =====

export function getProgressKey(bloqueId) {
  return `user_${LOCAL_USER_ID}_courseProgress_block${bloqueId}`
}

export function saveProgress(bloqueId, lastCompletedIndex) {
  const key = getProgressKey(bloqueId)
  localStorage.setItem(key, JSON.stringify(lastCompletedIndex))
}

export function loadProgress(bloqueId) {
  const key = getProgressKey(bloqueId)
  const saved = localStorage.getItem(key)
  if (saved !== null) {
    return JSON.parse(saved)
  }
  return -1
}

export function getLastCompletedIndex(bloqueId) {
  return loadProgress(bloqueId)
}

export function isPointCompleted(bloqueId, puntoIndex) {
  return puntoIndex <= getLastCompletedIndex(bloqueId)
}

export function isPointUnlocked(bloqueId, puntoIndex) {
  return puntoIndex <= getLastCompletedIndex(bloqueId) + 1
}

export function updateProgress(bloqueId, newCompletedIndex) {
  if (bloqueId < 1 || bloqueId > 4) return
  saveProgress(bloqueId, newCompletedIndex)
}

// ===== Block Progress Calculation =====

export function calculateBlockProgress(estructura, bloqueId) {
  if (!estructura || !estructura.puntosLineales) return 0
  const total = estructura.puntosLineales.length
  if (total === 0) return 0
  const completed = getLastCompletedIndex(bloqueId) + 1
  return Math.min((completed / total) * 100, 100)
}

export function calculateCompletedThemes(estructura, bloqueId) {
  if (!estructura || !estructura.temas) {
    return { completed: 0, total: 0 }
  }

  const lastCompletedIndex = getLastCompletedIndex(bloqueId)
  if (lastCompletedIndex < 0) {
    return { completed: 0, total: estructura.temas.length }
  }

  let remaining = lastCompletedIndex + 1
  let completedThemes = 0

  for (const tema of estructura.temas) {
    const subpuntos = tema.puntos ? tema.puntos.length : 0
    if (remaining >= subpuntos) {
      completedThemes++
      remaining -= subpuntos
    } else {
      break
    }
  }

  return { completed: completedThemes, total: estructura.temas.length }
}

// ===== Exam Results =====

export function saveExamResult(examId, result) {
  const key = `user_${LOCAL_USER_ID}_exam_${examId}`
  localStorage.setItem(key, JSON.stringify(result))

  // Also save to exam history
  const history = getExamHistory()
  history.unshift({
    id: examId,
    date: new Date().toISOString(),
    ...result,
  })
  // Keep only last 50
  if (history.length > 50) history.length = 50
  localStorage.setItem('examHistory', JSON.stringify(history))
}

export function getExamResult(examId) {
  const key = `user_${LOCAL_USER_ID}_exam_${examId}`
  const saved = localStorage.getItem(key)
  return saved ? JSON.parse(saved) : null
}

export function getExamHistory() {
  const saved = localStorage.getItem('examHistory')
  return saved ? JSON.parse(saved) : []
}

// ===== Clear All Data =====

export function clearAllData() {
  const keysToRemove = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (
      key &&
      (key.includes('user_') ||
        key.includes('courseProgress') ||
        key.includes('examHistory') ||
        key.includes('examResult'))
    ) {
      keysToRemove.push(key)
    }
  }
  keysToRemove.forEach((key) => localStorage.removeItem(key))
  localStorage.removeItem('userAuth')
}
