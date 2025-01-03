import { calcularProgresoBloque, inicializarProgresoBloque } from './progressTracker.js';
import { CircularProgress, getColorForBlock } from './../components/CircularProgress.js';

let progressDisplayVisible = false;

export async function initializeProgressButton() {
    let progressButton = document.getElementById('progress-button');
    
    // If the button doesn't exist, create it
    if (!progressButton) {
        progressButton = document.createElement('button');
        progressButton.id = 'progress-button';
        progressButton.textContent = 'Ver Progreso';
        progressButton.style.position = 'fixed';
        progressButton.style.top = '20px';
        progressButton.style.right = '20px';
        progressButton.style.zIndex = '1000';
        progressButton.style.padding = '10px 15px';
        progressButton.style.backgroundColor = '#4CAF50';
        progressButton.style.color = 'white';
        progressButton.style.border = 'none';
        progressButton.style.borderRadius = '5px';
        progressButton.style.cursor = 'pointer';
        document.body.appendChild(progressButton);
    }

    const progressDisplay = document.createElement('div');
    progressDisplay.id = 'progress-display';
    progressDisplay.style.display = 'none';
    progressDisplay.style.position = 'fixed';
    progressDisplay.style.top = '60px';
    progressDisplay.style.right = '20px';
    progressDisplay.style.backgroundColor = 'white';
    progressDisplay.style.padding = '10px';
    progressDisplay.style.borderRadius = '10px';
    progressDisplay.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
    progressDisplay.style.zIndex = '2';
    document.body.appendChild(progressDisplay);

    progressButton.addEventListener('click', toggleProgressDisplay);
    console.log('Progress button initialized');

    // Inicializar el progreso de los bloques
    await inicializarProgresoBloque();
}

function toggleProgressDisplay() {
    const progressDisplay = document.getElementById('progress-display');
    
    if (progressDisplayVisible) {
        progressDisplay.style.display = 'none';
        progressDisplayVisible = false;
    } else {
        progressDisplay.innerHTML = ''; // Clear previous content
        progressDisplay.style.display = 'flex';
        progressDisplay.style.flexWrap = 'wrap';
        progressDisplay.style.justifyContent = 'center';
        progressDisplay.style.alignItems='center';
        progressDisplay.style.gap = '10px';
        
        for (let i = 1; i <= 4; i++) {
            updateProgress(i);
        }
        
        progressDisplayVisible = true;
    }
}

function updateProgress(blockNumber) {
    try {
        const progress = calcularProgresoBloque(blockNumber.toString());
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

