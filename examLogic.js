import { mostrarModal, ocultarModal, desbloquearSiguientePunto } from './uiLogic.js';
import { preguntas } from './questions.js';

export class ExamenManager {
    constructor() {
        this.preguntasActuales = [];
        this.preguntaActualIndex = 0;
        this.respuestasCorrectas = 0;
        this.puntoActual = "";
        
        this.modalExamen = document.getElementById("modal-examen");
        this.modal = document.getElementById("modal");
        this.preguntaTexto = document.getElementById("pregunta-texto");
        this.opcionesDiv = document.getElementById("opciones");
        this.btnSiguiente = document.getElementById("btn-siguiente");
    }

    iniciarExamen(puntoId) {
        this.puntoActual = puntoId;
        this.preguntasActuales = preguntas[puntoId].preguntas;
        this.preguntaActualIndex = 0;
        this.respuestasCorrectas = 0;
        
        if (this.preguntasActuales.length > 0) {
            this.mostrarPregunta();
            mostrarModal(this.modalExamen);
        }
    }

    mostrarPregunta() {
        let preguntaActual = this.preguntasActuales[this.preguntaActualIndex];
        if (preguntaActual) {
            this.preguntaTexto.innerText = `Pregunta ${this.preguntaActualIndex + 1} de ${this.preguntasActuales.length}: ${preguntaActual.pregunta}`;
            this.opcionesDiv.innerHTML = "";

            preguntaActual.opciones.forEach((opcion, index) => {
                let btnOpcion = document.createElement("button");
                btnOpcion.innerText = opcion;
                btnOpcion.addEventListener("click", () => 
                    this.validarRespuesta(index, preguntaActual.explicacionId)
                );
                this.opcionesDiv.appendChild(btnOpcion);
            });
        } else {
            this.mostrarResultadosFinales();
        }
    }

    validarRespuesta(indexSeleccionado, explicacionId) {
        let preguntaActual = this.preguntasActuales[this.preguntaActualIndex];
        const explicacionElemento = document.getElementById(explicacionId);
        const explicacionTexto = explicacionElemento ? 
            explicacionElemento.textContent : "No se encontró la explicación";

        if (indexSeleccionado === preguntaActual.correcta) {
            this.respuestasCorrectas++;
            document.getElementById('modal-text').innerText = `¡Correcto! ${explicacionTexto}`;
        } else {
            document.getElementById('modal-text').innerText = `Incorrecto. ${explicacionTexto}`;
        }
        mostrarModal(this.modal);
    }

    mostrarResultadosFinales() {
        const minimoNecesario = preguntas[this.puntoActual].minimoParaAprobar;
        const aprobado = this.respuestasCorrectas >= minimoNecesario;
        
        this.preguntaTexto.innerText = `¡Examen completado!`;
        this.opcionesDiv.innerHTML = `
            <div style="text-align: center;">
                <h3>Resultados:</h3>
                <p>Has acertado ${this.respuestasCorrectas} de ${this.preguntasActuales.length} preguntas</p>
                <p>${aprobado ? '¡Has aprobado! 🎉 Puedes pasar al siguiente punto.' : 'No has alcanzado el mínimo necesario. Repasa el contenido y vuelve a intentarlo.'}</p>
            </div>
        `;
        this.btnSiguiente.style.display = 'none';

        if (aprobado) {
            desbloquearSiguientePunto(this.puntoActual);
        }
    }

    reiniciarExamen() {
        this.preguntaActualIndex = 0;
        this.respuestasCorrectas = 0;
        this.btnSiguiente.style.display = 'inline-block';
    }

    siguientePregunta() {
        this.preguntaActualIndex++;
        this.mostrarPregunta();
    }
}
