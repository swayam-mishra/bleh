import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Users, Trophy, ExternalLink, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Button from '../components/Button';

const HackathonDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<'looking-for-members' | 'looking-for-team'>('looking-for-members');

  // Mock data - in real app, fetch based on id
  const hackathon = {
    id: 1,
    name: 'TechCrunch Disrupt Hackathon 2024',
    date: 'March 15-17, 2024',
    location: 'San Francisco, CA',
    mode: 'Offline',
    domain: 'AI/ML',
    participants: 1200,
    description: 'Join us for the most anticipated hackathon of the year! TechCrunch Disrupt Hackathon brings together the brightest minds in tech to build revolutionary products. Whether you\'re a developer, designer, or entrepreneur, this is your chance to create something amazing and compete for incredible prizes.',
    longDescription: 'Over three days, you\'ll have access to world-class mentors, cutting-edge APIs, and the latest development tools. Our judging panel includes top VCs, successful entrepreneurs, and tech leaders who will evaluate your projects based on innovation, technical execution, and market potential.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100',
    prize: '$50,000',
    organizer: 'TechCrunch',
    website: 'https://techcrunch.com',
    sponsors: ['Google', 'Microsoft', 'AWS', 'GitHub'],
    tracks: ['AI/ML', 'Web Development', 'Mobile Apps', 'IoT', 'Blockchain'],
  };

  const teamsLFM = [
    {
      id: 1,
      name: 'AI Innovators',
      description: 'Building an AI-powered healthcare diagnostic tool',
      lookingFor: ['Frontend Developer', 'UI/UX Designer'],
      currentMembers: [
        { name: 'Sarah Chen', role: 'ML Engineer', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { name: 'Mike Rodriguez', role: 'Backend Developer', avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100' },
      ],
      skills: ['Python', 'TensorFlow', 'React', 'Node.js'],
    },
    {
      id: 2,
      name: 'FinTech Revolutionaries',
      description: 'Creating a decentralized payment platform',
      lookingFor: ['Blockchain Developer'],
      currentMembers: [
        { name: 'Emma Johnson', role: 'Full-Stack Developer', avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { name: 'David Kim', role: 'UI/UX Designer', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100' },
      ],
      skills: ['Solidity', 'Web3.js', 'React', 'Figma'],
    },
  ];

  const individualsLFT = [
    {
      id: 1,
      name: 'Alex Thompson',
      role: 'Full-Stack Developer',
      skills: ['React', 'Node.js', 'Python', 'PostgreSQL'],
      rating: 4.8,
      bio: 'Passionate full-stack developer with 5 years of experience. Love building scalable web applications.',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      location: 'San Francisco, CA',
      experience: '5+ years',
    },
    {
      id: 2,
      name: 'Lisa Wang',
      role: 'UI/UX Designer',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      rating: 4.9,
      bio: 'Award-winning designer focused on creating delightful user experiences.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      location: 'San Francisco, CA',
      experience: '3+ years',
    },
    {
      id: 3,
      name: 'Marcus Chen',
      role: 'Data Scientist',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Data Analysis'],
      rating: 4.7,
      bio: 'ML engineer with expertise in computer vision and natural language processing.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      location: 'San Francisco, CA',
      experience: '4+ years',
    },
  ];

  return (
    <div>
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden mb-8">
          <div className="relative h-64">
            <img
              src={hackathon.image}
              alt={hackathon.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={hackathon.logo}
                  alt={`${hackathon.organizer} logo`}
                  className="w-16 h-16 rounded-lg"
                />
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">{hackathon.name}</h1>
                  <p className="text-gray-300">Organized by {hackathon.organizer}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Date</p>
                  <p className="font-medium">{hackathon.date}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">{hackathon.location}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-orange-400" />
                <div>
                  <p className="text-sm text-gray-400">Participants</p>
                  <p className="font-medium">{hackathon.participants}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="text-sm text-gray-400">Prize Pool</p>
                  <p className="font-medium text-green-400">{hackathon.prize}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="flex-1">
                Find a Team
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Create a Team
              </Button>
              <Button variant="ghost" size="lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Website
              </Button>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-gray-400 mb-4">{hackathon.description}</p>
              <p className="text-gray-400">{hackathon.longDescription}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Tracks</h3>
                <div className="flex flex-wrap gap-2">
                  {hackathon.tracks.map((track, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-600/30">
                      {track}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Sponsors</h3>
                <div className="flex flex-wrap gap-2">
                  {hackathon.sponsors.map((sponsor, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                      {sponsor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Listings */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Team Listings</h2>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-700 mb-6">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('looking-for-members')}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'looking-for-members'
                    ? 'border-purple-500 text-purple-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                Teams Looking for Members ({teamsLFM.length})
              </button>
              <button
                onClick={() => setActiveTab('looking-for-team')}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'looking-for-team'
                    ? 'border-purple-500 text-purple-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                Individuals Looking for Team ({individualsLFT.length})
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          {activeTab === 'looking-for-members' && (
            <div className="space-y-6">
              {teamsLFM.map((team) => (
                <div key={team.id} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{team.name}</h3>
                      <p className="text-gray-400 mb-3">{team.description}</p>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-sm font-medium text-orange-400">Looking for:</span>
                        {team.lookingFor.map((role, index) => (
                          <span key={index} className="px-2 py-1 bg-orange-600/20 text-orange-300 rounded-full text-sm border border-orange-600/30">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline">
                      Join Team
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex -space-x-2">
                        {team.currentMembers.map((member, index) => (
                          <img
                            key={index}
                            src={member.avatar}
                            alt={member.name}
                            className="w-8 h-8 rounded-full border-2 border-gray-800"
                            title={`${member.name} - ${member.role}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">
                        {team.currentMembers.length} member{team.currentMembers.length !== 1 ? 's' : ''}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {team.skills.map((skill, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'looking-for-team' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {individualsLFT.map((person) => (
                <div key={person.id} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={person.avatar}
                      alt={person.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white truncate">{person.name}</h3>
                      <p className="text-sm text-gray-400 truncate">{person.role}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{person.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{person.bio}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {person.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {person.location}
                      </div>
                      <div className="mt-1">
                        {person.experience} experience
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Invite to Team
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HackathonDetailsPage;