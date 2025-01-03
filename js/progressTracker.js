import { CircularProgress } from '../components/CircularProgress.js';
import { cargarEstructuraBloque } from './structureLoader.js';
const PROGRESS_KEY = 'progreso_curso';
const LAST_EXAM_KEY = 'ultimo_examen_aprobado';
const BLOCK_PROGRESS_KEY = 'progreso_bloques';


export function cargarProgreso() {
    const progressJSON = localStorage.getItem(PROGRESS_KEY);
    let progreso = [];
    
    if (progressJSON) {
        try {
            progreso = JSON.parse(progressJSON);
            progreso = progreso.map(item => ({
                bloque: item.bloque,
                tema: item.tema,
                punto: item.punto,
                subpunto: item.subpunto,
                completado: item.completado === true
            }));
        } catch (error) {
            console.error('Error al cargar el progreso:', error);
        }
    }
    
    console.log('Progreso cargado:', progreso);
    return progreso;
}

export function guardarProgreso(progreso) {
    try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(progreso));
        console.log('Progreso guardado:', progreso);
    } catch (error) {
        console.error('Error al guardar el progreso:', error);
    }
}

export function guardarProgresoBloque(bloque, totalSubpuntos, subpuntosCompletados) {
    let progresoBloque = JSON.parse(localStorage.getItem(BLOCK_PROGRESS_KEY) || '{}');
    progresoBloque[bloque] = { totalSubpuntos, subpuntosCompletados };
    localStorage.setItem(BLOCK_PROGRESS_KEY, JSON.stringify(progresoBloque));
}

export function cargarProgresoBloque(bloque) {
    const progresoBloque = JSON.parse(localStorage.getItem(BLOCK_PROGRESS_KEY) || '{}');
    return progresoBloque[bloque] || null;
}

export function actualizarProgresoCompleto(bloque, tema, punto, subpunto) {
    let progreso = cargarProgreso();
    
    // If we receive a full ID (like from an exam completion), parse it
    if (arguments.length === 1 && typeof bloque === 'string' && bloque.length === 10) {
        const id = bloque;
        bloque = id.substring(0, 1);
        tema = id.substring(1, 3);
        punto = id.substring(3, 5);
        subpunto = id.substring(5, 8);
    }
    
    // Ensure all values are strings
    const nuevoProgreso = {
        bloque: String(bloque),
        tema: String(tema).padStart(2, '0'),
        punto: String(punto).padStart(2, '0'),
        subpunto: String(subpunto).padStart(3, '0'),
        completado: true
    };
    
    console.log('Guardando progreso:', nuevoProgreso);
    
    // Remove any existing progress for this specific point
    progreso = progreso.filter(p => 
        !(p.bloque === nuevoProgreso.bloque && 
          p.tema === nuevoProgreso.tema && 
          p.punto === nuevoProgreso.punto && 
          p.subpunto === nuevoProgreso.subpunto)
    );
    
    // Add the new progress
    progreso.push(nuevoProgreso);
    
    guardarProgreso(progreso);
    guardarUltimoExamenAprobado(`${nuevoProgreso.bloque}${nuevoProgreso.tema}${nuevoProgreso.punto}${nuevoProgreso.subpunto}e`);
    // Actualizar el progreso del bloque
    actualizarProgresoBloque(nuevoProgreso.bloque);
    
    window.dispatchEvent(new Event('progresoActualizado'));
}

export function guardarUltimoExamenAprobado(examenId) {
    localStorage.setItem(LAST_EXAM_KEY, examenId);
}

export function obtenerUltimoExamenAprobado() {
    return localStorage.getItem(LAST_EXAM_KEY);
}

export async function calcularEstadisticas() {
    try {
        const estructura = await cargarEstructuraBloque();
        const progreso = cargarProgreso();

        let totalSubpuntos = 0;
        let subpuntosCompletados = 0;

        estructura.temas.forEach(tema => {
            if (tema.puntos && Array.isArray(tema.puntos)) {
                tema.puntos.forEach(punto => {
                    if (punto.id) {
                        totalSubpuntos++;
                        const bloque = punto.id.substring(0, 1);
                        const temaId = punto.id.substring(1, 3);
                        const puntoId = punto.id.substring(3, 5);
                        const subpuntoId = punto.id.substring(5, 8);
                        
                        if (progreso.some(p => 
                            p.bloque === bloque &&
                            p.tema === temaId &&
                            p.punto === puntoId &&
                            p.subpunto === subpuntoId &&
                            p.completado
                        )) {
                            subpuntosCompletados++;
                        }
                    }
                });
            }
        });

        const porcentaje = totalSubpuntos > 0 ? Math.round((subpuntosCompletados / totalSubpuntos) * 100) : 0;
        return { totalSubpuntos, subpuntosCompletados, porcentaje };
    } catch (error) {
        console.error('Error al calcular estadísticas:', error);
        return { totalSubpuntos: 0, subpuntosCompletados: 0, porcentaje: 0 };
    }
}
export async function actualizarProgresoBloque(bloque) {
    const estructura = await cargarEstructuraBloque();
    const progreso = cargarProgreso();

    let totalSubpuntos = 0;
    let subpuntosCompletados = 0;

    estructura.temas.forEach(tema => {
        if (tema.puntos && Array.isArray(tema.puntos)) {
            tema.puntos.forEach(punto => {
                if (punto.id && punto.id.startsWith(bloque.toString())) {
                    totalSubpuntos++;
                    const temaId = punto.id.substring(1, 3);
                    const puntoId = punto.id.substring(3, 5);
                    const subpuntoId = punto.id.substring(5, 8);
                    
                    if (progreso.some(p => 
                        p.bloque === bloque.toString() &&
                        p.tema === temaId &&
                        p.punto === puntoId &&
                        p.subpunto === subpuntoId &&
                        p.completado
                    )) {
                        subpuntosCompletados++;
                    }
                }
            });
        }
    });

    guardarProgresoBloque(bloque, totalSubpuntos, subpuntosCompletados);
}

export function calcularProgresoBloque(bloque) {
    const progresoBloque = cargarProgresoBloque(bloque);
    if (progresoBloque) {
        const { totalSubpuntos, subpuntosCompletados } = progresoBloque;
        const porcentaje = totalSubpuntos > 0 ? (subpuntosCompletados / totalSubpuntos) * 100 : 0;
        console.log(`Progreso del bloque ${bloque}: ${porcentaje.toFixed(2)}%`);
        return porcentaje;
    } else {
        console.error(`No se encontró progreso para el bloque ${bloque}`);
        return 0;
    }
}

export async function inicializarProgresoBloque() {
    for (let i = 1; i <= 4; i++) {
        await actualizarProgresoBloque(i.toString());
    }
}
