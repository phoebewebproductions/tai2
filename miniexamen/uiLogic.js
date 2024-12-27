import { handleActualizarProgreso } from './script.js';

export function mostrarModal(elemento) {
    elemento.classList.remove('oculto');
    requestAnimationFrame(() => {
        elemento.classList.add('visible');
    });
}

export function ocultarModal(elemento) {
    elemento.classList.remove('visible');
    elemento.classList.add('oculto');
}

export function inicializarEventosTema() {
    document.querySelectorAll('.tema-btn, .punto-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.disabled) return;
            
            const contenido = this.nextElementSibling;
            if (contenido) {
                contenido.classList.toggle('oculto');
            }
        });
    });
}

function getNextPuntoId(currentId) {
    const puntoId = currentId.endsWith('e') ? currentId.slice(0, -1) : currentId;
    
    if (puntoId.length !== 10) {
        console.error(`Invalid punto ID format: ${puntoId}`);
        return null;
    }

    let [bloque, tema, punto, subpunto] = [
        parseInt(puntoId.slice(0, 1)),
        parseInt(puntoId.slice(1, 3)),
        parseInt(puntoId.slice(3, 5)),
        parseInt(puntoId.slice(5, 7))
    ];

    const generateId = (b, t, p, s) => 
        `${b.toString()}${t.toString().padStart(2, '0')}${p.toString().padStart(2, '0')}${s.toString().padStart(2, '0')}000`;

    const checkNextId = (id) => document.querySelector(`[data-punto="${id}"]`) !== null;

    // Try incrementing subpunto
    let nextId = generateId(bloque, tema, punto, subpunto + 1);
    if (checkNextId(nextId)) return nextId;

    // Try incrementing punto
    nextId = generateId(bloque, tema, punto + 1, 1);
    if (checkNextId(nextId)) return nextId;

    // Try incrementing tema
    nextId = generateId(bloque, tema + 1, 1, 1);
    if (checkNextId(nextId)) return nextId;

    // Try incrementing bloque
    nextId = generateId(bloque + 1, 1, 1, 1);
    if (checkNextId(nextId)) return nextId;

    console.error(`No se encontró un siguiente punto válido para ${puntoId}`);
    return null;
}

export function desbloquearSiguientePunto(puntoActual, shouldScroll = true, updateProgress = true) {
    console.log(`Intentando desbloquear siguiente punto. Punto actual: ${puntoActual}`);
    
    const puntoId = puntoActual.endsWith('e') ? puntoActual.slice(0, -1) : puntoActual;
    
    const siguientePuntoId = getNextPuntoId(puntoId);
    if (!siguientePuntoId) {
        console.log(`No se encontró un siguiente punto para ${puntoId}. Este podría ser el último punto del tema o curso.`);
        return;
    }

    console.log(`Siguiente punto ID calculado: ${siguientePuntoId}`);

    const puntoActualBtn = document.querySelector(`[data-punto="${puntoId}"]`);
    if (!puntoActualBtn) {
        console.error(`No se encontró el botón para el punto ${puntoId}`);
        return;
    }

    // Marcar el punto actual como completado
    puntoActualBtn.classList.add('completado');

    // Cerrar el contenido del punto actual
    const contenidoActual = puntoActualBtn.nextElementSibling;
    if (contenidoActual) {
        contenidoActual.classList.add('oculto');
    }

    console.log(`Buscando el siguiente punto con ID: ${siguientePuntoId}`);
    const siguienteBtn = document.querySelector(`[data-punto="${siguientePuntoId}"]`);
    
    if (siguienteBtn) {
        console.log(`Desbloqueando punto ${siguientePuntoId}`);
        siguienteBtn.disabled = false;
        siguienteBtn.classList.add('disponible');

        // Abrir el contenido del siguiente punto
        const contenidoSiguiente = siguienteBtn.nextElementSibling;
        if (contenidoSiguiente) {
            contenidoSiguiente.classList.remove('oculto');
        }

        // Desplazarse suavemente al siguiente punto solo si shouldScroll es true
        if (shouldScroll) {
            siguienteBtn.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } else {
        console.log(`No se encontró el siguiente punto con ID ${siguientePuntoId}. Este podría ser el último punto del tema o curso.`);
    }

    // Actualizar el progreso en la base de datos solo si updateProgress es true
    if (updateProgress) {
        handleActualizarProgreso(puntoActual, true);
    }
}


