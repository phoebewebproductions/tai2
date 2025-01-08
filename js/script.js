// Función para aplicar el modo oscuro
function applyDarkMode(isDark) {
    const root = document.documentElement;
    if (isDark) {
        root.classList.add('dark-mode');
    } else {
        root.classList.remove('dark-mode');
    }
}

// Función para cambiar entre modo claro y oscuro
function toggleDarkMode() {
    const root = document.documentElement;
    const isDarkMode = !root.classList.contains('dark-mode');
    applyDarkMode(isDarkMode);
    updateDarkModeButton(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
}

// Función para actualizar el ícono del botón de modo oscuro
function updateDarkModeButton(isDarkMode) {
    const darkModeIcon = document.getElementById('darkModeIcon');
    if (darkModeIcon) {
        if (isDarkMode) {
            darkModeIcon.classList.replace('fa-moon', 'fa-sun'); // Cambia a sol en modo oscuro
        } else {
            darkModeIcon.classList.replace('fa-sun', 'fa-moon'); // Cambia a luna en modo claro
        }
    }
}


// Función para inicializar el modo oscuro basado en la preferencia guardada
function initializeDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    applyDarkMode(isDarkMode);
    updateDarkModeButton(isDarkMode); // Actualiza el ícono al cargar la página
}

// Función para observar cambios en el DOM
function observeDOMChanges() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                const addedNodes = mutation.addedNodes;
                addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        applyDarkModeToElement(node);
                    }
                });
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

// Función para aplicar el modo oscuro a un elemento específico
function applyDarkModeToElement(element) {
    if (document.documentElement.classList.contains('dark-mode')) {
        element.classList.add('dark-mode');
    }
}

// Función principal de inicialización
function initialize() {
    console.log('Inicialización del script comenzada');
    
    initializeDarkMode();
    observeDOMChanges();

    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    console.log('Inicialización del script completada');
}

// Ejecutar la inicialización cuando el DOM esté cargado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}


// Function to handle "under construction" elements
function handleConstructionElements() {
    const construccion = document.querySelectorAll(".enconstruccion");
    construccion.forEach((punto) => {
        punto.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Todavía no, pero ya se barajan las preguntas y tienes tema oscuro...");
        });
    });
}
