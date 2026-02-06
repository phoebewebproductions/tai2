'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'

export default function QuizClient({ preguntas, minimoParaAprobar, bloqueId, temaId, puntoId }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState([])

  const current = preguntas[currentIndex]

  const handleSelect = useCallback((optionIndex) => {
    if (answered) return
    setSelected(optionIndex)
    setAnswered(true)

    const isCorrect = optionIndex === current.correcta
    if (isCorrect) {
      setCorrectCount(prev => prev + 1)
    }
    setAnswers(prev => [...prev, { questionId: current.id, selected: optionIndex, correct: current.correcta, isCorrect }])
  }, [answered, current])

  const handleNext = useCallback(() => {
    if (currentIndex < preguntas.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelected(null)
      setAnswered(false)
    } else {
      setFinished(true)
      // Save result to localStorage
      try {
        const key = `quiz_${bloqueId}_${temaId}_${puntoId}`
        const result = {
          score: correctCount + (selected === current.correcta ? 0 : 0), // already counted
          total: preguntas.length,
          date: new Date().toISOString(),
          passed: correctCount >= minimoParaAprobar,
        }
        localStorage.setItem(key, JSON.stringify(result))
      } catch (e) {
        // ignore storage errors
      }
    }
  }, [currentIndex, preguntas.length, correctCount, minimoParaAprobar, bloqueId, temaId, puntoId, selected, current])

  const handleRestart = useCallback(() => {
    setCurrentIndex(0)
    setSelected(null)
    setCorrectCount(0)
    setAnswered(false)
    setFinished(false)
    setAnswers([])
  }, [])

  if (finished) {
    const passed = correctCount >= minimoParaAprobar
    return (
      <div className="quiz-container">
        <div className="quiz-result">
          <h2>Resultado del Test</h2>
          <div className={`score-big ${passed ? 'score-pass' : 'score-fail'}`}>
            {correctCount + ' / ' + preguntas.length}
          </div>
          <p style={{ color: 'var(--slate-500)', marginBottom: '0.5rem' }}>
            {'Minimo para aprobar: ' + minimoParaAprobar}
          </p>
          <p style={{ fontSize: '1.25rem', fontWeight: 600, color: passed ? 'var(--green-500)' : 'var(--red-500)', marginBottom: '1.5rem' }}>
            {passed ? 'APROBADO' : 'NO APROBADO'}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={handleRestart} className="btn btn-quiz btn-lg">
              Repetir Test
            </button>
            <Link
              href={`/bloque/${bloqueId}/${temaId}/estudiar/${puntoId}`}
              className="btn btn-study btn-lg"
            >
              Repasar Teoria
            </Link>
            <Link
              href={`/bloque/${bloqueId}/${temaId}`}
              className="btn btn-outline btn-lg"
            >
              Volver al Tema
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <span className="quiz-progress">
          {'Pregunta ' + (currentIndex + 1) + ' de ' + preguntas.length}
        </span>
        <span className="quiz-score" style={{ color: 'var(--green-500)' }}>
          {'Correctas: ' + correctCount}
        </span>
      </div>

      <p className="question-text">{current.pregunta}</p>

      <div className="options-list">
        {current.opciones.map((opcion, i) => {
          let className = 'option-btn'
          if (answered) {
            if (i === current.correcta) className += ' correct'
            else if (i === selected && i !== current.correcta) className += ' incorrect'
          }
          return (
            <button
              key={i}
              className={className}
              onClick={() => handleSelect(i)}
              disabled={answered}
            >
              {opcion}
            </button>
          )
        })}
      </div>

      {answered && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
          <button onClick={handleNext} className="btn btn-study btn-lg">
            {currentIndex < preguntas.length - 1 ? 'Siguiente' : 'Ver Resultado'}
          </button>
        </div>
      )}
    </div>
  )
}
