import React, { useState, useEffect } from "react";
import logo from "./logo.png";

export default function SideNavbar() {
  const [collapsed, setCollapsed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth <= 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="min-h-screen flex flex-row bg-slate-900 overflow-hidden">
      {!collapsed && (
        <div className="flex flex-col w-56 bg-slate-700">
          <ul className="flex flex-col py-4 mt-6fixed left-0 h-full bg-slate-700 w-56 pt-16">
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <i className="bx bx-home"></i>
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
                  <i className="bx bx-music"></i>
                </span>
                <span className="text-sm font-medium">Music</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-5 transition-transform ease-in duration-200 text-white hover:text-gray-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <i className="bx bx-drink"></i>
                </span>
                <span className="text-sm font-medium">Drink</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-5 transition-transform ease-in duration-200 text-white hover:text-gray-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <i className="bx bx-shopping-bag"></i>
                </span>
                <span className="text-sm font-medium">Shopping</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-5 transition-transform ease-in duration-200 text-white hover:text-gray-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <i className="bx bx-chat"></i>
                </span>
                <span className="text-sm font-medium">Chat</span>
              </a>
            </li>
            <li>
              <a
                href="/profile"
                className="flex flex-row items-center h-12 transform hover:translate-x-5 transition-transform ease-in duration-200 text-white hover:text-gray-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <i className="bx bx-user"></i>
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
                  <i className="bx bx-bell"></i>
                </span>
                <span className="text-sm font-medium">Notifications</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-5 transition-transform ease-in duration-200 text-white hover:text-gray-300"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-log-out"></i>
                </span>
                <span className="text-sm font-medium">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      )}
      <div>
          <div className="absolute left-2 bg-gray-700 rounded-full p-2 cursor-pointer flex items-center" onClick={toggleSidebar}>
            <img
              src={logo}
              alt="Emowell Logo"
              className="h-8 w-10 rounded-full mr-2"
            />
            <span className="text-white text-xl font-serif font-bold">Emowell</span>
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
