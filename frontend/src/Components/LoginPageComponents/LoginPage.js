import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loginToken, setLoginToken] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSuccess = (data) => {
    const {
      token,
      user: { username: full_name, last_login, id, email },
    } = data;
    setLoginToken(token);
    localStorage.setItem("user_id", id);
    localStorage.setItem("loginToken", token);
    localStorage.setItem("username", full_name);
    localStorage.setItem("lastLogin", last_login);
    localStorage.setItem("email", email);
    navigate("/chatbot-dashboard");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/chat_auth/api/login/",
        formData
      );
      console.log("Login successful:", response.data);
      handleLoginSuccess(response.data);
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <section className="bg-slate-500 h-screen flex justify-center items-center">
        <div className="bg-slate-700 p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-4xl text-white mb-4">
            <b>Sign In</b>
          </h2>
          <div className="space-y-4">
            {error && <div className="text-red-500">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="border border-gray-300 px-3 py-2 rounded-md shadow-lg"
                  required
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="border border-gray-300 px-3 py-2 rounded-md shadow-lg"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-white">New User???</p>
                <a href="/signup" className="text-blue-500">
                  Signup
                </a>
              </div>
              <div className="flex flex-col">
                <input
                  type="submit"
                  value="Login"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
