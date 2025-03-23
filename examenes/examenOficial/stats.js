// stats.js

import { appState } from './state.js';

/**
 * Claves para el almacenamiento local.
 */

const localStorageKey = 'studyNotes';

/**
 * Guarda las estadísticas del examen en el almacenamiento local.
 * @param {number} total - Total de preguntas.
 * @param {number} correct - Número de respuestas correctas.
 * @param {Array} questions - Array de preguntas del examen.
 */
const statsKey = 'examStats';

// Asegúrate de que cuando llames a saveExamStats, lo hagas con los bloques y las puntuaciones
export function saveExamStats(total, finalScore, questions, blockScores) {
    try {
        console.log('Guardando estadísticas...');
        console.log('Total:', total);
        console.log('Puntuación final:', finalScore);
        console.log('Bloques:', blockScores);
        
        // Obtener estadísticas existentes o inicializar un array vacío
        let stats = [];
        try {
            const statsStr = localStorage.getItem(statsKey);
            stats = statsStr ? JSON.parse(statsStr) : [];
            if (!Array.isArray(stats)) {
                console.warn('Las estadísticas guardadas no son un array, inicializando uno nuevo');
                stats = [];
            }
        } catch (e) {
            console.error('Error al leer estadísticas existentes:', e);
            stats = [];
        }
        
        // Crear nueva estadística
        const newStat = {
            date: new Date().toISOString(),
            total: total,
            correct: finalScore,
            blockScores: {}
        };
        
        // Convertir blockScores al formato esperado
        for (const [block, data] of Object.entries(blockScores)) {
            if (typeof data === 'object' && data !== null) {
                // Si blockScores es un objeto con datos detallados
                const blockRawScore = data.correct - (data.incorrect / 3);
                const blockFinalScore = Math.max(0, blockRawScore);
                const blockPercentage = data.total > 0 ? (blockFinalScore / data.total) * 100 : 0;
                newStat.blockScores[block] = blockPercentage;
            } else {
                // Si blockScores ya contiene porcentajes
                newStat.blockScores[block] = data;
            }
        }
        
        // Añadir la nueva estadística
        stats.push(newStat);
        
        // Guardar en localStorage
        localStorage.setItem(statsKey, JSON.stringify(stats));
        console.log('Estadísticas guardadas correctamente:', newStat);
        console.log('Total de estadísticas guardadas:', stats.length);
    } catch (error) {
        console.error('Error al guardar estadísticas:', error);
    }
}

export function calculateStatisticsAverages() {
    const stats = JSON.parse(localStorage.getItem(statsKey)) || [];
    
    let totalCorrect = 0;
    let totalQuestions = 0;
    let blockScoresTotal = {};

    stats.forEach(stat => {
        if (isNaN(stat.correct) || isNaN(stat.total)) return; // Skip invalid entries

        totalCorrect += stat.correct;
        totalQuestions += stat.total;

        // Accumulate block statistics
        for (const [block, score] of Object.entries(stat.blockScores)) {
            if (!blockScoresTotal[block]) {
                blockScoresTotal[block] = { totalScore: 0, count: 0 };
            }
            if (typeof score === 'number' && !isNaN(score)) {
                blockScoresTotal[block].totalScore += score;
                blockScoresTotal[block].count++;
            }
        }
    });

    const averages = {
        overall: totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0,
        blocks: {}
    };

    for (const [block, data] of Object.entries(blockScoresTotal)) {
        averages.blocks[block] = data.count > 0 ? data.totalScore / data.count : 0;
    }

    return averages;
}

// Función para mostrar todas las estadísticas acumuladas
export function showAllStats() {
    // Implementación de showAllStats
    console.log("showAllStats function called");
}

// Función para eliminar una estadística específica
export function deleteStat(index) {
    let stats = JSON.parse(localStorage.getItem(statsKey)) || [];
    stats.splice(index, 1); // Eliminar la estadística correspondiente
    localStorage.setItem(statsKey, JSON.stringify(stats)); // Guardar el nuevo array
    showAllStats(); // Refrescar la lista de estadísticas
}

// Función para ocultar todas las estadísticas acumuladas
export function hideAllStats() {
    document.getElementById('allStatsContainer').style.display = 'none';
}

/**
 * Guarda las notas de estudio (preguntas incorrectas) en el almacenamiento local.
 * @param {Array} questions - Array de preguntas incorrectas.
 */
export function saveStudyNotes(question) {
    // Eliminamos esta funcionalidad
    return;
}

/**
 * Elimina una pregunta de las notas de estudio.
 * @param {Object} question - Objeto de la pregunta a eliminar.
 */
export function removeQuestionFromNotes(question) {
    // Eliminamos esta funcionalidad
    return;
}

/**
 * Migra las notas de estudio existentes para asegurar la estructura correcta.
 */
export function migrateStudyNotes() {
    // Eliminamos esta funcionalidad
    return;
}