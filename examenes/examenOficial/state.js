// state.js

export const appState = {
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    totalQuestions: 0,
    incorrectQuestions: [],
    skippedQuestions: [], // Añadido para seguimiento de preguntas saltadas
    // Puntuaciones por bloque
    blockScores: {
        'Bloque I': 100,
        'Bloque II': 100,
        'Bloque III': 100,
        'Bloque IV': 100
    },
    // Conteo total de preguntas por bloque
    totalQuestionsByBlock: {
        'Bloque I': 0,
        'Bloque II': 0,
        'Bloque III': 0,
        'Bloque IV': 0
    }
};