import { loadQuestions, startExam, nextQuestion, startRecoveryExam, displayCurrentQuestion } from './exam.js';
import { saveExamStats, saveStudyNotes, migrateStudyNotes, calculateStatisticsAverages } from './stats.js';
import { appState } from './state.js';

/**
 * Referencias a elementos del DOM.
 */
const formi = document.getElementById('menu-exam-form');
const nextButton = document.getElementById('nextButton');
const viewStatsButton = document.getElementById('viewStatsButton');
const viewStudyNotesButton = document.getElementById('viewStudyNotesButton');
const startRecoveryButton = document.getElementById('startRecoveryButton');

/**
 * Oculta el formulario de inicio del examen.
 */function hideForm() {
    document.getElementById('menu-exam-form').style.display = 'none';
}
// Add this function
export function showStatsContainer(show) {
    const statsContainer = document.getElementById('statsContainer');
    if (statsContainer) {
        statsContainer.style.display = show ? 'flex' : 'none';
    }
    if (show) {
        hideForm();
    }
}

function showForm() {
    document.getElementById('menu-exam-form').style.display = 'flex';
}

export function showStudyNotesContainer(show) {
    const studyNotesContainer = document.getElementById('studyNotesContainer');
    studyNotesContainer.style.display = show ? 'block' : 'none';
    if (show) hideForm();
}



export function showAllStatsContainer(show) {
    const allStatsContainer = document.getElementById('allStatsContainer');
    allStatsContainer.style.display = show ? 'flex' : 'none';
    if (show) hideForm();
}





/**
 * Maneja el envío del formulario para iniciar el examen.
 */
export function handleFormSubmit() {
    formi.onsubmit = function (event) {
        event.preventDefault();
        const examLength = document.getElementById('menu-exam-length').value;
        const selectedBlocks = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
            .map(input => input.value);

        if (selectedBlocks.length === 0) {
            alert('Por favor, selecciona al menos un bloque.');
            return;
        }

        // Iniciar el examen
        startExam(examLength, selectedBlocks);
    };
}

/**
 * Maneja los eventos de los botones de la interfaz.
 */
export function handleUIButtons() {
    // Botón "Siguiente"
    nextButton.onclick = function() {
        nextQuestion();
    };

    // Botón para mostrar estadísticas acumuladas
    viewStatsButton.onclick = function() {
        showAllStats();
    };

    // Botón para mostrar notas de estudio
    viewStudyNotesButton.onclick = function() {
        showStudyNotes();
    };

    // Botón para iniciar el examen de recuperación
    startRecoveryButton.onclick = function() {
        startRecoveryExam();
    };
}

// Modificamos solo la función showResults para reflejar el nuevo cálculo de puntuación

export function showResults(total, correct, questions) {
    const formi = document.getElementById('menu-exam-form');
    if (formi) {
        formi.style.display = "none";
    }
    
    // Calcular estadísticas
    const correctAnswers = questions.filter(q => q.isCorrect === true).length;
    const incorrectAnswers = questions.filter(q => q.isCorrect === false).length;
    const skippedAnswers = questions.filter(q => q.isCorrect === undefined).length;
    
    // Calcular puntuación con penalización
    const rawScore = correctAnswers - (incorrectAnswers / 3);
    const finalScore = Math.max(0, rawScore);
    const percentageTotal = (finalScore / total) * 100;

    let statsHtml = `
        <h2>Resultados</h2>
        <button class="close-button" onclick="location.reload()">X</button>
        <p>Total de preguntas: ${total}</p>
        <p>Correctas: ${correctAnswers}</p>
        <p>Incorrectas: ${incorrectAnswers}</p>
        <p>Saltadas: ${skippedAnswers}</p>
        <p>Puntuación final: ${finalScore.toFixed(2)}</p>
        <p>Porcentaje de aciertos: ${percentageTotal.toFixed(2)}%</p>
        <p><em>Nota: Cada respuesta incorrecta resta 1/3 del valor de una correcta</em></p>
        <div id="blockScoreDisplay"></div>
    `;

    const blockScores = {};
    questions.forEach(question => {
        const block = question.block;
        if (!blockScores[block]) {
            blockScores[block] = { total: 0, correct: 0, incorrect: 0, skipped: 0 };
        }
        blockScores[block].total++;
        
        if (question.isCorrect === true) {
            blockScores[block].correct++;
        } else if (question.isCorrect === false) {
            blockScores[block].incorrect++;
        } else {
            blockScores[block].skipped++;
        }
    });

    // Mostrar resultados por bloque
    statsHtml += `<h3>Resultados por bloque</h3>`;
    for (const [block, data] of Object.entries(blockScores)) {
        // Calcular puntuación del bloque con penalización
        const blockRawScore = data.correct - (data.incorrect / 3);
        const blockFinalScore = Math.max(0, blockRawScore);
        const blockPercentage = data.total > 0 ? (blockFinalScore / data.total) * 100 : 0;

        statsHtml += `
            <div class="block-results">
                <strong>Bloque: ${block}</strong>
                <p>Correctas: ${data.correct}</p>
                <p>Incorrectas: ${data.incorrect}</p>
                <p>Saltadas: ${data.skipped}</p>
                <p>Puntuación: ${blockFinalScore.toFixed(2)}</p>
                <p>Porcentaje de aciertos: ${blockPercentage.toFixed(2)}%</p>
            </div>
        `;
    }

    // Mostrar preguntas incorrectas (sin mostrar argumentos)
    const incorrectQuestions = questions.filter(q => q.isCorrect === false);
    if (incorrectQuestions.length > 0) {
        statsHtml += `<h4>Preguntas incorrectas</h4>`;
        incorrectQuestions.forEach(q => {
            statsHtml += `
                <div class="pregunta-fallada">
                    <p><strong>Pregunta:</strong> ${q.question}</p>
                    <p><strong>Respuesta correcta:</strong> ${q.correctAnswer}</p>
                </div>
            `;
        });
    }

    const statsContainer = document.getElementById('statsContainer');
    if (statsContainer) {
        statsContainer.innerHTML = statsHtml;
        statsContainer.style.display = 'flex';
        statsContainer.style.flexDirection = 'column';
        
        // Apply styles to block-results and pregunta-fallada
        const blockResults = statsContainer.querySelectorAll('.block-results');
        blockResults.forEach(block => {
            block.style.border = '3px solid var( --color-primary)';
            block.style.backgroundColor = 'var(--color-primary-dark)';
            block.style.borderRadius = '15px';
            block.style.padding = '5%';
            block.style.margin = '1%';
            block.style.color = 'var(--color-background)';
            block.style.display = 'block';
            block.style.width = '100%';
            block.style.boxSizing = 'border-box';
        });

        const preguntasFalladas = statsContainer.querySelectorAll('.pregunta-fallada');
        preguntasFalladas.forEach(pregunta => {
            pregunta.style.borderRadius = '15px';
            pregunta.style.border = '3px solid var(--color-primary)';
            pregunta.style.backgroundColor = 'var(--color-incorrect)';
            pregunta.style.padding = '5%';
            pregunta.style.display = 'block';
            pregunta.style.width = '100%';
            pregunta.style.boxSizing = 'border-box';
            pregunta.style.marginBottom = '10px';
        });
    }
    
    const appElement = document.querySelector('.app');
    if (appElement) {
        appElement.style.display = 'none';
    }

    // Guardar estadísticas
    try {
        // Importar la función saveExamStats
        import('./stats.js').then(statsModule => {
            // Guardar estadísticas con los datos calculados
            statsModule.saveExamStats(total, finalScore, questions, blockScores);
            console.log('Estadísticas guardadas correctamente');
        }).catch(error => {
            console.error('Error al importar el módulo de estadísticas:', error);
        });
    } catch (error) {
        console.error('Error al guardar estadísticas:', error);
    }

    document.body.removeAttribute('data-exam-active');
}

// Update other functions in ui.js to use the new showHint function
// ... (keep other functions unchanged)
/**
 * Calcula y muestra promedios de las estadísticas acumuladas.
 */



/**
 * Muestra todas las estadísticas acumuladas.
 */
/**
 * Muestra todas las estadísticas acumuladas.
 */
function showAllStats() {
    showAllStatsContainer(true);
    const allStatsList = document.getElementById('allStatsList');
    allStatsList.innerHTML = '';
    let stats = JSON.parse(localStorage.getItem('examStats')) || [];

    // Show general averages
    const averages = calculateStatisticsAverages();
    const averagesElement = document.createElement('div');
    averagesElement.className = 'averages-summary';
    averagesElement.innerHTML = `
        <h3>Promedios Generales</h3>
        <p>Promedio General: ${averages.overall.toFixed(2)}%</p>
        <h4>Promedios por Bloque:</h4>
        <ul>
            ${Object.entries(averages.blocks).map(([block, avg]) => 
                `<li>${block}: ${isNaN(avg) ? 'N/A' : avg.toFixed(2)}%</li>`
            ).join('')}
        </ul>
    `;
    allStatsList.appendChild(averagesElement);

    if (stats.length === 0) {
        allStatsList.innerHTML += '<p>No hay estadísticas disponibles.</p>';
    } else {
        // Sort stats from newest to oldest
        stats.sort((a, b) => new Date(b.date) - new Date(a.date));

        stats.forEach((stat, index) => {
            const percentage = stat.total > 0 ? (stat.correct / stat.total * 100).toFixed(2) : 0;
            const date = new Date(stat.date);

            const statElement = document.createElement('div');
            statElement.className = 'stat-item';
            statElement.innerHTML = `
                <strong>Fecha: ${!isNaN(date.getTime()) ? date.toLocaleString() : 'Fecha inválida'}</strong><br>
                <strong>Total:</strong> ${stat.total}<br>
                <strong>Correctas:</strong> ${stat.correct}<br>
                <strong>Porcentaje:</strong> ${percentage}%<br>
                <strong>Bloques:</strong><br>
                <ul>
                    ${Object.entries(stat.blockScores || {}).map(([block, score]) => `
                        <li>${block}: ${typeof score === 'number' && !isNaN(score) ? score.toFixed(2) : 'N/A'}%</li>
                    `).join('')}
                </ul>
            `;
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-stat';
            deleteButton.textContent = 'Eliminar';
            deleteButton.setAttribute('data-index', index);
            deleteButton.addEventListener('click', function() {
                deleteStat(this.getAttribute('data-index'));
            });
            statElement.appendChild(deleteButton);
            allStatsList.appendChild(statElement);
        });
    }
}

function deleteStat(index) {
    let stats = JSON.parse(localStorage.getItem('examStats')) || [];
    stats.splice(index, 1);
    localStorage.setItem('examStats', JSON.stringify(stats));
    showAllStats(); // Update the view
}


/**
 * Muestra las notas de estudio.
 */
function showStudyNotes() {
    showStudyNotesContainer(true);
    const studyNotesList = document.getElementById('studyNotesList');
    studyNotesList.innerHTML = '';
    let notes = JSON.parse(localStorage.getItem('studyNotes')) || [];

    if (notes.length === 0) {
        studyNotesList.innerHTML = '<p>No hay notas de estudio disponibles.</p>';
    } else {
        notes.forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.className = 'note-item';
            noteElement.innerHTML = `
                <strong>Pregunta:</strong> ${note.question}<br>
                <strong>Respuesta:</strong> ${note.answer}<br>
                <strong>Explicación:</strong> ${note.argument}<br>
            `;
            studyNotesList.appendChild(noteElement);
        });
    }
}


/**
 * Escucha el evento personalizado 'examFinished' para mostrar los resultados.
 */
function listenForExamFinished() {
    document.addEventListener('examFinished', () => {
        showResults(appState.totalQuestions, appState.score, appState.questions);
    });
}
// Función principal de inicialización de la UI
export function initializeUI() {
    handleFormSubmit();
    handleUIButtons();
    listenForExamFinished();

    // Add event listeners to hide form when showing other containers
    document.getElementById('viewStudyNotesButton').addEventListener('click', () => showStudyNotesContainer(true));
    document.getElementById('viewStatsButton').addEventListener('click', () => showAllStatsContainer(true));
    document.getElementById('startRecoveryButton').addEventListener('click', () => {
        hideForm();
        startRecoveryExam();
    });
}
// Función para convertir checkboxes en botones interactivos
function enhanceBlockCheckboxes() {
    // Seleccionar todos los checkboxes de bloque
    const blockCheckboxes = document.querySelectorAll('#block1, #block2, #block3, #block4');
    
    // Para cada checkbox
    blockCheckboxes.forEach(checkbox => {
        // Obtener el elemento padre (check-item)
        const checkItem = checkbox.closest('.check-item');
        if (!checkItem) return;
        
        // Crear el nuevo botón
        const blockButton = document.createElement('button');
        blockButton.className = 'block-button';
        blockButton.type = 'button';
        
        // Añadir el icono de checkbox
        const checkboxIcon = document.createElement('span');
        checkboxIcon.className = 'checkbox-icon';
        blockButton.appendChild(checkboxIcon);
        
        // Obtener el texto del label
        const label = checkItem.querySelector('label');
        const labelText = label ? label.textContent : `Bloque ${checkbox.id.replace('block', '')}`;
        
        // Añadir el texto al botón
        const textSpan = document.createElement('span');
        textSpan.textContent = labelText;
        blockButton.appendChild(textSpan);
        
        // Actualizar el estado inicial
        if (checkbox.checked) {
            blockButton.classList.add('selected');
        }
        
        // Añadir evento de clic
        blockButton.addEventListener('click', () => {
            // Cambiar el estado del checkbox
            checkbox.checked = !checkbox.checked;
            
            // Actualizar la clase del botón
            blockButton.classList.toggle('selected', checkbox.checked);
            
            // Disparar un evento de cambio para que cualquier listener existente se active
            const event = new Event('change', { bubbles: true });
            checkbox.dispatchEvent(event);
        });
        
        // Reemplazar el contenido del check-item
        checkItem.innerHTML = '';
        checkItem.appendChild(checkbox); // Mantener el checkbox original pero oculto
        checkItem.appendChild(blockButton);
    });
}

// Función para mejorar los botones de acción
function enhanceActionButtons() {
    // Mejorar el botón de iniciar examen
    const startButton = document.querySelector('button[onclick="iniciarExamen()"]');
    if (startButton) {
        startButton.className = 'action-button gradient-button';
    }
    
    // Mejorar el botón de ver estadísticas
    const statsButton = document.querySelector('button[onclick="verEstadisticas()"]');
    if (statsButton) {
        statsButton.className = 'action-button gradient-button';
    }
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    enhanceBlockCheckboxes();
    enhanceActionButtons();
});

// Asegurarse de que se ejecute también si se carga dinámicamente
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(() => {
        enhanceBlockCheckboxes();
        enhanceActionButtons();
    }, 100);
}

