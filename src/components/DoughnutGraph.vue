<template>
    <div class="w-1/2 relative">
      <Doughnut :data="doughnutData" :options="doughnutOptions" />
      <div class="w-full h-full bg-background rounded-full absolute top-0 -z-10 flex justify-center items-center">
        <div class="w-1/2 h-1/2 bg-white rounded-full"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Doughnut } from 'vue-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    LinearScale
  } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);
  
  const doughnutData = {
    labels: ['Resolved', 'Not resolved'],
    datasets: [
        {
        data: [60, 40],
        backgroundColor: ['#3C3ACF', '#F3F3FC'],
        borderWidth: 0, // Hide the borders
        borderRadius:[ 100,0], // Make the edges rounded
        },
    ],
  };
  
  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend if needed
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        display: false, // Hide the x-axis grid and labels
      },
      y: {
        display: false, // Hide the y-axis grid and labels
      },
    },
  };
  </script>