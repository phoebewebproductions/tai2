import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Formacion Online</h1>
            <h2 className="text-blue-200 text-sm">TAI - Tecnico Auxiliar de Informatica</h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm bg-green-500 px-3 py-1 rounded-full">Modo Local</span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        {/* Tarjeta de bienvenida */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Bienvenido/a</h2>
              <p className="text-sm text-slate-500">Todos los datos se guardan localmente en tu navegador</p>
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <p className="text-blue-800 text-sm">
              <strong>Modo Local Activo:</strong> No necesitas iniciar sesion. Tu progreso se guarda automaticamente en este dispositivo.
            </p>
          </div>
        </div>

        {/* Zona de Estudio */}
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Zona de Estudio</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Link href="/bloques/bloque1" className="group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-2">Bloque I</h3>
              <p className="text-blue-100">Organizacion del Estado y Administracion Electronica</p>
            </div>
          </Link>
          
          <Link href="/bloques/bloque2" className="group">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-2">Bloque II</h3>
              <p className="text-emerald-100">Informatica Basica</p>
            </div>
          </Link>
          
          <Link href="/bloques/bloque3" className="group">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-2">Bloque III</h3>
              <p className="text-amber-100">Desarrollo de Sistemas</p>
            </div>
          </Link>
          
          <Link href="/bloques/bloque4" className="group">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-2">Bloque IV</h3>
              <p className="text-purple-100">Sistemas y Comunicaciones</p>
            </div>
          </Link>
        </div>

        {/* Zona de Examenes */}
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Zona de Examenes</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Link href="/examenes/portemas" className="group">
            <div className="bg-white border-2 border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Examen por Temas</h3>
              <p className="text-slate-500">Practica con preguntas organizadas por temas</p>
            </div>
          </Link>
          
          <Link href="/examenes/oficial" className="group">
            <div className="bg-white border-2 border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Examen Oficial</h3>
              <p className="text-slate-500">Simula un examen real de oposiciones TAI</p>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <footer className="bg-slate-800 text-white rounded-xl p-6 mt-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span>Sitio en Desarrollo (Beta)</span>
              </h4>
              <p className="text-slate-300 text-sm">
                Este sitio web ha sido desarrollado como parte de mi preparacion para las oposiciones TAI.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contacto</h4>
              <a href="mailto:phoebeproductions2023@gmail.com" className="text-blue-300 hover:text-blue-200 text-sm">
                phoebeproductions2023@gmail.com
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Apoya el Desarrollo</h4>
              <a 
                href="https://paypal.me/oajreviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Donar por PayPal
              </a>
            </div>
          </div>
          <div className="text-center mt-6 pt-4 border-t border-slate-700 text-slate-400 text-sm">
            2025 Formacion Online TAI. Todos los derechos reservados.
          </div>
        </footer>
      </div>
    </main>
  )
}
