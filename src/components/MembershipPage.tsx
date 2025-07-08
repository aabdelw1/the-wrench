import React, { useState, useEffect } from 'react';
import './MembershipPage.css';

const MembershipPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const perks = [
    {
      title: "✅ Perks Rollover Monthly",
      description: "Unused hours roll over as long as your subscription is active — and there's no cap on how many."
    },
    {
      title: "💰 Save More Every Month",
      description: "The cost of membership saves you money on services and rentals — essentially paying for itself."
    },
    {
      title: "🚗 DIY Car Wash & Clean-Up Area",
      description: "Members get access to foam cannons, high-pressure washes, and vacuums — Sundays only."
    },
    {
      title: "🔧 Free Perks",
      description: "Like free storage hours and usage credits — adding value to each plan."
    },
    {
      title: "📅 Exclusive Car Care Events",
      description: "Workshops, meetups, and hands-on sessions only for members."
    },
    {
      title: "📊 Unlimited ALLDATA Access",
      description: "ALLDATA gives you professional repair guides and diagnostics, helping you fix cars with confidence."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % perks.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + perks.length) % perks.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);


  return (
    <div className="membership-page">
      <header className="membership-hero">
        <div className="container">
          <h1>Pit Crew Membership</h1>
          <p className="hero-subtitle">
            Monthly membership for DIY car lovers who want to work on their own vehicles using professional-grade tools, lifts, and facilities.
          </p>
        </div>
      </header>

      <section className="membership-tiers">
        <div className="container">
          <h2 className="section-title">💳 Membership Tiers & Pricing</h2>
          <div className="tiers-grid">
            <div className="tier-card">
              <h3>Base Tune</h3>
              <div className="price">$25<span>/month</span></div>
              <p className="tier-description">Perfect for beginners or light users.</p>
              <ul className="tier-features">
                <li>1 hour lift use/month</li>
                <li>1 hour tool rental/month</li>
                <li>1 night car storage/month</li>
                <li>Unlimited ALLDATA repair access</li>
              </ul>
              <button className="select-plan-btn">Select Plan</button>
            </div>

            <div className="tier-card popular">
              <div className="popular-badge">Most Popular</div>
              <h3>Stage 1</h3>
              <div className="price">$45<span>/month</span></div>
              <p className="tier-description">Ideal for hobbyists and weekend wrenchers.</p>
              <ul className="tier-features">
                <li>2 hours lift use/month</li>
                <li>2 hours tool rental/month</li>
                <li>2 nights car storage/month</li>
                <li>1 DIY car wash Sunday/month</li>
                <li>Unlimited ALLDATA repair access</li>
              </ul>
              <button className="select-plan-btn">Select Plan</button>
            </div>

            <div className="tier-card">
              <h3>Stage 2+</h3>
              <div className="price">$65<span>/month</span></div>
              <p className="tier-description">Great for more serious or frequent users.</p>
              <ul className="tier-features">
                <li>4 hours lift use/month</li>
                <li>4 hours tool use/month</li>
                <li>4 nights free car storage/month</li>
                <li>2 DIY car wash Sundays/month</li>
                <li>Invites to exclusive events and giveaways</li>
                <li>Unlimited ALLDATA repair access</li>
              </ul>
              <button className="select-plan-btn">Select Plan</button>
            </div>
          </div>
        </div>
      </section>

      <section className="membership-perks">
        <div className="container">
          <h2 className="section-title">🏁 Extra Membership Perks (All Tiers)</h2>
          <div className="perks-carousel">
            <button className="carousel-btn carousel-btn-left" onClick={prevSlide}>
              &#8249;
            </button>
            <div className="perks-container">
              <div 
                className="perks-track" 
                style={{ 
                  transform: `translateX(-${currentSlide * (100 / 3)}%)`,
                  transition: 'transform 0.5s ease-in-out'
                }}
              >
                {perks.map((perk, index) => (
                  <div key={index} className="perk-card">
                    <h4>{perk.title}</h4>
                    <p>{perk.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-btn carousel-btn-right" onClick={nextSlide}>
              &#8250;
            </button>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default MembershipPage;