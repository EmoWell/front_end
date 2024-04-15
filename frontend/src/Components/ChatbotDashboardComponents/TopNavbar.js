import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

export default function TopNavbar() {
  const [loginToken, setLoginToken] = useState("");
  const [userInitials, setUserInitials] = useState("");
  const [lastLoginTime, setLastLoginTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("loginToken");
    const username = localStorage.getItem("username");
    const lastLogin = localStorage.getItem("lastLogin");
    if (token) {
      setLoginToken(token);
    }
    if (username) {
      const initials = extractInitials(username);
      setUserInitials(initials);
    }
    if (lastLogin) {
      const formattedLastLogin = moment(lastLogin).fromNow();
      setLastLoginTime(formattedLastLogin);
    }
  }, []);

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const extractInitials = (name) => {
    const nameArray = name.split(" ");
    const initials = nameArray
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase();
    return initials;
  };

  return (
    <nav
      className="fixed top-0 w-full flex-wrap items-center justify-between bg-slate-700 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4"
      data-twe-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="relative ms-auto" data-twe-dropdown-ref>
          <button
            onClick={handleProfileClick}
            className="flex items-center whitespace-wrap text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
            id="profileButton"
            aria-expanded="false"
          >
            <span className="ps-1">
              {lastLoginTime && (
                <span className="text-white text-sm mr-3">{lastLoginTime}</span>
              )}
            </span>
            <span className="rounded-full bg-gray-400 h-8 w-8 flex items-center justify-center text-white font-bold">
              {userInitials}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
