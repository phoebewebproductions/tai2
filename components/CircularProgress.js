export function getColorForBlock(blockNumber) {
    const colors = ['#22c55e', '#00235ab3', '#f59e0b', '#ef4444'];
    return colors[(blockNumber - 1) % colors.length];
}

export function CircularProgress({ progress, size = 80, strokeWidth = 8, color = "#22c55e", id }) {
    console.log(`CircularProgress called with progress: ${progress}, size: ${size}, strokeWidth: ${strokeWidth}, color: ${color}, id: ${id}`);

    try {
        const radius = (size - strokeWidth) / 2;
        const circumference = radius * 2 * Math.PI;
        const strokeDashoffset = circumference - ((progress || 0) / 100) * circumference;

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", size.toString());
        svg.setAttribute("height", size.toString());
        svg.setAttribute("viewBox", `0 0 ${size} ${size}`);
        if (id) {
            svg.setAttribute("id", id);
        }

        const backgroundCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        backgroundCircle.setAttribute("stroke", "#e2e8f0");
        backgroundCircle.setAttribute("stroke-width", strokeWidth.toString());
        backgroundCircle.setAttribute("fill", "transparent");
        backgroundCircle.setAttribute("r", radius.toString());
        backgroundCircle.setAttribute("cx", (size / 2).toString());
        backgroundCircle.setAttribute("cy", (size / 2).toString());

        const progressCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        progressCircle.setAttribute("stroke", color);
        progressCircle.setAttribute("stroke-width", strokeWidth.toString());
        progressCircle.setAttribute("stroke-dasharray", circumference.toString());
        progressCircle.setAttribute("stroke-dashoffset", strokeDashoffset.toString());
        progressCircle.setAttribute("stroke-linecap", "round");
        progressCircle.setAttribute("fill", "transparent");
        progressCircle.setAttribute("r", radius.toString());
        progressCircle.setAttribute("cx", (size / 2).toString());
        progressCircle.setAttribute("cy", (size / 2).toString());
        progressCircle.setAttribute("transform", `rotate(-90 ${size / 2} ${size / 2})`);

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", "50%");
        text.setAttribute("y", "50%");
        text.setAttribute("dominant-baseline", "central");
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("font-size", "20");
        text.setAttribute("font-weight", "bold");
        text.setAttribute("fill", color);
        text.textContent = `${Math.round(progress || 0)}%`;

        svg.appendChild(backgroundCircle);
        svg.appendChild(progressCircle);
        svg.appendChild(text);

        console.log("CircularProgress component created successfully");
        return svg;
    } catch (error) {
        console.error("Error in CircularProgress:", error);
        throw error;
    }
}

