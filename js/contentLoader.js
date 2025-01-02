import { findId } from './idfinder.js';
import { iniciarExamen } from './examManager.js';

export async function cargarContenidoPunto(tema, punto, id, puntoElement) {
    console.log(`Loading content for tema ${tema}, punto ${punto}, id ${id}`);
    const puntoContenido = puntoElement.querySelector('.punto-contenido');
    
    if (puntoContenido.classList.contains('oculto')) {
        const examId = `${id}e`;
        const temaFormatted = tema.toString();
        const url = `./temas/tema${temaFormatted}/${examId}.html`;
        const questionsUrl = `./temas/tema${temaFormatted}/preguntas.js`;
        console.log(`Fetching content from: ${url}`);
        console.log(`Fetching questions from: ${questionsUrl}`);
        try {
            const [contentResponse, questionsResponse] = await Promise.all([
                fetch(url),
                fetch(questionsUrl)
            ]);

            if (!contentResponse.ok || !questionsResponse.ok) {
                throw new Error(`HTTP error! status: ${contentResponse.status} or ${questionsResponse.status}`);
            }

            const [contenido, questionsText] = await Promise.all([
                contentResponse.text(),
                questionsResponse.text()
            ]);

            console.log('Fetched content:', contenido);
            puntoContenido.innerHTML = contenido;
            puntoContenido.classList.remove('oculto');

            const explicaciones = {};
            const explicacionesElements = puntoContenido.querySelectorAll('li[id]');
            console.log('Elementos de explicación encontrados:', explicacionesElements.length);
            explicacionesElements.forEach(el => {
                const preguntaId = el.id;
                explicaciones[preguntaId] = el.innerHTML;
                console.log(`Explicación para pregunta ${preguntaId}:`, el.innerHTML);
            });
            console.log('Explicaciones extraídas del HTML:', explicaciones);

            const article = puntoContenido.querySelector('article');
            console.log('Found article:', article);
            if (article) {
                console.log(`Using exam ID: ${examId}`);
                
                const btnExamen = document.createElement('button');
                btnExamen.textContent = 'Realizar Mini Examen';
                btnExamen.className = 'mini-examen-btn';
                btnExamen.addEventListener('click', async () => {
                    console.log(`Initiating exam with ID: ${examId}`);
                    const idInfo = findId(examId);
                    console.log(`Calling iniciarExamen with params:`, idInfo.bloque, idInfo.tema, idInfo.punto, idInfo.subpunto, examId);
                    try {
                        const preguntas = await cargarPreguntasExamen(idInfo.bloque, idInfo.tema, examId, explicaciones);
                        iniciarExamen(idInfo.bloque, idInfo.tema, idInfo.punto, idInfo.subpunto, examId, preguntas);
                    } catch (error) {
                        console.error('Error loading exam questions:', error);
                        alert('Error al cargar las preguntas del examen. Por favor, inténtelo de nuevo más tarde.');
                    }
                });
                puntoContenido.appendChild(btnExamen);
            } else {
                console.error('Article not found in the loaded content');
            }
        } catch (error) {
            console.error('Error cargando el contenido del punto o las preguntas:', error);
        }
    } else {
        puntoContenido.classList.add('oculto');
    }
}

export async function cargarPreguntasExamen(bloque, tema, examId, explicacionesHtml) {
    var temaFormatted =  tema.toString();
    if (tema < 10){
        var temaMenor= tema/1;
        temaFormatted=temaMenor;

    }
    const temaPath = parseInt(tema).toString();
    const questionPath = `./temas/tema${temaFormatted}/preguntas.js`;
    
    console.log(`Attempting to load questions from: ${questionPath}`);
    
    try {
        const response = await fetch(questionPath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsContent = await response.text();
        
        console.log('Fetched content:', jsContent.substring(0, 200) + '...');
        console.log('Contenido completo de preguntas.js:', jsContent);

        // Remove the 'export' keyword from the content
        const modifiedContent = jsContent.replace('export const preguntas =', 'const preguntas =');

        // Evaluate the modified content
        const preguntasModule = eval(`(function() { ${modifiedContent}; return preguntas; })()`);

        console.log('preguntasModule:', preguntasModule);

        if (preguntasModule) {
            if (examId.startsWith('examen_completo_tema_')) {
                // Logic for full theme exam
                const temaNumber = examId.split('_').pop();
                return preguntasModule[`10${temaNumber}000000e`].preguntas;
            } else if (preguntasModule[examId]) {
                console.log(`Found questions for exam ID: ${examId}`);
                const preguntas = preguntasModule[examId].preguntas.map(pregunta => {
                    const explicacion = explicacionesHtml[pregunta.id] || '';
                    console.log(`Pregunta ${pregunta.id}:`);
                    console.log(`  - Pregunta: ${pregunta.pregunta}`);
                    console.log(`  - ExplicacionId: ${pregunta.id}`);
                    console.log(`  - Explicación encontrada: ${explicacion || 'No se encontró explicación'}`);
                    return {
                        ...pregunta,
                        explicacion: explicacion
                    };
                });
                console.log('Preguntas procesadas con explicaciones:', preguntas);
                console.log('Todas las preguntas procesadas con explicaciones:', JSON.stringify(preguntas, null, 2));
                return preguntas;
            } else {
                console.error(`No exam found with ID: ${examId}`);
                console.log('Available exam IDs:', Object.keys(preguntasModule));
                throw new Error(`No exam found with ID: ${examId}`);
            }
        } else {
            console.error(`No questions found for theme ${temaFormatted}`);
            throw new Error(`No questions found for theme ${temaFormatted}`);
        }
    } catch (error) {
        console.error('Error loading questions:', error);
        throw error;
    }
}

