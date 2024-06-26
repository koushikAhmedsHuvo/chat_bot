import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

const MainLayout = () => {
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/chat');
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

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
