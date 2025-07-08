import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import MembershipPage from './components/membership/MembershipPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/services" element={<div>Services Page - Coming Soon!</div>} />
          <Route path="/policies" element={<div>Policies & Info Page - Coming Soon!</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
