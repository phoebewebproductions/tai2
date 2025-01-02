export function findId(ide) {
    if (!ide) {
        console.error('findId called with undefined or null ide');
        return null;
    }

    let exam = false;

    // Detectar si es una ID de examen
    if (ide.endsWith("e")) {
        ide = ide.slice(0, -1); // Eliminar la "e" para procesar los números
        exam = true;
    }

    // Extraer cada parte de la ID
    const idear = {
        bloque: ide.slice(0, 1),
        tema: ide.slice(1, 3),
        punto: ide.slice(3, 5),
        subpunto: ide.slice(5, 7),
        pregunta: ide.slice(7, 10),
        exam: exam
    };

    return idear;
}


export function constructorid(bloque, tema, punto, subpunto, pregunta, exam) {
    if (exam) {
        pregunta = pregunta.replace(/e$/, "") + "e"; // Asegurar que termine con "e"
    }

    console.log(
        `\nbloque: ${bloque}\ntema: ${tema}\npunto: ${punto}\nsubpunto: ${subpunto}\npregunta: ${pregunta}\nexam: ${exam}`
    );

    return bloque + tema + punto + subpunto + pregunta;
}


