import { readFileSync } from 'fs'
import { join } from 'path'
import Link from 'next/link'
import ExamenPorTemasClient from './ExamenPorTemasClient'

const bloquesConfig = [
  { id: 'bloque1', num: 'I', nombre: 'Organizacion del Estado' },
  { id: 'bloque2', num: 'II', nombre: 'Tecnologia Basica' },
  { id: 'bloque3', num: 'III', nombre: 'Desarrollo de Sistemas' },
  { id: 'bloque4', num: 'IV', nombre: 'Sistemas y Comunicaciones' },
]

export default async function ExamenPorTemasPage() {
  // Load all estructuras
  const allTemas = []
  for (const bloque of bloquesConfig) {
    try {
      const filePath = join(process.cwd(), 'bloques', bloque.id, 'estructura.json')
      const est = JSON.parse(readFileSync(filePath, 'utf-8'))
      est.temas.forEach((tema, index) => {
        allTemas.push({
          bloqueId: bloque.id,
          bloqueNum: bloque.num,
          temaId: 'tema' + (index + 1),
          titulo: tema.titulo,
          puntos: tema.puntos,
        })
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
            <h1>Examen por Temas</h1>
            <h2>Selecciona los temas para tu examen</h2>
          </div>
        </div>
      </header>

      <main className="container">
        <ExamenPorTemasClient allTemas={allTemas} />
      </main>
    </>
  )
}
