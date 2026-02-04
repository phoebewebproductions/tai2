export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Curso Interactivo TAI</h1>
        <p className="text-muted-foreground mb-8">
          Este proyecto contiene contenido educativo para la preparacion de oposiciones TAI.
        </p>
        
        <div className="grid gap-4">
          <div className="p-6 border rounded-lg bg-card">
            <h2 className="text-xl font-semibold mb-2">Bloque I</h2>
            <p className="text-muted-foreground">
              La Constitucion Espanola de 1978, Las Cortes Generales, El Gobierno, Transparencia, y mas.
            </p>
          </div>
          
          <div className="p-6 border rounded-lg bg-card">
            <h2 className="text-xl font-semibold mb-2">Bloque II</h2>
            <p className="text-muted-foreground">
              Contenido adicional del curso.
            </p>
          </div>
        </div>
        
        <p className="mt-8 text-sm text-muted-foreground">
          Nota: Este proyecto fue migrado desde archivos HTML estaticos. El contenido completo esta disponible en la estructura de carpetas bloques/.
        </p>
      </div>
    </main>
  )
}
