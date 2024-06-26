import React, { useState } from 'react';
import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';

const MainLayout = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header expanded={expanded} toggleExpand={toggleExpand} />
      <Body expanded={expanded} />
      <Footer expanded={expanded} />
    </div>
  );
};

export default MainLayout;
