import React, { useState, useEffect } from 'react';
import { IoMicOutline, IoChatbubblesOutline } from 'react-icons/io5';
import { IoIosArrowUp } from 'react-icons/io';
import data from '../data.json';

const Footer1 = ({ expanded, onSendMessage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [interimValue, setInterimValue] = useState('');
  const [language, setLanguage] = useState('en-US'); // Default language is English
  const dropdownOptions = data.dropdown;

  const languages = [
    { value: 'en-US', label: 'Eng' },
    { value: 'bn-BD', label: 'Bangla' },
    { value: 'fr-FR', label: 'French' },
    { value: 'ur-PK', label: 'Urdu' },
    { value: 'hi-IN', label: 'Hindi' },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && inputValue.trim()) {
      e.preventDefault();
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const handleMicClick = () => {
    setIsListening((prevState) => !prevState);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    let recognition;

    const handleRecognitionStart = () => {
      setIsListening(true);
      setInterimValue('');
    };

    const handleRecognitionEnd = () => {
      setIsListening(false);
    };

    const handleRecognitionResult = (event) => {
      let finalTranscript = '';
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      setInputValue((prevValue) => prevValue + finalTranscript.trim());
      setInterimValue(interimTranscript.trim());
    };

    if (isListening) {
      recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = language;

      recognition.onstart = handleRecognitionStart;
      recognition.onend = handleRecognitionEnd;
      recognition.onresult = handleRecognitionResult;

      recognition.start();
    }

    return () => {
      if (recognition) {
        recognition.stop();
        recognition.onstart = null;
        recognition.onend = null;
        recognition.onresult = null;
      }
    };
  }, [isListening, language]);

  if (!expanded) return null;

  return (
    <div className="p-1 w-[280px] bg-white border-t border shadow-md rounded-t-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <div
            className={`flex items-center p-3 rounded-full border border-black shadow-sm ${
              isListening ? 'text-red-500' : ''
            }`}
            onClick={handleMicClick}
          >
            {isListening ? (
              <IoChatbubblesOutline className="text-[#BF2879] text-3xl" />
            ) : (
              <IoMicOutline className="text-[#BF2879] text-4xl" />
            )}
          </div>
          <div className="relative">
            <IoIosArrowUp
              className={`-mt-8 ml-10 cursor-pointer ${
                isDropdownOpen ? 'transform rotate-180' : ''
              }`}
              onClick={toggleDropdown}
            />
            <div className="absolute -top-5 ml-9 text-gray-600 text-xs">
              {languages.find((lang) => lang.value === language)?.label}
            </div>
            {isDropdownOpen && (
              <div className="absolute top-10 ml-10 mt-[-288px] bg-white border rounded-lg shadow-md p-2">
                <ul className="list-none">
                  {languages.map((option) => (
                    <li
                      key={option.value}
                      className="cursor-pointer text-black p-2 rounded hover:bg-gray-100"
                      onClick={() => handleLanguageChange(option.value)}
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
          <textarea
            placeholder="Type your message..."
            className="w-full mt-1 px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BF2879] shadow-sm resize-none overflow-y-auto max-h-40"
            style={{ scrollbarWidth: 'none' }}
            value={inputValue + interimValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            rows={1}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer1;
