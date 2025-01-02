export async function cargarEstructuraBloque() {
    try {
        console.log('Iniciando carga de estructura');
        const response = await fetch('./estructura.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const estructura = await response.json();
        console.log('Estructura cargada:', estructura);
        
        if (!estructura || !estructura.temas || estructura.temas.length === 0) {
            console.error('La estructura cargada está vacía o no tiene temas');
        }
        
        return estructura;
    } catch (error) {
        console.error('Error loading estructura.json:', error);
        throw error;
    }
}

