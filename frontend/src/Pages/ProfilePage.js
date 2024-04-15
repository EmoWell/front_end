import React, { useEffect, useState } from "react";
import SideNavbar from "../Components/ChatbotDashboardComponents/SideNavbar";

export default function Profile() {
  const [fullName, setFullName] = useState("");
  const [userInitials, setUserInitials] = useState("");

  useEffect(() => {
    const storedFullName = localStorage.getItem("username");
    if (storedFullName) {
      setFullName(storedFullName);
      setUserInitials(getInitials(storedFullName));
    }

    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUserInitials(getInitials(storedUsername));
    }
  }, []);

  const storedEmail = localStorage.getItem("email");

  const getInitials = (name) => {
    const nameArray = name.split(" ");
    const initials = nameArray
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase();
    return initials;
  };

  return (
    <div className="flex">
      <SideNavbar />
      <div className="min-h-screen relative right-0">
        <div className="w-full text-white bg-main-color">
          <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="py-4 mx-auto">
              <h1 className="text-3xl font-extrabold">My Profile</h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            <div className="w-full md:w-3/12 md:mx-2  min-w-72 min-h-80">
              <div className="bg-white p-3 rounded-md">
                <div className="text-lg font-semibold mb-2">Profile</div>
                <div className="flex items-center shadow-lg justify-center w-32 h-32 mx-auto rounded-full bg-gray-300 text-black font-bold text-5xl">
                  {userInitials}
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-semibold">{fullName}</h2>
                  <p className="text-gray-600">Student</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-3 shadow-sm rounded-md mt-4">
              <div className="text-lg font-semibold mb-2">About</div>
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-700 font-semibold mb-1">
                    Age:
                  </label>
                  <p className="text-gray-700">23 years</p>
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-700 font-semibold mb-1">
                    Sex:
                  </label>
                  <p className="text-gray-700">Female</p>
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-700 font-semibold mb-1">
                    Contact:
                  </label>
                  <p className="text-gray-700">9955000000</p>
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-700 font-semibold mb-1">
                    Email:
                  </label>
                  <p className="text-gray-700">{storedEmail}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-3 shadow-sm rounded-md mt-4">
              <div className="text-lg font-semibold mb-2">
                Interests 
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
