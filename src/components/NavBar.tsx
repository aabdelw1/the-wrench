import React from 'react';
import './NavBar.css';

interface NavBarProps {
  setCurrentPage: (page: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>The Wrench</h2>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <button onClick={() => setCurrentPage('home')} className="nav-link">Home</button>
          </li>
          <li className="nav-item">
            <button onClick={() => setCurrentPage('services')} className="nav-link">Other Services</button>
          </li>
          <li className="nav-item">
            <button onClick={() => setCurrentPage('membership')} className="nav-link">Membership</button>
          </li>
          <li className="nav-item">
            <button onClick={() => setCurrentPage('policies')} className="nav-link">Policies & Info</button>
          </li>
        </ul>
        <div className="nav-auth">
          <button className="nav-button secondary">Check Bookings</button>
          <button className="nav-button primary">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;