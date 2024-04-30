import React, { useState } from "react";
import TopNavbar from "../Components/ChatbotDashboardComponents/TopNavbar";
import Chatbot from "../Components/ChatbotDashboardComponents/ChatbotMain";
import SideNavbar from "../Components/ChatbotDashboardComponents/SideNavbar";

export default function ChatbotDashboard() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [showQuestion, setShowQuestion] = useState(true);

  const handleYesClick = () => {
    setShowChatbot(true);
    setShowQuestion(false);
  };

  const handleNoClick = () => {
    setShowChatbot(false);
    setShowQuestion(false);
  };

  return (
    <div className="flex h-screen">
      <TopNavbar />
      <div className="flex w-full">
        <SideNavbar />
        <div className="flex flex-col w-full overflow-hidden">
          {showChatbot ? (
            <Chatbot />
          ) : showQuestion ? (
            <div className="flex flex-col items-center mt-20 justify-center text-white  h-36 bg-slate-700 shadow-lg">
              <h2 className="mb-4 text-center text-xl text-bold">
                We take this assessment based on the PHQ-9 questionnaire.
                <br />
                Please answer the asked questions in detail i.e., more than 20
                words.
                <br />
                Do you want to take the assessment?
              </h2>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="bg-gray-600 hover:bg-gray-800 text-white font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow-md"
                  onClick={handleYesClick}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="bg-gray-600 hover:bg-gray-800 text-white font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow-md"
                  onClick={handleNoClick}
                >
                  No
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
