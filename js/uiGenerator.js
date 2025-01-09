import { getLastCompletedIndex, isPointCompleted, isPointUnlocked, updateEstructuraGlobal, estructuraGlobal } from './structureLoader.js';
import { findId } from './idfinder.js';
import { iniciarExamen, ocultarModal } from './examLogic.js';

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector("#modal-examen");
    const btncerrar = document.querySelector(".cerrar");
    
    if (btncerrar && modal) {
        btncerrar.addEventListener("click", () => {
            ocultarModal(modal);    
        });
    } else {
        console.error("Modal or close button not found");
    }
});

export function cargarBloque(bloqueId) {
    if (isNaN(bloqueId) || bloqueId < 1 || bloqueId > 4) {
        console.error('Invalid bloqueId:', bloqueId);
        return;
    }
    
    if (!estructuraGlobal) {
        console.error('estructuraGlobal is not initialized');
        return;
    }
    
    const estructura = estructuraGlobal;
    
    if (!estructura) {
        console.error('Block not found:', bloqueId);
        return;
    }
    
    generarEstructuraBloque(estructura);
}

export function generarEstructuraBloque(estructura) {
    const contenidoPrincipal = document.getElementById('contenido-principal');
    
    if (!estructura || typeof estructura.id === 'undefined') {
        console.error('Invalid estructura or missing ID:', estructura);
        return;
    }

    const bloqueId = estructura.id;
    if (isNaN(bloqueId) || bloqueId < 1 || bloqueId > 4) {
        console.error('Invalid bloqueId:', bloqueId);
        return;
    }

    console.log(`Generating structure for block ${bloqueId}`);

    const lastCompletedIndex = getLastCompletedIndex(bloqueId);
    console.log(`Último índice completado para bloque ${bloqueId}: ${lastCompletedIndex}`);

    updateEstructuraGlobal();

    contenidoPrincipal.innerHTML = '';

    estructura.temas.forEach((tema, indexTema) => {
        const temaElement = document.createElement('section');
        temaElement.className = 'tema';
        temaElement.id = `tema${indexTema + 1}`;
        temaElement.innerHTML = `
            <button class="tema-btn">${tema.titulo}</button>
            <div class="puntos-container oculto"></div>
        `;

        const temaBtn = temaElement.querySelector('.tema-btn');
        const puntosContainer = temaElement.querySelector('.puntos-container');

        temaBtn.addEventListener('click', () => {
            puntosContainer.classList.toggle('oculto');
            if (puntosContainer.classList.contains('oculto')) {
                // Si está oculto, vaciamos el contenedor
                puntosContainer.innerHTML = '';
            } else if (!puntosContainer.hasChildNodes()) {
                // Si no está oculto y no tiene nodos hijos, cargamos los puntos
                cargarPuntosTema(tema, indexTema, puntosContainer, bloqueId, estructura);
            }
        });

        contenidoPrincipal.appendChild(temaElement);
    });
}

function cargarPuntosTema(tema, indexTema, puntosContainer, bloqueId, estructura) {
    if (!estructura || !estructura.puntosLineales) {
        console.error('estructura or puntosLineales is not initialized');
        return;
    }

    tema.puntos.forEach((punto, indexPunto) => {
        const puntoLinealIndex = estructura.puntosLineales.findIndex(p => 
            p.temaIndex === indexTema && p.puntoIndex === indexPunto
        );
        
        const estaCompletado = isPointCompleted(bloqueId, puntoLinealIndex);
        const estaDesbloqueado = isPointUnlocked(bloqueId, puntoLinealIndex);

        const puntoElement = document.createElement('div');
        puntoElement.className = 'punto';
        puntoElement.innerHTML = `
            <button class="punto-btn subpunto-btn ${estaDesbloqueado ? 'disponible' : 'bloqueado'} ${estaCompletado ? 'completado' : ''}" 
                    data-tema="${indexTema + 1}" 
                    data-punto="${indexPunto + 1}" 
                    data-id="${punto.id}" 
                    ${!estaDesbloqueado ? 'disabled' : ''}>
                ${punto.titulo}
            </button>
            <div class="punto-contenido oculto"></div>
        `;

        const puntoBtn = puntoElement.querySelector('.punto-btn');
        puntoBtn.addEventListener('click', () => cargarContenidoPunto(indexTema + 1, indexPunto + 1, punto.id, puntoElement));

        puntosContainer.appendChild(puntoElement);
    });
}


export async function cargarContenidoPunto(tema, punto, id, puntoElement) {
    const contenidoPunto = puntoElement.querySelector('.punto-contenido');
    contenidoPunto.classList.toggle('oculto');

    if (contenidoPunto.childNodes.length > 0) return;

    try {
        const idInfo = await findId(id);
        console.log('ID Info:', idInfo);
        
        if (!idInfo) {
            console.error('Invalid ID info:', idInfo);
            return;
        }

        const examId = `${idInfo.bloque}${idInfo.tema.padStart(2, '0')}${idInfo.punto.padStart(2, '0')}${idInfo.subpunto.padStart(2, '0')}000e`;
        console.log('Constructed examId:', examId);

        const response = await fetch(`./temas/tema${idInfo.tema*1}/${id}e.html`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const content = await response.text();
        contenidoPunto.innerHTML = content;

        const miniExamButton = document.createElement('button');
        miniExamButton.textContent = 'Realizar Mini-Examen';
        miniExamButton.className = 'mini-examen-btn';
        miniExamButton.dataset.examId = examId;
        contenidoPunto.appendChild(miniExamButton);

        miniExamButton.addEventListener('click', async () => {
            const preguntas = await cargarPreguntasExamen(idInfo.bloque, idInfo.tema, examId);
            iniciarExamen(idInfo.bloque, idInfo.tema, idInfo.punto, idInfo.subpunto, examId, preguntas, undefined, estructuraGlobal);
        });

    } catch (error) {
        console.error('Error in cargarContenidoPunto:', error);
    }
}

export async function cargarPreguntasExamen(bloque, tema, examId) {
    console.log('Attempting to load questions for:', { bloque, tema, examId });
    try {
        if (!examId || typeof examId !== 'string') {
            throw new Error('Invalid examId');
        }

        const response = await fetch(`./temas/tema${tema*1}/preguntas.js`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        
        const moduleText = text.replace('export const preguntas =', 'const preguntas =');
        const module = { exports: {} };
        const moduleFunc = new Function('module', 'exports', moduleText + '; return preguntas;');
        const preguntasModule = moduleFunc(module, module.exports);

        console.log('Preguntas module:', preguntasModule);

        if (!preguntasModule || !preguntasModule[examId]) {
            const generalExamId = `${bloque}${tema.padStart(2, '0')}000000e`;
            console.log('Trying general exam ID:', generalExamId);
            
            if (!preguntasModule[generalExamId]) {
                throw new Error(`No questions found for exam ID: ${examId} or general exam ID: ${generalExamId}`);
            }
            
            return preguntasModule[generalExamId].preguntas;
        }

        const preguntas = preguntasModule[examId].preguntas;

        if (!Array.isArray(preguntas)) {
            throw new Error(`Invalid questions format for exam ID: ${examId}`);
        }

        console.log('Questions loaded successfully');
        return preguntas;
    } catch (error) {
        console.error('Error loading questions:', error);
        throw error;
    }
}

export function actualizarProgresoTrasExamen(bloqueId, puntoCompletadoIndex) {
    updateProgress(bloqueId, puntoCompletadoIndex);
    console.log(`Progreso actualizado tras examen. Bloque: ${bloqueId}, Índice completado: ${puntoCompletadoIndex}`);
    
    const temaElements = document.querySelectorAll('.tema');
    temaElements.forEach((temaElement, indexTema) => {
        const puntosContainer = temaElement.querySelector('.puntos-container');
        if (puntosContainer) {
            const estructura = estructuraGlobal[bloqueId];
            if (estructura && estructura.temas) {
                const tema = estructura.temas[indexTema];
                cargarPuntosTema(tema, indexTema, puntosContainer, bloqueId, estructura);
            } else {
                console.error(`Estructura not found for bloque ${bloqueId}`);
            }
        }
    });
}

