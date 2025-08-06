import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Zap className="w-8 h-8 text-blue-400" />
              <div className="absolute inset-0 w-8 h-8 bg-blue-400/20 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xl font-bold">
              fre<span className="text-blue-400">{'{queue}'}</span>ncy
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#hackathons" className="text-gray-300 hover:text-white transition-colors">Hackathons</a>
            <a href="#matching" className="text-gray-300 hover:text-white transition-colors">Find Teams</a>
            <a href="#community" className="text-gray-300 hover:text-white transition-colors">Community</a>
            <button className="px-4 py-2 text-blue-400 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all">
              Sign In
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
              Join Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
              <a href="#hackathons" className="text-gray-300 hover:text-white transition-colors">Hackathons</a>
              <a href="#matching" className="text-gray-300 hover:text-white transition-colors">Find Teams</a>
              <a href="#community" className="text-gray-300 hover:text-white transition-colors">Community</a>
              <div className="flex space-x-4 pt-4 border-t border-gray-800">
                <button className="flex-1 px-4 py-2 text-blue-400 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all">
                  Sign In
                </button>
                <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;