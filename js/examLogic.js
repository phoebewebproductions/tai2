import { mostrarModal, ocultarModal, actualizarEstadoPuntos } from './uiManager.js';
import { actualizarProgresoCompleto, guardarUltimoExamenAprobado, calcularProgresoBloque } from './progressTracker.js';
import { mostrarSubpuntosCompletados } from './contadorSubpuntos.js';

function extractExplanations(htmlContent) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const explanations = {};

    const elements = doc.querySelectorAll('[id]');
    elements.forEach((element) => {
        const id = element.id;
        const content = element.innerHTML.trim();
        if (content) {
            explanations[id] = content;
        }
    });

    return explanations;
}

export class ExamenManager {
    constructor(preguntas, examId, bloque, tema, punto, subpunto, minimoParaAprobar) {
        this.preguntas = Array.isArray(preguntas) ? preguntas : [];
        if (this.preguntas.length === 0) {
            console.error('No se han cargado preguntas válidas:', preguntas);
        }
        console.log(`Número de preguntas cargadas: ${this.preguntas.length}`);
        
        this.examId = examId;
        this.bloque = bloque;
        this.tema = tema;
        this.punto = punto;
        this.subpunto = subpunto;
        this.preguntaActual = 0;
        this.respuestasCorrectas = 0;
        this.respuestasUsuario = [];
        this.minimoParaAprobar = minimoParaAprobar || Math.ceil(this.preguntas.length * 0.7);
        this.explicaciones = {};
        
        console.log(`Mínimo para aprobar: ${this.minimoParaAprobar}`);
        
        this.preguntas.forEach(pregunta => {
            if (pregunta.explicacion) {
                this.explicaciones[pregunta.id] = pregunta.explicacion;
            }
        });

        this.modalExamen = document.getElementById('modal-examen');
        this.contadorPreguntas = document.getElementById('contador-preguntas');
        this.preguntaContenedor = document.getElementById('pregunta-contenedor');
        this.opcionesContenedor = document.getElementById('opciones-contenedor');

        if (!this.modalExamen || !this.contadorPreguntas || !this.preguntaContenedor || !this.opcionesContenedor) {
            console.error('One or more required DOM elements not found');
        }
    }

    async iniciarExamen() {
        console.log('Iniciando examen');
        try {
            // Load HTML content
            var temaFormatted = this.tema;
            var temaMenor= this.tema/1;
            if (this.tema <10){
                temaFormatted = temaMenor;
            }
            const filePath = `./temas/tema${temaFormatted}/${this.examId}.html`;
            console.log(`Attempting to fetch HTML content from: ${filePath}`);
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Failed to fetch HTML content: ${response.statusText}`);
            }
            const htmlContent = await response.text();

            // Extract explanations
            this.explicaciones = extractExplanations(htmlContent);
            console.log('Extracted explanations:', this.explicaciones);

            this.resetExamen();
            mostrarModal(this.modalExamen);
            this.mostrarPregunta();
        } catch (error) {
            console.error('Error initializing exam:', error);
            alert('Error al iniciar el examen. Por favor, inténtelo de nuevo.');
        }
    }

    mostrarPregunta() {
        console.log(`[Modal] Intentando mostrar pregunta ${this.preguntaActual + 1} de ${this.preguntas.length}`);
        if (this.preguntaActual < this.preguntas.length) {
            const pregunta = this.preguntas[this.preguntaActual];
            this.actualizarContadorPreguntas();
            this.preguntaContenedor.textContent = pregunta.pregunta;
            this.opcionesContenedor.innerHTML = '';

            pregunta.opciones.forEach((opcion, index) => {
                const boton = document.createElement('button');
                boton.textContent = opcion;
                boton.className = 'btn-opcion';
                boton.addEventListener('click', () => this.verificarRespuesta(index));
                this.opcionesContenedor.appendChild(boton);
            });

            console.log(`[Modal] Pregunta ${this.preguntaActual + 1} mostrada: ${pregunta.pregunta}`);
        } else {
            console.log(`[Modal] Todas las preguntas mostradas, finalizando examen`);
            this.finalizarExamen();
        }
    }

    verificarRespuesta(respuestaIndex) {
        console.log(`[Modal] Verificando respuesta para pregunta ${this.preguntaActual + 1}: ${respuestaIndex}`);
        const pregunta = this.preguntas[this.preguntaActual];
        const esCorrecta = respuestaIndex === pregunta.correcta;
        this.respuestasUsuario[this.preguntaActual] = respuestaIndex;

        if (esCorrecta) {
            this.respuestasCorrectas++;
        }

        const opciones = this.opcionesContenedor.querySelectorAll('.btn-opcion');
        opciones.forEach((opcion, index) => {
            if (index === respuestaIndex) {
                opcion.classList.add(esCorrecta ? 'correcta' : 'incorrecta');
            }
            if (index === pregunta.correcta) {
                opcion.classList.add('correcta');
            }
            opcion.disabled = true;
        });

        console.log(`[Modal] Respuesta ${esCorrecta ? 'correcta' : 'incorrecta'}, mostrando explicación`);
        this.mostrarExplicacion(esCorrecta, pregunta.id);
    }

    mostrarExplicacion(esCorrecta, preguntaId) {
        console.log(`[Modal] Mostrando explicación para pregunta ${this.preguntaActual + 1}`);
        const modalExplicacion = document.getElementById('modal-explicacion');
        const explicacionTitulo = document.getElementById('explicacion-titulo');
        const explicacionContenido = document.getElementById('explicacion-contenido');

        if (!modalExplicacion || !explicacionTitulo || !explicacionContenido) {
            console.error('Required DOM elements not found');
            return;
        }

        explicacionTitulo.textContent = esCorrecta ? '¡Correcto!' : 'Incorrecto';

        const pregunta = this.preguntas[this.preguntaActual];
        console.log(`[Modal] Pregunta actual:`, pregunta);
        if (this.explicaciones[preguntaId]) {
            console.log(`[Modal] Explicación encontrada:`, this.explicaciones[preguntaId]);
            explicacionContenido.innerHTML = this.explicaciones[preguntaId];
        } else {
            console.log(`[Modal] No se encontró explicación para la pregunta ${this.preguntaActual + 1}`);
            explicacionContenido.textContent = 'No se encontró una explicación para esta pregunta.';
        }

        mostrarModal(modalExplicacion);

        const btnEntendido = document.getElementById('btn-entendido');
        btnEntendido.onclick = null; // Remove any existing event listeners
        const handleEntendidoClick = () => {
            console.log(`[Modal] Botón "Entendido" clickeado para pregunta ${this.preguntaActual + 1}`);
            btnEntendido.removeEventListener('click', handleEntendidoClick);
            ocultarModal(modalExplicacion);
            this.siguientePregunta();
        };
        btnEntendido.addEventListener('click', handleEntendidoClick, { once: true });
    }

    siguientePregunta() {
        console.log(`[Modal] Pasando a la siguiente pregunta. Actual: ${this.preguntaActual + 1}`);
        if (this.preguntaActual >= this.preguntas.length - 1) {
            console.log(`[Modal] Ya estamos en la última pregunta, finalizando examen`);
            this.finalizarExamen();
            return;
        }
        this.preguntaActual++;
        console.log(`[Modal] Nueva pregunta actual: ${this.preguntaActual + 1}`);
        this.mostrarPregunta();
    }

    finalizarExamen() {
        console.log(`Finalizando examen. Respuestas correctas: ${this.respuestasCorrectas} de ${this.preguntas.length}`);
        const modalExamen = document.getElementById('modal-examen');
        const preguntaContenedor = document.getElementById('pregunta-contenedor');
        const opcionesContenedor = document.getElementById('opciones-contenedor');

        const aprobado = this.respuestasCorrectas >= this.minimoParaAprobar;
        const mensajeResultado = `Has completado el examen. Acertaste ${this.respuestasCorrectas} de ${this.preguntas.length} preguntas.`;
        const mensajeAprobado = aprobado ? '¡Has aprobado! 🎉🎊' : 'No has alcanzado el mínimo para aprobar.';

        
        
        mostrarSubpuntosCompletados();
        preguntaContenedor.innerHTML = `
            <p class="resultado-examen">${mensajeResultado}</p>
            <p class="mensaje-aprobado ${aprobado ? 'aprobado' : 'no-aprobado'}">${mensajeAprobado}</p>
           
        `;

        const botonesContenedor = document.createElement('div');
        botonesContenedor.className = 'botones-examen';

        const btnReview = document.createElement('button');
        btnReview.textContent = 'Revisar respuestas';
        btnReview.className = 'btn-examen btn-review';
        btnReview.addEventListener('click', () => this.revisarRespuestas());

        const btnCerrar = document.createElement('button');
        btnCerrar.textContent = 'Cerrar';
        btnCerrar.className = 'btn-examen btn-cerrar';
        btnCerrar.addEventListener('click', () => {
            ocultarModal(modalExamen);
            console.log(`Examen cerrado. Porcentaje final de puntos desbloqueados: ${porcentajeCompletado.toFixed(2)}%`);
            if (aprobado) {
                if (this.examId.startsWith('examen_completo_tema_')) {
                    const tema = parseInt(this.examId.split('_').pop());
                    actualizarProgresoCompleto(this.bloque, tema);
                } else {
                    actualizarProgresoCompleto(this.bloque, this.tema);
                }
                guardarUltimoExamenAprobado(this.examId);
                window.dispatchEvent(new Event('progresoActualizado'));
                actualizarEstadoPuntos();
                calcularProgresoBloque(this.bloque);
            }
        });

        const btnReintentar = document.createElement('button');
        btnReintentar.textContent = 'Reintentar';
        btnReintentar.className = 'btn-examen btn-reintentar';
        btnReintentar.addEventListener('click', () => {
            this.resetExamen();
            this.mostrarPregunta();
        });

        botonesContenedor.appendChild(btnReview);
        botonesContenedor.appendChild(btnCerrar);
        botonesContenedor.appendChild(btnReintentar);

        opcionesContenedor.innerHTML = '';
        opcionesContenedor.appendChild(botonesContenedor);

        // Remove the close button
        const closeButton = modalExamen.querySelector('.cerrar');
        if (closeButton) {
            closeButton.remove();
        }

        if (aprobado) {
            this.mostrarConfeti(); // Añadir esta línea
            // Pass the full ID to actualizarProgresoCompleto
            actualizarProgresoCompleto(this.examId.replace(/e$/, ''));
            window.dispatchEvent(new Event('progresoActualizado'));
            actualizarEstadoPuntos();
            calcularProgresoBloque(this.bloque);
        }
    }

    revisarRespuestas() {
        const modalReview = document.getElementById('modal-review');
        const reviewContainer = document.getElementById('review-container');
        reviewContainer.innerHTML = '';

        this.preguntas.forEach((pregunta, index) => {
            const respuestaUsuario = this.respuestasUsuario[index];
            const esCorrecta = respuestaUsuario === pregunta.correcta;

            const preguntaElement = document.createElement('div');
            preguntaElement.innerHTML = `
                <p><strong>Pregunta ${index + 1}:</strong> ${pregunta.pregunta}</p>
                <p>Tu respuesta: ${respuestaUsuario !== null ? pregunta.opciones[respuestaUsuario] : 'No contestada'}</p>
                <p>Respuesta correcta: ${pregunta.opciones[pregunta.correcta]}</p>
                <p style="color: ${esCorrecta ? 'green' : 'red'}">${esCorrecta ? 'Correcto' : 'Incorrecto'}</p>
                <div class="explicacion">${this.explicaciones[pregunta.id] || 'No se encontró explicación para esta pregunta.'}</div>
            `;
            reviewContainer.appendChild(preguntaElement);
        });

        mostrarModal(modalReview);
    }

    cerrarExamen() {
        const modalExamen = document.getElementById('modal-examen');
        ocultarModal(modalExamen);
        // Aquí puedes añadir cualquier limpieza adicional necesaria
    }

    actualizarContadorPreguntas() {
        if (this.contadorPreguntas) {
            this.contadorPreguntas.textContent = `Pregunta ${this.preguntaActual + 1} de ${this.preguntas.length}`;
        }
    }

    resetExamen() {
        this.preguntaActual = 0;
        this.respuestasCorrectas = 0;
        this.respuestasUsuario = [];
        console.log('Examen reseteado. Listo para un nuevo intento.');
    }

    findCurrentSubpunto() {
        return document.querySelector(`[data-id="${this.examId.slice(0, -1)}"]`);
    }

    findNextSubpunto(currentSubpunto) {
        const allSubpuntos = Array.from(document.querySelectorAll('.subpunto-btn'));
        const currentIndex = allSubpuntos.indexOf(currentSubpunto);
        return allSubpuntos[currentIndex + 1] || null;
    }

    mostrarConfeti() {
        console.log('Intentando mostrar confeti');
        if (typeof window.confetti === 'function') {
            try {
                window.confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#ff0000', '#00ff00', '#0000ff']
                });
                console.log('Confeti mostrado con éxito');
            } catch (error) {
                console.error('Error al mostrar confeti:', error);
            }
        } else {
            console.warn('La función confetti no está disponible. Asegúrate de que la librería esté correctamente cargada.');
        }
    }
}

export function iniciarExamen(bloque, tema, punto, subpunto, examId, preguntas, minimoParaAprobar) {
    const examenManager = new ExamenManager(preguntas, examId, bloque, tema, punto, subpunto, minimoParaAprobar);
    examenManager.iniciarExamen();
}

