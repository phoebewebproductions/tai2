'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'

const NUM_QUESTIONS = 50
const EXAM_DURATION_MIN = 60

export default function ExamenOficialClient({ allQuestions }) {
  const [started, setStarted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [finished, setFinished] = useState(false)

  // Shuffle and pick NUM_QUESTIONS questions
  const questions = useMemo(() => {
    const shuffled = [...allQuestions]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled.slice(0, Math.min(NUM_QUESTIONS, shuffled.length))
  }, [allQuestions])

  const handleSelect = useCallback((qIndex, optionIndex) => {
    setAnswers(prev => ({ ...prev, [qIndex]: optionIndex }))
  }, [])

  const handleFinish = useCallback(() => {
    setFinished(true)
    // Save to localStorage
    try {
      let correct = 0
      questions.forEach((q, i) => {
        if (answers[i] === q.correcta) correct++
      })
      const result = {
        score: correct,
        total: questions.length,
        date: new Date().toISOString(),
        percentage: Math.round((correct / questions.length) * 100),
      }
      const history = JSON.parse(localStorage.getItem('examHistory') || '[]')
      history.push(result)
      localStorage.setItem('examHistory', JSON.stringify(history))
    } catch (e) {
      // ignore
    }
  }, [answers, questions])

  // Start screen
  if (!started) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Simulacro de Examen Oficial</h2>
        <p style={{ color: 'var(--slate-500)', marginBottom: '0.5rem' }}>
          {questions.length + ' preguntas de toda la materia'}
        </p>
        <p style={{ color: 'var(--slate-500)', marginBottom: '2rem' }}>
          {'Puedes navegar entre preguntas y cambiar respuestas antes de finalizar'}
        </p>
        <button onClick={() => setStarted(true)} className="btn btn-study btn-lg">
          Comenzar Examen
        </button>
      </div>
    )
  }

  // Results screen
  if (finished) {
    let correct = 0
    let incorrect = 0
    let blank = 0
    questions.forEach((q, i) => {
      if (answers[i] === undefined) blank++
      else if (answers[i] === q.correcta) correct++
      else incorrect++
    })
    const pct = Math.round((correct / questions.length) * 100)
    const passed = pct >= 50

    return (
      <div className="quiz-container">
        <div className="quiz-result">
          <h2>Resultado del Simulacro</h2>
          <div className={`score-big ${passed ? 'score-pass' : 'score-fail'}`}>
            {pct + '%'}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', maxWidth: '24rem', margin: '1.5rem auto' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--green-500)' }}>{correct}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>Correctas</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--red-500)' }}>{incorrect}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>Incorrectas</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--slate-400)' }}>{blank}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>En blanco</div>
            </div>
          </div>
          <p style={{ fontSize: '1.25rem', fontWeight: 600, color: passed ? 'var(--green-500)' : 'var(--red-500)', marginBottom: '1.5rem' }}>
            {passed ? 'APROBADO' : 'NO APROBADO'}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => window.location.reload()} className="btn btn-quiz btn-lg">
              Nuevo Simulacro
            </button>
            <Link href="/" className="btn btn-outline btn-lg">
              Volver al Inicio
            </Link>
          </div>

          {/* Review answers */}
          <div style={{ marginTop: '2rem', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>Revision de respuestas</h3>
            {questions.map((q, i) => {
              const userAnswer = answers[i]
              const isCorrect = userAnswer === q.correcta
              const isBlank = userAnswer === undefined
              return (
                <div key={i} style={{
                  padding: '0.75rem',
                  marginBottom: '0.5rem',
                  borderRadius: 'var(--radius)',
                  border: '1px solid',
                  borderColor: isBlank ? 'var(--slate-200)' : isCorrect ? 'var(--green-500)' : 'var(--red-500)',
                  background: isBlank ? 'white' : isCorrect ? 'var(--green-100)' : 'var(--red-100)',
                }}>
                  <p style={{ fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                    {(i + 1) + '. ' + q.pregunta}
                  </p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--slate-600)' }}>
                    {isBlank
                      ? 'Sin responder - Correcta: ' + q.opciones[q.correcta]
                      : isCorrect
                        ? 'Correcto: ' + q.opciones[q.correcta]
                        : 'Tu respuesta: ' + q.opciones[userAnswer] + ' - Correcta: ' + q.opciones[q.correcta]
                    }
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  // Exam phase - show current question with navigation
  const current = questions[currentIndex]
  const answeredCount = Object.keys(answers).length

  return (
    <div>
      {/* Progress bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <span style={{ fontSize: '0.875rem', color: 'var(--slate-500)' }}>
          {'Pregunta ' + (currentIndex + 1) + ' de ' + questions.length}
        </span>
        <span style={{ fontSize: '0.875rem', color: 'var(--slate-500)' }}>
          {'Respondidas: ' + answeredCount + ' / ' + questions.length}
        </span>
      </div>

      {/* Question navigation */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '1rem' }}>
        {questions.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: 'var(--radius)',
              border: i === currentIndex ? '2px solid var(--blue-600)' : '1px solid var(--slate-200)',
              background: answers[i] !== undefined
                ? 'var(--blue-600)'
                : i === currentIndex
                  ? 'var(--blue-50)'
                  : 'white',
              color: answers[i] !== undefined ? 'white' : 'var(--slate-600)',
              fontSize: '0.75rem',
              cursor: 'pointer',
              fontWeight: i === currentIndex ? 600 : 400,
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Question */}
      <div className="quiz-container">
        <p className="question-text">{current.pregunta}</p>
        <div className="options-list">
          {current.opciones.map((opcion, i) => (
            <button
              key={i}
              className={'option-btn' + (answers[currentIndex] === i ? ' correct' : '')}
              onClick={() => handleSelect(currentIndex, i)}
              style={answers[currentIndex] === i ? { borderColor: 'var(--blue-600)', background: 'var(--blue-50)' } : {}}
            >
              {opcion}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            className="btn btn-outline btn-lg"
            disabled={currentIndex === 0}
          >
            Anterior
          </button>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {currentIndex < questions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex(prev => prev + 1)}
                className="btn btn-study btn-lg"
              >
                Siguiente
              </button>
            ) : null}
            <button
              onClick={handleFinish}
              className="btn btn-quiz btn-lg"
            >
              Finalizar Examen
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
