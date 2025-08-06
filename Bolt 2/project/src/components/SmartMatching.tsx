import React, { useState } from 'react';
import { Heart, X, RotateCcw, Filter, Users, Clock, Star, MapPin } from 'lucide-react';

const mockProfiles = [
  {
    id: 1,
    name: 'Emma Watson',
    title: 'Frontend Developer',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    compatibility: 92,
    timezone: 'EST',
    hackathonsWon: 7,
    workingStyle: 'Collaborative',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
    lookingFor: 'Backend Developer, Designer',
    bio: 'Passionate about creating intuitive user experiences. Looking for a strong backend developer to build something amazing together!',
    badges: ['UI Wizard', 'Code Quality']
  },
  {
    id: 2,
    name: 'David Park',
    title: 'Backend Developer',
    skills: ['Node.js', 'PostgreSQL', 'Docker'],
    compatibility: 89,
    timezone: 'PST',
    hackathonsWon: 12,
    workingStyle: 'Independent',
    avatar: 'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=300',
    lookingFor: 'Frontend Developer, Product Manager',
    bio: 'Backend engineer with expertise in scalable architectures. Love working on complex problems and building robust APIs.',
    badges: ['API Master', 'Performance Guru']
  },
  {
    id: 3,
    name: 'Zoe Chen',
    title: 'Product Designer',
    skills: ['Figma', 'User Research', 'Prototyping'],
    compatibility: 95,
    timezone: 'EST',
    hackathonsWon: 9,
    workingStyle: 'User-focused',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
    lookingFor: 'Full Stack Developer, Data Scientist',
    bio: 'UX designer who bridges the gap between users and technology. Passionate about solving real problems with beautiful design.',
    badges: ['Design Thinking', 'User Advocate']
  }
];

const SmartMatching: React.FC = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [matchingMode, setMatchingMode] = useState<'LFT' | 'LFM'>('LFT');
  const [showFilters, setShowFilters] = useState(false);
  const [matches, setMatches] = useState<number[]>([]);
  const [passed, setPassed] = useState<number[]>([]);

  const currentProfile = mockProfiles[currentProfileIndex];

  const handleSwipe = (direction: 'like' | 'pass') => {
    if (direction === 'like') {
      setMatches([...matches, currentProfile.id]);
    } else {
      setPassed([...passed, currentProfile.id]);
    }
    
    if (currentProfileIndex < mockProfiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    } else {
      setCurrentProfileIndex(0);
    }
  };

  const resetStack = () => {
    setCurrentProfileIndex(0);
    setMatches([]);
    setPassed([]);
  };

  const getCompatibilityColor = (score: number) => {
    if (score >= 90) return 'text-green-400 bg-green-400/10';
    if (score >= 80) return 'text-yellow-400 bg-yellow-400/10';
    return 'text-orange-400 bg-orange-400/10';
  };

  return (
    <section id="matching" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smart <span className="text-blue-400">Matchmaking</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find your perfect hackathon teammates with AI-powered matching based on skills, timezone, and working style
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-800 rounded-xl p-1 border border-gray-700">
            <button
              onClick={() => setMatchingMode('LFT')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                matchingMode === 'LFT'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Looking for Team
            </button>
            <button
              onClick={() => setMatchingMode('LFM')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                matchingMode === 'LFM'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Looking for Members
            </button>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          {/* Match Card */}
          <div className="relative mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-[1.02]">
              {/* Profile Image */}
              <div className="relative h-80">
                <img 
                  src={currentProfile.avatar} 
                  alt={currentProfile.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                
                {/* Compatibility Score */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-bold border ${getCompatibilityColor(currentProfile.compatibility)}`}>
                    {currentProfile.compatibility}% Match
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold">{currentProfile.name}</h3>
                    <p className="text-gray-400">{currentProfile.title}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{currentProfile.timezone}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{currentProfile.hackathonsWon} wins</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span>{currentProfile.workingStyle}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-green-400" />
                    <span>Active</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {currentProfile.bio}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProfile.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-lg text-sm border border-blue-400/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Looking For */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Looking For</h4>
                  <p className="text-sm text-gray-400">{currentProfile.lookingFor}</p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {currentProfile.badges.map((badge, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-purple-400/10 text-purple-400 rounded-lg text-sm border border-purple-400/20"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center space-x-6">
            <button
              onClick={() => handleSwipe('pass')}
              className="w-14 h-14 bg-gray-700 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              onClick={resetStack}
              className="w-12 h-12 bg-gray-600 hover:bg-gray-500 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => handleSwipe('like')}
              className="w-14 h-14 bg-blue-500 hover:bg-green-500 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Heart className="w-6 h-6" />
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-center mt-8 space-x-8 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400">{matches.length}</div>
              <div className="text-sm text-gray-400">Matches</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-400">{passed.length}</div>
              <div className="text-sm text-gray-400">Passed</div>
            </div>
          </div>
        </div>

        {/* Filter Options */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 border border-gray-700 hover:border-blue-400 text-gray-300 hover:text-white rounded-lg transition-all"
          >
            <Filter className="w-5 h-5" />
            <span>Filter Preferences</span>
          </button>
        </div>

        {showFilters && (
          <div className="max-w-2xl mx-auto mt-8 p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Matching Preferences</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Skills</label>
                <input 
                  type="text" 
                  placeholder="e.g. React, Python, Design"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Timezone</label>
                <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white">
                  <option>Any</option>
                  <option>EST</option>
                  <option>PST</option>
                  <option>CST</option>
                  <option>MST</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Working Style</label>
                <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white">
                  <option>Any</option>
                  <option>Collaborative</option>
                  <option>Independent</option>
                  <option>Leadership</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Experience Level</label>
                <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white">
                  <option>Any</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all">
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SmartMatching;