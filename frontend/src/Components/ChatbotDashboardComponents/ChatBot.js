import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Questionnaire() {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});

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

  const handleResponseChange = (questionId, response) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: response,
    }));
  };

  
  const handleSubmit = () => {
    axios
      .post("http://127.0.0.1:8000/phq9/api/responses/", responses)
      .then((response) => {
        console.log("Responses submitted successfully:", response.data);
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

<ul className="flex flex-col py-4">
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                <i className="bx bx-home"></i>
              </span>
              <span className="text-sm font-medium">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                <i className="bx bx-music"></i>
              </span>
              <span className="text-sm font-medium">Music</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                <i className="bx bx-drink"></i>
              </span>
              <span className="text-sm font-medium">Drink</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                <i className="bx bx-shopping-bag"></i>
              </span>
              <span className="text-sm font-medium">Shopping</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                <i className="bx bx-chat"></i>
              </span>
              <span className="text-sm font-medium">Chat</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                <i className="bx bx-user"></i>
              </span>
              <span className="text-sm font-medium">Profile</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                <i className="bx bx-bell"></i>
              </span>
              <span className="text-sm font-medium">Notifications</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-log-out"></i>
              </span>
              <span className="text-sm font-medium">Logout</span>
            </a>
          </li>
        </ul>

///sidebar component

// import React from "react";

// export default function SideNavbar() {
//   return (
//     <div className="min-h-screen flex flex-row bg-slate-900 overflow-hidden">
//       <div className="flex flex-col w-56 bg-slate-700">
//         <div className="flex text-white text-center text-3xl ml-16 mt-15">
//             Emowell
//         </div>
//         <ul className="flex flex-col py-4 mt-6fixed left-0 h-full bg-slate-700 w-56 pt-16">
//           <li>
//             <a
//               href="#"
//               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
//             >
//               <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
//                 <i className="bx bx-home"></i>
//               </span>
//               <span className="text-sm font-medium">Dashboard</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
//             >
//               <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
//                 <i className="bx bx-music"></i>
//               </span>
//               <span className="text-sm font-medium">Music</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
//             >
//               <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
//                 <i className="bx bx-drink"></i>
//               </span>
//               <span className="text-sm font-medium">Drink</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
//             >
//               <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
//                 <i className="bx bx-shopping-bag"></i>
//               </span>
//               <span className="text-sm font-medium">Shopping</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
//             >
//               <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
//                 <i className="bx bx-chat"></i>
//               </span>
//               <span className="text-sm font-medium">Chat</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
//             >
//               <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
//                 <i className="bx bx-user"></i>
//               </span>
//               <span className="text-sm font-medium">Profile</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
//             >
//               <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
//                 <i className="bx bx-bell"></i>
//               </span>
//               <span className="text-sm font-medium">Notifications</span>
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
//             >
//               <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
//                 <i className="bx bx-log-out"></i>
//               </span>
//               <span className="text-sm font-medium">Logout</span>
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
