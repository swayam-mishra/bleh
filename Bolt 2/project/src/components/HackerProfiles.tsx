import React, { useState } from 'react';
import { Github, ExternalLink, MapPin, Clock, Star, Award, Code, Palette, Database, Smartphone } from 'lucide-react';

const profiles = [
  {
    id: 1,
    name: 'Alex Chen',
    title: 'Full Stack Developer',
    location: 'San Francisco, CA',
    timezone: 'PST',
    rating: 4.9,
    hackathonsWon: 12,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    skills: [
      { name: 'React', level: 90, category: 'Frontend' },
      { name: 'Node.js', level: 85, category: 'Backend' },
      { name: 'Python', level: 88, category: 'Backend' },
      { name: 'MongoDB', level: 80, category: 'Database' }
    ],
    roles: ['Frontend', 'Backend', 'Team Lead'],
    workingStyle: 'Collaborative',
    badges: ['API Wizard', 'Debug Master', 'Team Player'],
    bio: 'Passionate full-stack developer with 5+ years of experience. Love building scalable applications and leading teams to victory.',
    github: 'alexchen',
    portfolio: 'alexchen.dev',
    status: 'Looking for Team'
  },
  {
    id: 2,
    name: 'Sarah Kim',
    title: 'UI/UX Designer',
    location: 'New York, NY',
    timezone: 'EST',
    rating: 4.8,
    hackathonsWon: 8,
    avatar: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150',
    skills: [
      { name: 'Figma', level: 95, category: 'Design' },
      { name: 'Adobe XD', level: 90, category: 'Design' },
      { name: 'CSS', level: 85, category: 'Frontend' },
      { name: 'React', level: 75, category: 'Frontend' }
    ],
    roles: ['UI/UX', 'Frontend', 'Product'],
    workingStyle: 'Detail-oriented',
    badges: ['Design Guru', 'Pixel Perfect', 'User Advocate'],
    bio: 'Creative designer focused on user-centered design. I bring ideas to life with beautiful, intuitive interfaces.',
    github: 'sarahkim',
    portfolio: 'sarahkim.design',
    status: 'Available'
  },
  {
    id: 3,
    name: 'Mike Rodriguez',
    title: 'ML Engineer',
    location: 'Austin, TX',
    timezone: 'CST',
    rating: 4.7,
    hackathonsWon: 15,
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
    skills: [
      { name: 'TensorFlow', level: 92, category: 'AI/ML' },
      { name: 'Python', level: 95, category: 'Backend' },
      { name: 'PyTorch', level: 88, category: 'AI/ML' },
      { name: 'Docker', level: 82, category: 'DevOps' }
    ],
    roles: ['ML Engineer', 'Data Scientist', 'Backend'],
    workingStyle: 'Research-focused',
    badges: ['AI Pioneer', 'Data Wizard', 'Innovation Leader'],
    bio: 'ML engineer specializing in computer vision and NLP. Love solving complex problems with cutting-edge AI.',
    github: 'mikerodriguez',
    portfolio: 'mikeml.ai',
    status: 'Looking for Members'
  }
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Frontend': return <Code className="w-4 h-4 text-blue-400" />;
    case 'Backend': return <Database className="w-4 h-4 text-green-400" />;
    case 'Design': return <Palette className="w-4 h-4 text-purple-400" />;
    case 'AI/ML': return <Award className="w-4 h-4 text-orange-400" />;
    case 'Mobile': return <Smartphone className="w-4 h-4 text-pink-400" />;
    default: return <Code className="w-4 h-4 text-gray-400" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Looking for Team': return 'text-green-400 bg-green-400/10 border-green-400/20';
    case 'Looking for Members': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
    case 'Available': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
  }
};

const HackerProfiles: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-blue-400">Hacker</span> Profiles
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with talented developers, designers, and innovators ready to build amazing things
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <div 
              key={profile.id}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer"
              onClick={() => setSelectedProfile(selectedProfile === profile.id ? null : profile.id)}
            >
              {/* Header */}
              <div className="relative p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img 
                        src={profile.avatar} 
                        alt={profile.name}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 border-2 border-gray-900 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                        {profile.name}
                      </h3>
                      <p className="text-gray-400">{profile.title}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(profile.status)}`}>
                    {profile.status}
                  </span>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{profile.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4 text-green-400" />
                    <span>{profile.hackathonsWon} wins</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{profile.timezone}</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="px-6 mb-4">
                <p className="text-gray-400 text-sm line-clamp-2">
                  {profile.bio}
                </p>
              </div>

              {/* Skills Preview */}
              <div className="px-6 mb-4">
                <div className="flex flex-wrap gap-2">
                  {profile.skills.slice(0, 3).map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2 px-3 py-1 bg-gray-800/50 rounded-lg border border-gray-600">
                      {getCategoryIcon(skill.category)}
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-xs text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expanded Details */}
              {selectedProfile === profile.id && (
                <div className="px-6 pb-6 border-t border-gray-700 pt-4 mt-4">
                  {/* All Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Skills & Expertise</h4>
                    <div className="space-y-3">
                      {profile.skills.map((skill, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {getCategoryIcon(skill.category)}
                            <span className="text-sm">{skill.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-500"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-blue-400 font-semibold w-8">{skill.level}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Roles & Badges */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Preferred Roles</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {profile.roles.map((role, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-lg text-sm border border-blue-400/20">
                          {role}
                        </span>
                      ))}
                    </div>
                    
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Achievement Badges</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {profile.badges.map((badge, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-400/10 text-purple-400 rounded-lg text-sm border border-purple-400/20">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3">
                    <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">GitHub</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Portfolio</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="px-6 pb-6">
                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all">
                    Connect
                  </button>
                  <button className="px-4 py-2 border border-gray-600 hover:border-gray-500 text-gray-400 hover:text-white rounded-lg transition-all">
                    <Star className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Profiles Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
            View All 2,500+ Profiles
          </button>
        </div>
      </div>
    </section>
  );
};

export default HackerProfiles;