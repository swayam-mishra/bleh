import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Star, ExternalLink, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Button from '../components/Button';

const DashboardPage: React.FC = () => {
  const recommendedHackathons = [
    {
      id: 1,
      name: 'TechCrunch Disrupt Hackathon',
      date: 'March 15-17, 2024',
      location: 'San Francisco, CA',
      mode: 'Offline',
      domain: 'AI/ML',
      participants: 1200,
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      name: 'Web3 Innovation Challenge',
      date: 'March 22-24, 2024',
      location: 'Online',
      mode: 'Online',
      domain: 'Web3',
      participants: 800,
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      name: 'HealthTech Solutions Hackathon',
      date: 'April 5-7, 2024',
      location: 'Boston, MA',
      mode: 'Hybrid',
      domain: 'HealthTech',
      participants: 600,
      image: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const potentialTeammates = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Full-Stack Developer',
      skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
      rating: 4.8,
      location: 'San Francisco, CA',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'Open for Hackathons',
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      role: 'UI/UX Designer',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      rating: 4.9,
      location: 'New York, NY',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'Open for Hackathons',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Data Scientist',
      skills: ['Python', 'TensorFlow', 'ML', 'Data Analysis'],
      rating: 4.7,
      location: 'Austin, TX',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'Open for Hackathons',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Backend Engineer',
      skills: ['Python', 'Django', 'PostgreSQL', 'AWS'],
      rating: 4.6,
      location: 'Seattle, WA',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'Open for Hackathons',
    },
  ];

  return (
    <div>
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">Welcome back! 👋</h1>
          <p className="text-gray-400">Ready to find your next hackathon team? Let's get started.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-purple-400">12</p>
                <p className="text-sm text-gray-400">Hackathons Joined</p>
              </div>
              <Calendar className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-cyan-400">8</p>
                <p className="text-sm text-gray-400">Teams Formed</p>
              </div>
              <Users className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-orange-400">4.8</p>
                <p className="text-sm text-gray-400">Average Rating</p>
              </div>
              <Star className="w-8 h-8 text-orange-400" />
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-green-400">3</p>
                <p className="text-sm text-gray-400">Wins</p>
              </div>
              <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                <span className="text-green-900 font-bold">🏆</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recommended Hackathons */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recommended Hackathons</h2>
              <Link to="/hackathons">
                <Button variant="ghost" size="sm" className="flex items-center">
                  View All
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
            
            <div className="space-y-4">
              {recommendedHackathons.map((hackathon) => (
                <div key={hackathon.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-colors">
                  <div className="flex">
                    <img
                      src={hackathon.image}
                      alt={hackathon.name}
                      className="w-24 h-24 object-cover"
                    />
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{hackathon.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {hackathon.date}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {hackathon.location}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              hackathon.mode === 'Online' ? 'bg-green-600/20 text-green-400' :
                              hackathon.mode === 'Offline' ? 'bg-blue-600/20 text-blue-400' :
                              'bg-purple-600/20 text-purple-400'
                            }`}>
                              {hackathon.mode}
                            </span>
                            <span className="px-2 py-1 rounded-full text-xs bg-gray-600/50 text-gray-300">
                              {hackathon.domain}
                            </span>
                          </div>
                        </div>
                        <Link to={`/hackathons/${hackathon.id}`}>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Potential Teammates */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Potential Teammates</h2>
              <Button variant="ghost" size="sm" className="flex items-center">
                Explore
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            
            <div className="space-y-4">
              {potentialTeammates.map((teammate) => (
                <div key={teammate.id} className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src={teammate.avatar}
                      alt={teammate.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-white truncate">{teammate.name}</h3>
                      <p className="text-sm text-gray-400 truncate">{teammate.role}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{teammate.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {teammate.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-full">
                        {skill}
                      </span>
                    ))}
                    {teammate.skills.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-full">
                        +{teammate.skills.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-400">
                      <MapPin className="w-3 h-3 mr-1" />
                      {teammate.location}
                    </div>
                    <Link to={`/profile/${teammate.id}`}>
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;