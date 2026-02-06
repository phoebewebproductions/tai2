import './globals.css'

export const metadata = {
  title: 'Formacion Online TAI',
  description: 'Curso interactivo para la preparacion de oposiciones TAI - Tecnico Auxiliar de Informatica',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
