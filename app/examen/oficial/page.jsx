import { readFileSync } from 'fs'
import { join } from 'path'
import Link from 'next/link'
import ExamenOficialClient from './ExamenOficialClient'

const bloquesConfig = ['bloque1', 'bloque2', 'bloque3', 'bloque4']

export default async function ExamenOficialPage() {
  // Load ALL questions from all bloques and temas
  const allQuestions = []

  for (const bloqueId of bloquesConfig) {
    try {
      const estPath = join(process.cwd(), 'bloques', bloqueId, 'estructura.json')
      const est = JSON.parse(readFileSync(estPath, 'utf-8'))

      est.temas.forEach((tema, index) => {
        const temaId = 'tema' + (index + 1)
        try {
          const pregPath = join(process.cwd(), 'bloques', bloqueId, 'temas', temaId, 'preguntas.js')
          const content = readFileSync(pregPath, 'utf-8')
          const match = content.match(/export\s+const\s+preguntas\s*=\s*(\{[\s\S]*\})\s*;?\s*$/)
          if (match) {
            const evalFn = new Function(`return ${match[1]}`)
            const data = evalFn()
            for (const key of Object.keys(data)) {
              if (data[key].preguntas) {
                allQuestions.push(...data[key].preguntas)
              }
            }
          }
        } catch (e) {
          // skip
        }
      })
    } catch (e) {
      // skip
    }
  }

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div>
            <Link href="/" className="back-link">
              {'< Volver al inicio'}
            </Link>
            <h1>Simulacro de Examen Oficial</h1>
            <h2>Formato real de las oposiciones TAI</h2>
          </div>
        </div>
      </header>

      <main className="container">
        <ExamenOficialClient allQuestions={allQuestions} />
      </main>
    </>
  )
}
