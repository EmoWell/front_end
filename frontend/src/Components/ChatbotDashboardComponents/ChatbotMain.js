import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return; // Don't send empty messages
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputValue, sender: "user" },
    ]);
    setInputValue("");
    // Here you can call a function to generate a reply message
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender === "user" ? "text-right" : "text-left"
            } p-2`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit} className="flex items-center p-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 mr-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-white bg-gray-800"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
}
