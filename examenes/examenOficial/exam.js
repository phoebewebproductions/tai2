import { appState } from './state.js';
import { showResults } from './ui.js';

export async function loadQuestions(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo: ${response.statusText}`);
        }
        const data = await response.arrayBuffer();
        
        // Verificar que XLSX esté disponible globalmente
        if (typeof window.XLSX === 'undefined') {
            throw new Error('XLSX library not loaded. Make sure the script is included in your HTML.');
        }
        
        const workbook = window.XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        appState.questions = window.XLSX.utils.sheet_to_json(worksheet).map(q => ({
            block: q['tema'],
            question: q['enunciado'],
            correctAnswer: q['respuestaCorrecta'],
            options: [
                q['respuestaCorrecta'],
                q['respuestaIncorrecta1'],
                q['respuestaIncorrecta2'],
                q['respuestaIncorrecta3']
            ]
            // Eliminamos el argumento de las preguntas
        }));
        console.log("Preguntas cargadas:", appState.questions);
    } catch (error) {
        console.error('Error al cargar preguntas:', error);
    }
}

export function startExam(examLength, selectedBlocks) {
    const formi = document.getElementById('menu-exam-form');
    formi.style.display = "none";
    appState.currentQuestionIndex = 0;
    appState.score = 0;
    appState.incorrectQuestions = [];
    appState.skippedQuestions = []; // Añadimos array para preguntas saltadas

    // Create hint element if it doesn't exist
    let hintElement = document.querySelector('.hint');
    if (!hintElement) {
        hintElement = document.createElement('div');
        hintElement.className = 'hint';
        document.body.appendChild(hintElement);
    }
    for (const block in appState.blockScores) {
        appState.blockScores[block] = 100;
    }
    for (const block in appState.totalQuestionsByBlock) {
        appState.totalQuestionsByBlock[block] = 0;
    }

    let numQuestions = examLength === 'all' 
        ? appState.questions.filter(q => selectedBlocks.includes(q.block)).length 
        : parseInt(examLength);

    appState.totalQuestions = numQuestions;
    const filteredQuestions = appState.questions.filter(q => selectedBlocks.includes(q.block));
    initializeQuestionCounts(filteredQuestions);

    if (filteredQuestions.length < numQuestions && examLength !== 'all') {
        alert('No hay suficientes preguntas en los bloques seleccionados.');
        location.reload();
        return;
    }

    appState.questions = examLength === 'all' ? filteredQuestions : 
        Array(numQuestions).fill().map(() => filteredQuestions.splice(Math.floor(Math.random() * filteredQuestions.length), 1)[0]);

    console.log('Preguntas seleccionadas para el examen:', appState.questions);
    showQuestion();

    document.getElementById('statsContainer').style.display = 'none';
    document.getElementById('allStatsContainer').style.display = 'none';
    document.getElementById('studyNotesContainer').style.display = 'none';
    document.body.setAttribute('data-exam-active', 'true');
}

function initializeQuestionCounts(questions) {
    questions.forEach(question => {
        if (appState.totalQuestionsByBlock[question.block] !== undefined) {
            appState.totalQuestionsByBlock[question.block]++;
        }
    });
}

export function showQuestion() {
    const appDiv = document.querySelector('.app');
    appDiv.classList.add('rotate');
    appDiv.style.display = "flex";
    setTimeout(() => {
        appDiv.classList.remove('rotate');
    }, 500);

    if (appState.currentQuestionIndex >= appState.questions.length) {
        console.log("Mostrando resultados...");
        // Calcular puntuación final con penalización
        calculateFinalScore();
        showResults(appState.totalQuestions, appState.score, appState.questions);
        document.dispatchEvent(new Event('examFinished'));
        return;
    }

    displayCurrentQuestion(appState.questions[appState.currentQuestionIndex]);
}

// Nueva función para calcular la puntuación final con penalización
function calculateFinalScore() {
    const correctAnswers = appState.questions.filter(q => q.isCorrect === true).length;
    const incorrectAnswers = appState.questions.filter(q => q.isCorrect === false).length;
    const skippedAnswers = appState.questions.filter(q => q.isCorrect === undefined).length;
    
    // Cada respuesta correcta vale 1 punto
    // Cada respuesta incorrecta resta 1/3 de punto
    // Las preguntas saltadas no suman ni restan
    const rawScore = correctAnswers - (incorrectAnswers / 3);
    
    // Asegurarse de que la puntuación no sea negativa
    appState.score = Math.max(0, rawScore);
    
    console.log(`Puntuación final: ${appState.score.toFixed(2)} (Correctas: ${correctAnswers}, Incorrectas: ${incorrectAnswers}, Saltadas: ${skippedAnswers})`);
    
    // Actualizar también las puntuaciones por bloque
    for (const block in appState.blockScores) {
        const blockQuestions = appState.questions.filter(q => q.block === block);
        const blockCorrect = blockQuestions.filter(q => q.isCorrect === true).length;
        const blockIncorrect = blockQuestions.filter(q => q.isCorrect === false).length;
        
        const blockRawScore = blockCorrect - (blockIncorrect / 3);
        const blockFinalScore = Math.max(0, blockRawScore);
        const blockTotal = blockQuestions.length;
        
        if (blockTotal > 0) {
            appState.blockScores[block] = (blockFinalScore / blockTotal) * 100;
        }
    }
}

export function checkAnswer(selectedOption, correctAnswer) {
    const currentQuestion = appState.questions[appState.currentQuestionIndex];
    const block = currentQuestion && currentQuestion.block ? currentQuestion.block : 'Unknown';
    
    // Eliminar el hint anterior si existe
    let hintElement = document.querySelector('.hint');
    if (hintElement) {
        hintElement.remove();
    }
    
    // Crear un nuevo elemento hint
    hintElement = document.createElement('div');
    hintElement.className = 'hint';
    document.body.appendChild(hintElement);

    // Desactivar todos los botones para evitar múltiples clics
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.disabled = true;
    });

    // Establecer el contenido del hint según la respuesta
    if (selectedOption === correctAnswer) {
        currentQuestion.isCorrect = true;
        hintElement.innerHTML = '✔️';
        hintElement.style.color = 'var(--color-secondary)';
    } else {
        currentQuestion.isCorrect = false;
        hintElement.innerHTML = '❌';
        hintElement.style.color = '#e53e3e';
    }
    
    // Asegurarse de que el hint sea visible
    hintElement.style.display = 'flex';
    
    if (appState.totalQuestionsByBlock[block] !== undefined) {
        const correctAnswersByBlock = appState.questions.filter(q => q.block === block && q.isCorrect).length;
        const percentageByBlock = appState.totalQuestionsByBlock[block] > 0 
            ? (correctAnswersByBlock / appState.totalQuestionsByBlock[block]) * 100 
            : 0;
        appState.blockScores[block] = percentageByBlock;
    }

    // Mostramos la puntuación actual (sin penalización hasta el final)
    const correctAnswers = appState.questions.filter(q => q.isCorrect === true).length;
    const totalAnswered = appState.questions.filter(q => q.isCorrect !== undefined).length;
    const overallScore = ((correctAnswers / totalAnswered) * 100).toFixed(2);
    
    const scoreDisplay = document.getElementById('scoreDisplay');
    if (scoreDisplay) {
        scoreDisplay.innerText = `${overallScore}%`;
    }

    // Ocultar el botón de saltar después de responder
    const skipButton = document.getElementById('skipButton');
    if (skipButton) {
        skipButton.style.display = 'none';
    }
    
    // Avanzar automáticamente después de un breve retraso
    setTimeout(() => {
        nextQuestion();
    }, 1500); // 1.5 segundos de retraso para mostrar el feedback
}

// Función para saltar la pregunta actual
export function skipQuestion() {
    const currentQuestion = appState.questions[appState.currentQuestionIndex];
    currentQuestion.isCorrect = undefined; // Marcamos como no respondida
    appState.skippedQuestions.push(currentQuestion);
    
    const hintElement = document.querySelector('.hint');
    if (hintElement) {
        hintElement.style.display = 'none';
    }
    
    nextQuestion();
}

function animateHint(element) {
    let start;
    const duration = 500; // Animation duration in milliseconds
  
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
  
      // Scale animation
      const scale = percentage < 0.5 
        ? 1 + 2 * percentage // Scale up to 3x in the first half
        : 3 - 2 * percentage; // Scale down to 1x in the second half
  
      // Opacity animation
      const opacity = percentage < 0.5
        ? 2 * percentage // Fade in in the first half
        : 1; // Stay fully opaque in the second half
  
      element.style.transform = `scale(${scale})`;
      element.style.opacity = opacity;
  
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    }
  
    requestAnimationFrame(step);
}

export function nextQuestion() {
    const hintElement = document.querySelector('.hint');
    if (hintElement) {
        hintElement.style.display = 'none';
        hintElement.innerHTML = '';
    }
    
    appState.currentQuestionIndex++;
    console.log(`Índice actual de la pregunta: ${appState.currentQuestionIndex}`);
    const nextButton = document.getElementById('nextButton');
    if (nextButton) {
        nextButton.style.display = 'none';
    }
    
    const argumentoElement = document.getElementById('argumento');
    if (argumentoElement) {
        argumentoElement.style.display = 'none';
    }
    
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.style.display = 'none';
    }

    showQuestion();
}

export function startRecoveryExam() {
    // Eliminamos la funcionalidad de examen de recuperación ya que no queremos
    // guardar notas de estudio
    alert('La funcionalidad de examen de recuperación ha sido desactivada.');
    return;
}

export function displayCurrentQuestion(question) {
    const preguntaElement = document.querySelector('.pregunta h2');
    const respuestaElement = document.querySelector('.respuesta');
    const questionsRemainingElement = document.getElementById('questionsRemaining');
    const argumentoElement = document.getElementById('argumento');
    const nextButton = document.getElementById('nextButton');
    const resultElement = document.getElementById('result');
    
    // Asegurarse de que el botón de saltar pregunta existe
    let skipButton = document.getElementById('skipButton');
    if (!skipButton) {
        skipButton = document.createElement('button');
        skipButton.id = 'skipButton';
        skipButton.textContent = 'Saltar Pregunta';
        skipButton.classList.add('skip-button');
        skipButton.onclick = skipQuestion;
        
        // Añadir el botón después del contenedor de respuestas
        respuestaElement.parentNode.insertBefore(skipButton, respuestaElement.nextSibling);
    }
    
    // Mostrar el botón de saltar
    skipButton.style.display = 'block';

    preguntaElement.textContent = question.question;
    respuestaElement.innerHTML = '';

    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        button.onclick = () => {
            checkAnswer(option, question.correctAnswer);
            // Ya no necesitamos mostrar el botón de siguiente
            // nextButton.style.display = 'block';
            skipButton.style.display = 'none'; // Ocultar botón de saltar después de responder
        };
        respuestaElement.appendChild(button);
    });

    questionsRemainingElement.textContent = appState.totalQuestions - appState.currentQuestionIndex - 1;

    // Ocultar el elemento de argumento
    if (argumentoElement) {
        argumentoElement.style.display = 'none';
    }
    
    // Ocultar el botón de siguiente ya que avanzaremos automáticamente
    if (nextButton) {
        nextButton.style.display = 'none';
    }
    
    if (resultElement) {
        resultElement.style.display = 'none';
    }
}

/**
 * Mezcla aleatoriamente un array.
 * @param {Array} array - Array a mezclar.
 * @returns {Array} Array mezclado.
 */
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}