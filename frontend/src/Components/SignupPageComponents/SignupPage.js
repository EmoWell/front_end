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
      console.log("Form Data:", formData);
      const response = await axios.post(
        "http://127.0.0.1:8000/chat_auth/api/register/",
        formData
      );
      console.log("Signup successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Problem signing in...user already exists");
    }
  };

  return (
    <section className="bg-slate-500 h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-700 p-8 rounded-lg shadow-lg w-full max-w-sm"
      >
        <div className="space-y-4">
          <h2 className="text-4xl text-white mb-4">
            <b>Sign Up</b>
          </h2>
          <div className="form space-y-1">
            <div className="inputBox relative">
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
                placeholder="First Name"
                className="w-full my-3 border-gray-400 outline-none px-4 py-2 rounded  text-black"
              />
            </div>
            <div className="inputBox relative">
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
                placeholder="Last Name"
                className="w-full mb-3  border-gray-400 outline-none px-4 py-2 rounded  text-black"
              />
            </div>
            <div className="inputBox relative">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="Username"
                className="w-full mb-3 border-gray-400 outline-none px-4 py-2 rounded  text-black"
              />
            </div>
            <div className="inputBox relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full mb-3 border-gray-400 outline-none px-4 py-2 rounded  text-black"
              />
            </div>
            <div className="inputBox relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Password"
                className="w-full mb-3 border-gray-400 outline-none px-4 py-2 rounded text-black"
              />
            </div>
            <a href="/login">Login</a>
            <div className="inputBox">
              <input
                type="submit"
                value="SignUp"
                className="w-full mt-2 px-4 py-2 bg-blue-600 text-black font-semibold rounded cursor-pointer transition duration-300 hover:bg-blue-700"
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
