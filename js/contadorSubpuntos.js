import { cargarEstructuraBloque } from './structureLoader.js';

export async function contarSubpuntosTotales() {
    try {
        const estructura = await cargarEstructuraBloque();
        
        if (!estructura || !estructura.temas || !Array.isArray(estructura.temas)) {
            console.error('La estructura no es válida o no contiene temas');
            return 0;
        }

        let totalSubpuntos = 0;

        estructura.temas.forEach(tema => {
            if (tema.puntos && Array.isArray(tema.puntos)) {
                totalSubpuntos += tema.puntos.length;
            }
        });

        console.log(`Total de subpuntos encontrados: ${totalSubpuntos}`);
        return totalSubpuntos;
    } catch (error) {
        console.error('Error al contar los subpuntos:', error);
        return 0;
    }
}

export function contarSubpuntosCompletados() {
    try {
        const subpuntosCompletados = document.querySelectorAll('.punto-btn.subpunto-btn.completado');
        const totalCompletados = subpuntosCompletados.length;
        
        console.log(`Total de subpuntos completados: ${totalCompletados}`);
        return totalCompletados;
    } catch (error) {
        console.error('Error al contar los subpuntos completados:', error);
        return 0;
    }
}

// Función para mostrar el resultado en un alert
export async function mostrarTotalSubpuntos() {
    const total = await contarSubpuntosTotales();
   
}

// Función para mostrar el resultado de subpuntos completados en un alert
export function mostrarSubpuntosCompletados() {
    const completados = contarSubpuntosCompletados();
    mostrarEstadisticasSubpuntos();
}

// Función para mostrar ambos resultados en un alert
export async function mostrarEstadisticasSubpuntos() {
    const total = await contarSubpuntosTotales();
    const completados = contarSubpuntosCompletados();
    const porcentaje = (completados / total) * 100;
  
}

// Ejemplo de uso
// mostrarEstadisticasSubpuntos();

function calcularPorcentajeCompletado() {
    const total = contarSubpuntosTotales();
    const completados = contarSubpuntosCompletados();
    const porcentaje = (completados / total) * 100;
    return Math.round(porcentaje);
}

export function mostrarPorcentajeCompletado() {
    const porcentaje = calcularPorcentajeCompletado();
   
}

