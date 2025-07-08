import React from 'react';
import '../styles/MembershipSummary.css';

const MembershipSummary: React.FC = () => {
  return (
    <section className="membership-summary">
      <div className="container">
        <h2 className="section-title">🧠 TL;DR – Why Join?</h2>
        <div className="summary-content">
          <p>If you're into fixing your own car, this is like a gym membership for gearheads. You get:</p>
          <div className="summary-grid">
            <div className="summary-item">
              <h4>Hands-on workspace and tools</h4>
              <p>Professional-grade equipment at your fingertips</p>
            </div>
            <div className="summary-item">
              <h4>Education (via ALLDATA & events)</h4>
              <p>Learn from the pros and connect with fellow enthusiasts</p>
            </div>
            <div className="summary-item">
              <h4>Car storage and wash area</h4>
              <p>Keep your project safe and clean</p>
            </div>
            <div className="summary-item">
              <h4>Roll-over hours with no cap</h4>
              <p>Never lose what you've paid for</p>
            </div>
          </div>
          <button className="cta-button">Start Your Membership Today</button>
        </div>
      </div>
    </section>
  );
};

export default MembershipSummary;