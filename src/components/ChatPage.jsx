import React, { useEffect, useRef } from 'react';
import data from '../data.json';

const ChatPage = ({ expanded, messages }) => {
  const messagesEndRef = useRef(null);
  const imageData = data.images;

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  if (!expanded) return null;

  return (
    <div
      className="w-[270px] h-[400px] overflow-hidden"
      style={{
        backgroundImage: `url(${imageData.chatPage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '0 0 10px 10px',
      }}
    >
      <div className="flex flex-col p-4 space-y-4 h-full overflow-y-auto">
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
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatPage;
