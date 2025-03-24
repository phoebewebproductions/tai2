/**
 * Obtiene la URL base según el entorno actual
 * @returns {string} La URL base para construir rutas
 */
export function getBaseUrl() {
  const hostname = window.location.hostname
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return window.location.origin // Desarrollo local
  } else if (hostname.includes("opotai.netlify.app")) {
    return "https://opotai.netlify.app" // Producción en Netlify
  } else {
    // Cualquier otro dominio
    return window.location.origin
  }
}

/**
 * Construye una URL completa a partir de una ruta relativa
 * @param {string} path - Ruta relativa (debe comenzar con /)
 * @returns {string} URL completa
 */
export function buildUrl(path) {
  // Asegurarse de que el path comience con /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${getBaseUrl()}${normalizedPath}`
}

/**
 * Construye una URL para recursos estáticos (CSS, JS, imágenes)
 * @param {string} path - Ruta relativa al recurso
 * @returns {string} URL completa al recurso
 */
export function assetUrl(path) {
  // IMPORTANTE: No modificar la ruta, solo añadir la base URL si es necesario
  // Si la ruta ya es absoluta (comienza con http o /), devolverla tal cual
  if (path.startsWith("http") || path.startsWith("/")) {
    return path
  }

  // Para rutas relativas, mantener la estructura exacta
  return path
}

/**
 * Registra información de depuración sobre las rutas
 * @param {string} original - La ruta original
 * @param {string} transformed - La ruta transformada
 * @param {string} source - Fuente de la llamada
 */
export function logPathDebug(original, transformed, source) {
  console.log(`[PATH DEBUG] ${source}: Original: "${original}" → Transformed: "${transformed}"`)
}

/**
 * Determina la ruta correcta a la página de login desde cualquier ubicación
 * @returns {string} Ruta absoluta a login.html
 */
export function getLoginPath() {
  // Usar una URL relativa a la raíz del sitio
  // Verificar si estamos en un subdirectorio
  const currentPath = window.location.pathname
  console.log("Ruta actual:", currentPath)

  // Determinar cuántos niveles debemos subir para llegar a la raíz
  let pathToRoot = ""

  // Si estamos en un subdirectorio, necesitamos subir los niveles necesarios
  if (currentPath.includes("/examenes/") || currentPath.includes("/bloques/")) {
    // Contar cuántos niveles de directorios hay
    const pathParts = currentPath.split("/").filter((part) => part.length > 0)
    pathToRoot = "../".repeat(pathParts.length)
    console.log(`Estamos en un subdirectorio, subiendo ${pathParts.length} niveles: ${pathToRoot}`)
  }

  // Construir la ruta a login.html
  const loginPath = `${pathToRoot}login.html`
  console.log("Ruta calculada a login.html:", loginPath)

  return loginPath
}

/**
 * Determina la ruta correcta a cualquier página desde la ubicación actual
 * @param {string} targetPage - Nombre de la página destino (ej: "login.html", "index.html")
 * @returns {string} Ruta absoluta a la página destino
 */
export function getRelativePath(targetPage) {
  // Asegurarse de que targetPage no comience con /
  const page = targetPage.startsWith("/") ? targetPage.substring(1) : targetPage

  // Usar una URL absoluta para evitar problemas de rutas relativas
  return buildUrl(`/${page}`)
}

