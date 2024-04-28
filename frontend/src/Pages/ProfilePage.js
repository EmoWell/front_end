import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import _ from 'lodash';
import SideNavbar from "../Components/ChatbotDashboardComponents/SideNavbar";

import "react-datepicker/dist/react-datepicker.css";

export default function Profile() {
  const [Dob, setDob] = useState(null);
  const [gender, setGender] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [profileCompletion, setProfileCompletion] = useState(25);
  const [isEditing, setIsEditing] = useState(false);
  const profilePictureColor = "#ced4da";
  const storedFirstName = localStorage.getItem("first_name");
  const storedLastName = localStorage.getItem("last_name");
  const storedFullName = storedFirstName && storedLastName ? `${_.capitalize(storedFirstName)} ${_.capitalize(storedLastName)}` : "";
  
  useEffect(() => {
    const storedDob = localStorage.getItem("profileDob");
    const storedGender = localStorage.getItem("profileGender");
    const storedPhoneNumber = localStorage.getItem("profilePhoneNumber");
    if (storedDob) {
      setDob(new Date(storedDob));
      updateProfileCompletion(25);
    }
    if (storedGender) {
      setGender(storedGender);
      updateProfileCompletion(25);
    }
    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber);
      updateProfileCompletion(25); 
    }
  }, []);

  const storedEmail = localStorage.getItem("email");
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    localStorage.setItem("profileDob", Dob);
    localStorage.setItem("profileGender", gender);
    localStorage.setItem("profilePhoneNumber", phoneNumber);
    setIsEditing(false);
  };

  const updateProfileCompletion = (increaseBy) => {
    setProfileCompletion(prevCompletion => Math.min(100, prevCompletion + increaseBy)); 
  };

  return (
    <div className="flex">
      <SideNavbar />
      <div
        className="min-h-screen relative right-0"
        style={{ width: "-webkit-fill-available" }}
      >
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
              <div className="bg-white p-3 rounded-md items-center h-full">
                <div className="text-lg font-semibold mb-2">Profile</div>
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={profilePictureColor}
                    className="w-36 h-36 align-middle"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-semibold">{storedFullName}</h2>
                  <p className="text-gray-600">Student</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-3 shadow-sm rounded-md w-full">
              <div className="text-lg font-semibold mb-2 flex justify-between">
                <span>About</span>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 mt-2">
                  <label className="block text-gray-700 font-semibold mb-1">
                    Date of Birth:
                  </label>
                  {!isEditing ? (
                    <p className="text-gray-700">
                      {Dob ? new Date(Dob).toLocaleDateString() : "N/A"}
                    </p>
                  ) : (
                    <DatePicker
                      selected={Dob ? new Date(Dob) : null}
                      onChange={(date) => { setDob(date); updateProfileCompletion(25); }}
                      className="border border-gray-300 px-3 py-2 rounded-md shadow-lg"
                    />
                  )}
                </div>
                <div className="w-full md:w-1/2 mt-2">
                  <label className="block text-gray-700 font-semibold mb-1">
                    Sex:
                  </label>
                  {!isEditing ? (
                    <p className="text-gray-700">{gender || "N/A"}</p>
                  ) : (
                    <select
                      className="border border-gray-300 px-3 py-2 rounded-md shadow-lg"
                      value={gender || ""}
                      onChange={(e) => { setGender(e.target.value); updateProfileCompletion(25); }}
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  )}
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-700 font-semibold mt-12">
                    Contact:
                  </label>
                  {!isEditing ? (
                    <p className="text-gray-700">{phoneNumber || "N/A"}</p>
                  ) : (
                    <input
                      type="text"
                      className="border border-gray-300 px-3 py-2 rounded-md shadow-lg"
                      value={phoneNumber || ""}
                      onChange={(e) => { setPhoneNumber(e.target.value); updateProfileCompletion(25); }}
                    />
                  )}
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-gray-700 font-semibold mt-12">
                    Email:
                  </label>
                  <p className="text-gray-700">{storedEmail}</p>
                </div>
              </div>
              {isEditing && (
                <div className="flex justify-center mt-4">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer mr-2"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md cursor-pointer"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              )}
              <div className="w-full flex justify-center items-left mt-16">
                {!isEditing && (
                  <button
                    className="text-white bg-blue-600 w-36 h-10 rounded-lg shadow-md"
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
