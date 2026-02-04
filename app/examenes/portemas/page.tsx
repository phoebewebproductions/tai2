import Link from 'next/link'

const bloques = [
  {
    nombre: "Bloque I",
    descripcion: "Organizacion del Estado y Administracion Electronica",
    temas: 9,
    color: "blue"
  },
  {
    nombre: "Bloque II", 
    descripcion: "Informatica Basica",
    temas: 5,
    color: "emerald"
  },
  {
    nombre: "Bloque III",
    descripcion: "Desarrollo de Sistemas",
    temas: 10,
    color: "amber"
  },
  {
    nombre: "Bloque IV",
    descripcion: "Sistemas y Comunicaciones",
    temas: 10,
    color: "purple"
  }
]

export default function ExamenPorTemasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-700 to-slate-800 text-white py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-slate-300 hover:text-white text-sm mb-2 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-2xl font-bold">Examen por Temas</h1>
          <h2 className="text-slate-300">Selecciona un bloque y tema para practicar</h2>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        {/* Info del modo local */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-green-800 text-sm">
            <strong>Modo Local:</strong> Tu historial de examenes se guarda automaticamente en este dispositivo.
          </p>
        </div>

        {/* Seleccion de bloque */}
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Selecciona un bloque</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {bloques.map((bloque, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer border-2 border-transparent hover:border-${bloque.color}-300`}
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{bloque.nombre}</h3>
              <p className="text-slate-500 text-sm mb-3">{bloque.descripcion}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                  {bloque.temas} temas disponibles
                </span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Seleccionar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Configuracion del examen */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Configuracion del examen</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Numero de preguntas
              </label>
              <select className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="10">10 preguntas</option>
                <option value="20">20 preguntas</option>
                <option value="30">30 preguntas</option>
                <option value="50">50 preguntas</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Tiempo limite
              </label>
              <select className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="0">Sin limite</option>
                <option value="15">15 minutos</option>
                <option value="30">30 minutos</option>
                <option value="60">60 minutos</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
              <span className="text-sm text-slate-700">Mostrar explicaciones al finalizar</span>
            </label>
          </div>
        </div>

        {/* Boton de inicio */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-md hover:shadow-lg">
            Comenzar Examen
          </button>
        </div>
      </div>
    </main>
  )
}
