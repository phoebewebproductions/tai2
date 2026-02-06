import { readFileSync } from 'fs'
import { join } from 'path'
import Link from 'next/link'
import QuizClient from './QuizClient'

const bloqueNames = {
  bloque1: { num: 'I' },
  bloque2: { num: 'II' },
  bloque3: { num: 'III' },
  bloque4: { num: 'IV' },
}

export default async function QuizPage({ params }) {
  const { bloqueId, temaId, puntoId } = await params
  const info = bloqueNames[bloqueId] || { num: '?' }

  // Load estructura to get punto title
  let puntoTitle = 'Test'
  try {
    const estPath = join(process.cwd(), 'bloques', bloqueId, 'estructura.json')
    const est = JSON.parse(readFileSync(estPath, 'utf-8'))
    const temaIndex = parseInt(temaId.replace('tema', ''), 10) - 1
    const tema = est.temas[temaIndex]
    if (tema) {
      const punto = tema.puntos.find(p => p.id === puntoId)
      if (punto) puntoTitle = punto.titulo
    }
  } catch (e) {
    // ignore
  }

  // Load preguntas
  let preguntas = []
  let minimoParaAprobar = 0
  try {
    const pregPath = join(process.cwd(), 'bloques', bloqueId, 'temas', temaId, 'preguntas.js')
    const content = readFileSync(pregPath, 'utf-8')
    const match = content.match(/export\s+const\s+preguntas\s*=\s*(\{[\s\S]*\})\s*;?\s*$/)
    if (match) {
      const evalFn = new Function(`return ${match[1]}`)
      const allPreguntas = evalFn()
      const key = puntoId + 'e'
      if (allPreguntas[key]) {
        preguntas = allPreguntas[key].preguntas || []
        minimoParaAprobar = allPreguntas[key].minimoParaAprobar || 0
      }
    }
  } catch (e) {
    // no questions
  }

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div>
            <Link href={`/bloque/${bloqueId}/${temaId}`} className="back-link">
              {'< Volver al tema'}
            </Link>
            <h1 style={{ fontSize: '1.125rem' }}>{'Test: ' + puntoTitle}</h1>
          </div>
          <div className="punto-actions">
            <Link
              href={`/bloque/${bloqueId}/${temaId}/estudiar/${puntoId}`}
              className="btn btn-study btn-lg"
            >
              Estudiar Teoria
            </Link>
          </div>
        </div>
      </header>

      <main className="container">
        {preguntas.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: 'var(--slate-500)' }}>No hay preguntas disponibles para este punto.</p>
          </div>
        ) : (
          <QuizClient
            preguntas={preguntas}
            minimoParaAprobar={minimoParaAprobar}
            bloqueId={bloqueId}
            temaId={temaId}
            puntoId={puntoId}
          />
        )}
      </main>
    </>
  )
}
