import React from "react";
import SideNavbar from "../Components/ChatbotDashboardComponents/SideNavbar";
import ProfileCompletion from "../Components/DashboardComponents/ProfileCompletion";
import PieChartComponent from "../Components/DashboardComponents/DepressionStatPie";
import BarChartComponent from "../Components/DashboardComponents/BarChartStats";
import LineChartComponent from "../Components/DashboardComponents/LinechartStats";

export default function Dashboard() {
  return (
    <div className="flex">
      <SideNavbar />
      <div className="flex flex-col ml-6 w-full">
        <div className="text-3xl font-bold mb-2 mt-6 h-20 text-white">
          Depression Statistics
        </div>
        <div className="flex flex-wrap">
          <div className="mb-4 w-2/3">
            <div className="bg-gray-100 h-80 p-4 rounded-lg">
              <BarChartComponent />
            </div>
          </div>
          <div className="w-1/3 flex-wrap">
            <div className="bg-gray-100 h-80 p-4 rounded-lg ml-4 mr-4">
              <ProfileCompletion profileCompletion={75} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-2/5 mb-4">
            <div className="bg-gray-100 p-4 rounded-lg h-72">
              <PieChartComponent />
            </div>
          </div>
          <div className="w-3/5 mb-4">
            <div className="bg-gray-100 p-4 rounded-lg ml-4 mr-4 h-72">
              <LineChartComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
