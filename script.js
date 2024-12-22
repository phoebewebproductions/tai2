import { ExamenManager } from './examLogic.js';
import { mostrarModal, ocultarModal, inicializarEventosTema } from './uiLogic.js';

document.addEventListener("DOMContentLoaded", () => {
    const examenManager = new ExamenManager();
    
    // Inicializar eventos de los mini exámenes
    document.querySelectorAll(".mini-examen-btn").forEach(btn => {
        btn.addEventListener("click", () => examenManager.iniciarExamen(btn.id));
    });

    // Eventos para cerrar modales
    const closeBtn = document.querySelector(".close");
    const btnCerrar = document.querySelector("#btn-cerrar");
    const modalExamen = document.getElementById("modal-examen");
    const modal = document.getElementById("modal");

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            ocultarModal(modal);
            examenManager.siguientePregunta();
        });
    }

    if (btnCerrar) {
        btnCerrar.addEventListener("click", () => {
            ocultarModal(modalExamen);
            examenManager.reiniciarExamen();
        });
    }

    // Inicializar eventos de tema y puntos
    inicializarEventosTema();
});

