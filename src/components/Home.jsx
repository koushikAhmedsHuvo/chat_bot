import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/MedBot 1.svg';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-full p-2 shadow-md">
        <Link to="/main">
          <img
            src={logo}
            alt="MedBot Logo"
            className="rounded-full w-[80px] h-[80px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
