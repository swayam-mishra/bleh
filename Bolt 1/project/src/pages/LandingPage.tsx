import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Trophy, Star, Github, Twitter, Linkedin } from 'lucide-react';
import Button from '../components/Button';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <span className="text-xl font-bold">fre{'{'}queue{'}'}ncy</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link to="/signup">
            <Button variant="primary">Sign Up</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Stop Searching. Start Building.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed">
            The ultimate platform to find your perfect hackathon team. 
            Connect with talented developers, designers, and innovators who share your passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Sign Up for Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose fre{'{'}queue{'}'}ncy?</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We've built the perfect ecosystem for hackathon team formation with cutting-edge features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 group">
            <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600/30 transition-all duration-300">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Smart Matchmaking</h3>
            <p className="text-gray-400 leading-relaxed">
              Our AI-powered algorithm matches you with teammates based on complementary skills, experience, and hackathon preferences.
            </p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 group">
            <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-600/30 transition-all duration-300">
              <Trophy className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Hackathon Discovery</h3>
            <p className="text-gray-400 leading-relaxed">
              Discover exciting hackathons worldwide with advanced filtering by domain, mode, region, and difficulty level.
            </p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 group">
            <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600/30 transition-all duration-300">
              <Star className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Reputation System</h3>
            <p className="text-gray-400 leading-relaxed">
              Build your reputation through peer reviews, skill endorsements, and earned badges to attract the best teammates.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl p-12 text-center border border-purple-500/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Dream Team?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers, designers, and innovators who are already using fre{'{'}queue{'}'}ncy to form winning teams.
          </p>
          <Link to="/signup">
            <Button size="lg" className="text-lg px-8 py-4">
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="text-xl font-bold">fre{'{'}queue{'}'}ncy</span>
              </div>
              <p className="text-gray-400 mb-4">
                The smarter way to form your dream hackathon team.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 fre{'{'}queue{'}'}ncy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;