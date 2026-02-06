'use client'

import Link from 'next/link'

export default function PuntosList({ puntos, bloqueId, temaId }) {
  return (
    <div className="punto-list">
      {puntos.map((punto) => (
        <div key={punto.id} className="punto-card">
          <div className="punto-header">
            <h4>{punto.titulo}</h4>
            <div className="punto-actions">
              <Link
                href={`/bloque/${bloqueId}/${temaId}/estudiar/${punto.id}`}
                className="btn btn-study"
              >
                Estudiar
              </Link>
              <Link
                href={`/bloque/${bloqueId}/${temaId}/quiz/${punto.id}`}
                className="btn btn-quiz"
              >
                Test
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
