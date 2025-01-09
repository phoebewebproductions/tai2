import { calculateBlockProgress } from './structureLoader.js';
import { CircularProgress, getColorForBlock } from './../components/CircularProgress.js';
import { estructuraGlobal } from './structureLoader.js';

let progressDisplayVisible = false;

export function initializeProgressButton() {
    let progressButton = document.getElementById('progress-button');
    
    if (!progressButton) {
        progressButton = document.createElement('button');
        progressButton.id = 'progress-button';
        progressButton.style.position = 'fixed';
        progressButton.style.top = '20px';
        progressButton.style.left = '20px';
        progressButton.style.zIndex = '1000';
        progressButton.style.padding = '10px';
        progressButton.style.backgroundColor = 'var(--color-secondary)';
        progressButton.style.color = 'white';
        progressButton.style.border = 'none';
        progressButton.style.borderRadius = '50%';
        progressButton.style.cursor = 'pointer';
        progressButton.style.width = '50px';
        progressButton.style.height = '50px';
        progressButton.style.display = 'flex';
        progressButton.style.alignItems = 'center';
        progressButton.style.justifyContent = 'center';
        progressButton.style.fontSize = '1.2rem';
        progressButton.style.zIndex = '4000000';
        
        // Agregar ícono de FontAwesome
        const progressIcon = document.createElement('i');
        progressIcon.id = 'progress-icon';
        progressIcon.className = 'fa-solid fa-circle-check'; // Ícono de progreso
        progressButton.appendChild(progressIcon);
        
        document.body.appendChild(progressButton);
    }

    // Crear contenedor de progreso
    const progressDisplay = document.createElement('div');
    progressDisplay.id = 'progress-display';
    progressDisplay.style.display = 'none';

    document.body.appendChild(progressDisplay);

    progressButton.addEventListener('click', toggleProgressDisplay);
    console.log('Progress button initialized');
}

// Alternar la visualización de progreso
async function toggleProgressDisplay() {
    const progressDisplay = document.getElementById('progress-display');
    const progressIcon = document.getElementById('progress-icon');
    
    if (progressDisplayVisible) {
        progressDisplay.style.display = 'none';
        progressDisplayVisible = false;
        progressIcon.className = 'fa-solid fa-circle-check';
    } else {
        progressDisplay.innerHTML = ''; // Limpiar contenido anterior
        progressDisplay.style.display = 'flex';
        progressDisplay.style.flexWrap = 'wrap';
        progressDisplay.style.justifyContent = 'center';
        progressDisplay.style.gap = '10px';
        
        for (let blockNumber = 1; blockNumber <= 4; blockNumber++) {
            await updateProgress(blockNumber);
        }
        
        progressDisplayVisible = true;
        progressIcon.className = 'fa-solid fa-circle-pause'; // Cambiar ícono al expandir
    }
}

// Actualizar progreso de cada bloque
async function updateProgress(blockNumber) {
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
        
        document.getElementById('progress-display').appendChild(blockContainer);
    } catch (error) {
        console.error(`Error updating progress for block ${blockNumber}:`, error);
    }
}
