import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import Link from 'next/link'

const bloqueNames = {
  bloque1: { num: 'I' },
  bloque2: { num: 'II' },
  bloque3: { num: 'III' },
  bloque4: { num: 'IV' },
}

export default async function EstudiarPage({ params }) {
  const { bloqueId, temaId, puntoId } = await params
  const info = bloqueNames[bloqueId] || { num: '?' }

  // Load estructura to get the punto title
  let puntoTitle = 'Contenido'
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

  // Load the explanation HTML
  let html = ''
  const filePath = join(process.cwd(), 'bloques', bloqueId, 'temas', temaId, `${puntoId}e.html`)
  if (existsSync(filePath)) {
    html = readFileSync(filePath, 'utf-8')
    // Strip any <style> tags since we handle styles in globals.css
    html = html.replace(/<style[\s\S]*?<\/style>/gi, '')
  } else {
    html = '<p>No se ha encontrado contenido para este punto.</p>'
  }

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div>
            <Link href={`/bloque/${bloqueId}/${temaId}`} className="back-link">
              {'< Volver al tema'}
            </Link>
            <h1 style={{ fontSize: '1.125rem' }}>{puntoTitle}</h1>
          </div>
          <div className="punto-actions">
            <Link
              href={`/bloque/${bloqueId}/${temaId}/quiz/${puntoId}`}
              className="btn btn-quiz btn-lg"
            >
              Hacer Test
            </Link>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="content-viewer">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </main>
    </>
  )
}
