import { ExamenManager } from './examLogic.js';
import { mostrarModal, ocultarModal, inicializarEventosTema, desbloquearSiguientePunto } from './uiLogic.js';
import { CircularProgress } from '../components/CircularProgress.js';
import { cargarProgreso, actualizarProgreso, resetearProgreso } from './progresoLocal.js';
import { calculateCourseStructure } from './courseStructure.js';
import { preguntas } from './preguntas.js';

let courseStructure = null;

document.addEventListener("DOMContentLoaded", () => {
    courseStructure = calculateCourseStructure();
    console.log("Course Structure:", courseStructure);
    const alertas = document.querySelectorAll(".enconstruccion");
    alertas.forEach(alerta => {
        alerta.addEventListener('click', () => {
            alert("Sitio en construcción, ya llegaremos a esa sección");
        });
    });
    inicializarEventosTema();
    cargarProgresoGuardado();

    const modalExamen = document.getElementById("modal-examen");
    const btnCerrar = document.querySelector("#btn-cerrar");

    if (btnCerrar) {
        btnCerrar.addEventListener("click", () => {
            ocultarModal(modalExamen);
        });
    }

    document.querySelectorAll(".mini-examen-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const puntoId = btn.id;
            const examenManager = new ExamenManager(preguntas, puntoId);
            examenManager.iniciarExamen();
            mostrarModal(modalExamen);
        });
    });

    // Agregar botón flotante para resetear estadísticas
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Resetear Progreso';
    resetButton.className = 'btn-reset-float';
    resetButton.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres resetear todo el progreso? Esta acción no se puede deshacer.')) {
            resetearProgreso();
            location.reload();
        }
    });
    document.body.appendChild(resetButton);
});

function cargarProgresoGuardado() {
    const progress = cargarProgreso();
    const progressDisplay = document.getElementById('progress-display');
    progressDisplay.innerHTML = '';

    progress.forEach(item => {
        if (item.completed) {
            const progressItem = document.createElement('div');
            progressItem.textContent = `Punto ${item.punto_id} completado`;
            progressDisplay.appendChild(progressItem);
            desbloquearSiguientePunto(item.punto_id, false, false);
        }
    });

    updateProgressVisualization();
}

function handleActualizarProgreso(puntoId, completed) {
    actualizarProgreso(puntoId, completed);

    // Eliminar la creación y adición del elemento de progreso
    // const progressDisplay = document.getElementById('progress-display');
    // const existingItem = Array.from(progressDisplay.children).find(child => child.textContent === `Punto ${puntoId} completado`);
    // if (!existingItem && completed) {
    //     const progressItem = document.createElement('div');
    //     progressItem.textContent = `Punto ${puntoId} completado`;
    //     progressDisplay.appendChild(progressItem);
    // }

    updateProgressVisualization();
    desbloquearSiguientePunto(puntoId, true, false);
}

function updateProgressVisualization() {
    const progressDisplay = document.getElementById('progress-display');
    const completedPoints = new Set(Array.from(progressDisplay.children).map(child => child.textContent.split(' ')[1])).size;

    let totalPointsInCourse = 0;
    let totalPointsInTheme = 0;

    Object.values(courseStructure.pointsPerTheme).forEach((block, blockIndex) => {
        Object.values(block).forEach((themePoints, themeIndex) => {
            totalPointsInCourse += themePoints;
            if (blockIndex === 0) {
                totalPointsInTheme += themePoints;
            }
        });
    });

    const courseProgress = Math.min((completedPoints / totalPointsInCourse) * 100, 100);
    const themeProgress = Math.min((completedPoints / totalPointsInTheme) * 100, 100);

    const ProgressVisualization = React.createElement('div', { className: 'progress-visualization' },
        React.createElement('div', { className: 'progress-item' },
            React.createElement('h4', null, 'Progreso del Tema'),
            React.createElement(CircularProgress, { progress: themeProgress })
        ),
        React.createElement('div', { className: 'progress-item' },
            React.createElement('h4', null, 'Progreso del Curso'),
            React.createElement(CircularProgress, { progress: courseProgress, color: "#3b82f6" })
        )
    );

    ReactDOM.render(ProgressVisualization, progressDisplay);
}

export { handleActualizarProgreso, desbloquearSiguientePunto };

