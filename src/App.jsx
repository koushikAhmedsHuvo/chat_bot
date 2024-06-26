import React, { useState } from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';

function App() {
  const [expanded, setExpanded] = useState(false); // State to manage expansion

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Header expanded={expanded} toggleExpand={toggleExpand} />
        <Body expanded={expanded} />
        <Footer expanded={expanded} />
      </div>
    </>
  );
}

export default App;
