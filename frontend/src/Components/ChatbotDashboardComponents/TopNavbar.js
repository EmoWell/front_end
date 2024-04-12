import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

export default function TopNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      const headers = {
        Authorization: `Token ${loginToken}`,
      };
      await axios.post("http://127.0.0.1:8000/chat_auth/api/logout/", null, {
        headers,
      });
      localStorage.removeItem("loginToken");
      localStorage.removeItem("username");
      localStorage.removeItem("lastLogin");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
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
            onClick={handleToggleDropdown}
            className="flex items-center whitespace-wrap text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
            id="navbarDropdownMenuLink"
            role="button"
            data-twe-dropdown-toggle-ref
            aria-expanded={isDropdownOpen ? "true" : "false"}
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
          <ul
            className={`absolute right-0 w-48 z-[5000] ${
              isDropdownOpen ? "block" : "hidden"
            } overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-twe-dropdown-show dark:bg-surface-dark`}
            aria-labelledby="navbarDropdownMenuLink"
            data-twe-dropdown-menu-ref
          >
            <li>
              <a
                href="/profile"
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                data-twe-dropdown-item-ref
              >
                My profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                data-twe-dropdown-item-ref
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={handleLogout}
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                data-twe-dropdown-item-ref
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
