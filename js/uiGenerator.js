import { getLastCompletedIndex, isPointCompleted, isPointUnlocked, updateEstructuraGlobal, estructuraGlobal } from './structureLoader.js';
import { findId } from './idfinder.js';
import { iniciarExamen, ocultarModal } from './examLogic.js';
import { assetUrl } from "./utils.js"

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector("#modal-examen");
    const btncerrar = document.querySelector(".cerrar");
    
    if (btncerrar && modal) {
        btncerrar.addEventListener("click", () => {
            ocultarModal(modal);    
        });
    } else {
        console.error("Modal or close button not found");
    }
});
/* Asegurarse de que el header se mida correctamente */
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    if (header) {
        const headerHeight = header.offsetHeight;
        document.documentElement.style.setProperty('--header-height', headerHeight + 'px');
        
        // Actualizar cuando cambie el tamaño de la ventana
        window.addEventListener('resize', function() {
            const newHeaderHeight = header.offsetHeight;
            document.documentElement.style.setProperty('--header-height', newHeaderHeight + 'px');
        });
    }
});
export function cargarBloque(bloqueId) {
    if (isNaN(bloqueId) || bloqueId < 1 || bloqueId > 4) {
        console.error('Invalid bloqueId:', bloqueId);
        return;
    }
    
    if (!estructuraGlobal) {
        console.error('estructuraGlobal is not initialized');
        return;
    }
    
    const estructura = estructuraGlobal;
    
    if (!estructura) {
        console.error('Block not found:', bloqueId);
        return;
    }
    
    generarEstructuraBloque(getCurrentBlockId());
}

export function generarEstructuraBloque(estructura) {
    const contenidoPrincipal = document.getElementById('contenido-principal');
    
    if (!estructura || typeof estructura.id === 'undefined') {
        console.error('Invalid estructura or missing ID:', estructura);
        return;
    }

    const bloqueId = estructura.id;
    const lastCompletedIndex = getLastCompletedIndex(bloqueId);
    const temaNavigation = document.querySelector('.tema-navigation');
    const contentArea = document.querySelector('#punto-actual');

    // Limpiar contenido existente
    temaNavigation.innerHTML = '';

    // Variable para almacenar el último punto disponible
    let lastAvailablePoint = null;
    let lastAvailableContent = null;

    estructura.temas.forEach((tema, indexTema) => {
        const temaElement = document.createElement('div');
        temaElement.className = 'tema-wrapper';
        
        const temaButton = document.createElement('button');
        temaButton.className = 'tema-btn';
        temaButton.textContent = tema.titulo;

        const puntosContainer = document.createElement('div');
        puntosContainer.className = 'puntos-container';
        
        // Determinar si este tema debe estar abierto
        const shouldBeOpen = tema.puntos.some((punto, indexPunto) => {
            const puntoLinealIndex = estructura.puntosLineales.findIndex(p => 
                p.temaIndex === indexTema && p.puntoIndex === indexPunto
            );
            return puntoLinealIndex === lastCompletedIndex + 1;
        });

        if (shouldBeOpen) {
            puntosContainer.classList.remove('oculto');
        } else {
            puntosContainer.classList.add('oculto');
        }

        tema.puntos.forEach((punto, indexPunto) => {
            const puntoLinealIndex = estructura.puntosLineales.findIndex(p => 
                p.temaIndex === indexTema && p.puntoIndex === indexPunto
            );
            
            const estaCompletado = isPointCompleted(bloqueId, puntoLinealIndex);
            const estaDesbloqueado = isPointUnlocked(bloqueId, puntoLinealIndex);
            
            const puntoElement = document.createElement('button');
            puntoElement.className = `punto-btn ${estaCompletado ? 'completado' : ''} ${estaDesbloqueado ? 'disponible' : 'bloqueado'}`;
            puntoElement.textContent = punto.titulo;
            puntoElement.dataset.tema = indexTema + 1;
            puntoElement.dataset.punto = indexPunto + 1;
            puntoElement.dataset.id = punto.id;
            
            if (!estaDesbloqueado) {
                puntoElement.disabled = true;
            }

            // Guardar referencia al último punto disponible
            if (estaDesbloqueado && !estaCompletado) {
                lastAvailablePoint = puntoElement;
                lastAvailableContent = punto;
            }

            puntoElement.addEventListener('click', async () => {
                // Remover clase active de todos los puntos
                document.querySelectorAll('.punto-btn').forEach(btn => 
                    btn.classList.remove('active'));
                
                // Añadir clase active al punto actual
                puntoElement.classList.add('active');
                
                // Cargar contenido
                await cargarContenidoPunto(indexTema + 1, indexPunto + 1, punto.id, contentArea);
            });

            puntosContainer.appendChild(puntoElement);
        });

        temaButton.addEventListener('click', () => {
            puntosContainer.classList.toggle('oculto');
        });

        temaElement.appendChild(temaButton);
        temaElement.appendChild(puntosContainer);
        temaNavigation.appendChild(temaElement);
    });

    // Cargar automáticamente el último punto disponible
    if (lastAvailablePoint) {
        lastAvailablePoint.classList.add('active');
        cargarContenidoPunto(
            lastAvailablePoint.dataset.tema,
            lastAvailablePoint.dataset.punto,
            lastAvailablePoint.dataset.id,
            contentArea
        );
    }
}

function cargarPuntosTema(tema, indexTema, puntosContainer, bloqueId, estructura) {
    if (!estructura || !estructura.puntosLineales) {
        console.error('estructura or puntosLineales is not initialized');
        return;
    }

    tema.puntos.forEach((punto, indexPunto) => {
        const puntoLinealIndex = estructura.puntosLineales.findIndex(p => 
            p.temaIndex === indexTema && p.puntoIndex === indexPunto
        );
        
        const estaCompletado = isPointCompleted(bloqueId, puntoLinealIndex);
        const estaDesbloqueado = isPointUnlocked(bloqueId, puntoLinealIndex);

        const puntoElement = document.createElement('div');
        puntoElement.className = 'punto';
        puntoElement.innerHTML = `
            <button class="punto-btn subpunto-btn ${estaDesbloqueado ? 'disponible' : 'bloqueado'} ${estaCompletado ? 'completado' : ''}" 
                    data-tema="${indexTema + 1}" 
                    data-punto="${indexPunto + 1}" 
                    data-id="${punto.id}" 
                    ${!estaDesbloqueado ? 'disabled' : ''}>
                ${punto.titulo}
            </button>
            <div class="punto-contenido oculto"></div>
        `;

        const puntoBtn = puntoElement.querySelector('.punto-btn');
        puntoBtn.addEventListener('click', () => cargarContenidoPunto(indexTema + 1, indexPunto + 1, punto.id, puntoElement));

        puntosContainer.appendChild(puntoElement);
    });
}


export async function cargarContenidoPunto(tema, punto, id, contentArea) {
    try {
      const idInfo = await findId(id)
      console.log("ID Info:", idInfo)
  
      if (!idInfo) {
        console.error("Invalid ID info:", idInfo)
        return
      }
  
      // Usar la ruta relativa directamente, sin modificarla
      const rutaContenido = `./temas/tema${idInfo.tema * 1}/${id}e.html`
      console.log(`Intentando cargar contenido desde: ${rutaContenido}`)
  
      const response = await fetch(rutaContenido)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
  
      const content = await response.text()
  
      // Actualizar el contenido
      contentArea.innerHTML = content
  
      // Añadir el botón de mini-examen
      const miniExamButton = document.createElement("button")
      miniExamButton.textContent = "Realizar Mini-Examen"
      miniExamButton.className = "mini-examen-btn"
      const examId = `${idInfo.bloque}${idInfo.tema.padStart(2, "0")}${idInfo.punto.padStart(2, "0")}${idInfo.subpunto.padStart(2, "0")}000e`
      miniExamButton.dataset.examId = examId
      contentArea.appendChild(miniExamButton)
  
      miniExamButton.addEventListener("click", async () => {
        const preguntas = await cargarPreguntasExamen(idInfo.bloque, idInfo.tema, examId)
        iniciarExamen(
          idInfo.bloque,
          idInfo.tema,
          idInfo.punto,
          idInfo.subpunto,
          examId,
          preguntas,
          undefined,
          estructuraGlobal,
        )
      })
    } catch (error) {
      console.error("Error in cargarContenidoPunto:", error)
    }
  }
  
  export async function cargarPreguntasExamen(bloque, tema, examId) {
    console.log("Attempting to load questions for:", { bloque, tema, examId })
    try {
      if (!examId || typeof examId !== "string") {
        throw new Error("Invalid examId")
      }
  
      // Usar la ruta relativa directamente, sin modificarla
      const rutaPreguntas = `./temas/tema${tema * 1}/preguntas.js`
      console.log(`Intentando cargar preguntas desde: ${rutaPreguntas}`)
  
      const response = await fetch(rutaPreguntas)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
  
      const text = await response.text()
  
      const moduleText = text.replace("export const preguntas =", "const preguntas =")
      const module = { exports: {} }
      const moduleFunc = new Function("module", "exports", moduleText + "; return preguntas;")
      const preguntasModule = moduleFunc(module, module.exports)
  
      console.log("Preguntas module:", preguntasModule)
  
      if (!preguntasModule || !preguntasModule[examId]) {
        const generalExamId = `${bloque}${tema.padStart(2, "0")}000000e`
        console.log("Trying general exam ID:", generalExamId)
  
        if (!preguntasModule[generalExamId]) {
          throw new Error(`No questions found for exam ID: ${examId} or general exam ID: ${generalExamId}`)
        }
  
        return preguntasModule[generalExamId].preguntas
      }
  
      const preguntas = preguntasModule[examId].preguntas
  
      if (!Array.isArray(preguntas)) {
        throw new Error(`Invalid questions format for exam ID: ${examId}`)
      }
  
      console.log("Questions loaded successfully")
      return preguntas
    } catch (error) {
      console.error("Error loading questions:", error)
      throw error
    }
  }
export function actualizarProgresoTrasExamen(bloqueId, puntoCompletadoIndex) {
    updateProgress(bloqueId, puntoCompletadoIndex);
    console.log(`Progreso actualizado tras examen. Bloque: ${bloqueId}, Índice completado: ${puntoCompletadoIndex}`);
    
    const temaElements = document.querySelectorAll('.tema');
    temaElements.forEach((temaElement, indexTema) => {
        const puntosContainer = temaElement.querySelector('.puntos-container');
        if (puntosContainer) {
            const estructura = estructuraGlobal[bloqueId];
            if (estructura && estructura.temas) {
                const tema = estructura.temas[indexTema];
                cargarPuntosTema(tema, indexTema, puntosContainer, bloqueId, estructura);
            } else {
                console.error(`Estructura not found for bloque ${bloqueId}`);
            }
        }
    });
}

// Añadir al archivo uiGenerator.js o crear un nuevo archivo sidebar.js

document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar-navigation');
    const content = document.querySelector('.content-area');
    const overlay = document.createElement('div');
    
    // Crear overlay para móvil
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            // Opcional: añadir una clase al content-area cuando el sidebar está activo
            content?.classList.toggle('sidebar-active');
        });

        // Cerrar sidebar al hacer clic en el overlaypunto-contenido
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            content?.classList.remove('sidebar-active');
        });

        // Cerrar sidebar al hacer clic en un punto (en móvil)
        document.querySelectorAll('.punto-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (window.innerWidth <= 1024) {
                    sidebar.classList.remove('active');
                    overlay.classList.remove('active');
                    content?.classList.remove('sidebar-active');
                }
            });
        });
    }
});