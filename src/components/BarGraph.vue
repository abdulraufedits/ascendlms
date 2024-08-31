<template>
    <Bar
        id="my-chart-id"
        :options="salesGraphOptions"
        :data="salesGraphData"
    />
</template>

<script setup>
import {
  Chart as ChartJS,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(Tooltip, BarElement,CategoryScale, LinearScale)

const salesGraphData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        { 
            data: [190, 290, 210, 250, 180, 220, 270],
            backgroundColor: "#46BD84",
            borderRadius: 3,
            categoryPercentage: 0.55,
        },
    ]
}
const salesGraphOptions  = {
    responsive: true,
    plugins: {
        tooltip: {
            enabled: false,
      external: function (context) {
        // Tooltip Element
        let tooltipEl = document.getElementById('chartjs-tooltip');

        // Create element on first render
        if (!tooltipEl) {
          tooltipEl = document.createElement('div');
          tooltipEl.id = 'chartjs-tooltip';
          tooltipEl.style.background = '#FFFFFF';
          tooltipEl.style.borderRadius = '4px';
          tooltipEl.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.15)';
          tooltipEl.style.color = '#333';
          tooltipEl.style.opacity = 1;
          tooltipEl.style.pointerEvents = 'none';
          tooltipEl.style.position = 'absolute';
          tooltipEl.style.transform = 'translate(-50%, 0)';
          tooltipEl.style.transition = 'all .1s ease';
          tooltipEl.style.fontFamily = 'Roboto, sans-serif';
          tooltipEl.style.fontSize = '14px';
          tooltipEl.style.padding = '4px';

          const body = document.createElement('div');
          body.style.padding = '4px';
          tooltipEl.appendChild(body);

          document.body.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        const tooltipModel = context.tooltip;
        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }
        // Set Text
        if (tooltipModel.body) {
          const bodyLines = tooltipModel.body.map(b => b.lines);

          const innerHtml = bodyLines.map((line, i) => {
            const color = tooltipModel.labelColors[i].backgroundColor;
          return `
            <div class="font-small w-24 relative">
                <span class="size-2 bg-white absolute -left-5 top-4 -rotate-45"></span>
                <label class="font-medium mb-2">Tooltip title</label>
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-x-1">
                <span style="background:${color}; width:10px; height:10px; display:inline-block; margin-right:8px;"></span>
                <span>Sales</span>
              </div>
              <span class="font-semibold ">${line}</span>
                </div>
            </div>
          `;
          }).join('');
          tooltipEl.querySelector('div').innerHTML = innerHtml;
        }

        // Display, position, and set styles for font
        const position = context.chart.canvas.getBoundingClientRect();
        tooltipEl.style.opacity = 1;
        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 16 + 'px';
        tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
      },
      },
    },
    scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: '#333',
            font: {
              family: 'Roboto, sans-serif',
            },
          },
        },
        y: {
          grid: {
            color: '#eee',
          },
          ticks: {
            maxTicksLimit: 4,
            color: '#333',
            font: {
              family: 'Roboto, sans-serif',
            },
          },
        },
      },
}
</script>