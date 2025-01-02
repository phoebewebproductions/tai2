import { findId, constructorid } from './idfinder.js';
import { iniciarExamen as iniciarExamenLogic } from './examLogic.js';

export function agregarBotonExamenCompleto(puntosContainer, temaNum) {
    const botonExamenCompleto = document.createElement('button');
    botonExamenCompleto.textContent = 'Examen Completo del Tema';
    botonExamenCompleto.className = 'btn-examen-completo';
    botonExamenCompleto.classList.remove('bloqueado');
    botonExamenCompleto.classList.add('disponible');
    botonExamenCompleto.dataset.tema = temaNum;
    botonExamenCompleto.dataset.punto = 'completo';
    const bloque = Math.floor((temaNum - 1) / 10) + 1;
    const temaFormatted = temaNum.toString().padStart(2, '0');
    const examId = `${bloque}${temaFormatted}0000000e`;
    botonExamenCompleto.dataset.id = examId;
    botonExamenCompleto.addEventListener('click', () => iniciarExamenCompleto(temaNum));
    puntosContainer.appendChild(botonExamenCompleto);
}

export async function iniciarExamenCompleto(tema) {
    const bloque = Math.floor((tema - 1) / 10) + 1;
    const temaFormatted= tema.toString();
    const temaFormattedforExamid = tema.toString().padStart(2, '0');
    const examId = `${bloque}${temaFormattedforExamid}0000000e`;
    try {
        const { preguntas } = await import(`../bloques/bloque${bloque}/temas/tema${temaFormatted}/preguntas.js`);
        const processedQuestions = processQuestions(preguntas);
        const examenCompleto = processedQuestions[examId] || { preguntas: [], minimoParaAprobar: 0 };
        
        if (examenCompleto.preguntas.length === 0) {
            throw new Error('No se encontraron preguntas para el examen completo');
        }
        
        console.log(`Preguntas cargadas para el tema ${temaFormatted}:`, examenCompleto.preguntas.length);
        
        iniciarExamen(bloque, temaFormatted, 'completo', 'completo', examId, examenCompleto.preguntas, examenCompleto.minimoParaAprobar);
    } catch (error) {
        console.error('Error loading questions for complete exam:', error);
        alert('Error al cargar las preguntas para el examen completo. Por favor, inténtelo de nuevo.');
    }
}

function processQuestions(preguntas) {
    const processedQuestions = {};
    
    for (const [key, value] of Object.entries(preguntas)) {
        if (Array.isArray(value.preguntas)) {
            processedQuestions[key] = {
                preguntas: value.preguntas,
                minimoParaAprobar: value.minimoParaAprobar
            };
        } else if (typeof value === 'object' && value !== null) {
            processedQuestions[key] = {
                preguntas: Object.values(value),
                minimoParaAprobar: Math.ceil(Object.values(value).length * 0.7) // 70% para aprobar
            };
        }
    }
    
    return processedQuestions;
}

export function iniciarExamen(bloque, tema, punto, subpunto, examId, preguntas) {
    const idInfo = findId(examId);
    iniciarExamenLogic(idInfo.bloque, idInfo.tema, idInfo.punto, idInfo.subpunto, examId, preguntas);
}

