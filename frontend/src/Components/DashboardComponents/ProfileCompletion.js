import {Chart,ArcElement} from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import React from "react";

export default function ProfileCompletion({ profileCompletion }) {
    Chart.register(ArcElement)
    const data = {
        labels: ["Completed", "Remaining"],
        datasets: [
          {
            data: [profileCompletion, 100 - profileCompletion],
            backgroundColor: ["rgba(33, 53, 115, 0.8)", "rgba(58, 123, 33, 0.8)"],
            hoverBackgroundColor: ["rgba(33, 53, 115, 0.8)", "rgba(58, 123, 33, 0.8)"],
          },
        ],
      };
    const containerStyle = {
        width: "100%", 
        height: "100%", 
        maxWidth: "100%", 
        maxHeight: "100%", 
      };
    
      return (
        <div style={containerStyle}>
          <h2>Profile Completion</h2>
          <div style={{ position: "relative", width: "80%", height: "80%", marginTop:"10px", marginLeft:"60px"}}>
            <Doughnut data={data} />
            <p style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}></p>
          </div>
        </div>
      );
    }