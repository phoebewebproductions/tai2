import { cargarEstructuraBloque } from './structureLoader.js';
import { generarEstructuraBloque } from './uiGenerator.js';
import { inicializarSubpuntos, actualizarEstadoPuntos, inicializarManejadoresModales } from './uiManager.js';
import { initializeProgressButton } from './progressButton.js';
import { mostrarTotalSubpuntos, mostrarSubpuntosCompletados } from './contadorSubpuntos.js';
import { iniciarExamen } from './examLogic.js';

document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOMContentLoaded event fired');
    const estructura = await cargarEstructuraBloque();
    generarEstructuraBloque(estructura);

    inicializarSubpuntos();
    actualizarEstadoPuntos();
    initializeProgressButton();
    inicializarManejadoresModales();
    mostrarTotalSubpuntos();
    mostrarSubpuntosCompletados();
    
    window.addEventListener('progresoActualizado', () => {
        console.log('Evento progresoActualizado recibido');
        actualizarEstadoPuntos();
    });
});

window.addEventListener('progresoActualizado', () => {
    console.log('Evento progresoActualizado recibido');
});

function iniciarExamenCompleto(tema) {
    const bloque = Math.floor((tema - 1) / 100) + 1;
    const temaFormatted = tema.toString().padStart(2, '0');
    const questionsUrl = `./temas/tema${temaFormatted}/preguntas.js`;
    fetch(questionsUrl)
        .then(response => response.text())
        .then(questionsText => {
            iniciarExamen(bloque, temaFormatted, 'completo', 'completo', `examen_completo_tema_${tema}`, questionsText);
        })
        .catch(error => {
            console.error('Error loading questions for complete exam:', error);
            alert('Error al cargar las preguntas para el examen completo. Por favor, inténtelo de nuevo.');
        });
}
