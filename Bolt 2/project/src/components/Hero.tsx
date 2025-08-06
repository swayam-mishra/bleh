import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Users, Code, Trophy } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
  onTryDemo: () => void;
}

const FloatingCard: React.FC<{ delay: number; icon: React.ReactNode; name: string; skill: string }> = ({ delay, icon, name, skill }) => {
  return (
    <div 
      className="absolute bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg p-3 animate-pulse"
      style={{
        animationDelay: `${delay}s`,
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 60 + 20}%`,
      }}
    >
      <div className="flex items-center space-x-2">
        {icon}
        <div>
          <div className="text-xs font-semibold">{name}</div>
          <div className="text-xs text-gray-400">{skill}</div>
        </div>
      </div>
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ onGetStarted, onTryDemo }) => {
  const [queueAnimation, setQueueAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQueueAnimation(prev => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
        
        {/* Queue Lines Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="queueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={i}
              x1="0%"
              y1={`${20 + i * 10}%`}
              x2="100%"
              y2={`${20 + i * 10}%`}
              stroke="url(#queueGradient)"
              strokeWidth="1"
              strokeDasharray="10,5"
              style={{
                transform: `translateX(${(queueAnimation + i * 20) % 120 - 20}px)`,
                transition: 'transform 0.1s linear'
              }}
            />
          ))}
        </svg>
      </div>

      {/* Floating Profile Cards */}
      <FloatingCard 
        delay={0} 
        icon={<Code className="w-4 h-4 text-blue-400" />} 
        name="Alex Chen" 
        skill="Full Stack" 
      />
      <FloatingCard 
        delay={1} 
        icon={<Users className="w-4 h-4 text-green-400" />} 
        name="Sarah Kim" 
        skill="UI/UX Design" 
      />
      <FloatingCard 
        delay={2} 
        icon={<Trophy className="w-4 h-4 text-yellow-400" />} 
        name="Mike Rodriguez" 
        skill="ML Engineer" 
      />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Never Hack
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              Alone Again
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Build Smarter Teams with fre<span className="text-blue-400">{'{queue}'}</span>ncy
          </p>
          <p className="text-sm text-gray-400 font-medium">
            No team? No problem.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <button 
            onClick={onGetStarted}
            className="group px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={onTryDemo}
            className="group px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <Play className="w-5 h-5" />
            <span>Try fre{'{queue}'}ncy</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="text-3xl font-bold text-blue-400 mb-2">2,500+</div>
            <div className="text-gray-400 group-hover:text-white transition-colors">Active Hackers</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-green-400 mb-2">150+</div>
            <div className="text-gray-400 group-hover:text-white transition-colors">Teams Formed</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-400 group-hover:text-white transition-colors">Hackathons Won</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;