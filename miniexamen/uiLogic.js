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

export function desbloquearSiguientePunto(puntoActual, shouldScroll = true, updateProgress = true) {
    const puntoActualBtn = document.querySelector(`[data-punto="${puntoActual}"]`);
    if (!puntoActualBtn) {
        console.error(`No se encontró el botón para el punto ${puntoActual}`);
        return;
    }

    // Marcar el punto actual como completado
    puntoActualBtn.classList.add('completado');

    // Cerrar el contenido del punto actual
    const contenidoActual = puntoActualBtn.nextElementSibling;
    if (contenidoActual) {
        contenidoActual.classList.add('oculto');
    }

    // Encontrar el siguiente punto basado en el ID
    const puntoActualId = parseInt(puntoActual);
    let siguientePuntoId;

    // Check if we're moving from section 1 to section 2
    if (puntoActualId === 101006) {
        siguientePuntoId = '101020';
    } else {
        siguientePuntoId = (puntoActualId + 1).toString().padStart(6, '0');
    }

    const siguienteBtn = document.querySelector(`[data-punto="${siguientePuntoId}"]`);
    
    if (siguienteBtn) {
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

