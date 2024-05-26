// PieChartComponent.jsx
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Minimal", "Mild", "Moderate", "Severe"],
  datasets: [
    {
      label: "Depression Severity",
      data: [81.5, 11.5, 4.2, 2.8],
      backgroundColor: [
        "rgba(33, 53, 115, 0.8)",
        "rgba(134, 148, 196, 0.8)",
        "rgba(165, 201, 75, 0.8)",
        "rgba(58, 123, 33, 0.8)",
      ],
      borderColor: [
        "rgba(33, 53, 115, 1)",
        "rgba(134, 148, 196, 1)",
        "rgba(165, 201, 75, 1)",
        "rgba(58, 123, 33, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.label}: ${tooltipItem.raw}%`;
        },
      },
    },
  },
};

const PieChartComponent = () => {
  return (
    <div className="flex items-center w-full h-full">
      <div className="w-2/3 h-64">
        <Pie data={data} options={options} />
      </div>
      <div className="w-1/3 flex flex-col items-start pl-4">
        {data.labels.map((label, index) => (
          <div key={index} className="flex items-center mb-2">
            <div
              className="w-4 h-4 mr-2"
              style={{
                backgroundColor: data.datasets[0].backgroundColor[index],
              }}
            ></div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;
