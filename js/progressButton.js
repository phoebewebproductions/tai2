import { calculateBlockProgress } from './structureLoader.js';
import { CircularProgress, getColorForBlock } from './../components/CircularProgress.js';
import { estructuraGlobal } from './structureLoader.js';

let progressDisplayVisible = false;

// Modificar la función initializeProgressButton en progressButton.js
export function initializeProgressButton() {
    let progressButton = document.getElementById('progress-button');
    
    if (!progressButton) {
        progressButton = document.createElement('button');
        progressButton.id = 'progress-button';
        progressButton.className = 'header-button';
        progressButton.setAttribute('aria-label', 'Ver progreso');
        
        // Crear el SVG
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "24");
        svg.setAttribute("height", "24");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("fill", "none");
        svg.setAttribute("stroke", "currentColor");
        svg.setAttribute("stroke-width", "2");
        svg.setAttribute("stroke-linecap", "round");
        svg.setAttribute("stroke-linejoin", "round");
        svg.className = 'progress-icon';

        // Crear el círculo
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "12");
        circle.setAttribute("cy", "12");
        circle.setAttribute("r", "10");

        // Crear el path para el indicador de tiempo
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M12 6v6l4 2");

        svg.appendChild(circle);
        svg.appendChild(path);
        progressButton.appendChild(svg);
        
        const headerdiv = document.querySelector(".buttonsHeader");
        headerdiv.appendChild(progressButton);
    }

    // Crear contenedor de progreso (resto del código igual)
    const progressDisplay = document.createElement('div');
    progressDisplay.id = 'progress-display';
    progressDisplay.style.display = 'none';
    document.body.appendChild(progressDisplay);

    progressButton.addEventListener('click', toggleProgressDisplay);
    console.log('Progress button initialized');
}

function toggleProgressDisplay() {
    const progressDisplay = document.getElementById('progress-display');
    const progressButton = document.getElementById('progress-button');
    const svg = progressButton.querySelector('svg');
    
    if (progressDisplayVisible) {
        progressDisplay.style.display = 'none';
        progressDisplayVisible = false;
        // Restaurar el SVG original
        svg.innerHTML = `
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
        `;
    } else {
        progressDisplay.innerHTML = '';
        progressDisplay.style.display = 'flex';
        
        // Cambiar el SVG a pausa
        svg.innerHTML = `
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M10 15V9M14 15V9"></path>
        `;
        
        // Añadir botón de cerrar
        const closeButton = document.createElement('button');
        closeButton.className = 'cerrar-progreso';
        closeButton.innerHTML = '&times;';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '10px';
        closeButton.style.background = 'none';
        closeButton.style.border = 'none';
        closeButton.style.fontSize = '1.5rem';
        closeButton.style.cursor = 'pointer';
        closeButton.addEventListener('click', toggleProgressDisplay);
        
        progressDisplay.appendChild(closeButton);
        
        // Título del modal
        const title = document.createElement('h2');
        title.textContent = 'Tu progreso';
        title.style.width = '100%';
        title.style.textAlign = 'center';
        title.style.marginBottom = '1rem';
        progressDisplay.appendChild(title);
        
        // Contenedor para los bloques de progreso
        const blocksContainer = document.createElement('div');
        blocksContainer.style.display = 'flex';
        blocksContainer.style.flexWrap = 'wrap';
        blocksContainer.style.justifyContent = 'center';
        blocksContainer.style.gap = '20px';
        progressDisplay.appendChild(blocksContainer);
        
        for (let blockNumber = 1; blockNumber <= 4; blockNumber++) {
            updateProgress(blockNumber, blocksContainer);
        }
        
        progressDisplayVisible = true;
    }
}

async function updateProgress(blockNumber, container) {
    try {
        const progress = await calculateBlockProgress(blockNumber);
        const color = getColorForBlock(blockNumber);
        const circularProgress = CircularProgress({ 
            progress, 
            size: 100, 
            strokeWidth: 10, 
            color: color, 
            id: `block-${blockNumber}-progress` 
        });
        
        const blockContainer = document.createElement('div');
        blockContainer.style.textAlign = 'center';
        
        const blockLabel = document.createElement('div');
        blockLabel.textContent = `Bloque ${blockNumber}`;
        blockLabel.style.marginTop = '5px';
        blockLabel.style.fontWeight = 'bold';
        
        blockContainer.appendChild(circularProgress);
        blockContainer.appendChild(blockLabel);
        
        container.appendChild(blockContainer);
    } catch (error) {
        console.error(`Error updating progress for block ${blockNumber}:`, error);
    }
}