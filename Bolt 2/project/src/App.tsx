import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyDifferent from './components/WhyDifferent';
import HackathonFeed from './components/HackathonFeed';
import HackerProfiles from './components/HackerProfiles';
import SmartMatching from './components/SmartMatching';
import Community from './components/Community';
import Footer from './components/Footer';
import OnboardingFlow from './components/OnboardingFlow';
import PeerRating from './components/PeerRating';

function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showPeerRating, setShowPeerRating] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const handleGetStarted = () => {
    setShowOnboarding(true);
  };

  const handleTryDemo = () => {
    setCurrentSection('matching');
    document.getElementById('matching')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showOnboarding) {
    return <OnboardingFlow onComplete={() => setShowOnboarding(false)} />;
  }

  if (showPeerRating) {
    return <PeerRating onComplete={() => setShowPeerRating(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero onGetStarted={handleGetStarted} onTryDemo={handleTryDemo} />
      <HowItWorks />
      <WhyDifferent />
      <HackathonFeed />
      <HackerProfiles />
      <SmartMatching />
      <Community onShowPeerRating={() => setShowPeerRating(true)} />
      <Footer />
    </div>
  );
}

export default App;