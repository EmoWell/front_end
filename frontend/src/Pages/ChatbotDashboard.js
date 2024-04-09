import React from "react";
import TopNavbar from "../Components/ChatbotDashboardComponents/TopNavbar";
import Chatbot from "../Components/ChatbotDashboardComponents/ChatbotMain";
import SideNavbar from "../Components/ChatbotDashboardComponents/SideNavbar";

export default function ChatbotDashboard() {
  return (
    <div className="flex h-screen">
      <TopNavbar />
      <div className="flex w-full">
        <SideNavbar />
        <div className="flex flex-col w-full overflow-hidden">
          <Chatbot />
        </div>
      </div>
    </div>
  );
}
