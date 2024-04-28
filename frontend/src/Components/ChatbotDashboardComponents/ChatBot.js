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

// import React from "react";
// import { motion } from "framer-motion";
// import { cn } from "../../Utilities/cn";

// export default function Lamp1() {
//   return (
//     <LampContainer>
//       <motion.h1
//         initial={{ opacity: 0.5, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className="mb-48 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
//       >
//         Emosense
//       </motion.h1>
//     </LampContainer>
//   );
// }

// export const LampContainer = ({
//   children,
//   className,
// }) => {
//   return (
//     <div
//       className={cn(
//         "relative flex h-96 flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
//         className
//       )}
//     >
//       <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
//         <motion.div
//           initial={{ opacity: 0.5, width: "15rem" }}
//           whileInView={{ opacity: 1, width: "30rem" }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           style={{
//             backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
//           }}
//           className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
//         >
//           <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
//           <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0.5, width: "15rem" }}
//           whileInView={{ opacity: 1, width: "30rem" }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           style={{
//             backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
//           }}
//           className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
//         >
//           <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
//           <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
//         </motion.div>
//         <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
//         <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
//         <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
//         <motion.div
//           initial={{ width: "8rem" }}
//           whileInView={{ width: "16rem" }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
//         ></motion.div>
//         <motion.div
//           initial={{ width: "15rem" }}
//           whileInView={{ width: "30rem" }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
//         ></motion.div>

//         <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
//       </div>

//       <div className="relative z-50 flex flex-col items-center px-5">
//         {children}
//       </div>
//     </div>
//   );
// };
