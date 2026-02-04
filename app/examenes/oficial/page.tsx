import Link from 'next/link'

const examenesOficiales = [
  { anyo: 2023, convocatoria: "Libre", preguntas: 100 },
  { anyo: 2022, convocatoria: "Libre", preguntas: 100 },
  { anyo: 2021, convocatoria: "Libre", preguntas: 100 },
  { anyo: 2020, convocatoria: "Libre", preguntas: 100 },
  { anyo: 2019, convocatoria: "Libre", preguntas: 100 },
  { anyo: 2018, convocatoria: "Libre", preguntas: 100 },
]

export default function ExamenOficialPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-700 to-indigo-800 text-white py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-indigo-200 hover:text-white text-sm mb-2 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-2xl font-bold">Examen Oficial TAI</h1>
          <h2 className="text-indigo-200">Simula un examen real de oposiciones</h2>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        {/* Info del modo local */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-green-800 text-sm">
            <strong>Modo Local:</strong> Tus resultados se guardan automaticamente en este dispositivo.
          </p>
        </div>

        {/* Informacion del examen */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-indigo-800 mb-3">Formato del Examen Oficial</h3>
          <ul className="space-y-2 text-indigo-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              100 preguntas tipo test
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              4 opciones de respuesta (solo una correcta)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Respuestas incorrectas penalizan 1/3 del valor
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Tiempo: 90 minutos
            </li>
          </ul>
        </div>

        {/* Examenes disponibles */}
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Examenes Oficiales Disponibles</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {examenesOficiales.map((examen, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100"
            >
              <div className="text-center">
                <span className="text-4xl font-bold text-indigo-600">{examen.anyo}</span>
                <p className="text-slate-500 text-sm mt-1">Convocatoria {examen.convocatoria}</p>
                <p className="text-xs text-slate-400 mt-1">{examen.preguntas} preguntas</p>
              </div>
              <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Comenzar
              </button>
            </div>
          ))}
        </div>

        {/* Simulador personalizado */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Simulador Personalizado</h3>
          <p className="text-slate-500 text-sm mb-4">
            Crea un examen personalizado con preguntas aleatorias de todos los bloques.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Numero de preguntas
              </label>
              <select className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                <option value="50">50 preguntas</option>
                <option value="100">100 preguntas</option>
                <option value="150">150 preguntas</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Tiempo limite
              </label>
              <select className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                <option value="45">45 minutos</option>
                <option value="90">90 minutos</option>
                <option value="120">120 minutos</option>
                <option value="0">Sin limite</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Penalizacion
              </label>
              <select className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                <option value="0.33">1/3 (oficial)</option>
                <option value="0.25">1/4</option>
                <option value="0">Sin penalizacion</option>
              </select>
            </div>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Crear Examen Personalizado
          </button>
        </div>
      </div>
    </main>
  )
}
