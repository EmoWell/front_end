import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

// Create a context to hold the authentication token
const AuthTokenContext = createContext();

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSuccess = (token) => {
    // Store the authentication token in state
    setAuthToken(token);
    console.log("auth :",token);
    localStorage.setItem('authToken', token);
    // Navigate to the chatbot dashboard page
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
      const { token } = response.data;
      handleLoginSuccess(token); // Pass the authentication token to handleLoginSuccess
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid username or password");
    }
  };

  return (
    <AuthTokenContext.Provider value={authToken}>
      <section>
        <div className="signin">
          <div className="content">
            <h2>Sign In</h2>
            <div className="form">
              {error && <div className="error">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="inputBox">
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                  <i>Username</i>
                </div>
                <div className="inputBox">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <i>Password</i>
                </div>
                <div className="links">
                  <a href="#">Forgot Password</a>
                  <a href="/signup">Signup</a>
                </div>
                <div className="inputBox">
                  <input type="submit" value="Login" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </AuthTokenContext.Provider>
  );
}
