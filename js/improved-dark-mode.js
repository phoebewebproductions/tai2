/**
 * Lightweight Dark Mode Implementation
 *
 * This script provides dark mode functionality using CSS variables
 * and color inversion for any type of content.
 */

// Main dark mode state
let darkModeEnabled = false

/**
 * Toggle dark mode
 */
function toggleDarkMode() {
  darkModeEnabled = !darkModeEnabled;

  if (darkModeEnabled) {
    // Aplicar tu clase CSS personalizada
    document.documentElement.classList.add("dark-mode");
    
    // Y también activar DarkReader para elementos no cubiertos por tu CSS
    enableDarkMode({
      brightness: 100,
      contrast: 90,
      sepia: 10,
// CSS personalizado para excluir elementos específicos
css: `
/* Excluir todos los elementos dentro del header */
header, header * {
  -darkreader-inline-color: initial !important;
  -darkreader-inline-background-color: initial !important;
  -darkreader-inline-border-color: initial !important;
  -darkreader-inline-fill: initial !important;
  -darkreader-inline-stroke: initial !important;
  -darkreader-inline-outline-color: initial !important;
  -darkreader-inline-box-shadow: initial !important;
}

/* Excluir elementos dentro del aside, pero permitir que el fondo del aside se oscurezca */
aside * {
  -darkreader-inline-color: initial !important;
  -darkreader-inline-background-color: initial !important;
  -darkreader-inline-border-color: initial !important;
  -darkreader-inline-fill: initial !important;
  -darkreader-inline-stroke: initial !important;
  -darkreader-inline-outline-color: initial !important;
  -darkreader-inline-box-shadow: initial !important;
}

/* También excluir elementos que ya manejas con tu CSS personalizado */
.dark-mode h1, .dark-mode h2, .dark-mode p, 
.dark-mode .section-title, .dark-mode .card-header,
.dark-mode [class*="-title"], .dark-mode [class*="-header"],
.dark-mode [class*="-section"], .dark-mode [class*="-card"],
.dark-mode [class*="-box"], .dark-mode [class*="-content"] {
  -darkreader-inline-color: unset !important;
  -darkreader-inline-background-color: unset !important;
  -darkreader-inline-border-color: unset !important;
}
`
});
  } else {
    // Quitar tu clase CSS personalizada
    document.documentElement.classList.remove("dark-mode");
    
    // Y desactivar DarkReader
    disableDarkMode();
  }

  // Resto de tu código (actualizar botón, guardar preferencia, etc.)
  updateDarkModeButton(darkModeEnabled);
  savePreference(darkModeEnabled);

  return darkModeEnabled;
}

/**
 * Update the dark mode button icon
 */
function updateDarkModeButton(isDarkMode) {
  const darkModeIcon = document.getElementById("darkModeIcon")
  if (darkModeIcon) {
    if (isDarkMode) {
      darkModeIcon.classList.replace("fa-moon", "fa-sun")
    } else {
      darkModeIcon.classList.replace("fa-sun", "fa-moon")
    }
  }
}

/**
 * Save user preference
 */
function savePreference(isDarkMode) {
  const userAuth = localStorage.getItem("userAuth")
  if (userAuth) {
    const userData = JSON.parse(userAuth)
    localStorage.setItem(`user_${userData.id}_darkMode`, isDarkMode)
  } else {
    localStorage.setItem("darkMode", isDarkMode)
  }
}

/**
 * Load user preference
 */
function loadPreference() {
  let preference = false

  const userAuth = localStorage.getItem("userAuth")
  if (userAuth) {
    const userData = JSON.parse(userAuth)
    preference = localStorage.getItem(`user_${userData.id}_darkMode`) === "true"
  } else {
    preference = localStorage.getItem("darkMode") === "true"
  }

  return preference
}

/**
 * Process iframes
 */
function processIframes() {
  const iframes = document.querySelectorAll("iframe")

  iframes.forEach((iframe) => {
    try {
      if (iframe.contentDocument) {
        // Add dark mode class to iframe document
        if (darkModeEnabled) {
          iframe.contentDocument.documentElement.classList.add("dark-mode")

          // Add dark mode styles to iframe if they don't exist
          if (!iframe.contentDocument.getElementById("dark-mode-styles")) {
            const style = document.createElement("style")
            style.id = "dark-mode-styles"
            style.textContent = `
              :root {
                --color-primary: #3b82f6;
                --color-primary-dark: #60a5fa;
                --color-secondary: #22c55e;
                --color-secondary-dark: #4ade80;
                --color-background: #121212;
                --color-text: #e0e0e0;
                --color-text-light: #a0a0a0;
                --color-border: #333333;
                --color-white: #1e1e1e;
                --color-overlay: rgba(0, 0, 0, 0.7);
                --color-correct: #064e3b;
                --color-incorrect: #7f1d1d;
                --color-muted: #2a2a2a;
                --body-bg: #121212;
                --card-bg: #1e1e1e;
                --header-bg: rgba(26, 26, 26, 0.9);
                --stat-item-bg: #333333;
                --color-warning: #2a2410;
                --color-warning-dark: #f59e0b;
                --color-danger: #2a1215;
                --color-danger-dark: #ef4444;
                --color-info: #102a2a;
                --color-info-dark: #06b6d4;
                --color-success: #0f2a15;
                --color-success-dark: #10b981;
              }
              body { 
                background-color: #121212 !important; 
                color: #e0e0e0 !important; 
              }
              * { 
                background-color: inherit;
              }
              h1, h2, h3, h4, h5, h6, p, span, div, li, td, th, label, strong { 
                color: #e0e0e0 !important; 
              }
              a { 
                color: #3b82f6 !important; 
              }
              /* Override any background colors */
              [style*="background-color"] {
                background-color: #1e1e1e !important;
              }
              /* Override any text colors */
              [style*="color"] {
                color: #e0e0e0 !important;
              }
              
              /* Fix for complex components */
              .info-card, .card-content, .info-item, .alert-card, .exception-card, 
              .timeline-card, .sanction-card, .bic-section, .bic-list, .bic-article-box,
              .ep-section, .ep-section-content, .ep-list-item, .ep-cause-card, .ep-privilege-card,
              .tc-intro, .tc-section, .tc-content, .tc-highlight-box, .tc-info-box,
              .cp-intro, .cp-section, .cp-content, .cp-subsection, .cp-quote-box, .cp-highlight-box,
              .dd-section, .dd-content, .dd-subsection, .dd-list-item, .dd-numbered-item,
              .te-intro, .te-section, .te-content, .te-definition-box, .te-highlight-box,
              .ce-section, .ce-content, .ce-highlight-box, .ce-councillor-card, .ce-subsection {
                background-color: #1e1e1e !important;
              }
                .disponible  {
                background-color: #1e1e1e !important;
              }
              
              /* Fix for headers */
              .card-header, .ep-section-header, .tc-title, .cp-title, .dd-title, .te-title, .ce-title,
              .bic-section-title, .ep-section-title, .tc-section-title, .cp-section-title, 
              .dd-section-title, .te-section-title, .ce-section-title {
                background-color: #3b82f6 !important;
                color: white !important;
              }
              
              /* Fix for list items */
              .info-list li, .exception-list li, .sanction-list li, .security-measures li,
              .bic-list-item, .ep-list-item, .tc-list-item, .cp-control-item, .dd-list-item,
              .te-list-item, .ce-consultation-item, .ce-consultation-numbered-item {
                background-color: #2a2a2a !important;
              }
            `
            iframe.contentDocument.head.appendChild(style)
          }

          // Process all elements with inline styles in the iframe
          processInlineStylesInIframe(iframe.contentDocument)
        } else {
          iframe.contentDocument.documentElement.classList.remove("dark-mode")
          // Remove dark mode styles if they exist
          const darkModeStyles = iframe.contentDocument.getElementById("dark-mode-styles")
          if (darkModeStyles) {
            darkModeStyles.remove()
          }
        }
      }
    } catch (e) {
      // Cross-origin iframe, can't access
      console.log("Could not access iframe content:", e)
    }
  })
}

/**
 * Process inline styles in an iframe
 */
function processInlineStylesInIframe(doc) {
  if (!darkModeEnabled) return

  // Get all elements with inline styles in the iframe
  const elementsWithInlineStyles = doc.querySelectorAll("[style]")

  // Process each element
  elementsWithInlineStyles.forEach((element) => {
    processElementInlineStyle(element)
  })
}

/**
 * Process all elements with inline styles
 */
function processInlineStyles() {
  if (!darkModeEnabled) return

  // Get all elements with inline styles
  const elementsWithInlineStyles = document.querySelectorAll("[style]")

  // Process each element
  elementsWithInlineStyles.forEach((element) => {
    processElementInlineStyle(element)
  })
}

/**
 * Process inline style of a single element
 */
function processElementInlineStyle(element) {
  // Skip certain elements
  if (element.tagName === "IMG" || element.tagName === "VIDEO" || element.tagName === "CANVAS") {
    return
  }

  const style = element.getAttribute("style")

  if (!style) return

  // Process background color
  if (style.includes("background") || style.includes("background-color")) {
    element.style.setProperty("background-color", "var(--color-white)", "important")
  }

  // Process text color
  if (style.includes("color") && !style.includes("background-color")) {
    element.style.setProperty("color", "var(--color-text)", "important")
  }

  // Process border color
  if (style.includes("border-color")) {
    element.style.setProperty("border-color", "var(--color-border)", "important")
  }

  // Process box shadow
  if (style.includes("box-shadow")) {
    element.style.setProperty("box-shadow", "var(--shadow-md)", "important")
  }
}

/**
 * Initialize dark mode
 */
function initializeDarkMode() {
  // Load user preference
  darkModeEnabled = loadPreference()

  // Apply dark mode if enabled
  if (darkModeEnabled) {
    document.documentElement.classList.add("dark-mode")
    updateDarkModeButton(true)
    processIframes()
    processInlineStyles()
  }

  // Check system preference if no user preference is set
  const userAuth = localStorage.getItem("userAuth")
  if (localStorage.getItem("darkMode") === null && !userAuth) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (prefersDark) {
      toggleDarkMode()
    }
  }

  // Set up observer for dynamically loaded content
  setupContentObserver()
}

/**
 * Set up a lightweight observer for dynamically loaded content
 */
function setupContentObserver() {
  // Create a mutation observer to watch for DOM changes
  const observer = new MutationObserver((mutations) => {
    let hasNewContent = false

    mutations.forEach((mutation) => {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        hasNewContent = true
      } else if (
        mutation.type === "attributes" &&
        (mutation.attributeName === "style" || mutation.attributeName === "class")
      ) {
        hasNewContent = true
      }
    })

    if (hasNewContent && darkModeEnabled) {
      // Process iframes and inline styles if dark mode is enabled
      processIframes()
      processInlineStyles()
    }
  })

  // Start observing the document with a more targeted approach
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style", "class"],
  })
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle")
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", toggleDarkMode)
  }

  initializeDarkMode()
})

// Handle content loaded after initial page load
window.addEventListener("load", () => {
  if (darkModeEnabled) {
    processInlineStyles()
  }
})

// Export functions for use in other modules
window.initializeDarkMode = initializeDarkMode
window.toggleDarkMode = toggleDarkMode

export { initializeDarkMode, toggleDarkMode }

