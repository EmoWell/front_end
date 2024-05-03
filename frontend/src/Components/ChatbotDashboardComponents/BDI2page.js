import React, { useState, useEffect, useRef } from "react";
import BDIResponseModal from "./BDIResponseModal";

export default function Chatbot2() {
  const questions = [
    {
      question: "Sadness",
      options: [
        "I do not feel sad.",
        "I feel sad much of the time.",
        "I am sad all the time.",
        "I am so sad or unhappy that I can't stand it.",
      ],
    },
    {
      question: "Pessimism",
      options: [
        "I am not discouraged about my future.",
        "I feel more discouraged about my future than I used to.",
        "I do not expect things to work out for me.",
        "I feel my future is hopeless and will only get worse.",
      ],
    },
    {
      question: "Past Failure",
      options: [
        "I do not feel like a failure.",
        "I have failed more than I should have.",
        "As I look back, I see a lot of failures.",
        "I feel I am a total failure as a person.",
      ],
    },
    {
      question: "Loss of Pleasure",
      options: [
        "I get as much pleasure as I ever did from the things I enjoy.",
        "I don't enjoy things as much as I used to.",
        "I get very little pleasure from the things I used to enjoy.",
        "I can't get any pleasure from the things I used to enjoy.",
      ],
    },
    {
      question: "Guilty Feelings",
      options: [
        "I don't feel particularly guilty.",
        "I feel guilty over many things I have done or should have done.",
        "I feel quite guilty most of the time.",
        "I feel guilty all of the time.",
      ],
    },
    {
      question: "Punishment Feelings",
      options: [
        "I don't feel I am being punished.",
        "I feel I may be punished.",
        "I expect to be punished.",
        "I feel I am being punished.",
      ],
    },
    {
      question: "Self-Dislike",
      options: [
        "I feel the same about myself as ever.",
        "I have lost confidence in myself.",
        "I am disappointed in myself.",
        "I dislike myself.",
      ],
    },
    {
      question: "Self-Criticalness",
      options: [
        "I don't criticize or blame myself more than usual.",
        "I am more critical of myself than I used to be.",
        "I criticize myself for all of my faults.",
        "I blame myself for everything bad that happens.",
      ],
    },
    {
      question: "Suicidal Thoughts or Wishes",
      options: [
        "I don't have any thoughts of killing myself.",
        "I have thoughts of killing myself, but I would not carry them out.",
        "I would like to kill myself.",
        "I would kill myself if I had the chance.",
      ],
    },
    {
      question: "Crying",
      options: [
        "I don't cry anymore than I used to.",
        "I cry more than I used to.",
        "I cry over every little thing.",
        "I feel like crying, but I can't.",
      ],
    },
    {
      question: "Agitation",
      options: [
        "I am no more restless or wound up than usual.",
        "I feel more restless or wound up than usual.",
        "I am so restless or agitated, it's hard to stay still.",
        "I am so restless or agitated that I have to keep moving or doing something.",
      ],
    },
    {
      question: "Loss of Interest",
      options: [
        "I have not lost interest in other people or activities.",
        "I am less interested in other people or things than before.",
        "I have lost most of my interest in other people or things.",
        "It's hard to get interested in anything.",
      ],
    },
    {
      question: "Indecisiveness",
      options: [
        "I make decisions about as well as ever.",
        "I find it more difficult to make decisions than usual.",
        "I have much greater difficulty in making decisions than I used to.",
        "I have trouble making any decisions.",
      ],
    },
    {
      question: "Worthlessness",
      options: [
        "I do not feel I am worthless.",
        "I don't consider myself as worthwhile and useful as I used to.",
        "I feel more worthless as compared to others.",
        "I feel utterly worthless.",
      ],
    },
    {
      question: "Loss of Energy",
      options: [
        "I have as much energy as ever.",
        "I have less energy than I used to have.",
        "I don't have enough energy to do very much.",
        "I don't have enough energy to do anything.",
      ],
    },
    {
      question: "Changes in Sleeping Pattern",
      options: [
        "I have not experienced any change in my sleeping.",
        "I sleep somewhat more than usual.",
        "I sleep somewhat less than usual.",
        "I sleep a lot more than usual.",
        "I sleep a lot less than usual.",
        "I sleep most of the day.",
        "I wake up 1-2 hours early and can't get back to sleep.",
      ],
    },
    {
      question: "Irritability",
      options: [
        "I am not more irritable than usual.",
        "I am more irritable than usual.",
        "I am much more irritable than usual.",
        "I am irritable all the time.",
      ],
    },
    {
      question: "Changes in Appetite",
      options: [
        "I have not experienced any change in my appetite.",
        "My appetite is somewhat less than usual.",
        "My appetite is somewhat greater than usual.",
        "My appetite is much less than before.",
        "My appetite is much greater than usual.",
        "I have no appetite at all.",
        "I crave food all the time.",
      ],
    },
    {
      question: "Concentration Difficulty",
      options: [
        "I can concentrate as well as ever.",
        "I can't concentrate as well as usual.",
        "It's hard to keep my mind on anything for very long.",
        "I find I can't concentrate on anything.",
      ],
    },
    {
      question: "Tiredness or Fatigue",
      options: [
        "I am no more tired or fatigued than usual.",
        "I get more tired or fatigued more easily than usual.",
        "I am too tired or fatigued to do a lot of the things I used to do.",
        "I am too tired or fatigued to do most of the things I used to do.",
      ],
    },
    {
      question: "Loss of Interest in Sex",
      options: [
        "I have not noticed any recent change in my interest in sex.",
        "I am less interested in sex than I used to be.",
        "I am much less interested in sex now.",
        "I have lost interest in sex completely.",
      ],
    },
  ];
  const [totalScore, setTotalScore] = useState(0);
  const [messages, setMessages] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [showBDIModal, setShowBDIModal] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    initiateConversation();
  }, []);

  const initiateConversation = () => {
    if (messages.length === 0) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: questions[0].question,
          sender: "bot",
        },
      ]);
      setSelectedOption(questions[0].options);
    }
  };

  const handleOptionSelect = (option, index) => {
    let score = index;
    if (
      currentQuestionIndex ===
      questions.findIndex(
        (question) => question.question === "Changes in Sleeping Pattern"
      )
    ) {
      score = [0, 1, 1, 2, 2, 3, 3][index];
    } else if (
      currentQuestionIndex ===
      questions.findIndex(
        (question) => question.question === "Changes in Appetite"
      )
    ) {
      score = [0, 1, 1, 2, 2, 3, 3][index];
    }

    setTotalScore(totalScore + score);

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: option, sender: "user" },
    ]);
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: questions[currentQuestionIndex + 1].question,
          sender: "bot",
        },
      ]);
      setSelectedOption(questions[currentQuestionIndex + 1].options);
    } else {
      setShowBDIModal(true);
    }
    scrollToBottom();
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex">
      <div className="flex-1 overflow-y-auto w-full mt-16 mb-72">
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
                    : "bg-gray-400 rounded-xl text-left ml-2 inline-block mt-2"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className=" items-end p-2 fixed bottom-0 right-0">
        {selectedOption.length > 0 && (
          <div className="max-h-60 overflow-y-auto flex flex-col">
            {selectedOption.map((option, index) => (
              <button
                key={index}
                type="button"
                className="px-4 py-2 my-1 bg-gray-700 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={() => handleOptionSelect(option, index)}
              >
                {option}
              </button>
            ))}
          </div>
        )}
        {showBDIModal && (
          <BDIResponseModal
            onClose={() => setShowBDIModal(false)}
            score={totalScore}
          />
        )}
      </div>
    </div>
  );
}
