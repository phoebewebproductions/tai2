import { readFileSync } from 'fs'
import { join } from 'path'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  const { bloque, tema } = await params
  try {
    const filePath = join(process.cwd(), 'bloques', bloque, 'temas', tema, 'preguntas.js')
    const content = readFileSync(filePath, 'utf-8')

    // Parse the JS export - extract the object from "export const preguntas = {...}"
    const match = content.match(/export\s+const\s+preguntas\s*=\s*(\{[\s\S]*\})\s*;?\s*$/)
    if (!match) {
      return NextResponse.json({ error: 'Formato de preguntas no reconocido' }, { status: 500 })
    }

    // Use Function constructor to safely evaluate the object literal
    const evalFn = new Function(`return ${match[1]}`)
    const preguntas = evalFn()

    return NextResponse.json(preguntas)
  } catch (error) {
    console.error('Error loading preguntas:', error)
    return NextResponse.json({ error: 'Preguntas no encontradas' }, { status: 404 })
  }
}
