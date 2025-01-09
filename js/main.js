import { cargarTodasLasEstructuras, estructuraGlobal, updateEstructuraGlobal } from './structureLoader.js';
import { generarEstructuraBloque } from './uiGenerator.js';
import { initializeProgressButton } from './progressButton.js';

document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOMContentLoaded event fired');
    
    try {
        // Load all structures
        await cargarTodasLasEstructuras();
        
        if (Object.keys(estructuraGlobal).length === 0) {
            throw new Error('Failed to load estructuras');
        }

        // Determine the current block (you might need to implement this based on your navigation logic)
        const currentBlockId = getCurrentBlockId();

        // Generate UI only for the current block
        if (estructuraGlobal[currentBlockId]) {
            generarEstructuraBloque(estructuraGlobal[currentBlockId]);
        } else {
            console.error(`No structure found for block ${currentBlockId}`);
        }
        
        // Initialize progress button after UI is generated
        initializeProgressButton();
        
        // Update global structure after everything is initialized
        updateEstructuraGlobal();
        
        console.log('Initialization complete');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});

// Function to determine the current block ID (you need to implement this based on your navigation logic)
function getCurrentBlockId() {
    // This is a placeholder. You need to implement the logic to determine the current block.
    // It could be based on URL parameters, local storage, or any other method you're using for navigation.
    return 1; // Default to block 1 for now
}

// Listen for exam completion events
document.addEventListener('examCompleted', async (event) => {
    const { bloqueId, currentPointIndex } = event.detail;
    await updateEstructuraGlobal();
    // Trigger any necessary UI updates here
});

