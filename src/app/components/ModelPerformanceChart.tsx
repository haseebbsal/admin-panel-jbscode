// src/components/ModelPerformanceChart.tsx
"use client";


import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register components for this chart
ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Model 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
    {
      label: 'Model 2',
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
    },
  ],
};

const options = {
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
};

const ModelPerformanceChart = () => (
  <div>
    <Line data={data} options={options} />
  </div>
);

export default ModelPerformanceChart;
