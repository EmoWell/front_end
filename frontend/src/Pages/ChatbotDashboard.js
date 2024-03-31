import React from "react";
import TopNavbar from "../Components/ChatbotDashboardComponents/TopNavbar";
import Chatbot from "../Components/ChatbotDashboardComponents/ChatbotMain";

export default function ChatbotDashboard() {
  return (
    <div>
      <TopNavbar />
      {/* <SideNavbar />*/}
      <Chatbot/> 
    </div>
  );
}
