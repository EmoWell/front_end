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

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chatbot-dashboard" element={<ChatbotDashboard />} />
      </Routes>
    </Router>
  );
}
