import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Github, Linkedin, ExternalLink, Award, Trophy, Users, Calendar } from 'lucide-react';
import Navigation from '../components/Navigation';
import Button from '../components/Button';

const UserProfilePage: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<'skills' | 'projects' | 'reputation'>('skills');

  // Mock user data - in real app, fetch based on id
  const user = {
    id: '1',
    name: 'Sarah Chen',
    role: 'Full-Stack Developer & AI Enthusiast',
    bio: 'Passionate full-stack developer with 5 years of experience building scalable web applications. I specialize in React, Node.js, and machine learning. I love participating in hackathons and have been part of 12+ winning teams. Currently exploring the intersection of AI and web development.',
    location: 'San Francisco, CA',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    banner: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    status: 'Open for Hackathons',
    rating: 4.8,
    totalReviews: 24,
    joinedDate: 'January 2023',
    skills: [
      { name: 'React', level: 'Expert', endorsements: 18 },
      { name: 'Node.js', level: 'Expert', endorsements: 15 },
      { name: 'Python', level: 'Advanced', endorsements: 12 },
      { name: 'TypeScript', level: 'Advanced', endorsements: 14 },
      { name: 'Machine Learning', level: 'Intermediate', endorsements: 8 },
      { name: 'UI/UX Design', level: 'Intermediate', endorsements: 6 },
      { name: 'MongoDB', level: 'Advanced', endorsements: 10 },
      { name: 'PostgreSQL', level: 'Advanced', endorsements: 9 },
    ],
    projects: [
      {
        id: 1,
        name: 'EcoTracker',
        description: 'AI-powered carbon footprint tracking application built during ClimaTech Hackathon 2023',
        technologies: ['React', 'Node.js', 'Python', 'TensorFlow'],
        award: '1st Place Winner',
        link: 'https://github.com/example/ecotracker',
        image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        id: 2,
        name: 'HealthConnect',
        description: 'Telemedicine platform connecting patients with healthcare providers',
        technologies: ['React', 'Express', 'MongoDB', 'WebRTC'],
        award: '2nd Place Winner',
        link: 'https://github.com/example/healthconnect',
        image: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        id: 3,
        name: 'FinanceAI',
        description: 'Personal finance management app with AI-driven insights',
        technologies: ['Vue.js', 'Python', 'FastAPI', 'scikit-learn'],
        award: 'Best Technical Implementation',
        link: 'https://github.com/example/financeai',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
    ],
    badges: [
      { name: 'Rising Star', icon: '⭐', description: 'Earned 5+ high ratings in first year' },
      { name: 'Team Leader', icon: '👥', description: 'Led 3+ successful hackathon teams' },
      { name: 'Innovation Champion', icon: '💡', description: 'Won hackathon with breakthrough solution' },
      { name: 'Collaboration Pro', icon: '🤝', description: 'Consistently rated for teamwork' },
    ],
    recentReviews: [
      {
        id: 1,
        reviewer: 'Marcus Johnson',
        rating: 5,
        comment: 'Sarah was an incredible teammate. Her technical skills and leadership helped our team win the hackathon!',
        hackathon: 'TechCrunch Disrupt 2023',
        date: 'December 2023',
      },
      {
        id: 2,
        reviewer: 'Emily Rodriguez',
        rating: 5,
        comment: 'Outstanding developer with great communication skills. Would definitely work with her again.',
        hackathon: 'AI Innovation Summit',
        date: 'November 2023',
      },
    ],
    social: {
      github: 'https://github.com/sarahchen',
      linkedin: 'https://linkedin.com/in/sarahchen',
      resume: 'https://example.com/resume.pdf',
    },
    stats: {
      hackathonsJoined: 12,
      teamsFormed: 8,
      wins: 3,
      topFinishes: 7,
    },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open for Hackathons':
        return 'bg-green-600/20 text-green-400 border-green-600/30';
      case 'Busy':
        return 'bg-red-600/20 text-red-400 border-red-600/30';
      default:
        return 'bg-gray-600/20 text-gray-400 border-gray-600/30';
    }
  };

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'text-purple-400';
      case 'Advanced':
        return 'text-cyan-400';
      case 'Intermediate':
        return 'text-orange-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div>
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden mb-8">
          {/* Banner */}
          <div className="relative h-48">
            <img
              src={user.banner}
              alt="Profile banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>

          <div className="relative px-8 pb-8">
            {/* Avatar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end space-y-4 sm:space-y-0 sm:space-x-6 -mt-16">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-full border-4 border-gray-800 object-cover"
              />
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
                    <p className="text-lg text-gray-300 mb-2">{user.role}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {user.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Joined {user.joinedDate}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 mt-4 sm:mt-0">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                    <Button variant="primary">
                      Send Message
                    </Button>
                    <Button variant="outline">
                      Invite to Team
                    </Button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-400">{user.stats.hackathonsJoined}</p>
                    <p className="text-sm text-gray-400">Hackathons</p>
                  </div>
                  <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                    <p className="text-2xl font-bold text-cyan-400">{user.stats.teamsFormed}</p>
                    <p className="text-sm text-gray-400">Teams Formed</p>
                  </div>
                  <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-400">{user.stats.wins}</p>
                    <p className="text-sm text-gray-400">Wins</p>
                  </div>
                  <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                    <p className="text-2xl font-bold text-green-400">{user.stats.topFinishes}</p>
                    <p className="text-sm text-gray-400">Top 3 Finishes</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-400 leading-relaxed mb-6">{user.bio}</p>

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  <a
                    href={user.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a
                    href={user.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href={user.social.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-8">
          {/* Tab Navigation */}
          <div className="border-b border-gray-700 mb-8">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('skills')}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'skills'
                    ? 'border-purple-500 text-purple-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                Skills & Endorsements
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'projects'
                    ? 'border-purple-500 text-purple-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                Projects & Experience
              </button>
              <button
                onClick={() => setActiveTab('reputation')}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'reputation'
                    ? 'border-purple-500 text-purple-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                Reputation & Reviews
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          {activeTab === 'skills' && (
            <div>
              <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {user.skills.map((skill, index) => (
                  <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className={`text-sm ${getSkillLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        {skill.endorsements} endorsements
                      </span>
                      <Button variant="ghost" size="sm">
                        Endorse
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div>
              <h3 className="text-xl font-bold mb-6">Recent Projects</h3>
              <div className="space-y-6">
                {user.projects.map((project) => (
                  <div key={project.id} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full md:w-32 h-24 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-lg font-semibold">{project.name}</h4>
                          {project.award && (
                            <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 text-sm rounded-full flex items-center">
                              <Trophy className="w-3 h-3 mr-1" />
                              {project.award}
                            </span>
                          )}
                        </div>
                        
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech, index) => (
                              <span key={index} className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-full">
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            <span className="text-sm">View Code</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reputation' && (
            <div className="space-y-8">
              {/* Overall Rating */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Star className="w-8 h-8 text-yellow-400 fill-current" />
                  <span className="text-4xl font-bold">{user.rating}</span>
                </div>
                <p className="text-gray-400">Based on {user.totalReviews} reviews</p>
              </div>

              {/* Badges */}
              <div>
                <h3 className="text-xl font-bold mb-4">Earned Badges</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {user.badges.map((badge, index) => (
                    <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex items-center space-x-4">
                      <span className="text-2xl">{badge.icon}</span>
                      <div>
                        <h4 className="font-semibold">{badge.name}</h4>
                        <p className="text-sm text-gray-400">{badge.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Reviews */}
              <div>
                <h3 className="text-xl font-bold mb-4">Recent Reviews</h3>
                <div className="space-y-4">
                  {user.recentReviews.map((review) => (
                    <div key={review.id} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold">{review.reviewer}</h4>
                          <p className="text-sm text-gray-400">{review.hackathon} • {review.date}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;