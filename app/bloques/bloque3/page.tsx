import Link from 'next/link'

const temas = [
  {
    titulo: "Tema I: Ciclo de vida del software",
    descripcion: "Fases del desarrollo, modelos de ciclo de vida y metodologias.",
    puntos: 11
  },
  {
    titulo: "Tema II: Analisis y diseno de sistemas",
    descripcion: "Tecnicas de analisis, diagramas UML y patrones de diseno.",
    puntos: 13
  },
  {
    titulo: "Tema III: Programacion",
    descripcion: "Paradigmas, lenguajes y buenas practicas de programacion.",
    puntos: 14
  },
  {
    titulo: "Tema IV: Bases de datos",
    descripcion: "Modelo relacional, SQL, normalizacion y administracion.",
    puntos: 16
  },
  {
    titulo: "Tema V: Desarrollo web",
    descripcion: "HTML, CSS, JavaScript, frameworks y tecnologias web.",
    puntos: 12
  },
  {
    titulo: "Tema VI: Seguridad en el desarrollo",
    descripcion: "OWASP, vulnerabilidades y desarrollo seguro.",
    puntos: 10
  },
  {
    titulo: "Tema VII: Testing y calidad",
    descripcion: "Tipos de pruebas, automatizacion y aseguramiento de calidad.",
    puntos: 9
  },
  {
    titulo: "Tema VIII: Control de versiones",
    descripcion: "Git, flujos de trabajo y gestion de repositorios.",
    puntos: 7
  },
  {
    titulo: "Tema IX: Integracion y despliegue continuo",
    descripcion: "CI/CD, DevOps y automatizacion de despliegues.",
    puntos: 8
  },
  {
    titulo: "Tema X: Arquitectura de software",
    descripcion: "Microservicios, APIs REST y arquitecturas distribuidas.",
    puntos: 10
  }
]

export default function Bloque3Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-amber-200 hover:text-white text-sm mb-2 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-2xl font-bold">Bloque III</h1>
          <h2 className="text-amber-200">Desarrollo de Sistemas</h2>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        {/* Info del modo local */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-green-800 text-sm">
            <strong>Modo Local:</strong> Tu progreso se guarda automaticamente en este dispositivo.
          </p>
        </div>

        {/* Lista de temas */}
        <div className="space-y-4">
          {temas.map((tema, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{tema.titulo}</h3>
                  <p className="text-slate-500 text-sm mb-3">{tema.descripcion}</p>
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
                    {tema.puntos} puntos
                  </span>
                </div>
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Estudiar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Seccion de examenes del bloque */}
        <div className="mt-8 p-6 bg-slate-800 text-white rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Examenes del Bloque III</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <button className="bg-amber-500 hover:bg-amber-400 px-6 py-3 rounded-lg transition-colors">
              Examen por temas
            </button>
            <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg transition-colors">
              Examen completo del bloque
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
