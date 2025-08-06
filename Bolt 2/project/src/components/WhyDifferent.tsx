import React from 'react';
import { Target, Clock, Shield, Zap, MessageCircle, Users } from 'lucide-react';

const features = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Hackathon-First Experience',
    description: 'Built specifically for hackathons, not general networking',
    advantage: 'vs. LinkedIn\'s broad approach'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Smart Matching',
    description: 'Match by skills, timezone, and working style compatibility',
    advantage: 'vs. Random Discord servers'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Peer-Reviewed History',
    description: 'Teammate ratings and endorsements from past hackathons',
    advantage: 'vs. Unverified profiles'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'No Spam, Real Hackers',
    description: 'Curated community of serious builders and creators',
    advantage: 'vs. Social media noise'
  }
];

const WhyDifferent: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why fre<span className="text-blue-400">{'{queue}'}</span>ncy is <span className="text-green-400">Different</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're not just another social platform. We're the hackathon team-building solution you've been waiting for.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 bg-gray-900/50 border border-gray-700 rounded-xl hover:border-blue-400/50 transition-all duration-300 hover:bg-gray-900/70"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-400/10 border border-blue-400/20 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-blue-400/20 transition-colors">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-2 group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                    <p className="text-sm text-blue-400 font-medium">
                      {feature.advantage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-green-500/10 p-8 rounded-2xl border border-gray-700">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">The fre{'{queue}'}ncy Advantage</h3>
                <p className="text-gray-400">Purpose-built for hackathon success</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300">Discord Servers</span>
                  </div>
                  <span className="text-red-400 font-medium">Chaotic</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">LinkedIn</span>
                  </div>
                  <span className="text-yellow-400 font-medium">Too Broad</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-500/20 rounded-lg border border-blue-400/50">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold">fre{'{queue}'}ncy</span>
                  </div>
                  <span className="text-green-400 font-medium">Perfect Match</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;