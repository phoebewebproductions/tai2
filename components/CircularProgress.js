const CircularProgress = ({ progress, size = 60, strokeWidth = 4, color = "#22c55e" }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return React.createElement('svg', 
        { width: size, height: size, viewBox: `0 0 ${size} ${size}` },
        React.createElement('circle', {
            stroke: "#e2e8f0",
            strokeWidth: strokeWidth,
            fill: "transparent",
            r: radius,
            cx: size / 2,
            cy: size / 2
        }),
        React.createElement('circle', {
            stroke: color,
            strokeWidth: strokeWidth,
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
            strokeLinecap: "round",
            fill: "transparent",
            r: radius,
            cx: size / 2,
            cy: size / 2,
            transform: `rotate(-90 ${size / 2} ${size / 2})`
        }),
        React.createElement('text', {
            x: "50%",
            y: "50%",
            dominantBaseline: "central",
            textAnchor: "middle",
            fontSize: "14",
            fontWeight: "bold",
            fill: color
        }, `${Math.round(progress)}%`)
    );
};

export { CircularProgress };

