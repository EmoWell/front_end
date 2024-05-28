import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ResponseModal({ onClose }) {
  const [modalText, setModalText] = useState("Thank you for taking the test");
  const [phqScore, setPhqScore] = useState(0);
  const userId = localStorage.getItem("user_id");
  const navigate = useNavigate(); 

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://127.0.0.1:8000/phq/api/score/${userId}/`)
        .then((response) => {
          const score = response.data.score;
          setPhqScore(score);
          setModalText(`Your score: ${score}`);
        })
        .catch((error) => {
          console.error("Error fetching score:", error);
          setModalText("Failed to fetch score");
        });
    }
  }, [userId]);

  const getSeverityText = (score) => {
    if (score >= 1 && score <= 4) return "Minimal depression";
    if (score >= 5 && score <= 9) return "Mild depression";
    if (score >= 10 && score <= 14) return "Moderate depression";
    if (score >= 15 && score <= 19) return "Moderately severe depression";
    if (score >= 20 && score <= 27) return "Severe depression";
    return "";
  };

  const handleCloseClick = () => {
    onClose();
  };

  const handleBDIClick = () => {
    navigate("/bdidash");
  };

  return (
    <div>
      <div
        id="popup-modal"
        tabIndex="-1"
        className="fixed top-0 right-0 left-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-md">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500">
                {modalText}
              </h3>
              <p className="mb-5 text-lg font-normal text-gray-500">
                Depression Severity: {getSeverityText(phqScore)}
              </p>
              <div className="text-left">
                <p className="text-md font-semibold">Depression Severity Criteria:</p>
                <table className="w-full mt-2 mb-4 text-left text-gray-700">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Total Score</th>
                      <th className="border px-4 py-2">Depression Severity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">1-4</td>
                      <td className="border px-4 py-2">Minimal depression</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">5-9</td>
                      <td className="border px-4 py-2">Mild depression</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">10-14</td>
                      <td className="border px-4 py-2">Moderate depression</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">15-19</td>
                      <td className="border px-4 py-2">Moderately severe depression</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">20-27</td>
                      <td className="border px-4 py-2">Severe depression</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {phqScore > 14 && (
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-3"
                  onClick={handleBDIClick}
                >
                  Take BDI-2 Assessment
                </button>
              )}
              {modalText !== "Thank you for taking the test" && (
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-3"
                  onClick={handleCloseClick}
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
