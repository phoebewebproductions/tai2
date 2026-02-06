import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  const { bloque, tema, id } = await params
  try {
    const filePath = join(process.cwd(), 'bloques', bloque, 'temas', tema, `${id}e.html`)
    
    if (!existsSync(filePath)) {
      return NextResponse.json({ error: 'Explicacion no encontrada' }, { status: 404 })
    }

    const html = readFileSync(filePath, 'utf-8')
    return NextResponse.json({ html })
  } catch (error) {
    return NextResponse.json({ error: 'Error al cargar la explicacion' }, { status: 500 })
  }
}
