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



// Función para eliminar una estadística específica
function deleteStat(index) {
    let stats = JSON.parse(localStorage.getItem(statsKey)) || [];
    stats.splice(index, 1); // Eliminar la estadística correspondiente
    localStorage.setItem(statsKey, JSON.stringify(stats)); // Guardar el nuevo array
    showAllStats(); // Refrescar la lista de estadísticas
}

// Función para ocultar todas las estadísticas acumuladas
function hideAllStats() {
    document.getElementById('allStatsContainer').style.display = 'none';
}

// Asegúrate de que cuando llames a saveExamStats, lo hagas con los bloques y las puntuaciones
export function saveExamStats(total, correct, questions, blockScores) {
    try {
        let stats = JSON.parse(localStorage.getItem('examStats')) || [];
        
        const newStat = {
            date: new Date().toISOString(),
            total,
            correct,
            blockScores: Object.fromEntries(
                Object.entries(blockScores).map(([block, data]) => [
                    block,
                    (data.correct / data.total) * 100
                ])
            )
        };

        // Check for duplicates based on date (up to the minute) and exam details
        const isDuplicate = stats.some(stat => 
            stat.date.slice(0, 16) === newStat.date.slice(0, 16) &&
            stat.total === newStat.total &&
            stat.correct === newStat.correct &&
            JSON.stringify(stat.blockScores) === JSON.stringify(newStat.blockScores)
        );

        if (!isDuplicate) {
            stats.push(newStat);
            localStorage.setItem('examStats', JSON.stringify(stats));
            console.log('Estadística guardada:', newStat);
        } else {
            console.log('Estadística duplicada, no se guardará:', newStat);
        }
    } catch (error) {
        console.error('Error saving exam stats:', error);
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



/**
 * Guarda las notas de estudio (preguntas incorrectas) en el almacenamiento local.
 * @param {Array} questions - Array de preguntas incorrectas.
 */
export function saveStudyNotes(question) {
    let notes = JSON.parse(localStorage.getItem('studyNotes')) || [];
    
    // Check if the question already exists in the notes
    const existingNoteIndex = notes.findIndex(note => note.question === question.question);
    
    if (existingNoteIndex !== -1) {
        // Update existing note
        notes[existingNoteIndex] = {
            question: question.question,
            answer: question.correctAnswer,
            incorrectAnswers: question.options.filter(option => option !== question.correctAnswer),
            argument: question.argument
        };
    } else {
        // Add new note
        notes.push({
            question: question.question,
            answer: question.correctAnswer,
            incorrectAnswers: question.options.filter(option => option !== question.correctAnswer),
            argument: question.argument
        });
    }
    
    localStorage.setItem('studyNotes', JSON.stringify(notes));
    console.log('Nota de estudio guardada:', notes[notes.length - 1]);
}

/**
 * Elimina una pregunta de las notas de estudio.
 * @param {Object} question - Objeto de la pregunta a eliminar.
 */
export function removeQuestionFromNotes(question) {
    let notes = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    notes = notes.filter(note => note.question !== question.question);
    localStorage.setItem(localStorageKey, JSON.stringify(notes));
}

/**
 * Migra las notas de estudio existentes para asegurar la estructura correcta.
 */
export function migrateStudyNotes() {
    let notes = JSON.parse(localStorage.getItem(localStorageKey)) || [];

    // Migrar cada nota para asegurar que incorrectAnswers exista y sea un array
    notes = notes.map(note => ({
        ...note,
        incorrectAnswers: Array.isArray(note.incorrectAnswers) ? note.incorrectAnswers : []
    }));

    localStorage.setItem(localStorageKey, JSON.stringify(notes));
}
