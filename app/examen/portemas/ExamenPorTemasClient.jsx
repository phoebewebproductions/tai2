'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'

export default function ExamenPorTemasClient({ allTemas }) {
  const [selectedTemas, setSelectedTemas] = useState([])
  const [loading, setLoading] = useState(false)
  const [preguntas, setPreguntas] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [finished, setFinished] = useState(false)

  const toggleTema = useCallback((temaKey) => {
    setSelectedTemas(prev =>
      prev.includes(temaKey)
        ? prev.filter(t => t !== temaKey)
        : [...prev, temaKey]
    )
  }, [])

  const startExam = useCallback(async () => {
    if (selectedTemas.length === 0) return
    setLoading(true)
    const allQuestions = []

    for (const temaKey of selectedTemas) {
      const [bloqueId, temaId] = temaKey.split('/')
      try {
        const res = await fetch(`/api/preguntas/${bloqueId}/${temaId}`)
        if (res.ok) {
          const data = await res.json()
          for (const key of Object.keys(data)) {
            if (data[key].preguntas) {
              allQuestions.push(...data[key].preguntas)
            }
          }
        }
      } catch (e) {
        // skip failed loads
      }
    }

    // Shuffle questions
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]]
    }

    setPreguntas(allQuestions)
    setLoading(false)
  }, [selectedTemas])

  const handleSelect = useCallback((optionIndex) => {
    if (answered) return
    setSelected(optionIndex)
    setAnswered(true)
    if (optionIndex === preguntas[currentIndex].correcta) {
      setCorrectCount(prev => prev + 1)
    }
  }, [answered, preguntas, currentIndex])

  const handleNext = useCallback(() => {
    if (currentIndex < preguntas.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelected(null)
      setAnswered(false)
    } else {
      setFinished(true)
    }
  }, [currentIndex, preguntas])

  const handleRestart = useCallback(() => {
    setPreguntas(null)
    setCurrentIndex(0)
    setSelected(null)
    setCorrectCount(0)
    setAnswered(false)
    setFinished(false)
  }, [])

  // Selection phase
  if (!preguntas) {
    // Group by bloque
    const grouped = {}
    allTemas.forEach(t => {
      if (!grouped[t.bloqueNum]) grouped[t.bloqueNum] = { bloqueId: t.bloqueId, temas: [] }
      grouped[t.bloqueNum].temas.push(t)
    })

    return (
      <div>
        {Object.entries(grouped).map(([bloqueNum, group]) => (
          <div key={bloqueNum} style={{ marginBottom: '1.5rem' }}>
            <h3 className="section-title">{'Bloque ' + bloqueNum}</h3>
            <div className="tema-selector">
              {group.temas.map(t => {
                const key = t.bloqueId + '/' + t.temaId
                const isSelected = selectedTemas.includes(key)
                return (
                  <div
                    key={key}
                    className={'tema-selector-item' + (isSelected ? ' selected' : '')}
                    onClick={() => toggleTema(key)}
                  >
                    <input type="checkbox" checked={isSelected} readOnly />
                    <label>{t.titulo}</label>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '2rem' }}>
          <button
            onClick={() => setSelectedTemas(allTemas.map(t => t.bloqueId + '/' + t.temaId))}
            className="btn btn-outline btn-lg"
          >
            Seleccionar Todos
          </button>
          <button
            onClick={() => setSelectedTemas([])}
            className="btn btn-outline btn-lg"
          >
            Deseleccionar Todos
          </button>
          <button
            onClick={startExam}
            className="btn btn-study btn-lg"
            disabled={selectedTemas.length === 0 || loading}
          >
            {loading ? 'Cargando...' : 'Comenzar Examen (' + selectedTemas.length + ' temas)'}
          </button>
        </div>
      </div>
    )
  }

  // Finished
  if (finished) {
    const pct = Math.round((correctCount / preguntas.length) * 100)
    const passed = pct >= 50
    return (
      <div className="quiz-container">
        <div className="quiz-result">
          <h2>Resultado del Examen</h2>
          <div className={`score-big ${passed ? 'score-pass' : 'score-fail'}`}>
            {correctCount + ' / ' + preguntas.length}
          </div>
          <p style={{ color: 'var(--slate-500)', marginBottom: '0.5rem' }}>
            {pct + '% de aciertos'}
          </p>
          <p style={{ fontSize: '1.25rem', fontWeight: 600, color: passed ? 'var(--green-500)' : 'var(--red-500)', marginBottom: '1.5rem' }}>
            {passed ? 'APROBADO' : 'NO APROBADO'}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={handleRestart} className="btn btn-quiz btn-lg">
              Nuevo Examen
            </button>
            <Link href="/" className="btn btn-outline btn-lg">
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Quiz phase
  const current = preguntas[currentIndex]
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
