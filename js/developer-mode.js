// Developer Mode Module
// This module adds a developer mode toggle that unlocks all content without saving progress

// State to track if developer mode is active
let developerModeActive = false;

// Function to create and add the developer mode button
function createDeveloperModeButton() {
  // Create the floating button
  const devButton = document.createElement('button');
  devButton.id = 'dev-mode-toggle';
  devButton.className = 'dev-mode-button';
  devButton.innerHTML = '<i class="fa-solid fa-code"></i>';
  devButton.title = 'Modo Desarrollador';
  
  // Create the status indicator
  const statusIndicator = document.createElement('span');
  statusIndicator.className = 'dev-mode-status';
  statusIndicator.textContent = 'DEV';
  
  // Add click event to toggle developer mode
  devButton.addEventListener('click', toggleDeveloperMode);
  
  // Add the button to the body
  document.body.appendChild(devButton);
  document.body.appendChild(statusIndicator);
  
  // Add the styles
  addDeveloperModeStyles();
  
  console.log('Developer mode button added to the page');
}

// Function to add the necessary styles
function addDeveloperModeStyles() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .dev-mode-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, #ff5f6d, #ffc371);
      color: white;
      border: none;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      transition: all 0.3s ease;
    }
    
    .dev-mode-button:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
    }
    
    .dev-mode-button.active {
      background: linear-gradient(135deg, #00b09b, #96c93d);
    }
    
    .dev-mode-status {
      position: fixed;
      bottom: 75px;
      right: 20px;
      background-color: #ff5f6d;
      color: white;
      padding: 5px 10px;
      border-radius: 10px;
      font-size: 0.8rem;
      font-weight: bold;
      z-index: 9999;
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.3s ease;
      pointer-events: none;
    }
    
    .dev-mode-status.active {
      opacity: 1;
      transform: translateY(0);
      background-color: #00b09b;
    }
    
    /* Add a special indicator to the header when dev mode is active */
    .dev-mode-header-indicator {
      display: inline-block;
      background-color: #00b09b;
      color: white;
      padding: 2px 8px;
      border-radius: 10px;
      font-size: 0.7rem;
      font-weight: bold;
      margin-left: 10px;
      vertical-align: middle;
    }
  `;
  document.head.appendChild(styleElement);
}

// Function to toggle developer mode
function toggleDeveloperMode() {
  developerModeActive = !developerModeActive;
  
  const devButton = document.getElementById('dev-mode-toggle');
  const statusIndicator = document.querySelector('.dev-mode-status');
  
  if (developerModeActive) {
    // Activate developer mode
    devButton.classList.add('active');
    statusIndicator.classList.add('active');
    
    // Add indicator to header
    const headerTitle = document.querySelector('header .titulo h2');
    if (headerTitle && !document.querySelector('.dev-mode-header-indicator')) {
      const indicator = document.createElement('span');
      indicator.className = 'dev-mode-header-indicator';
      indicator.textContent = 'DEV MODE';
      headerTitle.appendChild(indicator);
    }
    
    // Apply developer mode to the UI
    applyDeveloperMode();
    
    // Show notification
    showNotification('Modo desarrollador activado. Todos los puntos y exámenes están desbloqueados. El progreso NO se guardará.');
    
    console.log('Developer mode activated');
  } else {
    // Deactivate developer mode
    devButton.classList.remove('active');
    statusIndicator.classList.remove('active');
    
    // Remove indicator from header
    const indicator = document.querySelector('.dev-mode-header-indicator');
    if (indicator) {
      indicator.remove();
    }
    
    // Restore normal mode
    restoreNormalMode();
    
    // Show notification
    showNotification('Modo desarrollador desactivado. Funcionamiento normal restaurado.');
    
    console.log('Developer mode deactivated');
  }
}

// Function to apply developer mode to the UI
function applyDeveloperMode() {
  // Unlock all points by modifying their classes directly
  const puntoButtons = document.querySelectorAll('.punto-btn');
  puntoButtons.forEach(button => {
    // Remove 'bloqueado' class and add 'disponible' class
    button.classList.remove('bloqueado');
    button.classList.add('disponible');
    
    // Enable the button
    button.disabled = false;
  });
  
  // Intercept future point loading
  setupClickInterceptor();
  
  // Prevent progress saving by intercepting localStorage
  interceptLocalStorage();
}

// Function to restore normal mode
function restoreNormalMode() {
  // Reload the page to restore normal functionality
  // This is the simplest way to restore everything without complex state tracking
  location.reload();
}

// Function to intercept clicks on punto buttons
function setupClickInterceptor() {
  // Create a MutationObserver to watch for new buttons
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        // Check for new punto buttons
        const newButtons = document.querySelectorAll('.punto-btn.bloqueado');
        newButtons.forEach(button => {
          // Remove 'bloqueado' class and add 'disponible' class
          button.classList.remove('bloqueado');
          button.classList.add('disponible');
          
          // Enable the button
          button.disabled = false;
        });
      }
    });
  });
  
  // Start observing the document
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Also intercept click events on punto buttons to ensure they're always enabled
  document.addEventListener('click', event => {
    if (developerModeActive && event.target.closest('.punto-btn')) {
      const button = event.target.closest('.punto-btn');
      if (button.classList.contains('bloqueado')) {
        // Prevent the default action
        event.preventDefault();
        event.stopPropagation();
        
        // Remove 'bloqueado' class and add 'disponible' class
        button.classList.remove('bloqueado');
        button.classList.add('disponible');
        
        // Enable the button
        button.disabled = false;
        
        // Trigger a click event after a short delay
        setTimeout(() => {
          button.click();
        }, 10);
      }
    }
  }, true);
}

// Function to intercept localStorage to prevent progress saving
function interceptLocalStorage() {
  // Save the original setItem method
  const originalSetItem = localStorage.setItem;
  
  // Override the setItem method
  localStorage.setItem = function(key, value) {
    // Check if this is a progress-related key
    if (developerModeActive && (key.includes('courseProgress') || key.includes('Progress'))) {
      console.log(`[Dev Mode] Prevented saving progress to localStorage: ${key}`);
      return; // Don't save progress in developer mode
    }
    
    // Call the original method for non-progress keys
    originalSetItem.call(localStorage, key, value);
  };
}

// Function to show a notification
function showNotification(message) {
  // Create notification element if it doesn't exist
  let notification = document.getElementById('dev-notification');
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'dev-notification';
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      z-index: 10000;
      max-width: 300px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      transform: translateY(-20px);
      opacity: 0;
    `;
    document.body.appendChild(notification);
  }
  
  // Set message and show notification
  notification.textContent = message;
  notification.style.transform = 'translateY(0)';
  notification.style.opacity = '1';
  
  // Hide notification after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateY(-20px)';
    notification.style.opacity = '0';
  }, 5000);
}

// Initialize developer mode when the DOM is loaded
function initializeDeveloperMode() {
  console.log('Initializing developer mode');
  createDeveloperModeButton();
  
  // Check if developer mode was previously active (could be stored in sessionStorage)
  const wasActive = sessionStorage.getItem('developerModeActive') === 'true';
  if (wasActive) {
    // Activate developer mode
    setTimeout(() => {
      toggleDeveloperMode();
    }, 500); // Short delay to ensure the page is fully loaded
  }
}

// Listen for DOM loaded event
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeDeveloperMode);
} else {
  initializeDeveloperMode();
}

// Save state when page is unloaded
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('developerModeActive', developerModeActive);
});