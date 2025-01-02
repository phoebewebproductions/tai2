export function extractExplanations(htmlContent: string): Record<string, string> {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const explanations: Record<string, string> = {};
  
    // Find all elements with an id attribute
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
  
  