import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">The Wrench</h1>
          <p className="hero-subtitle">DIY Automotive Workspace Rental</p>
          <p className="hero-description">
            Rent professional car lifts, work bays, and tools by the hour to service or repair your own vehicles
          </p>
          <button className="cta-button">Book Your Bay Today</button>
        </div>
      </header>

      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Car Lifts</h3>
              <p>Professional-grade hydraulic lifts for safe undercarriage access</p>
            </div>
            <div className="service-card">
              <h3>Work Bays</h3>
              <p>Fully equipped work spaces with proper lighting and ventilation</p>
            </div>
            <div className="service-card">
              <h3>Tool Rental</h3>
              <p>Complete set of automotive tools and equipment available</p>
            </div>
            <div className="service-card">
              <h3>Hourly Rates</h3>
              <p>Flexible pricing - pay only for the time you need</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Why Choose The Wrench?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Save Money</h4>
              <p>Do your own maintenance and repairs at a fraction of shop costs</p>
            </div>
            <div className="benefit-item">
              <h4>Learn Skills</h4>
              <p>Gain hands-on experience working on your own vehicle</p>
            </div>
            <div className="benefit-item">
              <h4>Professional Equipment</h4>
              <p>Access to high-quality tools and lifts you can't afford to own</p>
            </div>
            <div className="benefit-item">
              <h4>Safe Environment</h4>
              <p>Work in a properly equipped garage with safety features</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Get Started</h2>
          <p>Ready to work on your vehicle? Contact us to reserve your bay.</p>
          <div className="contact-info">
            <p>📞 Call: (555) 123-LIFT</p>
            <p>📧 Email: info@thewrench.com</p>
            <p>📍 Location: 123 Garage St, Auto City</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;