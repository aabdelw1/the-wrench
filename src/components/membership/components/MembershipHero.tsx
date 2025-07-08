import React from 'react';
import '../styles/MembershipHero.css';

const MembershipHero: React.FC = () => {
  return (
    <header className="membership-hero">
      <div className="container">
        <h1>Pit Crew Membership</h1>
        <p className="hero-subtitle">
          Monthly membership for DIY car lovers who want to work on their own vehicles using professional-grade tools, lifts, and facilities.
        </p>
      </div>
    </header>
  );
};

export default MembershipHero;