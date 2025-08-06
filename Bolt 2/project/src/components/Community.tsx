import React from 'react';
import { Trophy, Users, Star, Award, TrendingUp, MessageCircle } from 'lucide-react';

const topHackers = [
  { name: 'Alex Chen', xp: 2450, wins: 12, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100', badges: ['API Wizard', 'Team Lead'] },
  { name: 'Sarah Kim', xp: 2380, wins: 11, avatar: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=100', badges: ['Design Guru', 'Innovation'] },
  { name: 'Mike Rodriguez', xp: 2290, wins: 15, avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100', badges: ['AI Pioneer', 'Debug Master'] },
  { name: 'Emma Watson', xp: 2180, wins: 9, avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100', badges: ['Frontend Wizard'] },
  { name: 'David Park', xp: 2050, wins: 8, avatar: 'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=100', badges: ['Backend Master'] }
];

const testimonials = [
  {
    name: 'Jessica Liu',
    title: 'Full Stack Developer',
    content: 'fre{queue}ncy helped me find the perfect team for AngelHacks. We won first place and I made lifelong connections!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100',
    hackathon: 'AngelHacks 2024'
  },
  {
    name: 'Carlos Rodriguez',
    title: 'ML Engineer',
    content: 'The smart matching algorithm is incredible. It paired me with teammates who perfectly complemented my skills.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=100',
    hackathon: 'AI for Good Hackathon'
  },
  {
    name: 'Priya Patel',
    title: 'Product Designer',
    content: 'Never thought I\'d find such talented developers who valued good design. Won our first hackathon together!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100',
    hackathon: 'Design + Code Hackathon'
  }
];

const communityStats = [
  { label: 'Active Hackers', value: '2,500+', icon: <Users className="w-6 h-6" />, color: 'text-blue-400' },
  { label: 'Teams Formed', value: '150+', icon: <TrendingUp className="w-6 h-6" />, color: 'text-green-400' },
  { label: 'Hackathons Won', value: '89', icon: <Trophy className="w-6 h-6" />, color: 'text-yellow-400' },
  { label: 'Total XP Earned', value: '1.2M', icon: <Star className="w-6 h-6" />, color: 'text-purple-400' }
];

interface CommunityProps {
  onShowPeerRating: () => void;
}

const Community: React.FC<CommunityProps> = ({ onShowPeerRating }) => {
  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the <span className="text-blue-400">Community</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with thousands of hackers, share your wins, and build your reputation in the community
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gray-800/50 border border-gray-700 flex items-center justify-center group-hover:border-gray-600 transition-all ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Leaderboard */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Top Hackers</h3>
              <Trophy className="w-6 h-6 text-yellow-400" />
            </div>
            
            <div className="space-y-4">
              {topHackers.map((hacker, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0 ? 'bg-yellow-400 text-black' :
                        index === 1 ? 'bg-gray-300 text-black' :
                        index === 2 ? 'bg-orange-400 text-black' :
                        'bg-gray-600 text-white'
                      }`}>
                        {index + 1}
                      </div>
                      <img src={hacker.avatar} alt={hacker.name} className="w-10 h-10 rounded-full" />
                    </div>
                    <div>
                      <div className="font-semibold">{hacker.name}</div>
                      <div className="flex space-x-2">
                        {hacker.badges.slice(0, 2).map((badge, badgeIndex) => (
                          <span key={badgeIndex} className="px-2 py-1 bg-blue-400/10 text-blue-400 text-xs rounded border border-blue-400/20">
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-blue-400">{hacker.xp} XP</div>
                    <div className="text-sm text-gray-400">{hacker.wins} wins</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <button className="px-6 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg transition-all">
                View Full Leaderboard
              </button>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Success Stories</h3>
              <MessageCircle className="w-6 h-6 text-green-400" />
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="flex items-start space-x-4 mb-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="flex space-x-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-gray-400 mb-2">{testimonial.title}</div>
                      <div className="text-sm text-blue-400 font-medium">{testimonial.hackathon}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <button 
                onClick={onShowPeerRating}
                className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all"
              >
                Share Your Story
              </button>
            </div>
          </div>
        </div>

        {/* Community Actions */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-blue-400/50 transition-all group">
              <Award className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-semibold mb-2">Build Your Reputation</h4>
              <p className="text-gray-400 text-sm mb-4">Earn badges, XP, and peer endorsements through successful hackathons.</p>
              <button className="px-4 py-2 text-blue-400 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all">
                Learn More
              </button>
            </div>

            <div className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-green-400/50 transition-all group">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-semibold mb-2">Find Your Tribe</h4>
              <p className="text-gray-400 text-sm mb-4">Connect with like-minded hackers and form lasting professional relationships.</p>
              <button className="px-4 py-2 text-green-400 border border-green-400 rounded-lg hover:bg-green-400 hover:text-white transition-all">
                Join Community
              </button>
            </div>

            <div className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-purple-400/50 transition-all group">
              <Trophy className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-semibold mb-2">Win Together</h4>
              <p className="text-gray-400 text-sm mb-4">Team up with the best hackers and increase your chances of winning.</p>
              <button className="px-4 py-2 text-purple-400 border border-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all">
                Start Matching
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;