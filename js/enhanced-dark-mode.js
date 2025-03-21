/**
 * Enhanced Dark Mode Implementation
 *
 * This script combines CSS variables with dynamic style processing
 * to ensure all elements respect dark mode settings.
 */

import { initStyleProcessor } from "./style-processor.js"

// Main dark mode state
let darkModeEnabled = false

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

  // Process iframes
  processIframes()

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
 * Process iframes
 */
function processIframes() {
  const iframes = document.querySelectorAll("iframe")

  iframes.forEach((iframe) => {
    try {
      if (iframe.contentDocument) {
        if (darkModeEnabled) {
          iframe.contentDocument.documentElement.classList.add("dark-mode")
        } else {
          iframe.contentDocument.documentElement.classList.remove("dark-mode")
        }
      }
    } catch (e) {
      // Cross-origin iframe, can't access
      console.log("Could not access iframe content:", e)
    }
  })
}

/**
 * Initialize dark mode
 */
function initializeDarkMode() {
  // Add base styles
  addBaseStyles()

  // Initialize style processor
  initStyleProcessor()

  // Load user preference
  darkModeEnabled = loadPreference()

  // Apply dark mode if enabled
  if (darkModeEnabled) {
    document.documentElement.classList.add("dark-mode")
    updateDarkModeButton(true)
    processIframes()
  }

  // Check system preference if no user preference is set
  const userAuth = localStorage.getItem("userAuth")
  if (localStorage.getItem("darkMode") === null && !userAuth) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (prefersDark) {
      toggleDarkMode()
    }
  }

  // Set up event listener for system preference changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    // Only apply system preference if user hasn't set a preference
    if (localStorage.getItem("darkMode") === null && !userAuth) {
      if (e.matches !== darkModeEnabled) {
        toggleDarkMode()
      }
    }
  })
}

/**
 * Add base styles
 */
function addBaseStyles() {
  const style = document.createElement("style")
  style.textContent = `
    /* Base dark mode variables */
    :root {
      --color-primary: #3b82f6;
      --color-primary-dark: #2563eb;
      --color-secondary: #22c55e;
      --color-secondary-dark: #16a34a9f;
      --color-background: #ffffff;
      --color-text: #1a1a1a;
      --color-text-light: #666666;
      --color-border: #e5e5e5;
      --color-white: #ffffff;
      --color-overlay: rgba(0, 35, 90, 0.7);
      --color-correct: #dcfce7;
      --color-incorrect: #fee2e2;
      --color-muted: #f9f9f9;
      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      --transition: all 0.3s ease;
      
      /* Additional variables */
      --body-bg: #f9f9f9;
      --card-bg: #ffffff;
      --header-bg: rgba(255, 255, 255, 0.9);
      --stat-item-bg: #e5e5e5;
    }
    
    /* Dark mode variables */
    .dark-mode {
      --color-background: #1a1a1a;
      --color-text: #e0e0e0;
      --color-text-light: #a0a0a0;
      --color-border: #333333;
      --color-correct: #064e3b;
      --color-incorrect: #7f1d1d;
      --color-muted: #2a2a2a;
      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.2);
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
      --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
      
      /* Additional variables */
      --body-bg: #121212;
      --card-bg: #1e1e1e;
      --header-bg: rgba(26, 26, 26, 0.9);
      --stat-item-bg: #333333;
    }
    
    /* Base element styles */
    .dark-mode body {
      background-color: var(--body-bg);
      color: var(--color-text);
    }
    
    /* Apply transition for smooth color changes */
    * {
      transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    }
    
    /* Fix for elements that weren't using CSS variables */
    .dark-mode .welcome-card, 
    .dark-mode .dashboard-right,
    .dark-mode .exams-section,
    .dark-mode .punto-btn:not(.completado):not(.disponible),
    .dark-mode .stat-item,
    .dark-mode .sidebar-navigation,
    .dark-mode .content-area,
    .dark-mode .modal-examen,
    .dark-mode .modal-explicacion,
    .dark-mode .teoria {
      background-color: var(--card-bg);
      color: var(--color-text);
    }
    
    /* Fix for text colors */
    .dark-mode h1, 
    .dark-mode h2, 
    .dark-mode h3, 
    .dark-mode h4, 
    .dark-mode h5, 
    .dark-mode h6, 
    .dark-mode p, 
    .dark-mode span, 
    .dark-mode div {
      color: var(--color-text);
    }
    
    /* Fix for borders */
    .dark-mode .welcome-card, 
    .dark-mode .dashboard-right,
    .dark-mode .exams-section,
    .dark-mode .punto-btn,
    .dark-mode .sidebar-navigation,
    .dark-mode .content-area {
      border-color: var(--color-border);
    }
    
    /* Fix for header text color in dark mode */
    .dark-mode .titulo h1,
    .dark-mode .titulo h2 {
      color: var(--color-text);
    }
    
    /* Fix for button text in dark mode */
    .dark-mode .tema-btn,
    .dark-mode .punto-btn:not(.completado):not(.disponible) {
      color: var(--color-text);
    }
    
    /* Fix for header buttons in dark mode */
    .dark-mode .header-button,
    .dark-mode #darkModeToggle,
    .dark-mode .volver {
      color: var(--color-text);
    }
    
    /* Fix for overlay in dark mode */
    .dark-mode header::before {
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%);
    }
    
    /* Fix for background image opacity in dark mode */
    .dark-mode body::before {
      opacity: 0.05;
    }
    
    /* Exclude certain elements from dark mode processing */
    img, video, canvas, [data-no-dark-mode] {
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

// Handle dynamically loaded content
window.addEventListener("load", () => {
  if (darkModeEnabled) {
    processIframes()
  }
})

// Export functions for use in other modules
window.initializeDarkMode = initializeDarkMode
window.toggleDarkMode = toggleDarkMode

export { initializeDarkMode, toggleDarkMode }

