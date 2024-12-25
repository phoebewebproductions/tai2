import { saveStudyNotes, removeQuestionFromNotes, saveExamStats } from './stats.js';
import { appState } from './state.js';
import { showResults } from './ui.js';

export async function loadQuestions(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo: ${response.statusText}`);
        }
        const data = await response.arrayBuffer();
        if (typeof XLSX === 'undefined') {
            throw new Error('XLSX library not loaded');
        }
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        appState.questions = XLSX.utils.sheet_to_json(worksheet).map(q => ({
            block: q['tema'],
            question: q['enunciado'],
            correctAnswer: q['respuestaCorrecta'],
            options: [
                q['respuestaCorrecta'],
                q['respuestaIncorrecta1'],
                q['respuestaIncorrecta2'],
                q['respuestaIncorrecta3']
            ],
            argument: q['argumento']
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
        showResults(appState.totalQuestions, appState.score, appState.questions);
        document.dispatchEvent(new Event('examFinished'));
        return;
    }

    displayCurrentQuestion(appState.questions[appState.currentQuestionIndex]);
}

export function checkAnswer(selectedOption, correctAnswer, argument) {
    const currentQuestion = appState.questions[appState.currentQuestionIndex];
  const block = currentQuestion && currentQuestion.block ? currentQuestion.block : 'Unknown';
  let hintElement = document.querySelector('.hint');

  if (!hintElement) {
    hintElement = document.createElement('div');
    hintElement.className = 'hint';
    document.body.appendChild(hintElement);
  }

  hintElement.innerHTML = '';
  hintElement.style.display = 'flex';
  hintElement.style.position = 'fixed';
  hintElement.style.top = '50px';
  hintElement.style.right = '10px';
  hintElement.style.zIndex = '200';
  hintElement.style.justifyContent = 'center';
  hintElement.style.alignItems = 'center';
  hintElement.style.width = '60px';
  hintElement.style.height = '60px';
  hintElement.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  hintElement.style.borderRadius = '50%';
  hintElement.style.fontSize = '40px';

  const argumentElement = document.getElementById('argumento');
  if (argumentElement) {
    argumentElement.style.display = 'block';
    argumentElement.innerHTML = argument;
  }

  if (selectedOption === correctAnswer) {
    appState.score++;
    removeQuestionFromNotes(currentQuestion);
    currentQuestion.isCorrect = true;
    hintElement.innerHTML = '✔️';
  } else {
    appState.incorrectQuestions.push(currentQuestion);
    saveStudyNotes(currentQuestion);
    currentQuestion.isCorrect = false;
    hintElement.innerHTML = '❌';
  }
  animateHint(hintElement);
    if (appState.totalQuestionsByBlock[block] !== undefined) {
        const correctAnswersByBlock = appState.questions.filter(q => q.block === block && q.isCorrect).length;
        const percentageByBlock = appState.totalQuestionsByBlock[block] > 0 
            ? (correctAnswersByBlock / appState.totalQuestionsByBlock[block]) * 100 
            : 0;
        appState.blockScores[block] = percentageByBlock;
    }

    const overallScore = ((appState.score / (appState.currentQuestionIndex + 1)) * 100).toFixed(2);
    const scoreDisplay = document.getElementById('scoreDisplay');
    if (scoreDisplay) {
        scoreDisplay.innerText = `${overallScore}%`;
    }

    const nextButton = document.getElementById('nextButton');
    if (nextButton) {
        nextButton.style.display = 'block';
    }
    if (hintElement) {
        hintElement.style.animation = 'none';
        void hintElement.offsetWidth; // Trigger reflow
        hintElement.style.animation = null;
    }
    if (hintElement && hintElement.parentNode !== document.querySelector('.app')) {
        document.querySelector('.app').appendChild(hintElement);
    }
    hintElement.classList.remove('animate');
    void hintElement.offsetWidth; // Trigger reflow
    hintElement.classList.add('animate');

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
    let notes = JSON.parse(localStorage.getItem('studyNotes')) || [];
    console.log('Notas de estudio cargadas:', notes);

    if (notes.length === 0) {
        alert('No hay preguntas incorrectas para recuperar.');
        return;
    }

    appState.questions = notes.map(note => ({
        block: 'Recuperación',
        question: note.question,
        correctAnswer: note.answer,
        options: [note.answer, ...(note.incorrectAnswers || [])].filter(Boolean).sort(() => Math.random() - 0.5),
        argument: note.argument
    }));

    console.log('Preguntas generadas para el examen de recuperación:', appState.questions);

    if (appState.questions.length === 0) {
        alert('No se pudieron generar preguntas para el examen de recuperación.');
        return;
    }

    appState.currentQuestionIndex = 0;
    appState.score = 0;
    appState.totalQuestions = appState.questions.length;
    appState.incorrectQuestions = [];

    for (const block in appState.blockScores) {
        appState.blockScores[block] = 100;
    }
    for (const block in appState.totalQuestionsByBlock) {
        appState.totalQuestionsByBlock[block] = 0;
    }

    initializeQuestionCounts(appState.questions);

    console.log('Examen de recuperación iniciado con preguntas:', appState.questions);

    document.body.setAttribute('data-exam-active', 'true');
    showQuestion();
    document.querySelector("#menu-exam-form").style.display = "none";
}

export function displayCurrentQuestion(question) {
    const preguntaElement = document.querySelector('.pregunta h2');
    const respuestaElement = document.querySelector('.respuesta');
    const questionsRemainingElement = document.getElementById('questionsRemaining');
    const argumentoElement = document.getElementById('argumento');
    const nextButton = document.getElementById('nextButton');
    const resultElement = document.getElementById('result');

    preguntaElement.textContent = question.question;
    respuestaElement.innerHTML = '';

    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        button.onclick = () => {
            checkAnswer(option, question.correctAnswer, question.argument);
            argumentoElement.style.display = 'block';
            nextButton.style.display = 'block';
        };
        respuestaElement.appendChild(button);
    });

    questionsRemainingElement.textContent = appState.totalQuestions - appState.currentQuestionIndex - 1;

    argumentoElement.style.display = 'none';
    nextButton.style.display = 'none';
    if (resultElement) {
        resultElement.style.display = 'none';
    }
}