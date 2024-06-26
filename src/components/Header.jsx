import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = ({ expanded, toggleExpand }) => {
  return (
    <div className="bg-white w-[280px] h-[65px] shadow-md border rounded-md">
      <div className="flex flex-row justify-between items-center h-full px-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-[147px] h-[37px] ml-5" />
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition duration-200"
            onClick={toggleExpand}
          >
            <FaChevronDown
              size={32}
              className={`mr-5 text-[#BF2879] ${
                expanded ? 'transform rotate-0' : 'transform rotate-180'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
