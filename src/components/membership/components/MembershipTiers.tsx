import React from 'react';
import '../styles/MembershipTiers.css';

const MembershipTiers: React.FC = () => {
  return (
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
  );
};

export default MembershipTiers;