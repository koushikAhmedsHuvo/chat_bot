import React from 'react';
import logo from '../assets/Group.png';
import backgroundImage from '../assets/body.png';
import data from '../data.json';

const Body = ({ expanded }) => {
  if (!expanded) return null; // Hide component if not expanded

  const bodyData = data.body;

  return (
    <div
      className="w-[442px] h-[610px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // Ensure the div takes the full viewport width
        overflow: 'hidden',
        borderRadius: '0 0 10px 10px',
      }}
    >
      <div className="flex flex-col items-center">
        <div className="text-center w-[326px] h-[122px] mt-10 mb-4">
          <h1 className="text-4xl font-bold text-white font-sans mb-3">
            {bodyData.title}
          </h1>
          <h1 className="text-4xl font-semibold font-sans text-white">
            {bodyData.subtitle}
          </h1>
        </div>
        <div className="mb-4">
          <img src={logo} alt="MedBot Logo" className="h-[94px] w-[92px]" />
        </div>
        <div className="mb-10 w-[290px] h-[76px] flex items-center justify-center">
          <p className="text-4xl text-white font-huba text-center">
            {bodyData.message}
          </p>
        </div>
        <div>
          <button className="bg-white font-jockey text-3xl text-black w-[276px] h-[62px] rounded-[30px] shadow-lg">
            {bodyData.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
