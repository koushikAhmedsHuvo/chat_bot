import React, { useState } from 'react';
import './index.css';
import MainLayout from './components/layouts/MainLayout';

import ChatLayout from './components/layouts/ChatLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/chat" element={<ChatLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
