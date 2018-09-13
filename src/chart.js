import { Chart } from 'chart.js'; //проверить путь
//import * as chart from 'chart.js'; это

function getColor(isActive, alpha = 1) {
  return isActive
    ? `rgba(54, 162, 235, ${alpha})`
    : `rgba(255, 0, 0, ${alpha})`;
}

function getLabel(el, i, data) {
  const x = new Date();
  x.setHours(x.getHours() - data.length + i);
  x.setMinutes(0);
  x.setSeconds(0);
  x.setMilliseconds(0);
  return x.toString();
}

export function createChart(container, data, isActive) {
  const ctx = container.getContext('2d');

  const borderColor = getColor(isActive);
  const backgroundColor = getColor(isActive, 0.5);

  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(getLabel(el, i, data)),// добавила параметры к функции и скобки ()
      datasets: [
        {
          data: data,
          borderWidth: 1,
            borderColor: borderColor,
              backgroundColor: backgroundColor
               //scaleShowLabels : true
        }
      ]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{ ticks: { display: false } }],
            yAxes: [{ ticks: { beginAtZero: true, max: 0 } }]
        }
    }
  });

  return chart;
}
