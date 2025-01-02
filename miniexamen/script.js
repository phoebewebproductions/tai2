import { ExamenManager } from '../js/examLogic.js';
import { mostrarModal, ocultarModal, inicializarEventosTema, desbloquearSiguientePunto } from '../js/uiLogic.js';
import { CircularProgress } from '../js/components/CircularProgress.js';
import { cargarProgreso, actualizarProgreso, resetearProgreso } from '../js/progresoLocal.js';
import { calculateCourseStructure } from '../js/courseStructure.js';
import { preguntas } from '../bloques/bloque1/temas/tema1/preguntas.js';



document.addEventListener("DOMContentLoaded", () => {

    const alertas = document.querySelectorAll(".enconstruccion");
    alertas.forEach(alerta => {
        alerta.addEventListener('click', () => {
            alert("Sitio en construcción, ya llegaremos a esa secciónes");
        });
    });
});