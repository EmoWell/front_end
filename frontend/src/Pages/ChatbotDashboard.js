import React from "react";
import SideNavbar from "../Components/ChatbotDashboardComponents/SideNavbar";
import TopNavbar from "../Components/ChatbotDashboardComponents/TopNavbar";
import ChatbotMain from "../Components/ChatbotDashboardComponents/Chatbot/ChatbotMain";

export default function ChatbotDashboard() {
  return (
    <div>
      <SideNavbar />
      <TopNavbar />
      <ChatbotMain/>
    </div>
  );
}
