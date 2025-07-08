import React, { useState, useEffect } from 'react';
import '../styles/MembershipPerks.css';

const MembershipPerks: React.FC = () => {
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
  );
};

export default MembershipPerks;