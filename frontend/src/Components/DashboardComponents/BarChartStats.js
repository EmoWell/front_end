// BarChartComponent.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ["Both sexes", "Men", "Women"],
  datasets: [
    {
      label: "Hispanic",
      data: [8.2, 6.0, 10.5],
      backgroundColor: "rgba(33, 53, 115, 0.8)",
      borderColor: "rgba(33, 53, 115, 1)",
      borderWidth: 1,
    },
    {
      label: "Non-Hispanic white",
      data: [7.9, 25.2, 10.5],
      backgroundColor: "rgba(134, 148, 196, 0.8)",
      borderColor: "rgba(134, 148, 196, 1)",
      borderWidth: 1,
    },
    {
      label: "Non-Hispanic black",
      data: [9.2, 7.1, 11.0],
      backgroundColor: "rgba(165, 201, 75, 0.8)",
      borderColor: "rgba(165, 201, 75, 1)",
      borderWidth: 1,
    },
    {
      label: "Non-Hispanic Asian",
      data: [3.1, 2.2, 3.9],
      backgroundColor: "rgba(58, 123, 33, 0.8)",
      borderColor: "rgba(58, 123, 33, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      max: 20,
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.dataset.label}: ${tooltipItem.raw}%`;
        },
      },
    },
  },
};

const BarChartComponent = () => {
  return (
    <div className="flex items-center w-full h-full">
      <div className="relative w-full h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChartComponent;
