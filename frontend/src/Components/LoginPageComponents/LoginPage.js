import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
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
      user: { username: first_name,last_name, last_login, id, email },
    } = data;
    localStorage.setItem("user_id", id);
    localStorage.setItem("loginToken", token);
    localStorage.setItem("first_name", first_name);
    localStorage.setItem("last_name", last_name);
    localStorage.setItem("lastLogin", last_login);
    localStorage.setItem("email", email);
    navigate("/dashboard");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
    } finally {
      setLoading(false);
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
              <div className="flex flex-col" style={{ minHeight: "40px" }}>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 h-10 rounded-md cursor-pointer relative flex items-center justify-center"
                  disabled={loading}
                >
                  {loading && (
                    <div className="absolute z-40 flex items-center justify-center">
                      <TailSpin
                        height={16}
                        width={16}
                        color="#fff"
                        secondaryColor="#fff"
                        strokeWidth={6}
                      />
                    </div>
                  )}
                  {loading ? "" : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
