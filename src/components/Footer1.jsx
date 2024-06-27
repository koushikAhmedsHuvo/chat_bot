import React, { useState, useEffect } from 'react';
import { IoMicOutline } from 'react-icons/io5';
import { IoIosArrowUp } from 'react-icons/io';
import data from '../data.json';

const Footer1 = ({ expanded, onSendMessage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const dropdownOptions = data.dropdown;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const handleMicClick = () => {
    setIsListening(!isListening);
  };

  useEffect(() => {
    let recognition;
    if (isListening) {
      recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            setInputValue(event.results[i][0].transcript);
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }
      };

      recognition.start();

      recognition.onend = () => {
        if (isListening) {
          recognition.start();
        }
      };
    }

    return () => {
      if (recognition) {
        recognition.stop();
        recognition.onend = null;
      }
    };
  }, [isListening]);

  if (!expanded) return null;

  return (
    <div className="p-2 w-[280px] bg-white border-t border shadow-md rounded-t-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <div
            className={`flex items-center p-2 rounded-full border border-black shadow-sm ${
              isListening ? 'bg-red-500' : ''
            }`}
            onClick={handleMicClick}
          >
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
              <div className="absolute top-10 ml-10 mt-[-280px] bg-white border rounded-lg shadow-md p-2">
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
            placeholder="Type your message..."
            className="w-full px-4 py-2 border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-[#BF2879] shadow-sm"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer1;
