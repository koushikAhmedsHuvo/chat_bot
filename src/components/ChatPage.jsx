import React from 'react';
import backgroundImage from '../assets/body.png';

const ChatPage = ({ expanded }) => {
  if (!expanded) return null;
  const messages = [
    { id: 1, text: 'Hi, I am a chatbot. How can I help you?', sender: 'bot' },
    { id: 2, text: 'I need help.', sender: 'user' },
    { id: 3, text: 'How can i help you?', sender: 'bot' },
    { id: 4, text: 'I want to fix an appoinment', sender: 'user' },
  ];

  return (
    <div
      className="w-[442px] h-[610px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        overflow: 'hidden',
        borderRadius: '0 0 10px 10px',
      }}
    >
      <div className="flex flex-col p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-3 rounded-lg max-w-[70%] ${
              message.sender === 'bot'
                ? 'bg-blue-500 text-white self-start'
                : 'bg-gray-300 text-black self-end'
            }`}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;
