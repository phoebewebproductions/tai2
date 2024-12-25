export function calculateCourseStructure() {
    const structure = {
        pointsPerTheme: {},
        totalPoints: 0
    };

    document.querySelectorAll('.tema').forEach((tema, blockIndex) => {
        const themePoints = {};
        tema.querySelectorAll('.punto').forEach((punto, themeIndex) => {
            const puntoId = punto.querySelector('.punto-btn').dataset.punto;
            if (!themePoints[themeIndex]) {
                themePoints[themeIndex] = 0;
            }
            themePoints[themeIndex]++;
            structure.totalPoints++;
        });
        structure.pointsPerTheme[blockIndex] = themePoints;
    });

    return structure;
}