import { cargarEstructuraBloque, estructuraGlobal, updateEstructuraGlobal } from './structureLoader.js';
import { generarEstructuraBloque } from './uiGenerator.js';
import { initializeProgressButton } from './progressButton.js';

document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOMContentLoaded event fired');
    
    try {
        // Load the structure
        await cargarEstructuraBloque();
        
        if (!estructuraGlobal) {
            throw new Error('Failed to load estructura');
        }

        // Generate UI with the structure
        generarEstructuraBloque(estructuraGlobal);
        
        // Initialize progress button after UI is generated
        initializeProgressButton();
        
        // Update global structure after everything is initialized
        updateEstructuraGlobal();
        
        console.log('Initialization complete');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});

// Listen for exam completion events
document.addEventListener('examCompleted', async (event) => {
    const { bloqueId, currentPointIndex } = event.detail;
    await updateEstructuraGlobal();
    // Trigger any necessary UI updates here
});

