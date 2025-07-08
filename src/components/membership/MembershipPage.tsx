import React from 'react';
import MembershipHero from './components/MembershipHero';
import MembershipTiers from './components/MembershipTiers';
import MembershipPerks from './components/MembershipPerks';
import MembershipSummary from './components/MembershipSummary';
import './styles/MembershipPage.css';

const MembershipPage: React.FC = () => {
  return (
    <div className="membership-page">
      <MembershipHero />
      <MembershipTiers />
      <MembershipPerks />
      <MembershipSummary />
    </div>
  );
};

export default MembershipPage;