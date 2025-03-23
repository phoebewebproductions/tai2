/**
 * Donation Button Controller
 * Controla el comportamiento del botón flotante de donación
 */

document.addEventListener('DOMContentLoaded', () => {
    initDonationButton();
  });
  
  /**
   * Inicializa el botón flotante de donación con comportamiento mejorado
   */
  function initDonationButton() {
    const donationButton = document.getElementById('donation-float-button');
    const donationIcon = document.querySelector('.donation-icon');
    
    if (!donationButton || !donationIcon) return;
    
    // Hacer el botón visible inmediatamente
    donationButton.style.opacity = '1';
    
    // Configurar la animación de agitación periódica
    setupShakeAnimation(donationIcon);
    
    // Mostrar/ocultar el panel al hacer clic en el icono
    donationIcon.addEventListener('click', () => {
      // Toggle la clase active para mostrar/ocultar el panel
      donationButton.classList.toggle('active');
      
      // Si el panel está abierto, detener temporalmente la animación
      if (donationButton.classList.contains('active')) {
        // Detener la animación temporalmente mientras el panel está abierto
        pauseShakeAnimation(donationIcon);
      } else {
        // Reanudar la animación cuando se cierra el panel
        resumeShakeAnimation(donationIcon);
      }
    });
  }
  
  /**
   * Configura la animación de agitación periódica
   * @param {HTMLElement} element - El elemento a animar
   */
  function setupShakeAnimation(element) {
    // Almacenar el estado de la animación
    element.animationPaused = false;
    
    // Añadir clase de animación cada 30 segundos
    const shakeInterval = setInterval(() => {
      // No animar si está pausado
      if (element.animationPaused) return;
      
      // Añadir clase de animación
      element.classList.add('shake-animation');
      
      // Eliminar la clase después de que termine la animación
      setTimeout(() => {
        element.classList.remove('shake-animation');
      }, 1000);
    }, 30000); // Repetir cada 30 segundos
    
    // También agitar inmediatamente al cargar la página
    setTimeout(() => {
      element.classList.add('shake-animation');
      setTimeout(() => {
        element.classList.remove('shake-animation');
      }, 1000);
    }, 3000); // Primera animación después de 3 segundos
    
    // Guardar el intervalo en el elemento para poder pausarlo/reanudarlo
    element.shakeInterval = shakeInterval;
  }
  
  /**
   * Pausa temporalmente la animación de agitación
   * @param {HTMLElement} element - El elemento cuya animación se pausará
   */
  function pauseShakeAnimation(element) {
    element.animationPaused = true;
  }
  
  /**
   * Reanuda la animación de agitación
   * @param {HTMLElement} element - El elemento cuya animación se reanudará
   */
  function resumeShakeAnimation(element) {
    element.animationPaused = false;
  }
  