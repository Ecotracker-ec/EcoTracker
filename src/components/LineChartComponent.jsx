import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChartComponent = ({ emissionsData, cityAvg }) => {
  // Prepare data for additional lines
  const cityAvgArray = new Array(emissionsData.length).fill(cityAvg);
  const constantArray = new Array(emissionsData.length).fill(1600/12);

  const chartData = {
    labels: emissionsData.map((_, index) => `Month ${index + 1}`),
    datasets: [
      {
        label: 'Total Emissions',
        data: emissionsData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2
      },
      {
        label: 'City Average Emissions',
        data: cityAvgArray,
        borderColor: '#00CC66',
        backgroundColor: '#00CC66',
        borderWidth: 2
      },
      {
        label: 'Country average',
        data: constantArray,
        borderColor: '#990000',
        backgroundColor: '#990000',
        borderWidth: 2
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Emissions Over Time'
      }
    },
    scales: {
      y: {
        beginAtZero: true, // Ensure the y-axis starts at 0
        min: 0
      }
    }
  };

  return <Line data={chartData} options={options} />;
};

export default LineChartComponent;