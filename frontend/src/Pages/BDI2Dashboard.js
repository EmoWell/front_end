import React from "react";
import Chatbot2 from "../Components/ChatbotDashboardComponents/BDI2page";
import TopNavbar from "../Components/ChatbotDashboardComponents/TopNavbar";
import SideNavbar from "../Components/ChatbotDashboardComponents/SideNavbar";

export default function BDI2Dashboard() {
  return (
    <div className="flex h-screen">
      <div className="fixed h-full">
      <SideNavbar />
      </div>
      <div className="flex flex-col w-full ml-56">
        <TopNavbar />
        <Chatbot2 />
      </div>
    </div>
  );
}
