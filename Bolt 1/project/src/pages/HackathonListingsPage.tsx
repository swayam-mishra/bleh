import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Filter, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import Button from '../components/Button';

const HackathonListingsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    domain: '',
    mode: '',
    region: '',
  });

  const hackathons = [
    {
      id: 1,
      name: 'TechCrunch Disrupt Hackathon',
      date: 'March 15-17, 2024',
      location: 'San Francisco, CA',
      region: 'North America',
      mode: 'Offline',
      domain: 'AI/ML',
      participants: 1200,
      description: 'Build the next big thing in tech. Join us for 48 hours of non-stop coding, networking, and innovation.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
      prize: '$50,000',
    },
    {
      id: 2,
      name: 'Web3 Innovation Challenge',
      date: 'March 22-24, 2024',
      location: 'Online',
      region: 'Global',
      mode: 'Online',
      domain: 'Web3',
      participants: 800,
      description: 'Shape the future of decentralized technologies. Build dApps, DeFi protocols, and blockchain solutions.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400',
      prize: '$25,000',
    },
    {
      id: 3,
      name: 'HealthTech Solutions Hackathon',
      date: 'April 5-7, 2024',
      location: 'Boston, MA',
      region: 'North America',
      mode: 'Hybrid',
      domain: 'HealthTech',
      participants: 600,
      description: 'Revolutionize healthcare with technology. Create solutions that improve patient outcomes and healthcare delivery.',
      image: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=400',
      prize: '$30,000',
    },
    {
      id: 4,
      name: 'FinTech Innovation Summit',
      date: 'April 12-14, 2024',
      location: 'London, UK',
      region: 'Europe',
      mode: 'Offline',
      domain: 'FinTech',
      participants: 900,
      description: 'Transform financial services with cutting-edge technology. Build payment systems, trading algorithms, and more.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      prize: '$40,000',
    },
    {
      id: 5,
      name: 'Climate Tech Challenge',
      date: 'April 20-22, 2024',
      location: 'Online',
      region: 'Global',
      mode: 'Online',
      domain: 'ClimaTech',
      participants: 1000,
      description: 'Combat climate change through technology. Develop solutions for sustainability and environmental protection.',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=400',
      prize: '$60,000',
    },
    {
      id: 6,
      name: 'EdTech Innovation Lab',
      date: 'May 3-5, 2024',
      location: 'Berlin, Germany',
      region: 'Europe',
      mode: 'Hybrid',
      domain: 'EdTech',
      participants: 700,
      description: 'Revolutionize education technology. Create platforms and tools that enhance learning experiences.',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=400',
      prize: '$35,000',
    },
  ];

  const domains = ['AI/ML', 'Web3', 'FinTech', 'HealthTech', 'ClimaTech', 'EdTech'];
  const modes = ['Online', 'Offline', 'Hybrid'];
  const regions = ['North America', 'Europe', 'Asia', 'Global'];

  const filteredHackathons = hackathons.filter((hackathon) => {
    const matchesSearch = hackathon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hackathon.domain.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = !filters.domain || hackathon.domain === filters.domain;
    const matchesMode = !filters.mode || hackathon.mode === filters.mode;
    const matchesRegion = !filters.region || hackathon.region === filters.region;
    
    return matchesSearch && matchesDomain && matchesMode && matchesRegion;
  });

  const clearFilters = () => {
    setFilters({ domain: '', mode: '', region: '' });
    setSearchTerm('');
  };

  return (
    <div>
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Discover Hackathons</h1>
          <p className="text-gray-400">Find the perfect hackathon to showcase your skills and build amazing projects</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search hackathons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            />
          </div>

          {/* Filter Controls */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Domain</label>
              <select
                value={filters.domain}
                onChange={(e) => setFilters({ ...filters, domain: e.target.value })}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              >
                <option value="">All Domains</option>
                {domains.map((domain) => (
                  <option key={domain} value={domain}>{domain}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Mode</label>
              <select
                value={filters.mode}
                onChange={(e) => setFilters({ ...filters, mode: e.target.value })}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              >
                <option value="">All Modes</option>
                {modes.map((mode) => (
                  <option key={mode} value={mode}>{mode}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Region</label>
              <select
                value={filters.region}
                onChange={(e) => setFilters({ ...filters, region: e.target.value })}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              >
                <option value="">All Regions</option>
                {regions.map((region) => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <Button variant="outline" onClick={clearFilters} className="w-full">
                Clear Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-400">
            Showing {filteredHackathons.length} hackathon{filteredHackathons.length !== 1 ? 's' : ''}
          </p>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">Sort by date</span>
          </div>
        </div>

        {/* Hackathon Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredHackathons.map((hackathon) => (
            <div key={hackathon.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 group">
              <div className="relative">
                <img
                  src={hackathon.image}
                  alt={hackathon.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    hackathon.mode === 'Online' ? 'bg-green-600 text-green-100' :
                    hackathon.mode === 'Offline' ? 'bg-blue-600 text-blue-100' :
                    'bg-purple-600 text-purple-100'
                  }`}>
                    {hackathon.mode}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {hackathon.name}
                  </h3>
                  <span className="text-lg font-bold text-green-400">{hackathon.prize}</span>
                </div>

                <p className="text-gray-400 mb-4 line-clamp-2">{hackathon.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {hackathon.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {hackathon.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-2" />
                    {hackathon.participants} participants
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 rounded-full text-xs bg-gray-700 text-gray-300">
                      {hackathon.domain}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs bg-gray-700 text-gray-300">
                      {hackathon.region}
                    </span>
                  </div>
                  
                  <Link to={`/hackathons/${hackathon.id}`}>
                    <Button variant="primary" size="sm">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredHackathons.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">No hackathons found</h3>
            <p className="text-gray-400 mb-4">Try adjusting your search terms or filters</p>
            <Button onClick={clearFilters}>Clear all filters</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HackathonListingsPage;