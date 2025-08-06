import React, { useState } from 'react';
import { Calendar, MapPin, Users, ExternalLink, Filter, Search } from 'lucide-react';

const hackathons = [
  {
    id: 1,
    title: 'AI for Good Hackathon',
    organizer: 'MLH',
    date: 'March 15-17, 2024',
    location: 'Virtual',
    participants: '2,500+',
    prize: '$50,000',
    tags: ['AI/ML', 'Social Impact', 'Virtual'],
    status: 'Open',
    description: 'Build AI solutions that make a positive impact on society',
    difficulty: 'Intermediate',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    title: 'Blockchain & Web3 Challenge',
    organizer: 'Devpost',
    date: 'March 22-24, 2024',
    location: 'San Francisco, CA',
    participants: '1,200+',
    prize: '$75,000',
    tags: ['Blockchain', 'Web3', 'DeFi'],
    status: 'Open',
    description: 'Revolutionary DeFi and NFT solutions',
    difficulty: 'Advanced',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    title: 'Climate Tech Innovation',
    organizer: 'HackerEarth',
    date: 'April 5-7, 2024',
    location: 'Virtual',
    participants: '3,000+',
    prize: '$100,000',
    tags: ['Climate Tech', 'IoT', 'Sustainability'],
    status: 'Opening Soon',
    description: 'Tech solutions for climate change and sustainability',
    difficulty: 'All Levels',
    image: 'https://images.pexels.com/photos/414916/pexels-photo-414916.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 4,
    title: 'Mobile App Championship',
    organizer: 'Community',
    date: 'April 12-14, 2024',
    location: 'New York, NY',
    participants: '800+',
    prize: '$25,000',
    tags: ['Mobile', 'React Native', 'Flutter'],
    status: 'Open',
    description: 'Next-generation mobile applications',
    difficulty: 'Beginner',
    image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const HackathonFeed: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHackathons = hackathons.filter(hackathon => {
    const matchesSearch = hackathon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hackathon.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filter === 'all' || 
                         (filter === 'virtual' && hackathon.location === 'Virtual') ||
                         (filter === 'open' && hackathon.status === 'Open');
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Opening Soon': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Advanced': return 'text-red-400';
      default: return 'text-blue-400';
    }
  };

  return (
    <section id="hackathons" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Live <span className="text-blue-400">Hackathon</span> Feed
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover amazing hackathons from top platforms and join the next big challenge
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search hackathons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white placeholder-gray-400"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-400" />
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white"
            >
              <option value="all">All Hackathons</option>
              <option value="open">Open for Registration</option>
              <option value="virtual">Virtual Only</option>
            </select>
          </div>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredHackathons.map((hackathon) => (
            <div 
              key={hackathon.id}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={hackathon.image} 
                  alt={hackathon.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(hackathon.status)}`}>
                    {hackathon.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                    {hackathon.organizer}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                    {hackathon.title}
                  </h3>
                  <span className={`text-sm font-medium ${getDifficultyColor(hackathon.difficulty)}`}>
                    {hackathon.difficulty}
                  </span>
                </div>

                <p className="text-gray-400 mb-4 line-clamp-2">
                  {hackathon.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {hackathon.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-blue-400/10 text-blue-400 rounded-md text-xs border border-blue-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Info Row */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {hackathon.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {hackathon.location}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      {hackathon.participants} participants
                    </div>
                    <div className="text-green-400 font-semibold">
                      {hackathon.prize} prizes
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all flex items-center justify-center space-x-2">
                    <span>Apply Now</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 border border-gray-600 hover:border-gray-500 text-gray-400 hover:text-white rounded-lg transition-all">
                    Find Team
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredHackathons.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No hackathons match your search criteria.</p>
            <button 
              onClick={() => { setSearchTerm(''); setFilter('all'); }}
              className="mt-4 px-6 py-2 text-blue-400 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HackathonFeed;