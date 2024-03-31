import React, { useState, useEffect } from "react";
import axios from "axios";

function Questionnaire() {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});

  // Fetch questions from backend when component mounts
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/phq/api/questions/")
      .then((response) => {
        setQuestions(response.data);
        let questions = response.data;
        console.log("Questions: ", questions);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  // Handle user's response to a question
  const handleResponseChange = (questionId, response) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: response,
    }));
  };

  // Submit responses to backend
  const handleSubmit = () => {
    axios
      .post("http://127.0.0.1:8000/phq9/api/responses/", responses)
      .then((response) => {
        console.log("Responses submitted successfully:", response.data);
        // Reset responses state if needed
        setResponses({});
      })
      .catch((error) => {
        console.error("Error submitting responses:", error);
      });
  };

  return (
    <div>
      <h1>Questionnaire</h1>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.question_text}</p>
          <input
            type="text"
            value={responses[question.id] || ""}
            onChange={(e) => handleResponseChange(question.id, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Responses</button>
    </div>
  );
}

export default Questionnaire;
