import Link from 'next/link'

const temas = [
  {
    titulo: "Tema I: La constitucion espanola de 1978 y la Corona",
    descripcion: "Caracteristicas, estructura, procedimientos de reforma, principios constitucionales, derechos fundamentales y la Corona.",
    puntos: 9
  },
  {
    titulo: "Tema II: Las Cortes Generales, Congreso de los diputados y el Senado",
    descripcion: "Estructura, composicion, funciones, funcionamiento, organizacion y disolucion.",
    puntos: 15
  },
  {
    titulo: "Tema III: El Gobierno y la Administracion",
    descripcion: "El Gobierno, composicion, funciones, responsabilidad y la Administracion Publica.",
    puntos: 12
  },
  {
    titulo: "Tema IV: Ley 19/2013 de Transparencia",
    descripcion: "Acceso a la informacion publica, publicidad activa y buen gobierno.",
    puntos: 10
  },
  {
    titulo: "Tema V: La Agenda Digital para Espana",
    descripcion: "Objetivos, lineas de actuacion y marco estrategico.",
    puntos: 8
  },
  {
    titulo: "Tema VI: La proteccion de datos personales",
    descripcion: "RGPD, derechos, obligaciones y la Agencia Espanola de Proteccion de Datos.",
    puntos: 14
  },
  {
    titulo: "Tema VII: El acceso electronico a los servicios publicos",
    descripcion: "Ley 39/2015, sede electronica, registro electronico y notificaciones.",
    puntos: 11
  },
  {
    titulo: "Tema VIII: Esquema Nacional de Seguridad",
    descripcion: "Principios basicos, requisitos minimos y medidas de seguridad.",
    puntos: 9
  },
  {
    titulo: "Tema IX: Esquema Nacional de Interoperabilidad",
    descripcion: "Principios, dimensiones de la interoperabilidad y normas tecnicas.",
    puntos: 8
  }
]

export default function Bloque1Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-blue-200 hover:text-white text-sm mb-2 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-2xl font-bold">Bloque I</h1>
          <h2 className="text-blue-200">Organizacion del Estado y Administracion Electronica</h2>
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
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    {tema.puntos} puntos
                  </span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Estudiar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Seccion de examenes del bloque */}
        <div className="mt-8 p-6 bg-slate-800 text-white rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Examenes del Bloque I</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg transition-colors">
              Examen por temas
            </button>
            <button className="bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-lg transition-colors">
              Examen completo del bloque
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
