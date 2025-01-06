
import { contarSubpuntosCompletados, contarSubpuntosTotales } from './contadorSubpuntos.js';

// Define separate keys for each block
const PROGRESS_KEYS = {
    1: 'courseProgress_block1',
    2: 'courseProgress_block2',
    3: 'courseProgress_block3',
    4: 'courseProgress_block4'
};

// Keep track of last completed points
const lastCompletedPoints = {
    1: null,
    2: null,
    3: null,
    4: null
};

export function saveProgress(bloqueId, lastCompletedIndex) {
    try {
        const key = PROGRESS_KEYS[bloqueId];
        if (!key) {
            throw new Error(`Invalid bloqueId: ${bloqueId}`);
        }

        // Find the point that was completed
        const punto = estructuraGlobal.puntosLineales[lastCompletedIndex];
        if (!punto) {
            throw new Error(`Invalid point index: ${lastCompletedIndex}`);
        }

        // Save both the index and the point ID
        const progressData = {
            index: lastCompletedIndex,
            pointId: punto.id
        };

        localStorage.setItem(key, JSON.stringify(progressData));
        lastCompletedPoints[bloqueId] = punto.id;

        console.log(`Progress saved for bloque ${bloqueId}:`, progressData);
    } catch (error) {
        console.error('Error saving progress:', error);
    }
}

export function loadProgress(bloqueId) {
    try {
        const key = PROGRESS_KEYS[bloqueId];
        if (!key) {
            return -1;
        }

        const savedProgress = localStorage.getItem(key);
        if (!savedProgress) {
            return -1;
        }

        const progressData = JSON.parse(savedProgress);
        return progressData.index;
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

    const punto = estructuraGlobal.puntosLineales[newCompletedIndex];
    if (!punto) {
        console.error('Invalid point index:', newCompletedIndex);
        return;
    }

    saveProgress(bloqueId, newCompletedIndex);
    
    alert(`Guardando progreso:
    Bloque: ${bloqueId}
    Índice del punto: ${newCompletedIndex}
    ID del punto: ${punto.id}
    Título del punto: ${punto.titulo}
    Tema: ${estructuraGlobal.temas[punto.temaIndex].titulo}
    `);
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

export function updateEstructuraGlobal() {
    if (!estructuraGlobal || !estructuraGlobal.puntosLineales) {
        console.error('estructuraGlobal not properly initialized');
        return;
    }

    estructuraGlobal.puntosLineales.forEach((punto, index) => {
        const bloqueId = getBloqueId(punto.id);
        if (bloqueId) {
            const lastCompletedIndex = getLastCompletedIndex(bloqueId);
            punto.completado = index <= lastCompletedIndex;
        }
    });
}

export function getBloqueId(puntoId) {
    if (!puntoId) return null;
    const primerDigito = parseInt(puntoId.toString()[0]);
    return primerDigito >= 1 && primerDigito <= 4 ? primerDigito : null;
}

export async function countSubpuntosInBloque(bloqueId) {
    const totalSubpuntos = await contarSubpuntosTotales();
    console.log(`Total subpuntos in all blocks: ${totalSubpuntos}`);
    // For now, we're assuming all subpuntos are in one block. 
    // You may need to adjust this if subpuntos are distributed across multiple blocks.
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
    return lastCompletedIndex + 2; // El último completado más el siguiente disponible
}

