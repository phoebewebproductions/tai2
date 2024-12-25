import { handleActualizarProgreso } from './script.js';
import { mostrarModal, ocultarModal } from './uiLogic.js';

export class ExamenManager {
    constructor(preguntas, puntoActual) {
        this.preguntas = preguntas;
        this.puntoActual = puntoActual;
        this.preguntasActuales = [];
        this.preguntaActual = 0;
        this.respuestasCorrectas = 0;
        this.respuestasUsuario = [];
        
        this.preguntaTexto = document.getElementById('pregunta-texto');
        this.opcionesDiv = document.getElementById('opciones');
        this.btnSiguiente = document.getElementById('btn-siguiente');
        
        this.mostrarPregunta = this.mostrarPregunta.bind(this);
        this.verificarRespuesta = this.verificarRespuesta.bind(this);
        this.siguientePregunta = this.siguientePregunta.bind(this);
        this.handleEntendidoClick = this.handleEntendidoClick.bind(this);
    }
    
    iniciarExamen() {
        console.log('Iniciando examen');
        this.preguntasActuales = this.preguntas[this.puntoActual].preguntas;
        this.mezclarPreguntas();
        this.mostrarPregunta();
    }
    
    mezclarPreguntas() {
        for (let i = this.preguntasActuales.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.preguntasActuales[i], this.preguntasActuales[j]] = 
            [this.preguntasActuales[j], this.preguntasActuales[i]];
        }
    }
    
    mostrarPregunta() {
        console.log(`Mostrando pregunta ${this.preguntaActual + 1} de ${this.preguntasActuales.length}`);
        const pregunta = this.preguntasActuales[this.preguntaActual];
        this.preguntaTexto.innerText = `Pregunta ${this.preguntaActual + 1} de ${this.preguntasActuales.length}: ${pregunta.pregunta}`;
        
        this.opcionesDiv.innerHTML = '';
        pregunta.opciones.forEach((opcion, index) => {
            const boton = document.createElement('button');
            boton.className = 'opcion';
            boton.innerText = opcion;
            boton.addEventListener('click', () => this.verificarRespuesta(index));
            this.opcionesDiv.appendChild(boton);
        });
    }
    
    verificarRespuesta(respuestaIndex) {
        console.log(`Verificando respuesta para la pregunta ${this.preguntaActual + 1}`);
        const pregunta = this.preguntasActuales[this.preguntaActual];
        if (!pregunta) {
            console.error('Pregunta no encontrada');
            return;
        }
        const esCorrecta = respuestaIndex === pregunta.correcta;
        
        this.respuestasUsuario[this.preguntaActual] = respuestaIndex;
        
        const opciones = Array.from(this.opcionesDiv.children);
        opciones.forEach((opcion, index) => {
            opcion.disabled = true;
            if (index === respuestaIndex) {
                opcion.classList.add(esCorrecta ? 'correcta' : 'incorrecta');
            }
            if (index === pregunta.correcta) {
                opcion.classList.add('correcta');
            }
        });
        
        if (esCorrecta) {
            this.respuestasCorrectas++;
        }
        
        this.mostrarExplicacion(esCorrecta);
    }
    
    mostrarExplicacion(esCorrecta) {
        console.log('Mostrando explicación');
        const pregunta = this.preguntasActuales[this.preguntaActual];
        const explicacionId = pregunta.explicacionId;
        const explicacionElemento = document.getElementById(explicacionId);
        if (explicacionElemento) {
            const modalText = document.getElementById('modal-text');
            modalText.innerHTML = explicacionElemento.innerHTML;
            modalText.classList.remove('respuesta-correcta', 'respuesta-incorrecta');
            modalText.classList.add(esCorrecta ? 'respuesta-correcta' : 'respuesta-incorrecta');
            mostrarModal(document.getElementById('modal'));
    
            const btnEntendido = document.querySelector('#modal .close');
            btnEntendido.removeEventListener('click', this.handleEntendidoClick);
            btnEntendido.addEventListener('click', this.handleEntendidoClick);
        } else {
            console.error(`No se encontró la explicación con ID: ${explicacionId}`);
            this.siguientePregunta();
        }
    }
    
    handleEntendidoClick() {
        console.log('Botón Entendido clickeado');
        ocultarModal(document.getElementById('modal'));
        this.siguientePregunta();
    }
    
    siguientePregunta() {
        console.log(`Pasando a la siguiente pregunta. Actual: ${this.preguntaActual + 1}`);
        this.preguntaActual++;
        
        if (this.preguntaActual < this.preguntasActuales.length) {
            this.mostrarPregunta();
        } else {
            this.mostrarResultadosFinales();
        }
    }
    
    mostrarResultadosFinales() {
        console.log('Mostrando resultados finales');
        const minimoNecesario = this.preguntas[this.puntoActual].minimoParaAprobar;
        const aprobado = this.respuestasCorrectas >= minimoNecesario;
        
        this.preguntaTexto.innerText = '¡Examen completado!';
        this.opcionesDiv.innerHTML = `
            <div style="text-align: center;">
                <h3>Resultados:</h3>
                <p>Has acertado ${this.respuestasCorrectas} de ${this.preguntasActuales.length} preguntas</p>
                <p>${aprobado ? '¡Has aprobado! 🎉 Puedes pasar al siguiente punto.' : 
                    'No has alcanzado el mínimo necesario. Repasa el contenido y vuelve a intentarlo.'}</p>
                <button id="cerrar-examen" class="btn-primary">Cerrar</button>
            </div>
        `;
        
        if (aprobado) {
            handleActualizarProgreso(this.puntoActual, true);
        }
        
        document.getElementById('cerrar-examen').addEventListener('click', () => {
            const modalExamen = document.getElementById('modal-examen');
            ocultarModal(modalExamen);
        });
    }
}

