import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allowUserInput, setAllowUserInput] = useState(false); // Flag to allow user input
  const messagesEndRef = useRef(null);
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const initConversation = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/phq/api/questions/"
        );
        setQuestions(response.data);
        setLoading(false);
        if (response.data.length > 0) {
          setMessages([
            { text: response.data[0].question_text, sender: "bot" },
          ]);
          setCurrentQuestionIndex(1);
        }
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

  useEffect(() => {
    if (messages.length > 0 && messages[0].sender === "bot") {
      setAllowUserInput(true);
    }
  }, [messages]);

  useEffect(() => {
    const handleLastQuestionResponse = () => {
      if (currentQuestionIndex === questions.length) {
        if (inputValue.trim() !== "") {
          const lastQuestionId = questions[currentQuestionIndex - 1].id;
          setResponses([
            ...responses,
            { question_id: lastQuestionId, response_text: inputValue },
          ]);
          console.log("responses", responses);
          submitResponses();
        }
      }
    };

    handleLastQuestionResponse();

    return () => {
      handleLastQuestionResponse();
    };
  }, [currentQuestionIndex]);

  const submitResponses = () => {
    const userId = localStorage.getItem("user_id");

    axios
      .post("http://127.0.0.1:8000/phq/api/responses/", {
        user: userId,
        responses: responses,
      })
      .then((response) => {
        console.log("All responses sent to the database:", response.data);
        setMessages([{ text: "Thank you for your responses!", sender: "bot" }]);
      })
      .catch((error) => {
        console.error("Error sending responses to the database:", error);
      });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length) {
      if (currentQuestionIndex >= 0) {
        const currentQuestionId = questions[currentQuestionIndex - 1].id;
        setResponses((prevResponses) => [
          ...prevResponses,
          { question_id: currentQuestionId, response_text: inputValue },
        ]);
        console.log("responses", responses);
      }
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: questions[currentQuestionIndex].question_text,
          sender: "bot",
        },
      ]);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      const user_id = localStorage.getItem("user_id");
  
      // Include the response for the last question
      const lastQuestionId = questions[currentQuestionIndex - 1].id;
      const lastResponse = { question_id: lastQuestionId, response_text: inputValue };
  
      // Submit responses including the last response
      axios
        .post("http://127.0.0.1:8000/phq/api/responses/", {
          user: user_id,
          responses: [...responses, lastResponse],
        })
        .then((response) => {
          console.log("All responses sent to the database:", response.data);
          setMessages([
            { text: "Thank you for your responses!", sender: "bot" },
          ]);
        })
        .catch((error) => {
          console.error("Error sending responses to the database:", error);
        });
    }
  };
    

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!allowUserInput || inputValue.trim() === "") return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputValue, sender: "user" },
    ]);

    setInputValue("");
    console.log(currentQuestionIndex + 1);
    handleNextQuestion();
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
