import { readFileSync } from 'fs'
import { join } from 'path'
import Link from 'next/link'

const bloqueNames = {
  bloque1: { num: 'I', nombre: 'Organizacion del Estado y Administracion Electronica' },
  bloque2: { num: 'II', nombre: 'Tecnologia Basica' },
  bloque3: { num: 'III', nombre: 'Desarrollo de Sistemas' },
  bloque4: { num: 'IV', nombre: 'Sistemas y Comunicaciones' },
}

export default async function BloquePage({ params }) {
  const { bloqueId } = await params
  const info = bloqueNames[bloqueId] || { num: '?', nombre: 'Desconocido' }

  let estructura = { temas: [] }
  try {
    const filePath = join(process.cwd(), 'bloques', bloqueId, 'estructura.json')
    estructura = JSON.parse(readFileSync(filePath, 'utf-8'))
  } catch (e) {
    // estructura stays empty
  }

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div>
            <Link href="/" className="back-link">
              {'< Volver al inicio'}
            </Link>
            <h1>{'Bloque ' + info.num}</h1>
            <h2>{info.nombre}</h2>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="card-info" style={{ marginBottom: '1.5rem' }}>
          <p>{estructura.temas.length + ' temas disponibles en este bloque'}</p>
        </div>

        <div className="tema-list">
          {estructura.temas.map((tema, index) => {
            const temaNum = index + 1
            const temaId = 'tema' + temaNum
            return (
              <Link key={temaId} href={`/bloque/${bloqueId}/${temaId}`}>
                <div className="tema-card">
                  <h3>{tema.titulo}</h3>
                  <span className="arrow">{'>'}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </>
  )
}
