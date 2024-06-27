import React, { useState } from 'react';
import './index.css';
import MainLayout from './components/layouts/MainLayout';

import ChatLayout from './components/layouts/ChatLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import ChatPage from './components/ChatPage';
import Footer1 from './components/Footer1';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<MainLayout />} />
        <Route path="/chat" element={<ChatLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
