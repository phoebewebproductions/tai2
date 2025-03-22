/**
 * Módulo para gestionar las estadísticas de exámenes
 */

import { getExamHistory } from "./exam-history.js";

// Función para inicializar las estadísticas
export function initializeStats() {
  // Actualizar estadísticas
  updateStats();
  
  // Inicializar gráfico
  initializeChart();
}

// Función para actualizar las estadísticas
export function updateStats() {
  // Obtener historial de exámenes
  const history = getExamHistory();
  
  // Calcular estadísticas
  const stats = calculateStats(history);
  
  // Actualizar interfaz
  updateStatsUI(stats);
  
  // Actualizar gráfico
  updateChart(stats);
}

// Función para calcular estadísticas
function calculateStats(history) {
  // Si no hay exámenes, devolver estadísticas vacías
  if (!history || history.length === 0) {
    return {
      totalExams: 0,
      avgScore: 0,
      totalQuestions: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      passedExams: 0,
      failedExams: 0,
      lastMonthScores: Array(30).fill(0),
      lastMonthDates: Array(30).fill(""),
    };
  }
  
  // Calcular estadísticas generales
  let totalScore = 0;
  let totalQuestions = 0;
  let correctAnswers = 0;
  let passedExams = 0;
  
  history.forEach(exam => {
    totalScore += exam.score;
    totalQuestions += exam.totalQuestions;
    correctAnswers += exam.correctAnswers;
    
    if (exam.passed) {
      passedExams++;
    }
  });
  
  const avgScore = Math.round(totalScore / history.length);
  const incorrectAnswers = totalQuestions - correctAnswers;
  const failedExams = history.length - passedExams;
  
  // Calcular puntuaciones del último mes
  const today = new Date();
  const lastMonth = new Date(today);
  lastMonth.setDate(today.getDate() - 30);
  
  const lastMonthScores = Array(30).fill(0);
  const lastMonthDates = Array(30).fill("");
  const examsByDay = {};
  
  // Agrupar exámenes por día
  history.forEach(exam => {
    const examDate = new Date(exam.date);
    
    // Solo considerar exámenes del último mes
    if (examDate >= lastMonth) {
      const dayDiff = Math.floor((today - examDate) / (1000 * 60 * 60 * 24));
      
      if (dayDiff < 30) {
        const dateKey = examDate.toISOString().split("T")[0];
        
        if (!examsByDay[dateKey]) {
          examsByDay[dateKey] = {
            totalScore: 0,
            count: 0,
          };
        }
        
        examsByDay[dateKey].totalScore += exam.score;
        examsByDay[dateKey].count++;
      }
    }
  });
  
  // Calcular puntuación media por día
  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateKey = date.toISOString().split("T")[0];
    
    if (examsByDay[dateKey]) {
      lastMonthScores[i] = Math.round(examsByDay[dateKey].totalScore / examsByDay[dateKey].count);
    }
    
    // Formatear fecha (día/mes)
    lastMonthDates[i] = `${date.getDate()}/${date.getMonth() + 1}`;
  }
  
  // Invertir arrays para que el día más antiguo esté primero
  lastMonthScores.reverse();
  lastMonthDates.reverse();
  
  return {
    totalExams: history.length,
    avgScore,
    totalQuestions,
    correctAnswers,
    incorrectAnswers,
    passedExams,
    failedExams,
    lastMonthScores,
    lastMonthDates,
  };
}

// Función para actualizar la interfaz de estadísticas
function updateStatsUI(stats) {
  // Actualizar valores
  const avgScoreElement = document.getElementById("avg-score");
  const examsTakenElement = document.getElementById("exams-taken");
  const questionsAnsweredElement = document.getElementById("questions-answered");
  
  if (avgScoreElement) {
    avgScoreElement.textContent = stats.avgScore;
  }
  
  if (examsTakenElement) {
    examsTakenElement.textContent = stats.totalExams;
  }
  
  if (questionsAnsweredElement) {
    questionsAnsweredElement.textContent = stats.totalQuestions;
  }
}

// Variable para almacenar la instancia del gráfico
let performanceChart = null;

// Función para inicializar el gráfico
function initializeChart() {
  const chartCanvas = document.getElementById("performance-chart");
  if (!chartCanvas) return;
  
  // Verify if Chart.js is available
  if (typeof Chart === 'undefined') {
    console.error("Chart.js no está disponible. Asegúrate de incluir la biblioteca.");
    return;
  }
  
  // Destroy existing chart if it exists
  if (performanceChart) {
    performanceChart.destroy();
  }
  
  // Get statistics
  const stats = calculateStats(getExamHistory());
  
  // Create chart
  performanceChart = new Chart(chartCanvas, {
    type: "line",
    data: {
      labels: stats.lastMonthDates,
      datasets: [
        {
          label: "Puntuación",
          data: stats.lastMonthScores,
          borderColor: "#1a73e8",
          backgroundColor: "rgba(26, 115, 232, 0.1)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            title: function(tooltipItems) {
              return `Día ${tooltipItems[0].label}`;
            },
            label: function(context) {
              return `Puntuación: ${context.raw}/100`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            maxRotation: 0,
            autoSkip: true,
            maxTicksLimit: 10,
          },
        },
      },
    },
  });
}

// Función para actualizar el gráfico
function updateChart(stats) {
  if (!performanceChart) return;
  
  // Actualizar datos
  performanceChart.data.labels = stats.lastMonthDates;
  performanceChart.data.datasets[0].data = stats.lastMonthScores;
  
  // Actualizar gráfico
  performanceChart.update();
}
