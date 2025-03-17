// Función principal para inicializar las calculadoras
function inicializarCalculadoras() {
    console.log("Verificando calculadoras...")
  
    // Inicializar calculadora binario-decimal si existe
    inicializarCalculadoraBinario()
  
    // Inicializar calculadora hexadecimal si existe
    inicializarCalculadoraHexadecimal()
  }
  
  // Función para inicializar la calculadora binario-decimal
  function inicializarCalculadoraBinario() {
    const binarioInput = document.getElementById("binario-input")
    const calcularBtn = document.getElementById("calcular-decimal")
    const decimalResultado = document.getElementById("decimal-resultado")
  
    // Verificar si los elementos existen
    if (binarioInput && calcularBtn && decimalResultado) {
      console.log("Calculadora binario-decimal encontrada, inicializando...")
  
      calcularBtn.addEventListener("click", () => {
        const binario = binarioInput.value.trim()
  
        // Validar que solo contenga 0s y 1s
        if (!/^[01]+$/.test(binario)) {
          alert("Por favor, ingrese solo 0s y 1s")
          return
        }
  
        // Convertir a decimal
        const decimal = Number.parseInt(binario, 2)
        decimalResultado.textContent = decimal
      })
    }
  }
  
  // Función para inicializar la calculadora hexadecimal
  function inicializarCalculadoraHexadecimal() {
    const hexInput = document.getElementById("hex-input")
    const calcularDecimalBtn = document.getElementById("calcular-decimal")
    const calcularBinarioBtn = document.getElementById("calcular-binario")
    const decimalResultado = document.getElementById("decimal-resultado")
    const binarioResultado = document.getElementById("binario-resultado")
  
    // Verificar si los elementos existen
    if (hexInput && calcularDecimalBtn && calcularBinarioBtn && decimalResultado && binarioResultado) {
      console.log("Calculadora hexadecimal encontrada, inicializando...")
  
      // Función para validar entrada hexadecimal
      function esHexadecimalValido(hex) {
        return /^[0-9A-Fa-f]+$/.test(hex)
      }
  
      // Función para convertir hexadecimal a decimal
      calcularDecimalBtn.addEventListener("click", () => {
        const hex = hexInput.value.trim().toUpperCase()
  
        if (!esHexadecimalValido(hex)) {
          alert("Por favor, ingrese un valor hexadecimal válido (0-9, A-F)")
          return
        }
  
        const decimal = Number.parseInt(hex, 16)
        decimalResultado.textContent = decimal
      })
  
      // Función para convertir hexadecimal a binario
      calcularBinarioBtn.addEventListener("click", () => {
        const hex = hexInput.value.trim().toUpperCase()
  
        if (!esHexadecimalValido(hex)) {
          alert("Por favor, ingrese un valor hexadecimal válido (0-9, A-F)")
          return
        }
  
        const decimal = Number.parseInt(hex, 16)
        let binario = decimal.toString(2)
  
        // Asegurar que el binario tenga 16 bits (4 dígitos hex = 16 bits)
        while (binario.length < 16) {
          binario = "0" + binario
        }
  
        // Formatear el binario en grupos de 4 para mejor legibilidad
        const binarioFormateado = binario.match(/.{1,4}/g).join(" ")
        binarioResultado.textContent = binarioFormateado
      })
    }
  }
  
  // Inicializar las calculadoras cuando el DOM esté listo
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM cargado, verificando calculadoras iniciales...")
    inicializarCalculadoras()
  
    // Observar cambios en el contenido para reinicializar las calculadoras cuando sea necesario
    const puntoActual = document.getElementById("punto-actual")
    if (puntoActual) {
      console.log("Configurando observador para el contenido dinámico...")
  
      // Crear un observador de mutaciones para detectar cuando se carga nuevo contenido
      const observer = new MutationObserver((mutations) => {
        console.log("Cambio detectado en el contenido, reinicializando calculadoras...")
        inicializarCalculadoras()
      })
  
      // Configurar el observador para que observe cambios en los hijos del contenedor
      observer.observe(puntoActual, { childList: true, subtree: true })
    }
  })
  
  