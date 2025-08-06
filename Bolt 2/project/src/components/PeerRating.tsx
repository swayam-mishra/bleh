import React, { useState } from 'react';
import { Star, Award, Users, MessageCircle, X, Check } from 'lucide-react';

interface PeerRatingProps {
  onComplete: () => void;
}

const teammates = [
  {
    id: 1,
    name: 'Alex Chen',
    role: 'Full Stack Developer',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 2,
    name: 'Sarah Kim',
    role: 'UI/UX Designer',
    avatar: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 3,
    name: 'Mike Rodriguez',
    role: 'ML Engineer',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

const badgeOptions = [
  { name: 'Team Player', icon: '🤝', color: 'text-blue-400' },
  { name: 'Code Quality', icon: '✨', color: 'text-green-400' },
  { name: 'Creative Thinker', icon: '💡', color: 'text-yellow-400' },
  { name: 'Problem Solver', icon: '🔧', color: 'text-purple-400' },
  { name: 'Communication', icon: '💬', color: 'text-pink-400' },
  { name: 'Leadership', icon: '👑', color: 'text-orange-400' },
  { name: 'Time Management', icon: '⏰', color: 'text-teal-400' },
  { name: 'Innovation', icon: '🚀', color: 'text-red-400' }
];

const PeerRating: React.FC<PeerRatingProps> = ({ onComplete }) => {
  const [currentTeammateIndex, setCurrentTeammateIndex] = useState(0);
  const [ratings, setRatings] = useState<Record<number, {
    collaboration: number;
    reliability: number;
    technical: number;
    communication: number;
    badges: string[];
    feedback: string;
  }>>({});

  const currentTeammate = teammates[currentTeammateIndex];

  const updateRating = (category: string, value: number | string | string[]) => {
    setRatings(prev => ({
      ...prev,
      [currentTeammate.id]: {
        ...prev[currentTeammate.id],
        [category]: value
      }
    }));
  };

  const getCurrentRating = (category: string) => {
    return ratings[currentTeammate.id]?.[category as keyof typeof ratings[number]] || (category === 'badges' ? [] : 0);
  };

  const toggleBadge = (badge: string) => {
    const currentBadges = getCurrentRating('badges') as string[];
    const newBadges = currentBadges.includes(badge)
      ? currentBadges.filter(b => b !== badge)
      : [...currentBadges, badge];
    updateRating('badges', newBadges);
  };

  const nextTeammate = () => {
    if (currentTeammateIndex < teammates.length - 1) {
      setCurrentTeammateIndex(currentTeammateIndex + 1);
    }
  };

  const prevTeammate = () => {
    if (currentTeammateIndex > 0) {
      setCurrentTeammateIndex(currentTeammateIndex - 1);
    }
  };

  const handleComplete = () => {
    console.log('Peer ratings submitted:', ratings);
    onComplete();
  };

  const isCurrentRatingComplete = () => {
    const rating = ratings[currentTeammate.id];
    return rating && rating.collaboration > 0 && rating.reliability > 0 && 
           rating.technical > 0 && rating.communication > 0;
  };

  const StarRating: React.FC<{ rating: number; onRate: (rating: number) => void; label: string }> = ({ rating, onRate, label }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300">{label}</label>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onRate(star)}
            className={`w-8 h-8 transition-colors ${
              star <= rating ? 'text-yellow-400' : 'text-gray-600'
            } hover:text-yellow-300`}
          >
            <Star className="w-full h-full fill-current" />
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-6">
            <Award className="w-16 h-16 text-green-400 mx-auto" />
            <div className="absolute inset-0 w-16 h-16 bg-green-400/20 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Rate Your Teammates</h2>
          <p className="text-gray-400 text-lg">
            Help build trust in the community by sharing feedback from your recent hackathon
          </p>
          <div className="text-sm text-blue-400 mt-2">
            AI for Good Hackathon 2024 • Team "InnovateAI"
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          {teammates.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index < currentTeammateIndex 
                  ? 'bg-green-400' 
                  : index === currentTeammateIndex
                  ? 'bg-blue-400'
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Rating Form */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
          {/* Teammate Info */}
          <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-gray-700">
            <img 
              src={currentTeammate.avatar} 
              alt={currentTeammate.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold">{currentTeammate.name}</h3>
              <p className="text-gray-400">{currentTeammate.role}</p>
            </div>
            <div className="ml-auto text-sm text-gray-400">
              {currentTeammateIndex + 1} of {teammates.length}
            </div>
          </div>

          {/* Ratings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <StarRating
              rating={getCurrentRating('collaboration') as number}
              onRate={(rating) => updateRating('collaboration', rating)}
              label="Collaboration"
            />
            <StarRating
              rating={getCurrentRating('reliability') as number}
              onRate={(rating) => updateRating('reliability', rating)}
              label="Reliability"
            />
            <StarRating
              rating={getCurrentRating('technical') as number}
              onRate={(rating) => updateRating('technical', rating)}
              label="Technical Skills"
            />
            <StarRating
              rating={getCurrentRating('communication') as number}
              onRate={(rating) => updateRating('communication', rating)}
              label="Communication"
            />
          </div>

          {/* Badges */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-300 mb-4">Award Badges (Optional)</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {badgeOptions.map((badge) => (
                <button
                  key={badge.name}
                  onClick={() => toggleBadge(badge.name)}
                  className={`p-3 rounded-lg border transition-all text-center ${
                    (getCurrentRating('badges') as string[]).includes(badge.name)
                      ? 'bg-gray-700 border-gray-500 text-white'
                      : 'bg-gray-800/50 border-gray-600 text-gray-400 hover:border-gray-500'
                  }`}
                >
                  <div className="text-lg mb-1">{badge.icon}</div>
                  <div className={`text-xs ${badge.color}`}>{badge.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Feedback */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-300 mb-2">Additional Feedback (Optional)</label>
            <textarea
              value={(getCurrentRating('feedback') as string) || ''}
              onChange={(e) => updateRating('feedback', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white placeholder-gray-400"
              placeholder="Share specific examples of what made this teammate great to work with..."
            />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-3">
              {currentTeammateIndex > 0 && (
                <button
                  onClick={prevTeammate}
                  className="px-6 py-3 text-gray-400 hover:text-white transition-colors"
                >
                  Previous
                </button>
              )}
              <button
                onClick={onComplete}
                className="flex items-center space-x-2 px-6 py-3 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
                <span>Skip Rating</span>
              </button>
            </div>

            <div className="flex space-x-3">
              {currentTeammateIndex < teammates.length - 1 ? (
                <button
                  onClick={nextTeammate}
                  disabled={!isCurrentRatingComplete()}
                  className="flex items-center space-x-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all"
                >
                  <span>Next Teammate</span>
                </button>
              ) : (
                <button
                  onClick={handleComplete}
                  className="flex items-center space-x-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all"
                >
                  <Check className="w-5 h-5" />
                  <span>Submit Ratings</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Rating Info */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Your ratings help build trust in the community and are kept confidential.</p>
          <p>Only aggregate scores and awarded badges will be visible to others.</p>
        </div>
      </div>
    </div>
  );
};

export default PeerRating;