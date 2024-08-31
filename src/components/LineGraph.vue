<template>
    <Line
    id="total-income-graph"
    :data="lineGraphData"
    :options="lineGraphOptions"
    />
</template>

<script setup>
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
} from 'chart.js';

ChartJS.register( LineElement, PointElement, Filler);

const lineGraphData = {
    labels: [1,2,3,4],
    datasets: [
        { 
            data: [1, 4, 1.8,4.6],
            backgroundColor: "#3C3ACF",
            borderWidth: 2,
            borderColor: '#3C3ACF',
            pointRadius: 0,
      backgroundColor: (context) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          // This case happens on initial chart load
          return null;
        }

        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, 'rgba(70, 189, 132, 0.5)');
        gradient.addColorStop(1, 'rgba(70, 189, 132, 0)');

        return gradient;
      },
      fill: true,
      tension: 0.4, // This makes the line curved
    }],
        }


const lineGraphOptions  = {
    responsive: true,
  plugins: {
    tooltip: {
        enabled: false,
    }
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        color: 'transparent'
     },
      ticks: {
        display: false,

      }
    },
    y: {
        grid: {
        display: false,
        
      },
      border: {
        color: 'transparent'
     },
      ticks: {
        display: false,
      }
    },
    
  },
  
}

</script>