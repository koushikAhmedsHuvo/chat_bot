import React, { useState } from 'react';
import Header from '../Header';

import ChatPage from '../ChatPage';
import Footer1 from '../Footer1';

const ChatLayout = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header expanded={expanded} toggleExpand={toggleExpand} />
      <ChatPage expanded={expanded} />
      <Footer1 expanded={expanded} />
    </div>
  );
};

export default ChatLayout;
