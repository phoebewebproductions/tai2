/**
 * Script para cargar el header dinámico en cualquier página
 * Este archivo puede ser incluido en cualquier página para cargar el header
 */

// Función para cargar los estilos del header
function loadHeaderStyles() {
    return new Promise((resolve, reject) => {
      // Verificar si ya está cargado
      if (document.querySelector('link[href*="dynamic-header.css"]')) {
        resolve()
        return
      }
  
      // Crear el elemento link
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = getRelativePath("css/dynamic-header.css")
  
      // Evento para cuando se cargue
      link.onload = () => {
        console.log("Estilos del header cargados correctamente")
        resolve()
      }
  
      // Evento para errores
      link.onerror = (error) => {
        console.error("Error al cargar los estilos del header:", error)
        reject(error)
      }
  
      // Añadir al head
      document.head.appendChild(link)
    })
  }
  
  // Función para cargar el script del header
  function loadHeaderScript() {
    return new Promise((resolve, reject) => {
      // Verificar si ya está cargado
      if (document.querySelector('script[src*="dynamic-header.js"]')) {
        resolve()
        return
      }
  
      // Crear el elemento script
      const script = document.createElement("script")
      script.type = "module"
      script.src = getRelativePath("js/dynamic-header.js")
  
      // Evento para cuando se cargue
      script.onload = () => {
        console.log("Script del header cargado correctamente")
        resolve()
      }
  
      // Evento para errores
      script.onerror = (error) => {
        console.error("Error al cargar el script del header:", error)
        reject(error)
      }
  
      // Añadir al body
      document.body.appendChild(script)
    })
  }
  
  // Función para obtener la ruta relativa a un archivo
  function getRelativePath(filePath) {
    // Determinar la ruta relativa a la raíz
    const path = window.location.pathname
  
    // Obtener la URL base
    let baseUrl = ""
  
    // Verificar si estamos en localhost
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      // En desarrollo local, usar rutas relativas
      const segments = path.split("/").filter((segment) => segment.length > 0)
  
      // Si estamos en la raíz, devolver la ruta directamente
      if (segments.length === 0 || (segments.length === 1 && segments[0].includes(".html"))) {
        return filePath
      }
  
      // Calcular cuántos niveles debemos subir
      let depth = segments.length
      if (segments[segments.length - 1].includes(".html")) {
        depth--
      }
  
      baseUrl = "../".repeat(depth)
    } else {
      // En producción, usar rutas absolutas desde la raíz
      baseUrl = "/"
    }
  
    return baseUrl + filePath
  }
  
  // Función para crear el header si no existe
  function createHeaderIfNeeded() {
    if (!document.querySelector("header")) {
      const header = document.createElement("header")
  
      // Insertar al principio del body
      if (document.body.firstChild) {
        document.body.insertBefore(header, document.body.firstChild)
      } else {
        document.body.appendChild(header)
      }
    }
  }
  
  // Función principal para inicializar el header
  async function initHeader() {
    try {
      console.log("Inicializando carga del header dinámico...")
  
      // Crear el header si no existe
      createHeaderIfNeeded()
  
      // Cargar estilos y script
      await loadHeaderStyles()
      await loadHeaderScript()
  
      console.log("Header dinámico cargado correctamente")
    } catch (error) {
      console.error("Error al inicializar el header dinámico:", error)
    }
  }
  
  // Inicializar cuando el DOM esté cargado
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHeader)
  } else {
    initHeader()
  }
  
  // Exportar la función para uso externo
  export { initHeader }
  
  