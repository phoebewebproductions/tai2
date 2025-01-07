import { contarSubpuntosTotales } from './contadorSubpuntos.js';

const PROGRESS_KEYS = {
    1: 'courseProgress_block1',
    2: 'courseProgress_block2',
    3: 'courseProgress_block3',
    4: 'courseProgress_block4'
};

export let estructuraGlobal;

export function saveProgress(bloqueId, lastCompletedIndex) {
    try {
        const key = PROGRESS_KEYS[bloqueId];
        if (!key) {
            throw new Error(`Invalid bloqueId: ${bloqueId}`);
        }
        localStorage.setItem(key, JSON.stringify(lastCompletedIndex));
        console.log(`Progress saved for bloque ${bloqueId}: ${lastCompletedIndex}`);
    } catch (error) {
        console.error('Error saving progress:', error);
    }
}

export function loadProgress(bloqueId) {
    /*console.log(`Attempting to load progress for bloque ${bloqueId}`);*/
    try {
        const key = PROGRESS_KEYS[bloqueId];
        if (!key) {
            throw new Error(`Invalid bloqueId: ${bloqueId}`);
        }
        const savedProgress = localStorage.getItem(key);
        if (savedProgress !== null) {
            const progress = JSON.parse(savedProgress);
            /*console.log(`Progress loaded for bloque ${bloqueId}: ${progress}`);*/
            return progress;
        } else {
            console.log(`No saved progress found for bloque ${bloqueId}`);
            return -1;
        }
    } catch (error) {
        console.error('Error loading progress:', error);
        return -1;
    }
}

export function updateProgress(bloqueId, newCompletedIndex) {
    if (bloqueId < 1 || bloqueId > 4) {
        console.error('ID de bloque inválido. Debe ser entre 1 y 4.');
        return;
    }
    saveProgress(bloqueId, newCompletedIndex);
    console.log(`Progreso actualizado para el bloque ${bloqueId}: índice ${newCompletedIndex} completado`);
}

export function getLastCompletedIndex(bloqueId) {
    return loadProgress(bloqueId);
}

export function isPointCompleted(bloqueId, puntoIndex) {
    const lastCompletedIndex = getLastCompletedIndex(bloqueId);
    return puntoIndex <= lastCompletedIndex;
}

export function isPointUnlocked(bloqueId, puntoIndex) {
    const lastCompletedIndex = getLastCompletedIndex(bloqueId);
    return puntoIndex <= lastCompletedIndex + 1;
}

export function getBloqueId(puntoId) {
    if (!puntoId) return null;
    const primerDigito = parseInt(puntoId.toString()[0]);
    return primerDigito >= 1 && primerDigito <= 4 ? primerDigito : null;
}

export async function countSubpuntosInBloque(bloqueId) {
    const totalSubpuntos = await contarSubpuntosTotales();
    console.log(`Total subpuntos in all blocks: ${totalSubpuntos}`);
    return totalSubpuntos;
}

export async function calculateBlockProgress(bloqueId) {
    if (bloqueId < 1 || bloqueId > 4) {
        console.error('ID de bloque inválido. Debe ser entre 1 y 4.');
        return 0;
    }

    const totalSubpuntos = await countSubpuntosInBloque(bloqueId);
    const lastCompletedIndex = getLastCompletedIndex(bloqueId);
    const completedSubpuntos = lastCompletedIndex + 1;
    const progressPercentage = (completedSubpuntos / totalSubpuntos) * 100;

    console.log(`Progreso del Bloque ${bloqueId}: ${completedSubpuntos}/${totalSubpuntos} = ${progressPercentage.toFixed(2)}%`);

    return Math.min(progressPercentage, 100);
}

export function countUnlockedPoints(bloqueId) {
    const lastCompletedIndex = getLastCompletedIndex(bloqueId);
    return lastCompletedIndex + 2;
}



export async function cargarEstructuraBloque() {
    try {
        console.log('Iniciando carga de estructura');
        const response = await fetch('./estructura.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let estructura = await response.json();
        console.log('Estructura cargada:', estructura);
        
        if (!estructura || !estructura.temas || estructura.temas.length === 0) {
            console.error('La estructura cargada está vacía o no tiene temas');
            return null;
        }
        
        // Add an id property to the estructura object
        estructura.id = 1; // Assuming this is for block 1, adjust as needed
        
        // Create a linear array of all points
        estructura.puntosLineales = estructura.temas.flatMap((tema, temaIndex) => 
            tema.puntos.map((punto, puntoIndex) => ({
                ...punto,
                temaIndex,
                puntoIndex,
                completado: false
            }))
        );
        
        // Set the global structure
        estructuraGlobal = estructura;
        
        console.log('Estructura con puntos lineales:', estructuraGlobal);
        return estructuraGlobal;
    } catch (error) {
        console.error('Error loading estructura.json:', error);
        throw error;
    }
}

export function updateEstructuraGlobal() {
    if (estructuraGlobal && estructuraGlobal.puntosLineales) {
        estructuraGlobal.puntosLineales.forEach((punto, index) => {
            const bloqueId = getBloqueId(punto.id);
            if (bloqueId) {
                punto.completado = isPointCompleted(bloqueId, index);
            }
        });
    } else {
        console.error('estructuraGlobal or puntosLineales is not initialized');
    }
}

