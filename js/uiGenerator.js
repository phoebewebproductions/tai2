import { cargarProgreso } from './progressTracker.js';
import { agregarBotonExamenCompleto } from './examManager.js';
import { cargarContenidoPunto } from './contentLoader.js';

export function generarEstructuraBloque(estructura) {
    const contenidoPrincipal = document.getElementById('contenido-principal');
    const progreso = cargarProgreso();
    
    estructura.temas.forEach((tema, indexTema) => {
        const temaElement = document.createElement('section');
        temaElement.className = 'tema';
        temaElement.id = `tema${indexTema + 1}`;
        temaElement.innerHTML = `
            <button class="tema-btn">${tema.titulo}</button>
            <div class="puntos-container ${indexTema === 0 ? '' : 'oculto'}"></div>
        `;

        const temaBtn = temaElement.querySelector('.tema-btn');
        const puntosContainer = temaElement.querySelector('.puntos-container');

        temaBtn.addEventListener('click', () => {
            puntosContainer.classList.toggle('oculto');
            if (!puntosContainer.hasChildNodes()) {
                cargarPuntosTema(tema, indexTema, puntosContainer, progreso);
            }
        });

        contenidoPrincipal.appendChild(temaElement);

        if (indexTema === 0) {
            cargarPuntosTema(tema, indexTema, puntosContainer, progreso);
        }
    });
}

function cargarPuntosTema(tema, indexTema, puntosContainer, progreso) {
    tema.puntos.forEach((punto, indexPunto) => {
        const puntoElement = document.createElement('div');
        puntoElement.className = 'punto';
        const estaCompletado = progreso.some(p => p.tema === indexTema + 1 && p.punto === indexPunto + 1 && p.completado);
        const estaDesbloqueado = indexPunto === 0 || progreso.some(p => p.tema === indexTema + 1 && p.punto === indexPunto && p.completado);

        puntoElement.innerHTML = `
            <button class="punto-btn subpunto-btn ${estaDesbloqueado ? '' : 'bloqueado'} ${estaCompletado ? 'completado' : ''}" 
                    data-tema="${indexTema + 1}" 
                    data-punto="${indexPunto + 1}" 
                    data-id="${punto.id}" 
                    ${!estaDesbloqueado ? 'disabled' : ''}>
                ${punto.titulo}
            </button>
            <div class="punto-contenido oculto"></div>
        `;

        const puntoBtn = puntoElement.querySelector('.punto-btn');
        puntoBtn.addEventListener('click', () => cargarContenidoPunto(indexTema + 1, indexPunto + 1, punto.id, puntoElement));

        puntosContainer.appendChild(puntoElement);
    });

    agregarBotonExamenCompleto(puntosContainer, indexTema + 1);
}

