import Link from 'next/link'

const bloques = [
  { id: 'bloque1', num: 'I', nombre: 'Organizacion del Estado y Administracion Electronica', clase: 'bloque-1' },
  { id: 'bloque2', num: 'II', nombre: 'Tecnologia Basica', clase: 'bloque-2' },
  { id: 'bloque3', num: 'III', nombre: 'Desarrollo de Sistemas', clase: 'bloque-3' },
  { id: 'bloque4', num: 'IV', nombre: 'Sistemas y Comunicaciones', clase: 'bloque-4' },
]

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div>
            <h1>Formacion Online</h1>
            <h2>TAI - Tecnico Auxiliar de Informatica</h2>
          </div>
          <span className="badge">Modo Local</span>
        </div>
      </header>

      <main className="container">
        <div className="card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{'Bienvenido/a'}</h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)', marginBottom: '1rem' }}>
            Todos los datos se guardan localmente en tu navegador
          </p>
          <div className="card-info">
            <p>
              <strong>Modo Local Activo:</strong> No necesitas iniciar sesion. Tu progreso se guarda automaticamente en este dispositivo.
            </p>
          </div>
        </div>

        <h3 className="section-title">Zona de Estudio</h3>
        <div className="bloques-grid">
          {bloques.map(b => (
            <Link key={b.id} href={`/bloque/${b.id}`}>
              <div className={`bloque-card ${b.clase}`}>
                <h3>{'Bloque ' + b.num}</h3>
                <p>{b.nombre}</p>
              </div>
            </Link>
          ))}
        </div>

        <h3 className="section-title">Zona de Examenes</h3>
        <div className="exam-grid">
          <Link href="/examen/portemas">
            <div className="exam-card">
              <h3>Examen por Temas</h3>
              <p>Practica con preguntas organizadas por temas</p>
            </div>
          </Link>
          <Link href="/examen/oficial">
            <div className="exam-card">
              <h3>Simulacro de Examen</h3>
              <p>Simula un examen real de oposiciones TAI</p>
            </div>
          </Link>
        </div>

        <footer className="footer">
          <div className="footer-grid">
            <div>
              <h4>Sitio en Desarrollo (Beta)</h4>
              <p>Este sitio web ha sido desarrollado como parte de mi preparacion para las oposiciones TAI.</p>
            </div>
            <div>
              <h4>Contacto</h4>
              <a href="mailto:phoebeproductions2023@gmail.com">phoebeproductions2023@gmail.com</a>
            </div>
            <div>
              <h4>Apoya el Desarrollo</h4>
              <a className="btn-donate" href="https://paypal.me/oajreviews" target="_blank" rel="noopener noreferrer">
                Donar por PayPal
              </a>
            </div>
          </div>
          <div className="footer-bottom">2025 Formacion Online TAI. Todos los derechos reservados.</div>
        </footer>
      </main>
    </>
  )
}
