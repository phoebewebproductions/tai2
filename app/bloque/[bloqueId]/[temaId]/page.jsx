import { readFileSync } from 'fs'
import { join } from 'path'
import Link from 'next/link'
import PuntosList from './PuntosList'

const bloqueNames = {
  bloque1: { num: 'I', nombre: 'Organizacion del Estado y Administracion Electronica' },
  bloque2: { num: 'II', nombre: 'Tecnologia Basica' },
  bloque3: { num: 'III', nombre: 'Desarrollo de Sistemas' },
  bloque4: { num: 'IV', nombre: 'Sistemas y Comunicaciones' },
}

export default async function TemaPage({ params }) {
  const { bloqueId, temaId } = await params
  const info = bloqueNames[bloqueId] || { num: '?', nombre: 'Desconocido' }

  let estructura = { temas: [] }
  try {
    const filePath = join(process.cwd(), 'bloques', bloqueId, 'estructura.json')
    estructura = JSON.parse(readFileSync(filePath, 'utf-8'))
  } catch (e) {
    // estructura stays empty
  }

  const temaIndex = parseInt(temaId.replace('tema', ''), 10) - 1
  const tema = estructura.temas[temaIndex] || { titulo: 'Tema no encontrado', puntos: [] }

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div>
            <Link href={`/bloque/${bloqueId}`} className="back-link">
              {'< Bloque ' + info.num}
            </Link>
            <h1>{tema.titulo}</h1>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="card-info" style={{ marginBottom: '1.5rem' }}>
          <p>{tema.puntos.length + ' puntos en este tema'}</p>
        </div>

        <PuntosList
          puntos={tema.puntos}
          bloqueId={bloqueId}
          temaId={temaId}
        />
      </main>
    </>
  )
}
