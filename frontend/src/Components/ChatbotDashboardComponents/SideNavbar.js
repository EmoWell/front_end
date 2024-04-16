import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./logo.png";

export default function TopNavbar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const [loginToken, setLoginToken] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("loginToken");
    if (token) {
      setLoginToken(token);
    }
  }, []);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = async () => {
    try {
      const headers = {
        Authorization: `Token ${loginToken}`,
      };
      await axios.post("http://127.0.0.1:8000/chat_auth/api/logout/", null, {
        headers,
      });
      localStorage.clear();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-row bg-slate-900 overflow-hidden">
      {!collapsed && (
        <div className="flex flex-col w-56 bg-slate-700">
          <ul className="flex flex-col py-4 h-full bg-slate-700 w-56 pt-16">
            <li>
              <a
                href="/chatbot-dashboard"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium">Dashboard</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-5 transition-transform ease-in duration-200 text-white hover:text-gray-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium">Take Assessment</span>
              </a>
            </li>
            <li>
              <a
                href="/profile"
                className="flex flex-row items-center h-12 transform hover:translate-x-5 transition-transform ease-in duration-200 text-white hover:text-gray-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium">Profile</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-5 transition-transform ease-in duration-200 text-white hover:text-gray-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium">FAQs</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={handleLogout}
                className="flex flex-row items-center h-12 transform hover:translate-x-5 transition-transform ease-in duration-200 text-white hover:text-gray-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      )}
      <div>
        <div
          className="absolute left-2 bg-gray-700 rounded-full p-2 cursor-pointer flex items-center"
          onClick={toggleSidebar}
        >
          <img
            src={logo}
            alt="Emowell Logo"
            className="h-8 w-10 rounded-full mr-2"
          />
          <span className="text-white text-xl font-serif font-bold">
            Emowell
          </span>
        </div>
      </div>
      {collapsed ? (
        <i className="bx bx-menu text-white text-3xl"></i>
      ) : (
        <i className="bx bx-x text-white text-3xl"></i>
      )}
    </div>
  );
}
