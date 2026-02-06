import { readFileSync } from 'fs'
import { join } from 'path'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  const { bloque } = await params
  try {
    const filePath = join(process.cwd(), 'bloques', bloque, 'estructura.json')
    const data = readFileSync(filePath, 'utf-8')
    return NextResponse.json(JSON.parse(data))
  } catch (error) {
    return NextResponse.json({ error: 'Estructura no encontrada' }, { status: 404 })
  }
}
