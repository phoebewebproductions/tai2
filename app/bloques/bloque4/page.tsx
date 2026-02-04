import Link from 'next/link'

const temas = [
  {
    titulo: "Tema I: Arquitectura de sistemas",
    descripcion: "Servidores, virtualizacion y arquitecturas de sistemas.",
    puntos: 12
  },
  {
    titulo: "Tema II: Administracion de sistemas Windows",
    descripcion: "Active Directory, GPO, servicios y administracion.",
    puntos: 14
  },
  {
    titulo: "Tema III: Administracion de sistemas Linux",
    descripcion: "Comandos, servicios, usuarios y administracion.",
    puntos: 13
  },
  {
    titulo: "Tema IV: Redes de comunicaciones",
    descripcion: "Protocolos, configuracion de red y servicios de red.",
    puntos: 15
  },
  {
    titulo: "Tema V: Seguridad informatica",
    descripcion: "Amenazas, proteccion, firewalls y politicas de seguridad.",
    puntos: 14
  },
  {
    titulo: "Tema VI: Almacenamiento",
    descripcion: "RAID, SAN, NAS y gestion del almacenamiento.",
    puntos: 10
  },
  {
    titulo: "Tema VII: Backup y recuperacion",
    descripcion: "Estrategias de backup, recuperacion ante desastres.",
    puntos: 9
  },
  {
    titulo: "Tema VIII: Monitorizacion",
    descripcion: "Herramientas de monitorizacion, logs y alertas.",
    puntos: 8
  },
  {
    titulo: "Tema IX: Cloud computing",
    descripcion: "IaaS, PaaS, SaaS, AWS, Azure y servicios en la nube.",
    puntos: 11
  },
  {
    titulo: "Tema X: Contenedores y orquestacion",
    descripcion: "Docker, Kubernetes y tecnologias de contenedores.",
    puntos: 10
  }
]

export default function Bloque4Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-purple-200 hover:text-white text-sm mb-2 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-2xl font-bold">Bloque IV</h1>
          <h2 className="text-purple-200">Sistemas y Comunicaciones</h2>
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
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                    {tema.puntos} puntos
                  </span>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Estudiar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Seccion de examenes del bloque */}
        <div className="mt-8 p-6 bg-slate-800 text-white rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Examenes del Bloque IV</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-lg transition-colors">
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
