/**
 * Style Processor for Dark Mode
 *
 * This script specifically targets style tags and inline styles to ensure
 * they respect dark mode settings.
 */

// Configuration
const styleConfig = {
    // Light mode colors that should be replaced in dark mode
    lightColors: {
      // Background colors
      "#ffffff": "var(--color-background)",
      "#fff": "var(--color-background)",
      white: "var(--color-background)",
      "#f9f9f9": "var(--body-bg)",
      "#f5f5f5": "var(--body-bg)",
      "#f0f0f0": "var(--body-bg)",
      "#fafafa": "var(--body-bg)",
  
      // Text colors
      "#000000": "var(--color-text)",
      "#000": "var(--color-text)",
      black: "var(--color-text)",
      "#1a1a1a": "var(--color-text)",
      "#333333": "var(--color-text)",
      "#333": "var(--color-text)",
      "#444": "var(--color-text)",
      "#555": "var(--color-text)",
  
      // Border colors
      "#e5e5e5": "var(--color-border)",
      "#ddd": "var(--color-border)",
      "#ccc": "var(--color-border)",
      "#eee": "var(--color-border)",
    },
  
    // Dark mode colors that should be used
    darkColors: {
      background: "var(--color-background)",
      text: "var(--color-text)",
      border: "var(--color-border)",
      muted: "var(--color-muted)",
    },
  
    // Selectors to target specific elements that need special handling
    specialSelectors: [
      ".teoria",
      ".punto-contenido",
      ".content-area",
      ".modal-examen",
      ".modal-explicacion",
      ".sidebar-navigation",
      ".welcome-card",
      ".dashboard-right",
      ".exams-section",
      ".stat-item",
    ],
  }
  
  /**
   * Process all style tags in the document
   */
  function processStyleTags() {
    const styleTags = document.querySelectorAll("style")
  
    styleTags.forEach((styleTag) => {
      // Skip if already processed
      if (styleTag.dataset.darkModeProcessed) return
  
      // Get the CSS text
      const cssText = styleTag.textContent
  
      // Create dark mode version of the CSS
      const darkModeCss = createDarkModeCSS(cssText)
  
      // Create a new style tag for dark mode
      const darkModeStyle = document.createElement("style")
      darkModeStyle.setAttribute("data-dark-mode-for", styleTag.id || "inline-style")
      darkModeStyle.textContent = darkModeCss
  
      // Insert after the original style tag
      styleTag.parentNode.insertBefore(darkModeStyle, styleTag.nextSibling)
  
      // Mark as processed
      styleTag.dataset.darkModeProcessed = "true"
    })
  }
  
  /**
   * Create dark mode version of CSS
   */
  function createDarkModeCSS(cssText) {
    // Replace color values
    for (const [lightColor, darkColor] of Object.entries(styleConfig.lightColors)) {
      const regex = new RegExp(lightColor, "gi")
      cssText = cssText.replace(regex, darkColor)
    }
  
    // Wrap all rules in .dark-mode selector
    const rules = cssText.split("}")
    let darkModeCss = ""
  
    rules.forEach((rule) => {
      if (rule.trim() === "") return
  
      // Split into selector and declaration
      const parts = rule.split("{")
      if (parts.length !== 2) return
  
      const selector = parts[0].trim()
      const declaration = parts[1].trim()
  
      // Skip @media, @keyframes, etc.
      if (selector.startsWith("@")) {
        darkModeCss += `${selector} { ${declaration} }\n`
        return
      }
  
      // Add .dark-mode prefix to each selector
      const selectors = selector.split(",")
      const darkModeSelectors = selectors.map((s) => `.dark-mode ${s.trim()}`).join(", ")
  
      darkModeCss += `${darkModeSelectors} { ${declaration} }\n`
    })
  
    return darkModeCss
  }
  
  /**
   * Add special styles for specific elements
   */
  function addSpecialStyles() {
    const style = document.createElement("style")
  
    let specialStyles = ""
  
    // Add styles for each special selector
    styleConfig.specialSelectors.forEach((selector) => {
      specialStyles += `
        .dark-mode ${selector} {
          background-color: var(--card-bg) !important;
          color: var(--color-text) !important;
        }
      `
    })
  
    // Add more specific overrides
    specialStyles += `
      .dark-mode .teoria {
        background-color: var(--card-bg) !important;
        color: var(--color-text) !important;
      }
      
      .dark-mode .teoria h1, 
      .dark-mode .teoria h2, 
      .dark-mode .teoria h3, 
      .dark-mode .teoria h4, 
      .dark-mode .teoria h5, 
      .dark-mode .teoria h6, 
      .dark-mode .teoria p, 
      .dark-mode .teoria span, 
      .dark-mode .teoria div {
        color: var(--color-text) !important;
      }
      
      .dark-mode .teoria a {
        color: var(--color-primary) !important;
      }
      
      .dark-mode .teoria code, 
      .dark-mode .teoria pre {
        background-color: var(--color-muted) !important;
        color: var(--color-text) !important;
      }
      
      .dark-mode .teoria table {
        border-color: var(--color-border) !important;
      }
      
      .dark-mode .teoria th, 
      .dark-mode .teoria td {
        border-color: var(--color-border) !important;
      }
      
      .dark-mode .teoria tr:nth-child(even) {
        background-color: rgba(255, 255, 255, 0.05) !important;
      }
    `
  
    style.textContent = specialStyles
    document.head.appendChild(style)
  }
  
  /**
   * Process dynamically loaded content
   */
  function setupContentObserver() {
    // Create a mutation observer to watch for DOM changes
    const observer = new MutationObserver((mutations) => {
      let needsProcessing = false
  
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
              // Element node
              // Check if it's a style tag or contains style tags
              if (node.tagName === "STYLE" || node.querySelector("style")) {
                needsProcessing = true
              }
  
              // Check if it's a special element
              if (
                styleConfig.specialSelectors.some((selector) => node.matches(selector) || node.querySelector(selector))
              ) {
                needsProcessing = true
              }
            }
          })
        }
      })
  
      if (needsProcessing) {
        processStyleTags()
        applyDarkModeToIframes()
      }
    })
  
    // Start observing the document
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  }
  
  /**
   * Apply dark mode to iframes
   */
  function applyDarkModeToIframes() {
    const iframes = document.querySelectorAll("iframe")
  
    iframes.forEach((iframe) => {
      try {
        if (iframe.contentDocument) {
          // Check if dark mode is enabled
          const isDarkMode = document.documentElement.classList.contains("dark-mode")
  
          if (isDarkMode) {
            iframe.contentDocument.documentElement.classList.add("dark-mode")
  
            // Process style tags in iframe
            const iframeStyleTags = iframe.contentDocument.querySelectorAll("style")
            iframeStyleTags.forEach((styleTag) => {
              // Skip if already processed
              if (styleTag.dataset.darkModeProcessed) return
  
              // Get the CSS text
              const cssText = styleTag.textContent
  
              // Create dark mode version of the CSS
              const darkModeCss = createDarkModeCSS(cssText)
  
              // Create a new style tag for dark mode
              const darkModeStyle = document.createElement("style")
              darkModeStyle.setAttribute("data-dark-mode-for", styleTag.id || "inline-style")
              darkModeStyle.textContent = darkModeCss
  
              // Insert after the original style tag
              styleTag.parentNode.insertBefore(darkModeStyle, styleTag.nextSibling)
  
              // Mark as processed
              styleTag.dataset.darkModeProcessed = "true"
            })
  
            // Add special styles to iframe
            const style = document.createElement("style")
            style.textContent = `
              body {
                background-color: var(--body-bg) !important;
                color: var(--color-text) !important;
              }
              
              /* Add more specific styles as needed */
            `
            iframe.contentDocument.head.appendChild(style)
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
   * Initialize the style processor
   */
  function initStyleProcessor() {
    // Add CSS variables to iframes
    addCSSVariablesToIframes()
  
    // Process existing style tags
    processStyleTags()
  
    // Add special styles
    addSpecialStyles()
  
    // Set up observer for dynamic content
    setupContentObserver()
  
    // Process iframes
    applyDarkModeToIframes()
  }
  
  /**
   * Add CSS variables to iframes
   */
  function addCSSVariablesToIframes() {
    const iframes = document.querySelectorAll("iframe")
  
    iframes.forEach((iframe) => {
      try {
        if (iframe.contentDocument) {
          const style = document.createElement("style")
          style.textContent = `
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
              --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
              --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
              --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
              --transition: all 0.3s ease;
              --body-bg: #f9f9f9;
              --card-bg: #ffffff;
              --header-bg: rgba(255, 255, 255, 0.9);
              --stat-item-bg: #e5e5e5;
            }
            
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
              --body-bg: #121212;
              --card-bg: #1e1e1e;
              --header-bg: rgba(26, 26, 26, 0.9);
              --stat-item-bg: #333333;
            }
          `
          iframe.contentDocument.head.appendChild(style)
        }
      } catch (e) {
        // Cross-origin iframe, can't access
        console.log("Could not access iframe content:", e)
      }
    })
  }
  
  // Export the initialization function
  export { initStyleProcessor }
  
  