import React, { useState } from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import MembershipPage from './components/MembershipPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'membership':
        return <MembershipPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <NavBar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
