import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const initConversation = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/phq/api/questions/");
        setQuestions(response.data);
        setLoading(false);
        setMessages([{ text: "Hey, how are you today?", sender: "bot" }]);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false);
      }
    };

    initConversation();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    if (currentQuestionIndex === 0) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, sender: "user" },
      ]);
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, sender: "user" },
      ]);

      const currentQuestionId = questions[currentQuestionIndex].id;
      const userId = localStorage.getItem('userId'); // Retrieve user_id from local storage
      const userResponse = {
        question_id: currentQuestionId,
        response_text: inputValue,
        user: userId
      };

      axios.post("http://127.0.0.1:8000/phq/api/responses/", userResponse)
        .then((response) => {
          console.log("User response sent to the database:", response.data);
        })
        .catch((error) => {
          console.error("Error sending user response to the database:", error);
        });
    }

    setInputValue("");
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: questions[currentQuestionIndex].question_text, sender: "bot" },
      ]);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      console.log("All questions answered");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-1 overflow-y-auto w-full mt-16 mb-16">
      <div className="flex-1 overflow-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message-wrapper ${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`message p-2 ${
                message.sender === "user"
                  ? "bg-gray-700 rounded-xl text-white text-right inline-block mt-2 mr-2"
                  : "bg-gray-400 rounded-xl text-left inline-block mt-2 ml-2"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={handleMessageSubmit}
        className="flex items-center p-2 fixed bottom-0 right-0 w-full rounded-lg ml-24 bg-gray-800"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-800 rounded-md focus:outline-none focus:border-gray-500 text-white bg-gray-800"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="px-4 py-2 ml-1 bg-gray-700 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
}
