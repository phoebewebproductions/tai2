/**
 * Obtiene la URL base según el entorno actual
 * @returns {string} La URL base para construir rutas
 */
export function getBaseUrl() {
  const hostname = window.location.hostname;
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return window.location.origin; // Desarrollo local
  } else if (hostname.includes("opotai.netlify.app")) {
    return "https://opotai.netlify.app"; // Producción en Netlify
  } else {
    // Cualquier otro dominio
    return window.location.origin;
  }
}

/**
 * Construye una URL completa a partir de una ruta relativa
 * @param {string} path - Ruta relativa (debe comenzar con /)
 * @returns {string} URL completa
 */
export function buildUrl(path) {
  // Asegurarse de que el path comience con /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getBaseUrl()}${normalizedPath}`;
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
    return path;
  }
  
  // Para rutas relativas, mantener la estructura exacta
  return path;
}

/**
 * Registra información de depuración sobre las rutas
 * @param {string} original - La ruta original
 * @param {string} transformed - La ruta transformada
 * @param {string} source - Fuente de la llamada
 */
export function logPathDebug(original, transformed, source) {
  console.log(`[PATH DEBUG] ${source}: Original: "${original}" → Transformed: "${transformed}"`);
}
