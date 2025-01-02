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

