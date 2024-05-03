import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatbotDashboard from "../Pages/ChatbotDashboard";
import LandingPage from "../Pages/LandingPage";
import LoginPage from "../Components/LoginPageComponents/LoginPage";
import SignupPage from "../Components/SignupPageComponents/SignupPage";
import Profile from "../Pages/ProfilePage";
import FAQpage from "../Pages/FAQpage";
import Dashboard from "../Pages/Dashboard";
import Chatbot2 from "../Components/ChatbotDashboardComponents/BDI2page";
import BDI2Dashboard from "../Pages/BDI2Dashboard";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chatbot-dashboard" element={<ChatbotDashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faqs" element={<FAQpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bdi2" element={<Chatbot2 />} />
        <Route path="/bdidash" element={<BDI2Dashboard />} />
      </Routes>
    </Router>
  );
}
