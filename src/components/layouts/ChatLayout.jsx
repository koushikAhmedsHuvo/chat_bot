import React, { useState, useEffect } from 'react';
import Header from '../Header';
import ChatPage from '../ChatPage';
import Footer1 from '../Footer1';

const ChatLayout = () => {
  const [expanded, setExpanded] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (expanded) {
      // Simulate bot message after 2 seconds
      const timer = setTimeout(() => {
        setMessages([{ id: 1, text: 'How can I help you?', sender: 'bot' }]);
      }, 2000);

      // Cleanup the timer
      return () => clearTimeout(timer);
    }
  }, [expanded]);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleSendMessage = (text) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, text, sender: 'user' },
    ]);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Header expanded={expanded} toggleExpand={toggleExpand} />
        <ChatPage expanded={expanded} messages={messages} />
        <Footer1 expanded={expanded} onSendMessage={handleSendMessage} />
      </div>
    </>
  );
};

export default ChatLayout;
