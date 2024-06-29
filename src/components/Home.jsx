import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/MedBot 1.svg';
import data from '../data.json';

const Home = () => {
  const imageData = data.images;
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-full p-2 shadow-md">
        <Link to="/main">
          <img
            src={imageData.icon}
            alt="MedBot Logo"
            className="rounded-full w-[80px] h-[80px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
