import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/chat_auth/api/register/",
        formData
      );
      console.log("Signup successful:", response.data);
      navigate("/login");
      
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Problem signing in...user already exists")
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen">
      {/* Your signup form */}
      <form onSubmit={handleSubmit} className="signin">
        <div className="content">
          <h2 className="text-4xl text-blue-500">Sign Up</h2>
          <div className="form space-y-1">
            <div className="inputBox relative">
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 border-none outline-none px-4 py-2 rounded text-white"
              />
              <i className="absolute left-0 top-0 px-4 py-3 text-gray-500 transition duration-500">
                First Name
              </i>
            </div>
            <div className="inputBox relative">
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 border-none outline-none px-4 py-2 rounded text-white"
              />
              <i className="absolute left-0 top-0 px-4 py-3 text-gray-500 transition duration-500">
                Last Name
              </i>
            </div>

            <div className="inputBox relative">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 border-none outline-none px-4 py-2 rounded text-white"
              />
              <i className="absolute left-0 top-0 px-4 py-3 text-gray-500 transition duration-500">
                Username
              </i>
            </div>

            <div className="inputBox relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 border-none outline-none px-4 py-2 rounded text-white"
              />
              <i className="absolute left-0 top-0 px-4 py-3 text-gray-500 transition duration-500">
                Email Address
              </i>
            </div>

            <div className="inputBox relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 border-none outline-none px-4 py-2 rounded text-white"
              />
              <i className="absolute left-0 top-0 px-4 py-3 text-gray-500 transition duration-500">
                Password
              </i>
            </div>
            <div className="inputBox">
              <input
                type="submit"
                value="SignUp"
                className="px-4 py-2 bg-blue-500 text-black font-semibold rounded cursor-pointer transition duration-300 hover:bg-blue-700"
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
