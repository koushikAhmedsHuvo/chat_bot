import React from 'react';
import data from '../data.json';

const Body = ({ expanded }) => {
  if (!expanded) return null; // Hide component if not expanded

  const bodyData = data.body;
  const imageData = data.images;

  return (
    <div
      className="w-[270px] h-[400px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${imageData.chatPage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        // Ensure the div takes the full viewport width
        overflow: 'hidden',
        borderRadius: '0 0 10px 10px',
      }}
    >
      <div className="flex flex-col items-center">
        <div className="text-center  mt-5 mb-3">
          <h1 className="text-3xl font-bold text-white font-sans mb-1">
            {bodyData.title}
          </h1>
          <h1 className="text-3xl font-semibold font-sans text-white">
            {bodyData.subtitle}
          </h1>
        </div>
        <div className="mb-3">
          <img
            src={imageData.group}
            alt="MedBot Logo"
            className="h-[70px] w-[68px]"
          />
        </div>
        <div className="mb-5 w-[200px]  flex items-center justify-center">
          <p className="text-3xl text-white font-huba text-center">
            {bodyData.message}
          </p>
        </div>
        <div>
          <button className="bg-white font-jockey text-3xl text-black w-[240px] h-[55px] rounded-[30px] shadow-lg">
            {bodyData.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
