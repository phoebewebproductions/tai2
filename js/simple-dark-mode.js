/**
 * Auto Dark Mode Implementation
 *
 * This script automatically converts hardcoded colors in style tags to CSS variables
 * for better dark mode compatibility.
 */

// Main dark mode state
let darkModeEnabled = false

// Color mapping for automatic conversion
const colorMapping = {
  // Background colors
  "#ffffff": "var(--color-background)",
  "#fff": "var(--color-background)",
  "#ffff": "var(--color-background)",
  white: "var(--color-background)",
  "#f8f9fa": "var(--card-bg)",
  "#f5f5f5": "var(--card-bg)",
  "#f0f0f0": "var(--card-bg)",
  "#e9ecef": "var(--color-border)",
  "#e8f4fc": "var(--color-muted)",

  // Text colors
  "#000000": "var(--color-text)",
  "#000": "var(--color-text)",
  black: "var(--color-text)",
  "#333": "var(--color-text)",
  "#444": "var(--color-text)",
  "#555": "var(--color-text)",
  "#6c7986": "var(--color-text-light)",
  "#2980b9": "var(--color-primary)",
}

/**
 * Toggle dark mode
 */
function toggleDarkMode() {
  darkModeEnabled = !darkModeEnabled

  if (darkModeEnabled) {
    document.documentElement.classList.add("dark-mode")
  } else {
    document.documentElement.classList.remove("dark-mode")
  }

  // Update the icon
  updateDarkModeButton(darkModeEnabled)

  // Save preference
  savePreference(darkModeEnabled)

  return darkModeEnabled
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
 * Process style tags to replace hardcoded colors with CSS variables
 */
function processStyleTags() {
  const styleTags = document.querySelectorAll("style")

  styleTags.forEach((styleTag) => {
    // Skip if already processed
    if (styleTag.dataset.darkModeProcessed) return

    let cssText = styleTag.textContent

    // Replace color values with CSS variables
    for (const [colorValue, cssVariable] of Object.entries(colorMapping)) {
      // Create a regex that matches the color value with various syntaxes
      // This handles cases like "color: #fff", "background-color: white", etc.
      const regex = new RegExp(`(:|\\s)${colorValue}(\\s|;|,|\\))`, "gi")
      cssText = cssText.replace(regex, `$1${cssVariable}$2`)
    }

    // Update the style tag content
    styleTag.textContent = cssText

    // Mark as processed
    styleTag.dataset.darkModeProcessed = "true"
  })
}

/**
 * Set up mutation observer to process dynamically added style tags
 */
function setupStyleObserver() {
  const observer = new MutationObserver((mutations) => {
    let hasNewStyles = false

    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeName === "STYLE" || (node.nodeType === 1 && node.querySelector("style"))) {
            hasNewStyles = true
          }
        })
      }
    })

    if (hasNewStyles) {
      processStyleTags()
    }
  })

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  })
}

/**
 * Initialize dark mode
 */
function initializeDarkMode() {
  // Add base styles
  addBaseStyles()

  // Process existing style tags
  processStyleTags()

  // Set up observer for dynamically added style tags
  setupStyleObserver()

  // Load user preference
  darkModeEnabled = loadPreference()

  // Apply dark mode if enabled
  if (darkModeEnabled) {
    document.documentElement.classList.add("dark-mode")
    updateDarkModeButton(true)
  }

  // Check system preference if no user preference is set
  const userAuth = localStorage.getItem("userAuth")
  if (localStorage.getItem("darkMode") === null && !userAuth) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (prefersDark) {
      toggleDarkMode()
    }
  }
}

/**
 * Add base styles
 */
function addBaseStyles() {
  const style = document.createElement("style")
  style.textContent = `
    /* Dark mode styles with !important to override inline styles */
    .dark-mode {
      --color-background: #1a1a1a;
      --color-text: #e0e0e0;
      --color-text-light: #a0a0a0;
      --color-border: #333333;
      --color-muted: #2a2a2a;
      --body-bg: #121212;
      --card-bg: #1e1e1e;
      --header-bg: rgba(26, 26, 26, 0.9);
      --stat-item-bg: #333333;
      --color-primary: #3b82f6;
      --color-primary-dark: #2563eb;
      --color-secondary: #22c55e;
    }
    
    /* Base element styles */
    .dark-mode body {
      background-color: var(--body-bg) !important;
      color: var(--color-text) !important;
    }
    
    /* Apply transition for smooth color changes */
    * {
      transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    }
    
    /* Override background colors */
    .dark-mode .welcome-card, 
    .dark-mode .dashboard-right,
    .dark-mode .exams-section,
    .dark-mode .punto-btn:not(.completado):not(.disponible),
    .dark-mode .stat-item,
    .dark-mode .sidebar-navigation,
    .dark-mode .content-area,
    .dark-mode .modal-examen,
    .dark-mode .modal-explicacion,
    .dark-mode .teoria,
    .dark-mode .punto-contenido {
      background-color: var(--card-bg) !important;
      color: var(--color-text) !important;
    }
    
    /* Override text colors */
    .dark-mode h1, 
    .dark-mode h2, 
    .dark-mode h3, 
    .dark-mode h4, 
    .dark-mode h5, 
    .dark-mode h6, 
    .dark-mode p, 
    .dark-mode span, 
    .dark-mode div,
    .dark-mode li,
    .dark-mode td,
    .dark-mode th,
    .dark-mode label,
    .dark-mode input,
    .dark-mode textarea,
    .dark-mode select {
      color: var(--color-text) !important;
    }
    
    /* Override border colors */
    .dark-mode .welcome-card, 
    .dark-mode .dashboard-right,
    .dark-mode .exams-section,
    .dark-mode .punto-btn,
    .dark-mode .sidebar-navigation,
    .dark-mode .content-area,
    .dark-mode table,
    .dark-mode td,
    .dark-mode th,
    .dark-mode hr,
    .dark-mode input,
    .dark-mode textarea,
    .dark-mode select {
      border-color: var(--color-border) !important;
    }
    
    /* Fix for header text color in dark mode */
    .dark-mode .titulo h1,
    .dark-mode .titulo h2 {
      color: var(--color-text) !important;
    }
    
    /* Fix for button text in dark mode */
    .dark-mode .tema-btn,
    .dark-mode .punto-btn:not(.completado):not(.disponible) {
      color: var(--color-text) !important;
    }
    
    /* Fix for header buttons in dark mode */
    .dark-mode .header-button,
    .dark-mode #darkModeToggle,
    .dark-mode .volver {
      color: var(--color-text) !important;
    }
    
    /* Fix for overlay in dark mode */
    .dark-mode header::before {
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%) !important;
    }
    
    /* Fix for background image opacity in dark mode */
    .dark-mode body::before {
      opacity: 0.05 !important;
    }
    
    /* Fix for code blocks and pre elements */
    .dark-mode code,
    .dark-mode pre {
      background-color: #2d2d2d !important;
      color: #e0e0e0 !important;
    }
    
    /* Fix for tables */
    .dark-mode table {
      background-color: var(--card-bg) !important;
    }
    
    .dark-mode tr:nth-child(even) {
      background-color: rgba(255, 255, 255, 0.05) !important;
    }
    
    /* Fix for links */
    .dark-mode a {
      color: #3b82f6 !important;
    }
    
    /* Fix for inputs */
    .dark-mode input,
    .dark-mode textarea,
    .dark-mode select {
      background-color: var(--color-muted) !important;
      color: var(--color-text) !important;
    }
    
    /* Specific fixes for .concepto-clave */
    .dark-mode .concepto-clave {
      background-color: var(--color-muted) !important;
      border-left: 5px solid var(--color-primary) !important;
    }
    
    .dark-mode .concepto-clave h3 {
      color: var(--color-primary) !important;
    }
    
    /* Specific fixes for .caracteristica-item */
    .dark-mode .caracteristica-item {
      border-color: var(--color-border) !important;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3) !important;
    }
    
    .dark-mode .caracteristica-item:hover {
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4) !important;
    }
    
    .dark-mode .caracteristica-titulo {
      background-color: var(--color-primary) !important;
    }
    
    .dark-mode .caracteristica-titulo h4 {
      color: var(--color-background) !important;
    }
    
    .dark-mode .caracteristica-contenido {
      background-color: var(--card-bg) !important;
    }
    
    /* Exclude certain elements from dark mode processing */
    img, video, canvas {
      filter: none !important;
    }
  `
  document.head.appendChild(style)
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle")
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", toggleDarkMode)
  }

  initializeDarkMode()
})

// Process style tags when content is loaded
window.addEventListener("load", () => {
  // Process again after everything is loaded
  processStyleTags()
})

// Export functions for use in other modules
window.initializeDarkMode = initializeDarkMode
window.toggleDarkMode = toggleDarkMode

export { initializeDarkMode, toggleDarkMode }

