import { cargarProgresoBloque, calcularProgresoBloque } from './../js/progressTracker.js';
import { CircularProgress, getColorForBlock } from './../components/CircularProgress.js';

export function initializeProgress() {
    const progressDisplay = document.querySelector('#progress-display');

    if (!progressDisplay) {
        console.error('Progress display element not found');
        return;
    }

    progressDisplay.style.display = 'flex';
    progressDisplay.style.flexWrap = 'wrap';
    progressDisplay.style.justifyContent = 'center';
    progressDisplay.style.alignItems = 'center'
    progressDisplay.style.gap = '10px';
    progressDisplay.style.padding = '10px';
    progressDisplay.style.backgroundColor = '#0005';
    progressDisplay.style.borderRadius = '10px';
    progressDisplay.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
    progressDisplay.style.width = 'fit-content';
  
    for (let i = 1; i <= 4; i++) {
        updateProgress(i);
    }

    console.log('Progress display initialized');

    // Calculate and save the progress of all blocks on initialization
    for (let i = 1; i <= 4; i++) {
        calcularProgresoBloque(i);
    }
}

async function updateProgress(blockNumber) {
    try {
        const progressData = cargarProgresoBloque(blockNumber);
        let progress;
        
        if (progressData) {
            progress = (progressData.subpuntosCompletados / progressData.totalSubpuntos) * 100;
        } else {
            progress = await calcularProgresoBloque(blockNumber);
        }
        if (isNaN(progress) || progress === null || progress === undefined) {
            progress = 0;
        }

        const color = getColorForBlock(blockNumber);
        const circularProgress = CircularProgress({ 
            progress, 
            size: 80, 
            strokeWidth: 8, 
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
        
        const existingContainer = document.getElementById(`block-${blockNumber}-container`);
        if (existingContainer) {
            existingContainer.replaceWith(blockContainer);
        } else {
            blockContainer.id = `block-${blockNumber}-container`;
            document.getElementById('progress-display').appendChild(blockContainer);
        }
    } catch (error) {
        console.error(`Error updating progress for block ${blockNumber}:`, error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');
    initializeProgress();
    
    window.addEventListener('progresoActualizado', () => {
        console.log('Evento progresoActualizado recibido');
        // Recalculate and update progress for all blocks
        for (let i = 1; i <= 4; i++) {
            calcularProgresoBloque(i).then(() => {
                updateProgress(i);
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const alertas = document.querySelectorAll(".enconstruccion");
    alertas.forEach(alerta => {
        alerta.addEventListener('click', () => {
            alert("Sitio en construcción, ya llegaremos a esa sección");
        });
    });
});

