import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import HackathonListingsPage from './pages/HackathonListingsPage';
import HackathonDetailsPage from './pages/HackathonDetailsPage';
import UserProfilePage from './pages/UserProfilePage';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/hackathons" element={<HackathonListingsPage />} />
            <Route path="/hackathons/:id" element={<HackathonDetailsPage />} />
            <Route path="/profile/:id" element={<UserProfilePage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;