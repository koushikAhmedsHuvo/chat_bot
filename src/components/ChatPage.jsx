import React from 'react';
import backgroundImage from '../assets/body.png';

const ChatPage = ({ expanded, messages }) => {
  if (!expanded) return null;

  return (
    <div
      className="w-[280px] h-[420px]"
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
