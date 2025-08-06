import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bell, Search, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from './Button';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold">fre{'{'}queue{'}'}ncy</span>
          </Link>

          {/* Desktop Navigation */}
          {user && (
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/dashboard"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/dashboard') ? 'bg-gray-700 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Dashboard
              </Link>
              <Link
                to="/hackathons"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/hackathons') ? 'bg-gray-700 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Hackathons
              </Link>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-white transition-colors relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center space-x-2">
                  <Link to={`/profile/${user.id}`} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors">
                    <User className="w-5 h-5" />
                    <span className="text-sm">{user.name}</span>
                  </Link>
                  <Button variant="ghost" size="sm" onClick={logout}>
                    Logout
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && user && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-700">
              <Link
                to="/dashboard"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/dashboard') ? 'bg-gray-700 text-white' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/hackathons"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/hackathons') ? 'bg-gray-700 text-white' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Hackathons
              </Link>
              <Link
                to={`/profile/${user.id}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                My Profile
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;