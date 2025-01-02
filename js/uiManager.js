import { cargarProgreso, obtenerUltimoExamenAprobado, guardarProgreso, actualizarProgresoCompleto } from './progressTracker.js';



let subpuntoIds = [];

export function mostrarModal(elemento) {
    elemento.classList.remove('oculto');
    elemento.classList.add('visible');
}

export function ocultarModal(elemento) {
    elemento.classList.add('oculto');
    elemento.classList.remove('visible');
}

export function inicializarUI() {
    inicializarSubpuntos();
    inicializarManejadoresModales();

    document.addEventListener('examenFinalizado', (event) => {
        console.log('Evento examenFinalizado recibido:', event.detail);
        const { bloque, tema, punto, subpunto } = event.detail;
        actualizarProgresoExamen(bloque, tema, punto, subpunto);
        actualizarEstadoPuntos();
    });

    window.addEventListener('progresoActualizado', () => {
        console.log('Evento progresoActualizado recibido');
        debugPointState('Before actualizarEstadoPuntos:');
        actualizarEstadoPuntos();
        debugPointState('After actualizarEstadoPuntos:');
    });
}

export function inicializarSubpuntos() {
    subpuntoIds = Array.from(document.querySelectorAll('.subpunto-btn')).map(btn => btn.dataset.id);
    console.log('Subpunto IDs:', subpuntoIds);
}


export function actualizarEstadoPuntos() {
    const progreso = cargarProgreso();
    const ultimoExamenAprobado = obtenerUltimoExamenAprobado();
    console.log('Progreso cargado en actualizarEstadoPuntos:', progreso);
    console.log('Último examen aprobado:', ultimoExamenAprobado);
    
    const subpuntos = document.querySelectorAll('.subpunto-btn');
    let ultimoIndiceCompletado = -1;

    subpuntos.forEach((subpunto, index) => {
        const id = subpunto.dataset.id;
        if (!id) return;

        // Extract components from the ID (format: BBTTPPSSSS)
        const bloque = id.substring(0, 1);
        const tema = id.substring(1, 3);
        const punto = id.substring(3, 5);
        const subpuntoId = id.substring(5, 8);

        const estaCompletado = progreso.some(p => 
            p.bloque === bloque &&
            p.tema === tema &&
            p.punto === punto &&
            p.subpunto === subpuntoId &&
            p.completado
        );

        // Remove all state classes
        subpunto.classList.remove('completado', 'disponible', 'bloqueado');
        
        if (estaCompletado) {
            subpunto.classList.add('completado');
            ultimoIndiceCompletado = index;
            subpunto.disabled = false;
        } else if (index === 0 || index === ultimoIndiceCompletado + 1) {
            subpunto.classList.add('disponible');
            subpunto.disabled = false;
        } else {
            subpunto.classList.add('bloqueado');
            subpunto.disabled = true;
        }
        
        console.log(`Subpunto ${id}: completado=${estaCompletado}, clase=${subpunto.className}, disabled=${subpunto.disabled}`);
    });

    console.log('Estado de los puntos actualizado');
}

export function actualizarProgresoExamen(bloque, tema, punto, subpunto) {
    const id = `${bloque}${tema.toString().padStart(2, '0')}${punto.toString().padStart(2, '0')}${subpunto.toString().padStart(3, '0')}`;
    console.log(`Actualizando progreso para ID: ${id}`);
    actualizarProgresoCompleto(bloque, tema, punto, subpunto);
    actualizarEstadoPuntos();
}

// ... rest of the uiManager.js file remains unchanged ...


export function inicializarManejadoresModales() {
    document.body.addEventListener('click', (event) => {
        const target = event.target;
        if (target.matches('#modal-examen .cerrar')) {
            cerrarModalExamen();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            cerrarModalExamen();
        }
    });
}

export function cerrarModalExamen() {
    const modalExamen = document.getElementById('modal-examen');
    if (modalExamen) {
        ocultarModal(modalExamen);
    }
}


function debugPointState(message) {
    console.log(message);
    document.querySelectorAll('.subpunto-btn').forEach((btn, index) => {
        console.log(`Subpunto ${index}: ${btn.dataset.id} - Completed: ${btn.classList.contains('completado')}, Available: ${!btn.classList.contains('bloqueado')}`);
    });
}

