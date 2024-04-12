import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import ChatbotDashboard from "../Pages/ChatbotDashboard";
import LandingPage from "../Pages/LandingPage";
import LoginPage from "../Components/LoginPageComponents/LoginPage";
import SignupPage from "../Components/SignupPageComponents/SignupPage";
import Profile from "../Pages/ProfilePage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chatbot-dashboard" element={<ChatbotDashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
