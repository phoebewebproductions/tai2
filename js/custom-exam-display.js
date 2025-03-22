/**
 * Módulo para mostrar y gestionar exámenes personalizados
 * Este archivo es completamente independiente de examLogic.js
 */

// Clase para gestionar la visualización y lógica del examen personalizado
class CustomExamDisplay {
    constructor() {
      // Estado del examen
      this.preguntas = []
      this.minimoParaAprobar = 0
      this.examId = ""
      this.preguntaActual = 0
      this.respuestasUsuario = []
      this.mostrandoExplicacion = false
      this.examCompleto = false
      this.opcionesBarajadas = []
      this.onExamComplete = null
  
      // Elementos DOM
      this.modalExamen = document.getElementById("modal-examen-personalizado")
      this.modalOverlay = document.getElementById("modal-overlay-personalizado")
      this.contadorPreguntas = document.getElementById("contador-preguntas-personalizado")
      this.preguntaContenedor = document.getElementById("pregunta-contenedor-personalizado")
      this.opcionesContenedor = document.getElementById("opciones-contenedor-personalizado")
      this.explicacionContenedor = document.getElementById("explicacion-contenedor-personalizado")
      this.botonesContenedor = document.getElementById("botones-contenedor-personalizado")
      this.resultadosContenedor = document.getElementById("resultados-contenedor-personalizado")
  
      // Si los elementos no existen, crearlos
      this.crearElementosDOM()
  
      // Configurar eventos
      this.configurarEventos()
    }
  
    // Crear elementos DOM si no existen
    crearElementosDOM() {
      // Verificar si ya existe el modal
      if (!this.modalExamen) {
        // Crear modal de examen
        this.modalExamen = document.createElement("div")
        this.modalExamen.id = "modal-examen-personalizado"
        this.modalExamen.className = "modal-examen oculto"
  
        // Crear overlay
        this.modalOverlay = document.createElement("div")
        this.modalOverlay.id = "modal-overlay-personalizado"
        this.modalOverlay.className = "modal-overlay oculto"
  
        // Crear estructura interna del modal
        this.modalExamen.innerHTML = `
                  <button class="cerrar">&times;</button>
                  <h2 id="contador-preguntas-personalizado">Pregunta 1 de 10</h2>
                  <div id="pregunta-contenedor-personalizado" class="pregunta"></div>
                  <div id="opciones-contenedor-personalizado" class="opciones"></div>
                  <div id="explicacion-contenedor-personalizado" class="explicacion oculto"></div>
                  <div id="botones-contenedor-personalizado" class="botones-examen"></div>
                  <div id="resultados-contenedor-personalizado" class="resultados-examen oculto"></div>
              `
  
        // Añadir elementos al DOM
        document.body.appendChild(this.modalOverlay)
        document.body.appendChild(this.modalExamen)
  
        // Actualizar referencias a elementos DOM
        this.contadorPreguntas = document.getElementById("contador-preguntas-personalizado")
        this.preguntaContenedor = document.getElementById("pregunta-contenedor-personalizado")
        this.opcionesContenedor = document.getElementById("opciones-contenedor-personalizado")
        this.explicacionContenedor = document.getElementById("explicacion-contenedor-personalizado")
        this.botonesContenedor = document.getElementById("botones-contenedor-personalizado")
        this.resultadosContenedor = document.getElementById("resultados-contenedor-personalizado")
      }
  
      // Añadir estilos si no existen
      if (!document.getElementById("custom-exam-display-styles")) {
        const estilos = document.createElement("style")
        estilos.id = "custom-exam-display-styles"
        estilos.textContent = `
                  .modal-examen {
                      position: fixed;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      background-color: white;
                      padding: 20px;
                      border-radius: 8px;
                      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                      z-index: 1001;
                      max-width: 800px;
                      width: 90%;
                      max-height: 90vh;
                      overflow-y: auto;
                  }
                  
                  .modal-overlay {
                      position: fixed;
                      top: 0;
                      left: 0;
                      right: 0;
                      bottom: 0;
                      background-color: rgba(0, 0, 0, 0.5);
                      z-index: 1000;
                  }
                  
                  .oculto {
                      display: none;
                  }
                  
                  .cerrar {
                      position: absolute;
                      top: 10px;
                      right: 10px;
                      background: none;
                      border: none;
                      font-size: 24px;
                      cursor: pointer;
                  }
                  
                  .pregunta {
                      margin-bottom: 20px;
                      font-size: 18px;
                      font-weight: bold;
                  }
                  
                  .opciones {
                      display: flex;
                      flex-direction: column;
                      gap: 10px;
                      margin-bottom: 20px;
                  }
                  
                  .opcion {
                      padding: 15px;
                      border: 1px solid #ddd;
                      border-radius: 4px;
                      cursor: pointer;
                      transition: background-color 0.2s;
                  }
                  
                  .opcion:hover {
                      background-color: #f5f5f5;
                  }
                  
                  .opcion.seleccionada {
                      background-color: #e6f7ff;
                      border-color: #1890ff;
                  }
                  
                  .opcion.correcta {
                      background-color: #f6ffed;
                      border-color: #52c41a;
                  }
                  
                  .opcion.incorrecta {
                      background-color: #fff1f0;
                      border-color: #ff4d4f;
                  }
                  
                  .explicacion {
                      margin-top: 20px;
                      padding: 15px;
                      background-color: #f9f9f9;
                      border-radius: 4px;
                      border-left: 4px solid #1890ff;
                  }
                  
                  .botones-examen {
                      display: flex;
                      justify-content: flex-end;
                      margin-top: 20px;
                  }
                  
                  .btn-examen {
                      padding: 10px 20px;
                      border: none;
                      border-radius: 4px;
                      cursor: pointer;
                      font-size: 16px;
                      transition: background-color 0.2s;
                  }
                  
                  .btn-primario {
                      background-color: #1890ff;
                      color: white;
                  }
                  
                  .btn-primario:hover {
                      background-color: #096dd9;
                  }
                  
                  .btn-secundario {
                      background-color: #f0f0f0;
                      color: #333;
                      margin-right: 10px;
                  }
                  
                  .btn-secundario:hover {
                      background-color: #d9d9d9;
                  }
                  
                  .resultados-examen {
                      text-align: center;
                      padding: 20px;
                  }
                  
                  .resultados-titulo {
                      font-size: 24px;
                      margin-bottom: 10px;
                  }
                  
                  .resultados-subtitulo {
                      font-size: 18px;
                      margin-bottom: 20px;
                      color: #666;
                  }
                  
                  .resultados-aprobado {
                      color: #52c41a;
                  }
                  
                  .resultados-suspendido {
                      color: #ff4d4f;
                  }
                  
                  /* Soporte para modo oscuro */
                  .dark .modal-examen {
                      background-color: #1f1f1f;
                      color: #f0f0f0;
                  }
                  
                  .dark .opcion {
                      border-color: #444;
                      background-color: #2a2a2a;
                  }
                  
                  .dark .opcion:hover {
                      background-color: #333;
                  }
                  
                  .dark .opcion.seleccionada {
                      background-color: #003a8c;
                      border-color: #1890ff;
                  }
                  
                  .dark .opcion.correcta {
                      background-color: #135200;
                      border-color: #52c41a;
                  }
                  
                  .dark .opcion.incorrecta {
                      background-color: #5c0011;
                      border-color: #ff4d4f;
                  }
                  
                  .dark .explicacion {
                      background-color: #2a2a2a;
                      border-left-color: #1890ff;
                  }
                  
                  .dark .btn-secundario {
                      background-color: #333;
                      color: #f0f0f0;
                  }
                  
                  .dark .btn-secundario:hover {
                      background-color: #444;
                  }
              `
        document.head.appendChild(estilos)
      }
    }
  
    // Configurar eventos
    configurarEventos() {
      // Cerrar modal
      const btnCerrar = this.modalExamen.querySelector(".cerrar")
      if (btnCerrar) {
        btnCerrar.addEventListener("click", () => this.cerrarExamen())
      }
  
      // Cerrar al hacer clic en el overlay
      this.modalOverlay.addEventListener("click", () => this.cerrarExamen())
    }
  
    // Iniciar examen
    iniciarExamen(preguntas, minimoParaAprobar, examId, onExamComplete = null) {
      if (!preguntas || preguntas.length === 0) {
        console.error("No hay preguntas para iniciar el examen")
        return
      }
    
      console.log("Iniciando examen con", preguntas.length, "preguntas")
    
      // Save exam data
      this.preguntas = preguntas
      this.minimoParaAprobar = minimoParaAprobar || Math.ceil(preguntas.length * 0.6) // Use 60% as default
      this.examId = examId || "custom_exam"
      this.onExamComplete = onExamComplete
    
      // Reset state
      this.preguntaActual = 0
      this.respuestasUsuario = new Array(preguntas.length).fill(-1) // -1 indicates not answered
      this.mostrandoExplicacion = false
      this.examCompleto = false
    
      // Reset UI elements
      this.preguntaContenedor.classList.remove("oculto")
      this.opcionesContenedor.classList.remove("oculto")
      this.explicacionContenedor.classList.add("oculto")
      this.resultadosContenedor.classList.add("oculto")
    
      // Show modal
      this.modalExamen.classList.remove("oculto")
      this.modalOverlay.classList.remove("oculto")
    
      // Show first question
      this.mostrarPregunta()
    
      console.log("Examen iniciado con", preguntas.length, "preguntas")
    }
  
    // Mostrar pregunta actual
    mostrarPregunta() {
      console.log("Mostrando pregunta", this.preguntaActual + 1, "de", this.preguntas.length)
      
      // Verificar si hemos llegado al final del examen
      if (this.preguntaActual >= this.preguntas.length) {
        this.finalizarExamen()
        return
      }
    
      // Verificar si el examen ya está completo
      if (this.examCompleto) {
        console.warn("Intentando mostrar pregunta pero el examen ya está completo")
        return
      }
    
      const pregunta = this.preguntas[this.preguntaActual]
      if (!pregunta) {
        console.error("No se encontró la pregunta", this.preguntaActual)
        return
      }
    
      // Update counter
      this.contadorPreguntas.textContent = `Pregunta ${this.preguntaActual + 1} de ${this.preguntas.length}`
    
      // Show question text
      this.preguntaContenedor.textContent = pregunta.pregunta
    
      // Shuffle options
      this.opcionesBarajadas = this.barajarOpciones(pregunta.opciones)
    
      // Show options
      this.opcionesContenedor.innerHTML = ""
      this.opcionesBarajadas.forEach((opcion, index) => {
        const opcionElement = document.createElement("div")
        opcionElement.className = "opcion"
        opcionElement.textContent = opcion.texto
        opcionElement.dataset.index = index
    
        // Click event to select option
        opcionElement.addEventListener("click", () => {
          if (!this.mostrandoExplicacion) {
            this.seleccionarRespuesta(index)
          }
        })
    
        this.opcionesContenedor.appendChild(opcionElement)
      })
    
      // Hide explanation
      this.explicacionContenedor.classList.add("oculto")
      this.mostrandoExplicacion = false
    
      // Update buttons
      this.actualizarBotones()
    }
  
    // Barajar opciones
    barajarOpciones(opciones) {
      const opcionesConIndice = opciones.map((texto, indiceOriginal) => ({
        texto,
        indiceOriginal,
      }))
  
      // Barajar opciones
      for (let i = opcionesConIndice.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[opcionesConIndice[i], opcionesConIndice[j]] = [opcionesConIndice[j], opcionesConIndice[i]]
      }
  
      return opcionesConIndice
    }
  
    // Seleccionar respuesta
    seleccionarRespuesta(indiceOpcion) {
      const pregunta = this.preguntas[this.preguntaActual]
      const opcionSeleccionada = this.opcionesBarajadas[indiceOpcion]
      const esCorrecta = opcionSeleccionada.indiceOriginal === pregunta.correcta
  
      // Guardar respuesta
      this.respuestasUsuario[this.preguntaActual] = opcionSeleccionada.indiceOriginal
  
      // Marcar opciones
      const opciones = this.opcionesContenedor.querySelectorAll(".opcion")
      opciones.forEach((opcion, i) => {
        const esEstaOpcion = i === indiceOpcion
        const esOpcionCorrecta = this.opcionesBarajadas[i].indiceOriginal === pregunta.correcta
  
        opcion.classList.remove("seleccionada", "correcta", "incorrecta")
  
        if (esEstaOpcion) {
          opcion.classList.add("seleccionada")
          if (esCorrecta) {
            opcion.classList.add("correcta")
          } else {
            opcion.classList.add("incorrecta")
          }
        } else if (esOpcionCorrecta) {
          opcion.classList.add("correcta")
        }
      })
  
      // Mostrar explicación
      this.mostrarExplicacion(esCorrecta)
    }
  
    // Mostrar explicación
    mostrarExplicacion(esCorrecta) {
      const pregunta = this.preguntas[this.preguntaActual]
    
      // Actualizar estado
      this.mostrandoExplicacion = true
    
      // Mostrar explicación
      this.explicacionContenedor.classList.remove("oculto")
      
      // Only show explanation if it exists, otherwise just show the correct/incorrect message
      if (pregunta.explicacion) {
        this.explicacionContenedor.innerHTML = `
          <h3>${esCorrecta ? "¡Correcto!" : "Incorrecto"}</h3>
          <div>${pregunta.explicacion}</div>
        `
      } else {
        // Just show the correct/incorrect message without the "No hay explicación disponible" text
        this.explicacionContenedor.innerHTML = `
          <h3>${esCorrecta ? "¡Correcto!" : "Incorrecto"}</h3>
        `
      }
    
      // Actualizar botones
      this.actualizarBotones()
    }
  
    // Actualizar botones
    actualizarBotones() {
      this.botonesContenedor.innerHTML = ""
  
      if (this.examCompleto) {
        // Buttons for results
        const btnReintentar = document.createElement("button")
        btnReintentar.className = "btn-examen btn-secundario"
        btnReintentar.textContent = "Reintentar"
        
        // Remove any alert and properly call the reiniciarExamen method
        btnReintentar.addEventListener("click", () => {
          // Remove this line if it exists: alert("Funcionalidad en desarrollo")
          this.reiniciarExamen() // Make sure this is called
        })
    
        const btnCerrar = document.createElement("button")
        btnCerrar.className = "btn-examen btn-primario"
        btnCerrar.textContent = "Cerrar"
        btnCerrar.addEventListener("click", () => this.cerrarExamen())
    
        this.botonesContenedor.appendChild(btnReintentar)
        this.botonesContenedor.appendChild(btnCerrar)
      } else if (this.mostrandoExplicacion) {
        // Button for next question
        const btnSiguiente = document.createElement("button")
        btnSiguiente.className = "btn-examen btn-primario"
        btnSiguiente.textContent =
          this.preguntaActual >= this.preguntas.length - 1 ? "Ver Resultados" : "Siguiente Pregunta"
        btnSiguiente.addEventListener("click", () => this.siguientePregunta())
  
        this.botonesContenedor.appendChild(btnSiguiente)
      } else {
        // Button to skip question
        const btnSaltar = document.createElement("button")
        btnSaltar.className = "btn-examen btn-secundario"
        btnSaltar.textContent = "Saltar Pregunta"
        btnSaltar.addEventListener("click", () => this.siguientePreguntaSinResponder())
  
        this.botonesContenedor.appendChild(btnSaltar)
      }
    }
  
    // Pasar a la siguiente pregunta
    siguientePregunta() {
      this.preguntaActual++
      this.mostrarPregunta()
    }
  
    // Add a method to skip the current question
    siguientePreguntaSinResponder() {
      // Mark the current question as skipped (-1)
      this.respuestasUsuario[this.preguntaActual] = -1
  
      // Move to the next question
      this.preguntaActual++
      this.mostrarPregunta()
    }
  
    // Finalizar examen
    finalizarExamen() {
      // Calculate results
      const respuestasCorrectas = this.respuestasUsuario.filter(
        (respuesta, index) => respuesta === this.preguntas[index].correcta,
      ).length
  
      const respuestasIncorrectas = this.respuestasUsuario.filter(
        (respuesta, index) => respuesta !== -1 && respuesta !== this.preguntas[index].correcta,
      ).length
  
      const respuestasSinResponder = this.respuestasUsuario.filter((respuesta) => respuesta === -1).length
  
      // Calculate score (out of 100)
      const totalPreguntas = this.preguntas.length
      const puntosCorrectas = respuestasCorrectas * (100 / totalPreguntas)
      const puntosIncorrectas = (respuestasIncorrectas * (100 / totalPreguntas)) / 3
      const puntuacionFinal = Math.max(0, Math.round(puntosCorrectas - puntosIncorrectas))
  
      // Determine if passed (60% or more)
      const aprobado = puntuacionFinal >= 60
  
      // Update state
      this.examCompleto = true
  
      // Hide question and options containers
      this.preguntaContenedor.classList.add("oculto")
      this.opcionesContenedor.classList.add("oculto")
      this.explicacionContenedor.classList.add("oculto")
  
      // Show results
      this.resultadosContenedor.classList.remove("oculto")
      this.resultadosContenedor.innerHTML = `
      <h2 class="resultados-titulo ${aprobado ? "resultados-aprobado" : "resultados-suspendido"}">
        ${aprobado ? "¡Has aprobado! 🎉" : "No has alcanzado el mínimo para aprobar."}
      </h2>
      <p class="resultados-subtitulo">
        Has acertado ${respuestasCorrectas} de ${this.preguntas.length} preguntas.
      </p>
      <p class="resultados-subtitulo">
        Puntuación: ${puntuacionFinal}/100
      </p>
      <div class="resultados-detalles">
        <div class="resultado-item">
          <span class="resultado-valor">${respuestasCorrectas}</span>
          <span class="resultado-etiqueta">Correctas</span>
        </div>
        <div class="resultado-item">
          <span class="resultado-valor">${respuestasIncorrectas}</span>
          <span class="resultado-etiqueta">Incorrectas</span>
        </div>
        <div class="resultado-item">
          <span class="resultado-valor">${respuestasSinResponder}</span>
          <span class="resultado-etiqueta">Sin responder</span>
        </div>
      </div>
      <p class="resultados-nota">
        Sistema de puntuación: Cada respuesta correcta suma ${(100 / totalPreguntas).toFixed(1)} puntos.
        Cada respuesta incorrecta resta ${(100 / totalPreguntas / 3).toFixed(1)} puntos.
      </p>
    `
  
      // Update counter
      this.contadorPreguntas.textContent = "Resultados del Examen"
  
      // Update buttons
      this.actualizarBotones()
  
      // Call callback if it exists
      if (this.onExamComplete) {
        this.onExamComplete(aprobado, respuestasCorrectas, this.respuestasUsuario)
      }
  
      // Show confetti if passed
      if (aprobado && window.confetti) {
        window.confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
      }
    }
  
    // Reiniciar examen
// Fix the reiniciarExamen method to properly restart the exam
reiniciarExamen() {
  console.log("Reiniciando examen...")
  
  // Reset state
  this.preguntaActual = 0
  this.respuestasUsuario = new Array(this.preguntas.length).fill(-1) // Use -1 to indicate not answered
  this.mostrandoExplicacion = false
  this.examCompleto = false

  // Reset UI elements
  this.preguntaContenedor.classList.remove("oculto")
  this.opcionesContenedor.classList.remove("oculto")
  this.explicacionContenedor.classList.add("oculto")
  this.resultadosContenedor.classList.add("oculto")

  // Show first question
  this.mostrarPregunta()
  
  console.log("Examen reiniciado")
}
  
    // Cerrar examen
    cerrarExamen() {
      // Ocultar modal
      this.modalExamen.classList.add("oculto")
      this.modalOverlay.classList.add("oculto")
    }
  }
  
  // Exportar clase
  export default CustomExamDisplay
  
  