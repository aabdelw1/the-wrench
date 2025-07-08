import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>The Wrench</h2>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Other Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/membership" className="nav-link">Membership</Link>
          </li>
          <li className="nav-item">
            <Link to="/policies" className="nav-link">Policies & Info</Link>
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