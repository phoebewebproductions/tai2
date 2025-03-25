// Script para hacer scroll al principio cuando se carga un punto
document.addEventListener('DOMContentLoaded', function() {
  console.log("Inicializando scroll-to-top.js");
  
  // Función para hacer scroll al principio
  function scrollToTop() {
    console.log("Ejecutando scrollToTop");
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Función para manejar clics en los botones de punto
  function handlePuntoClick(event) {
    const target = event.target;
    
    // Verificar si el clic fue en un botón de punto o dentro de uno
    if (target.classList.contains('punto-btn') || target.closest('.punto-btn')) {
      console.log("Clic en punto-btn detectado");
      
      // Pequeño retraso para permitir que se cargue el contenido primero
      setTimeout(scrollToTop, 300);
      
      // Cerrar sidebar en móvil
      if (window.innerWidth <= 1024) {
        const sidebar = document.querySelector('.sidebar-navigation');
        const overlay = document.querySelector('.sidebar-overlay');
        if (sidebar) sidebar.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
      }
    }
  }
  
  // Usar delegación de eventos para capturar clics en cualquier punto-btn actual o futuro
  document.body.addEventListener('click', handlePuntoClick);
  
  // Observar cambios en el contenido del punto actual
  const puntoActual = document.getElementById('punto-actual');
  if (puntoActual) {
    console.log("Configurando observador para punto-actual");
    
    // Crear un observador para detectar cambios en el contenido
    const observer = new MutationObserver(function(mutations) {
      console.log("Cambio detectado en punto-actual");
      // Si hay cambios en el contenido, hacer scroll al principio
      scrollToTop();
    });
    
    // Configurar el observador para detectar cambios en el contenido
    observer.observe(puntoActual, { 
      childList: true,
      subtree: false
    });
  }
  
  // También escuchar el evento examCompleted
  document.addEventListener('examCompleted', function() {
    console.log("Evento examCompleted detectado");
    setTimeout(scrollToTop, 300);
  });
  
  // Escuchar cambios en la URL (por si se navega con enlaces)
  let lastUrl = location.href; 
  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      console.log("Cambio de URL detectado");
      setTimeout(scrollToTop, 300);
    }
  }).observe(document, {subtree: true, childList: true});
});
