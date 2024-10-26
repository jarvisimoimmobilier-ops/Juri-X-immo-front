import React from 'react';

const ChatbotCards = () => {
  const cards = [
    {
      title: "Property Manager Chatbot",
      description: "Answers tenant queries, provides lease information, and handles maintenance requests for property managers."
    },
    {
      title: "Chatbot for Individuals",
      description: "Assists with property searches, offers legal advice, and provides market trends for individual users."
    }
  ];

  return (
    <div className="flex justify-center items-start min-h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-blue-900 cursor-pointer text-white p-6 rounded-lg shadow-lg max-w-xs md:max-w-sm transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-lg font-bold text-yellow-400 mb-2">
              {card.title}
            </h2>
            <p className="text-sm">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatbotCards;
