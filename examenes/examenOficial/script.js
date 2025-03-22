// Variables globales
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 0;
let incorrectQuestions = [];
const localStorageKey = 'studyNotes';
const statsKey = 'examStats';
const formi = document.querySelector("form");

// Función para cargar preguntas desde el archivo XLSX
async function loadQuestions(file) {
    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Error al cargar el archivo: ${response.statusText}`);
        }

        const data = await response.arrayBuffer();
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        questions = XLSX.utils.sheet_to_json(worksheet).map(q => ({
            block: q['tema'], // Cambia 'tema' según tu archivo
            question: q['enunciado'], // Cambia 'enunciado' según tu archivo
            correctAnswer: q['respuestaCorrecta'], // Cambia 'respuestaCorrecta' según tu archivo
            options: [
                q['respuestaCorrecta'],
                q['respuestaIncorrecta1'],
                q['respuestaIncorrecta2'],
                q['respuestaIncorrecta3']
            ],
            argument: q['argumento'] // Cambia 'argumento' según tu archivo
        }));

        console.log("Preguntas cargadas:", questions);
    } catch (error) {
        console.error('Error al cargar preguntas:', error);
    }
}

// Función para guardar estadísticas en el almacenamiento local
function saveExamStats(total, correct, blocks) {
    let stats = JSON.parse(localStorage.getItem(statsKey)) || [];
    stats.push({ 
        total, 
        correct, 
        blocks, 
        date: new Date(), 
        blockScores: {} // Agregar objeto para calificaciones por bloque
    });
    localStorage.setItem(statsKey, JSON.stringify(stats));
}


// Función para guardar notas de estudio en el almacenamiento local
function saveStudyNotes(questions) {
    let notes = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    questions.forEach(q => {
        console.log(`Guardando nota: ${q.question}, Respuesta: ${q.correctAnswer}, Argumento: ${q.argument}`);
        notes.push({ 
            question: q.question, 
            answer: q.correctAnswer,
            incorrectAnswers: Array.isArray(q.options) ? q.options.filter(opt => opt !== q.correctAnswer) : [], // Asegurar que sea un array
            argument: q.argument // Guardar el argumento
        });
    });
    localStorage.setItem(localStorageKey, JSON.stringify(notes));
}

// Manejo del envío del formulario
document.getElementById('menu-exam-form').onsubmit = function (event) {
    event.preventDefault();
    const examLength = document.getElementById('menu-exam-length').value;
    const selectedBlocks = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
        .map(input => input.value);

    // Iniciar el examen
    startExam(examLength, selectedBlocks);
};

// Función para iniciar el examen
function startExam(examLength, selectedBlocks) {
    formi.style.display = "none";
    currentQuestionIndex = 0;
    score = 0;
    incorrectQuestions = [];

    let numQuestions;

    if (examLength === 'all') {
        numQuestions = questions.filter(q => selectedBlocks.includes(q.block)).length;
    } else {
        numQuestions = parseInt(examLength);
    }

    totalQuestions = numQuestions;

    // Filtrar preguntas según los bloques seleccionados
    const filteredQuestions = questions.filter(q => selectedBlocks.includes(q.block));

    // Comprobar si hay suficientes preguntas
    if (filteredQuestions.length < numQuestions && examLength !== 'all') {
        alert('No hay suficientes preguntas en los bloques seleccionados.');
        location.reload();
        formi.style.display = "block";
        return;
    }

    // Seleccionar preguntas aleatorias o todas
    if (examLength === 'all') {
        questions = filteredQuestions;
    } else {
        // Seleccionar preguntas aleatorias
        const selectedQuestions = [];
        for (let i = 0; i < numQuestions; i++) {
            const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
            selectedQuestions.push(filteredQuestions[randomIndex]);
            filteredQuestions.splice(randomIndex, 1); // Asegurarse de no repetir preguntas
        }
        questions = selectedQuestions;
    }

    console.log('Preguntas seleccionadas para el examen:', questions); // Verificación de preguntas seleccionadas
    showQuestion(); // Mostrar la primera pregunta

    // Ocultar otros contenedores
    document.getElementById('statsContainer').style.display = 'none';
    document.getElementById('allStatsContainer').style.display = 'none';
    document.getElementById('studyNotesContainer').style.display = 'none';
}

// Función para mostrar la pregunta actual
function showQuestion() {
    const appDiv = document.querySelector('.app');

    // Añadir la clase de rotación
    appDiv.classList.add('rotate');

    // Esperar a que la animación termine antes de quitar la clase
    setTimeout(() => {
        appDiv.classList.remove('rotate');
    }, 800);

    // Comprobar si hemos llegado al final de las preguntas
    if (currentQuestionIndex >= questions.length) {
        console.log("Mostrando resultados...");
        showResults(); // Muestra los resultados
        return; // Salir de la función
    }

    const question = questions[currentQuestionIndex];
    document.querySelector('.pregunta h2').innerText = question.question;
    const respuestaDiv = document.querySelector('.respuesta');
    respuestaDiv.innerHTML = '';

    // Mezclar las opciones antes de mostrarlas
    const shuffledOptions = question.options.sort(() => Math.random() - 0.5);
    shuffledOptions.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'opcion';
        optionElement.innerText = option;
        optionElement.onclick = () => checkAnswer(option, question.correctAnswer, question.argument);
        respuestaDiv.appendChild(optionElement);
    });

    // Actualizar el contador de preguntas restantes
    document.getElementById('questionsRemaining').innerText = questions.length - currentQuestionIndex;
    document.querySelector('.app').style.display = 'flex';

    // Ocultar hint y argumento al mostrar nueva pregunta
    document.getElementById('hint').innerHTML = ''; // Limpiar hint
    document.getElementById('argumento').style.display = 'none'; // Ocultar argumento
    document.getElementById('nextButton').style.display = 'none'; // Ocultar botón siguiente
    respuestaDiv.classList.add('show');
}

// Función para comprobar la respuesta seleccionada
function checkAnswer(selectedOption, correctAnswer, argument) {
    const hintElement = document.getElementById('hint');

    // Mostrar argumento
    document.getElementById('argumento').style.display = 'block';
    
    if (selectedOption === correctAnswer) {
        score++;
        removeQuestionFromNotes(questions[currentQuestionIndex]); // Eliminar de notas de estudio si es correcta
        hintElement.innerHTML = '✔️'; // Tick para respuesta correcta
        hintElement.style.color = 'green'; // Color verde
    } else {
        incorrectQuestions.push(questions[currentQuestionIndex]);
        hintElement.innerHTML = '❌'; // X roja para respuesta incorrecta
        hintElement.style.color = 'red'; // Color rojo
    }

    // Mostrar el argumento correspondiente
    document.getElementById('argumento').innerHTML = argument;

    // Actualizar la puntuación
    const percentage = ((score / (currentQuestionIndex + 1)) * 100).toFixed(2);
    document.getElementById('scoreDisplay').innerText = `${percentage}%`;

    // Mostrar el botón siguiente
    document.getElementById('nextButton').style.display = 'block';
}

// Función para eliminar preguntas de las notas de estudio
function removeQuestionFromNotes(question) {
    let notes = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    notes = notes.filter(note => note.question !== question.question);
    localStorage.setItem(localStorageKey, JSON.stringify(notes));
}

// Manejo del botón "Siguiente"
document.getElementById('nextButton').onclick = function() {
    currentQuestionIndex++;
    console.log(`Índice actual de la pregunta: ${currentQuestionIndex}`); // Para depuración
    this.style.display = 'none'; // Ocultar botón siguiente
    showQuestion(); // Mostrar la siguiente pregunta
};

// Función para mostrar resultados al final del examen
function showResults() {
   

    const totalCorrect = score;
    const percentageTotal = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;

    console.log("Total de preguntas:", totalQuestions);
    console.log("Preguntas correctas:", totalCorrect);
    console.log("Porcentaje total:", percentageTotal);

    let statsHtml = `<h2>Resultados</h2><button class="close-button" onclick="location.reload()">X</button>`;
    statsHtml += `<p>Total de preguntas: ${totalQuestions}</p>`;
    statsHtml += `<p>Correctas: ${totalCorrect}</p>`;
    statsHtml += `<p>Porcentaje de aciertos: ${percentageTotal.toFixed(2)}%</p>`;

    // Guardar estadísticas del examen
    const blocks = [...new Set(questions.map(q => q.block))];
    saveExamStats(totalQuestions, totalCorrect, blocks);

    if (incorrectQuestions.length > 0) {
        statsHtml += `<h3>Preguntas incorrectas</h3>`;
        incorrectQuestions.forEach(q => {
            statsHtml += `
                <div class="pregunta-fallada">
                    <strong>Pregunta:</strong> ${q.question}<br>
                    <strong>Respuesta correcta:</strong> ${q.correctAnswer}<br>
                    <strong>Explicación:</strong> ${q.argument}<br>
                </div>
                <hr>
            `;
        });

        saveStudyNotes(incorrectQuestions);
    }

    console.log("HTML de estadísticas:", statsHtml);

    const statsContainer = document.getElementById('statsContainer');
    statsContainer.innerHTML = statsHtml;
    statsContainer.style.display = 'block';
    document.querySelector('.app').style.display = 'none';
}

// Función para mostrar todas las estadísticas acumuladas
function showAllStats() {
    formi.style.display = "none";
    let stats = JSON.parse(localStorage.getItem(statsKey)) || [];
    const allStatsList = document.getElementById('allStatsList');
    allStatsList.innerHTML = ''; // Limpiar estadísticas existantes

    if (stats.length === 0) {
        allStatsList.innerHTML = '<p>No hay estadísticas disponibles.</p>';
    } else {
        stats.forEach((stat, index) => {
            const percentage = stat.total > 0 ? (stat.correct / stat.total * 100).toFixed(2) : 0;

            const statElement = document.createElement('div');
            statElement.className = 'stat-item'; // Añadir clase para estilos
            statElement.innerHTML = `
                <div class="stat">
                    <strong>Fecha:</strong> ${new Date(stat.date).toLocaleString()}<br>
                    <strong>Total de preguntas:</strong> ${stat.total}<br>
                    <strong>Correctas:</strong> ${stat.correct}<br>
                    <strong>Porcentaje de aciertos:</strong> ${percentage}%<br>
                    <strong>Bloques:</strong> ${stat.blocks.join(', ')}
                    <table>
                        <thead>
                            <tr>
                                <th>Bloque</th>
                                <th>Calificación</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Object.entries(stat.blockScores).map(([block, score]) => `
                                <tr>
                                    <td>${block}</td>
                                    <td>${score.toFixed(2)}%</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                    <span class="delete-stat" data-index="${index}" style="cursor: pointer; color: red; float: right;">&times;</span>
                </div>
                <hr>
            `;
            allStatsList.appendChild(statElement);
        });

        // Asignar el evento onclick a todas las 'X' para eliminar estadísticas
        const deleteButtons = document.querySelectorAll('.delete-stat');
        deleteButtons.forEach(button => {
            button.onclick = function() {
                const index = this.getAttribute('data-index');
                deleteStat(index);
            };
        });
    }

    document.getElementById('allStatsContainer').style.display = 'block';
}


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

// Función para mostrar notas de estudio
function showStudyNotes() {
    formi.style.display = "none";
    let notes = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const notesContainer = document.getElementById('studyNotesContainer');
    notesContainer.innerHTML = `<h2>Notas de Estudio</h2>
<button class="close-button" onclick="location.reload()">X</button>`; // Limpiar notas existentes

    if (notes.length === 0) {
        notesContainer.innerHTML = '<p>No hay notas de estudio disponibles.</p>';
    } else {
        notes.forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.className = 'nota-estudio'; // Añadir clase para estilos
            noteElement.innerHTML += `
                <div class="nota">
                    <strong>Enunciado:</strong> ${note.question}<br>
                    <strong>Respuesta Correcta:</strong> ${note.answer}<br>
                    <strong>Explicación:</strong> ${note.argument || 'No disponible'}
                </div>
                <hr>
            `;
            notesContainer.appendChild(noteElement);
        });
    }

    notesContainer.style.display = 'block';
}

// Función para ocultar las notas de estudio
function hideStudyNotes() {
    document.getElementById('studyNotesContainer').style.display = 'none';
}

// Función para iniciar el examen de recuperación
function startRecoveryExam() {
    formi.style.display = "none";
    // Recuperar notas de estudio
    let notes = JSON.parse(localStorage.getItem(localStorageKey)) || [];

    if (notes.length === 0) {
        alert('No hay preguntas incorrectas para recuperar.');
        return;
    }

    // Debugging: Verificar el contenido de las notas de estudio antes de continuar
    console.log('Notas de estudio cargadas:', notes);

    // Seleccionar las preguntas incorrectas para el examen de recuperación
    questions = notes.map(note => ({
        block: 'Recuperación', // Puedes asignar un bloque específico si lo deseas
        question: note.question,
        correctAnswer: note.answer,
        options: [
            note.answer, // Respuesta correcta
            ...(Array.isArray(note.incorrectAnswers) ? note.incorrectAnswers : []) // Mostrar las respuestas incorrectas reales
        ].sort(() => Math.random() - 0.5), // Mezclar las opciones
        argument: note.argument
    }));

    // Verificar las preguntas generadas para el examen de recuperación
    console.log('Preguntas generadas para el examen de recuperación:', questions);

    if (questions.length === 0) {
        alert('No se pudieron generar preguntas para el examen de recuperación.');
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    totalQuestions = questions.length;
    incorrectQuestions = [];

    // Debugging: Confirmar que las preguntas se están cargando correctamente
    console.log('Examen de recuperación iniciado con preguntas:', questions);

    showQuestion(); // Comenzar el examen de recuperación

    // Ocultar otros contenedores
    document.getElementById('statsContainer').style.display = 'none';
    document.getElementById('allStatsContainer').style.display = 'none';
    document.getElementById('studyNotesContainer').style.display = 'none';
}

// Función para migrar notas de estudio existentes
function migrateStudyNotes() {
    let notes = JSON.parse(localStorage.getItem(localStorageKey)) || [];

    // Migrar cada nota para asegurar que incorrectAnswers exista y sea un array
    notes = notes.map(note => ({
        ...note,
        incorrectAnswers: Array.isArray(note.incorrectAnswers) ? note.incorrectAnswers : []
    }));

    localStorage.setItem(localStorageKey, JSON.stringify(notes));
}

// Función para mostrar estadísticas acumuladas con opción de eliminar
function showAllStats() {
    formi.style.display = "none";
    let stats = JSON.parse(localStorage.getItem(statsKey)) || [];
    const allStatsList = document.getElementById('allStatsList');
    allStatsList.innerHTML = ''; // Limpiar estadísticas existentes

    if (stats.length === 0) {
        allStatsList.innerHTML = '<p>No hay estadísticas disponibles.</p>';
    } else {
        stats.forEach((stat, index) => {
            const percentage = stat.total > 0 ? (stat.correct / stat.total * 100).toFixed(2) : 0;

            const statElement = document.createElement('div');
            statElement.className = 'stat-item'; // Añadir clase para estilos
            statElement.innerHTML = `
                <div class="stat">
                    <strong>Fecha:</strong> ${new Date(stat.date).toLocaleString()}<br>
                    <strong>Total de preguntas:</strong> ${stat.total}<br>
                    <strong>Correctas:</strong> ${stat.correct}<br>
                    <strong>Porcentaje de aciertos:</strong> ${percentage}%<br>
                    <strong>Bloques:</strong> ${stat.blocks.join(', ')}
                    <span class="delete-stat" data-index="${index}" style="cursor: pointer; color: red; float: right;">&times;</span>
                </div>
                <hr>
            `;
            allStatsList.appendChild(statElement);
        });

        // Asignar el evento onclick a todas las 'X' para eliminar estadísticas
        const deleteButtons = document.querySelectorAll('.delete-stat');
        deleteButtons.forEach(button => {
            button.onclick = function() {
                const index = this.getAttribute('data-index');
                deleteStat(index);
            };
        });
    }

    document.getElementById('allStatsContainer').style.display = 'block';
}

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

// Asignar el evento onclick para mostrar las estadísticas acumuladas
document.getElementById('viewStatsButton').onclick = function() {
    showAllStats();
};

// Asignar el evento onclick para mostrar las notas de estudio
document.getElementById('viewStudyNotesButton').onclick = function() {
    showStudyNotes();
};

// Asignar el evento onclick para iniciar el examen de recuperación
document.getElementById('startRecoveryButton').onclick = function() {
    startRecoveryExam();
};

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    migrateStudyNotes(); // Migrar notas existentes si es necesario
    loadQuestions('preguntas.xlsx'); // Especifica la ruta a tu archivo Excel
});
