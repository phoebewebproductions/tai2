import { mostrarSubpuntosCompletados } from './contadorSubpuntos.js';
import { updateProgress, getBloqueId, updateEstructuraGlobal, getLastCompletedIndex } from './structureLoader.js';

function extractExplanations(htmlContent) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    return Array.from(doc.querySelectorAll('[id]')).reduce((acc, element) => {
        const content = element.innerHTML.trim();
        if (content) {
            acc[element.id] = content;
        }
        return acc;
    }, {});
}

export function mostrarModal(elemento) {
    elemento.classList.remove('oculto');
    elemento.classList.add('visible');
}

export function ocultarModal(elemento) {
    elemento.classList.add('oculto');
    elemento.classList.remove('visible');
}

export class ExamenManager {
    constructor(preguntas, examId, bloque, tema, punto, subpunto, minimoParaAprobar, estructuraGlobal) {
        this.preguntas = Array.isArray(preguntas) ? preguntas : [];
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
        
        
        this.preguntas.forEach(pregunta => {
            if (pregunta.explicacion) {
                this.explicaciones[pregunta.id] = pregunta.explicacion;
            }
        });

        this.estructuraGlobal = estructuraGlobal;
        if (!this.estructuraGlobal || !this.estructuraGlobal.puntosLineales) {
            console.error('estructuraGlobal or puntosLineales is undefined:', this.estructuraGlobal);
        } else {
            console.log('estructuraGlobal initialized successfully:', JSON.stringify(this.estructuraGlobal, null, 2));
        }
        this.bloqueId = this.getBloqueId();

        this.initializeDOMElements();
        this.logInitialInfo();
        this.setupCloseButton();
    }
    

    findSubpuntoIndex() {
        if (!this.estructuraGlobal || !this.estructuraGlobal.puntosLineales) {
            console.error('estructuraGlobal or puntosLineales is undefined');
            return -1;
        }
        
        const subpuntoId = this.examId.replace('e', '');
        console.log('Searching for subpunto with ID:', subpuntoId);
        console.log('puntosLineales:', JSON.stringify(this.estructuraGlobal.puntosLineales, null, 2));
        
        const index = this.estructuraGlobal.puntosLineales.findIndex(punto => punto.id === subpuntoId);
        
        if (index === -1) {
            console.error(`Subpunto with ID ${subpuntoId} not found in puntosLineales`);
        } else {
            console.log(`Subpunto found at index ${index}`);
        }
        
        return index;
    }

    initializeDOMElements() {
        this.modalExamen = document.getElementById('modal-examen');
        this.contadorPreguntas = document.getElementById('contador-preguntas');
        this.preguntaContenedor = document.getElementById('pregunta-contenedor');
        this.opcionesContenedor = document.getElementById('opciones-contenedor');

        if (!this.modalExamen || !this.contadorPreguntas || !this.preguntaContenedor || !this.opcionesContenedor) {
            console.error('One or more required DOM elements not found');
        }
    }

    logInitialInfo() {
        console.log(`Número de preguntas cargadas: ${this.preguntas.length}`);
        console.log(`Mínimo para aprobar: ${this.minimoParaAprobar}`);
        console.log(`ExamId: ${this.examId}`);
        console.log(`Bloque: ${this.bloque}, BloqueId: ${this.bloqueId}, Tema: ${this.tema}, Punto: ${this.punto}, Subpunto: ${this.subpunto}`);
    }

    async iniciarExamen() {
        console.log('Iniciando examen');
        
        try {
            const subpuntoIndex = this.findSubpuntoIndex();
           /* alert(`Índice del subpunto en el array: ${subpuntoIndex}`);*/

            const htmlContent = await this.fetchHtmlContent();
            this.explicaciones = extractExplanations(htmlContent);
          /*  console.log('Extracted explanations:', this.explicaciones);*/

            this.resetExamen();
            mostrarModal(this.modalExamen);
            this.mostrarPregunta();
        } catch (error) {
            console.error('Error initializing exam:', error);
            alert('Error al iniciar el examen. Por favor, inténtelo de nuevo.');
        }
    }

    async fetchHtmlContent() {
        const temaFormatted = this.tema < 10 ? this.tema / 1 : this.tema;
        const filePath = `./temas/tema${temaFormatted}/${this.examId}.html`;
        console.log(`Attempting to fetch HTML content from: ${filePath}`);
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to fetch HTML content: ${response.statusText}`);
        }
        return await response.text();
    }

    mostrarPregunta() {
        console.log(`[Modal] Intentando mostrar pregunta ${this.preguntaActual + 1} de ${this.preguntas.length}`);
        if (this.preguntaActual < this.preguntas.length) {
            const pregunta = this.preguntas[this.preguntaActual];
            this.actualizarContadorPreguntas();
            this.preguntaContenedor.textContent = pregunta.pregunta;
            this.renderizarOpciones(pregunta);
            console.log(`[Modal] Pregunta ${this.preguntaActual + 1} mostrada: ${pregunta.pregunta}`);
        } else {
            console.log(`[Modal] Todas las preguntas mostradas, finalizando examen`);
            this.finalizarExamen();
        }
    }
    renderizarOpciones(pregunta) {
        this.opcionesContenedor.innerHTML = '';
    
        // Crear un array de opciones con su índice original
        let opcionesConIndices = pregunta.opciones.map((opcion, index) => ({
            texto: opcion,
            indiceOriginal: index
        }));
    
        // Barajar las opciones
        for (let i = opcionesConIndices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opcionesConIndices[i], opcionesConIndices[j]] = [opcionesConIndices[j], opcionesConIndices[i]];
        }
    
        // Guardar las opciones barajadas y sus índices originales para referencia
        this.opcionesBarajadas = opcionesConIndices;
    
        // Renderizar botones con las opciones barajadas
        opcionesConIndices.forEach((opcionBarajada, index) => {
            const boton = document.createElement('button');
            boton.textContent = opcionBarajada.texto;
            boton.className = 'btn-opcion';
            boton.addEventListener('click', () => this.verificarRespuesta(index));
            this.opcionesContenedor.appendChild(boton);
        });
    }
    
    verificarRespuesta(respuestaIndex) {
        console.log(`[Modal] Verificando respuesta para pregunta ${this.preguntaActual + 1}: ${respuestaIndex}`);
        const pregunta = this.preguntas[this.preguntaActual];
    
        // Obtener el índice original de la respuesta seleccionada
        const indiceOriginal = this.opcionesBarajadas[respuestaIndex].indiceOriginal;
        const esCorrecta = indiceOriginal === pregunta.correcta;
        this.respuestasUsuario[this.preguntaActual] = indiceOriginal;
    
        if (esCorrecta) {
            this.respuestasCorrectas++;
        }
    
        this.marcarRespuestas(respuestaIndex, pregunta.correcta);
        console.log(`[Modal] Respuesta ${esCorrecta ? 'correcta' : 'incorrecta'}, mostrando explicación`);
        this.mostrarExplicacion(esCorrecta, pregunta.id);
    }
    
    marcarRespuestas(respuestaIndex, respuestaCorrecta) {
        const opciones = this.opcionesContenedor.querySelectorAll('.btn-opcion');
        opciones.forEach((opcion, index) => {
            const indiceOriginal = this.opcionesBarajadas[index].indiceOriginal;
            if (index === respuestaIndex) {
                opcion.classList.add(indiceOriginal === respuestaCorrecta ? 'correcta' : 'incorrecta');
            }
            if (indiceOriginal === respuestaCorrecta) {
                opcion.classList.add('correcta');
            }
            opcion.disabled = true;
        });
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
        explicacionContenido.innerHTML = this.explicaciones[preguntaId] || 'No se encontró una explicación para esta pregunta.';

        mostrarModal(modalExplicacion);

        const btnEntendido = document.getElementById('btn-entendido');
        btnEntendido.onclick = () => {
            ocultarModal(modalExplicacion);
            this.siguientePregunta();
        };
    }

    siguientePregunta() {
        console.log(`[Modal] Pasando a la siguiente pregunta. Actual: ${this.preguntaActual + 1}`);
        if (this.preguntaActual >= this.preguntas.length - 1) {
            console.log(`[Modal] Ya estamos en la última pregunta, finalizando examen`);
            this.finalizarExamen();
        } else {
            this.preguntaActual++;
            console.log(`[Modal] Nueva pregunta actual: ${this.preguntaActual + 1}`);
            this.mostrarPregunta();
        }
    }

    async finalizarExamen() {
        console.log(`Finalizando examen. Respuestas correctas: ${this.respuestasCorrectas} de ${this.preguntas.length}`);
        const aprobado = this.respuestasCorrectas >= this.minimoParaAprobar;
        
        await mostrarSubpuntosCompletados();
        this.mostrarResultadoExamen(aprobado);

        if (aprobado) {
            this.mostrarConfeti();
            
            if (!this.estructuraGlobal || !this.estructuraGlobal.puntosLineales) {
                console.error('estructuraGlobal or puntosLineales is undefined in finalizarExamen');
                return;
            }

            const currentPointId = this.examId.replace('e', '');
            const currentPointIndex = this.estructuraGlobal.puntosLineales.findIndex(punto => punto.id === currentPointId);
            
            if (currentPointIndex !== -1) {
                const currentPoint = this.estructuraGlobal.puntosLineales[currentPointIndex];
                const bloqueId = getBloqueId(currentPoint.id);

                if (!bloqueId) {
                    console.error('Invalid bloqueId for point:', currentPoint);
                    return;
                }

                // Check if the current point index is higher than the saved progress
                const savedProgress = await getLastCompletedIndex(bloqueId);
                if (currentPointIndex > savedProgress) {
                    // Update progress
                    await updateProgress(bloqueId, currentPointIndex);

                    // Update estructuraGlobal
                    updateEstructuraGlobal();

                    // Update UI elements
                    this.actualizarUITrasExamen(bloqueId, currentPointIndex);
                } else {
                    console.log(`No se actualizó el progreso. Índice actual (${currentPointIndex}) no es mayor que el guardado (${savedProgress})`);
                }

                console.log(`Exam completed. Current point: ${currentPointId}, Next point: ${this.estructuraGlobal.puntosLineales[currentPointIndex + 1]?.id || 'No next point'}`);
            } else {
                console.error(`Current point with ID ${currentPointId} not found in puntosLineales.`);
            }
        }
    }
    setupCloseButton() {
        const btncerrar = document.querySelector(".cerrar");
        if (btncerrar) {
          btncerrar.addEventListener("click", () => {
            this.finalizarExamen();
          });
        } else {
          console.error("Close button not found");
        }
      }
    actualizarUITrasExamen(bloqueId, currentPointIndex) {
        document.querySelectorAll('.punto-btn').forEach(btn => {
            const btnId = btn.getAttribute('data-id');
            const btnIndex = this.estructuraGlobal.puntosLineales.findIndex(p => p.id === btnId);
            
            if (btnIndex <= currentPointIndex) {
                btn.classList.add('completado');
                btn.classList.remove('disponible', 'bloqueado');
            } else if (btnIndex === currentPointIndex + 1) {
                btn.classList.add('disponible');
                btn.classList.remove('completado', 'bloqueado');
                btn.disabled = false;
            } else {
                btn.classList.add('bloqueado');
                btn.classList.remove('completado', 'disponible');
                btn.disabled = true;
            }
        });

        // Trigger progress update in UI
        const event = new CustomEvent('examCompleted', { detail: { bloqueId, currentPointIndex } });
        document.dispatchEvent(event);
    }

    mostrarResultadoExamen(aprobado) {
        const mensajeResultado = `Has completado el examen. Acertaste ${this.respuestasCorrectas} de ${this.preguntas.length} preguntas.`;
        const mensajeAprobado = aprobado ? '¡Has aprobado! 🎉🎊' : 'No has alcanzado el mínimo para aprobar.';

        this.preguntaContenedor.innerHTML = `
            <p class="resultado-examen">${mensajeResultado}</p>
            <p class="mensaje-aprobado ${aprobado ? 'aprobado' : 'no-aprobado'}">${mensajeAprobado}</p>
        `;

        this.renderizarBotonesFinales(aprobado);
    }

    renderizarBotonesFinales(aprobado) {
        const botonesContenedor = document.createElement('div');
        botonesContenedor.className = 'botones-examen';

        const btnReview = this.crearBoton('Revisar respuestas', 'btn-review', () => this.revisarRespuestas());
        const btnCerrar = this.crearBoton('Cerrar', 'btn-cerrar', () => this.cerrarExamen(aprobado));
        const btnReintentar = this.crearBoton('Reintentar', 'btn-reintentar', () => {
            this.resetExamen();
            this.mostrarPregunta();
        });

        botonesContenedor.append(btnReview, btnCerrar, btnReintentar);
        this.opcionesContenedor.innerHTML = '';
        this.opcionesContenedor.appendChild(botonesContenedor);

        const closeButton = this.modalExamen.querySelector('.cerrar');
        if (closeButton) {
            closeButton.remove();
        }
    }

    crearBoton(texto, clase, onClick) {
        const boton = document.createElement('button');
        boton.textContent = texto;
        boton.className = `btn-examen ${clase}`;
        boton.addEventListener('click', onClick);
        return boton;
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

    cerrarExamen(aprobado) {

        ocultarModal(this.modalExamen);
        if (aprobado) {
            this.actualizarProgreso();
        }
    }

    async actualizarProgreso() {
        if (!this.estructuraGlobal || !this.estructuraGlobal.puntosLineales) {
            console.error('estructuraGlobal or puntosLineales is undefined in actualizarProgreso');
            return;
        }

        const puntoActual = this.estructuraGlobal.puntosLineales.find(p => p.id === this.examId.replace('e', ''));
        if (puntoActual) {
            puntoActual.completado = true;
            const indicePuntoActual = this.estructuraGlobal.puntosLineales.indexOf(puntoActual);
        
            const bloqueId = getBloqueId(puntoActual.id);
            const savedProgress = await getLastCompletedIndex(bloqueId);
            if (indicePuntoActual > savedProgress) {
                updateProgress(bloqueId, indicePuntoActual);
                console.log(`Progreso actualizado. Nuevo índice: ${indicePuntoActual}`);
            } else {
                console.log(`No se actualizó el progreso. Índice actual (${indicePuntoActual}) no es mayor que el guardado (${savedProgress})`);
            }

            const siguientePunto = this.estructuraGlobal.puntosLineales[indicePuntoActual + 1];

            // Actualizar UI para el punto actual
            const puntoActualElement = document.querySelector(`[data-id="${puntoActual.id}"]`);
            if (puntoActualElement) {
                puntoActualElement.classList.add("completado");
                puntoActualElement.classList.remove("disponible");
            }

            // Desbloquear el siguiente punto si existe
            if (siguientePunto) {
                const siguientePuntoElement = document.querySelector(`[data-id="${siguientePunto.id}"]`);
                if (siguientePuntoElement) {
                    siguientePuntoElement.classList.add("disponible");
                    siguientePuntoElement.classList.remove("bloqueado");
                    siguientePuntoElement.disabled = false;
                }
            }

            console.log(`Exam completed. Current point: ${puntoActual.id}, Next point: ${siguientePunto ? siguientePunto.id : 'None'}`);
        }
    }

    getBloqueId() {
        return Math.floor(this.tema / 3) + 1;
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

export function iniciarExamen(bloque, tema, punto, subpunto, examId, preguntas, minimoParaAprobar, estructuraGlobal) {
    console.log('Initializing exam with estructuraGlobal:', JSON.stringify(estructuraGlobal, null, 2));
    const examenManager = new ExamenManager(preguntas, examId, bloque, tema, punto, subpunto, minimoParaAprobar, estructuraGlobal);
    examenManager.iniciarExamen();
}

