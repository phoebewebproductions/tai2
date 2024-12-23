const PROGRESS_KEY = 'curso_progreso';

export function cargarProgreso() {
    const progressJSON = localStorage.getItem(PROGRESS_KEY);
    return progressJSON ? JSON.parse(progressJSON) : [];
}

export function actualizarProgreso(puntoId, completed) {
    let progress = cargarProgreso();
    const index = progress.findIndex(item => item.punto_id === puntoId);
    if (index !== -1) {
        progress[index].completed = completed;
    } else {
        progress.push({ punto_id: puntoId, completed });
    }
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function resetearProgreso() {
    localStorage.removeItem(PROGRESS_KEY);
}

