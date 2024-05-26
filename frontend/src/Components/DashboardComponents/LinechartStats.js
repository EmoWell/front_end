// LineChartComponent.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const data = {
  labels: ["2007–2008", "2009–2010", "2011–2012", "2013–2014", "2015–2016"],
  datasets: [
    {
      label: "Women",
      data: [10, 9.5, 9.8, 11, 10.5],
      borderColor: "rgba(33, 53, 115, 0.8)",
      backgroundColor: "rgba(33, 53, 115, 0.8)",
      fill: false,
      tension: 0.1,
    },
    {
      label: "Both sexes",
      data: [8, 7.5, 7.8, 9, 8.5],
      borderColor: "rgba(134, 148, 196, 0.8)",
      backgroundColor: "rgba(134, 148, 196, 0.8)",
      fill: false,
      tension: 0.1,
    },
    {
      label: "Men",
      data: [6, 5.5, 5.8, 6, 5.5],
      borderColor: "rgba(165, 201, 75, 0.8)",
      backgroundColor: "rgba(165, 201, 75, 0.8)",
      fill: false,
      tension: 0.1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      max: 15,
      title: {
        display: true,
        text: "Percent",
      },
    },
    x: {
      title: {
        display: true,
        text: "Year",
      },
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

const LineChartComponent = () => {
  return (
    <div className="flex items-center w-full h-full">
      <div className="relative w-full h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChartComponent;
