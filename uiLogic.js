export function mostrarModal(elemento) {
    elemento.classList.remove('oculto');
    requestAnimationFrame(() => {
        elemento.classList.add('visible');
    });
}

export function ocultarModal(elemento) {
    elemento.classList.remove('visible');
    elemento.addEventListener('transitionend', function handler() {
        elemento.classList.add('oculto');
        elemento.removeEventListener('transitionend', handler);
    });
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

export function desbloquearSiguientePunto(puntoActual) {
    const puntoActualBtn = document.querySelector(`[data-punto="${puntoActual}"]`);
    const siguientePunto = puntoActualBtn.closest('.punto').nextElementSibling;
    
    if (siguientePunto) {
        const siguienteBtn = siguientePunto.querySelector('.punto-btn');
        siguienteBtn.disabled = false;
        siguienteBtn.classList.add('disponible');
    }
}

