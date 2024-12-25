import { loadQuestions, startExam, nextQuestion, startRecoveryExam } from './exam.js';
import { showResults, initializeUI } from './ui.js';
import { migrateStudyNotes } from './stats.js';
// Limpiar cualquier estilo personalizado guardado anteriormente
localStorage.removeItem('customColors');
// Initialize the application
async function initializeApp() {
    try {
        console.log('Iniciando la aplicación...');

        // Migrate existing notes if necessary
        await migrateStudyNotes();
        console.log('Migración de notas de estudio completada');

        // Load the questions
        await loadQuestions('preguntas.xlsx');
        console.log('Preguntas cargadas correctamente');

        // Configure UI handlers
        initializeUI();
        console.log('UI inicializada');

        console.log('Aplicación inicializada correctamente');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
}

document.addEventListener('DOMContentLoaded', initializeApp);

// Error handling
window.onerror = function(message, source, lineno, colno, error) {
    console.error('An error occurred:', error);
    showErrorMessage(`An error occurred: ${error.message}. Please refresh the page and try again.`);
    return true;
};

function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: #ff4444;
        color: white;
        padding: 10px;
        text-align: center;
        z-index: 1000;
    `;
    document.body.prepend(errorDiv);
}

// Export functions that might be needed in other modules
export { showErrorMessage };
