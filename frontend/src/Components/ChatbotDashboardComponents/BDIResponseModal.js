import React from "react";

export default function BDIResponseModal({ onClose, score }) {
  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div>
      <div
        id="bdi-popup-modal"
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
                Your BDI score: {score}
              </h3>
              <div className="text-left">
                <p className="text-md font-semibold">
                  Depression Severity Criteria:
                </p>
                <table className="w-full mt-2 mb-4 text-left text-gray-700">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Raw Scores</th>
                      <th className="border px-4 py-2">Depression Severity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">0-13</td>
                      <td className="border px-4 py-2">
                        Indicates minimal depression
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">14-19</td>
                      <td className="border px-4 py-2">
                        Indicates mild depression
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">20-28</td>
                      <td className="border px-4 py-2">
                        Indicates moderate depression
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">29-63</td>
                      <td className="border px-4 py-2">
                        Indicates severe depression
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-3"
                onClick={handleCloseClick}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
