/**
 * Extrae explicaciones de un contenido HTML.
 * @param {string} htmlContent - El contenido HTML como cadena.
 * @returns {Object} Un objeto con los IDs de los elementos como claves y su contenido como valores.
 */
function extractExplanations(htmlContent) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const explanations = {};

  // Encontrar todos los elementos con un atributo id
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
