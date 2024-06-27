import React, { useState } from 'react';
import { IoMicOutline } from 'react-icons/io5';
import { IoIosArrowUp } from 'react-icons/io';
import data from '../data.json'; // Assuming you have a JSON file named data.json

const Footer = ({ expanded }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const footerData = data.footer;
  const dropdownOptions = data.dropdown;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (!expanded) return null; // Hide component if not expanded

  return (
    <div className="relative w-[270px]  shadow-md border">
      <div className="flex flex-col items-center text-white">
        <div className="mb-3 -mt-12 border border-black rounded-full flex items-center justify-center bg-white shadow-lg">
          <IoMicOutline className="text-[#BF2879] w-[65px] h-[65px] p-2" />
        </div>
        <div className="absolute  ">
          <IoIosArrowUp
            className={`text-black text-xl -mt-3 ml-9 cursor-pointer ${
              isDropdownOpen ? 'transform rotate-180' : ''
            }`}
            onClick={toggleDropdown}
          />
        </div>
        {isDropdownOpen && (
          <div className="absolute top-0  ml-32 mt-[-200px] border bg-white rounded-lg p-2">
            {/* Dropdown content */}

            <ul className="list-none">
              {dropdownOptions.map((option) => (
                <li
                  key={option.value}
                  className="cursor-pointer text-black p-2 rounded"
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="-mt-2">
          <p className=" font-inter text-sm text-black">
            {footerData.poweredBy}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
