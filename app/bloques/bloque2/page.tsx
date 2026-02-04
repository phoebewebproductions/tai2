import Link from 'next/link'

const temas = [
  {
    titulo: "Tema I: Informatica basica",
    descripcion: "Conceptos fundamentales de informatica, hardware y software.",
    puntos: 10
  },
  {
    titulo: "Tema II: Sistemas de numeracion y codificacion",
    descripcion: "Binario, octal, hexadecimal y codigos de caracteres.",
    puntos: 8
  },
  {
    titulo: "Tema III: Arquitectura de ordenadores",
    descripcion: "Componentes, procesadores, memoria y perifericos.",
    puntos: 12
  },
  {
    titulo: "Tema IV: Sistemas operativos",
    descripcion: "Funciones, tipos, gestion de procesos y memoria.",
    puntos: 14
  },
  {
    titulo: "Tema V: Redes de comunicaciones",
    descripcion: "Topologias, protocolos, TCP/IP y servicios de red.",
    puntos: 15
  }
]

export default function Bloque2Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-emerald-200 hover:text-white text-sm mb-2 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-2xl font-bold">Bloque II</h1>
          <h2 className="text-emerald-200">Informatica Basica</h2>
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
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                    {tema.puntos} puntos
                  </span>
                </div>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Estudiar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Seccion de examenes del bloque */}
        <div className="mt-8 p-6 bg-slate-800 text-white rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Examenes del Bloque II</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-lg transition-colors">
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
