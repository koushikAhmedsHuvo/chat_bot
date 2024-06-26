import React, { useState } from 'react';
import { IoMicOutline } from 'react-icons/io5';
import { IoIosArrowUp } from 'react-icons/io';
import data from '../data.json'; // Assuming you have a JSON file named data.json

const Footer1 = ({ expanded }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownOptions = data.dropdown;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  if (!expanded) return null;

  return (
    <div className="p-2 w-[280px] bg-white border-t border shadow-md rounded-t-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <div className="flex items-center p-2 rounded-full border border-black shadow-sm">
            <IoMicOutline className="text-[#BF2879] text-3xl" />
          </div>
          <div className="relative">
            <IoIosArrowUp
              className={`-mt-6 ml-8 cursor-pointer ${
                isDropdownOpen ? 'transform rotate-180' : ''
              }`}
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="absolute top-10 ml-10 mt-[-280px]  bg-white border rounded-lg shadow-md p-2">
                <ul className="list-none">
                  {dropdownOptions.map((option) => (
                    <li
                      key={option.value}
                      className="cursor-pointer text-black p-2 rounded hover:bg-gray-100"
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex-grow mx-3">
          <input
            type="text"
            placeholder="..."
            className="w-full px-4 py-1 border border-black rounded-full  shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer1;
