import React from 'react';
import { Zap, Github, MessageCircle, Linkedin, Mail, FileText, HelpCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Zap className="w-8 h-8 text-blue-400" />
                <div className="absolute inset-0 w-8 h-8 bg-blue-400/20 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold">
                fre<span className="text-blue-400">{'{queue}'}</span>ncy
              </span>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              The ultimate hackathon team-building platform. Connect with talented hackers, 
              find your perfect teammates, and build amazing projects together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#hackathons" className="text-gray-400 hover:text-white transition-colors">
                  Find Hackathons
                </a>
              </li>
              <li>
                <a href="#matching" className="text-gray-400 hover:text-white transition-colors">
                  Smart Matching
                </a>
              </li>
              <li>
                <a href="#community" className="text-gray-400 hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Mobile App
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  API Access
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                  <HelpCircle className="w-4 h-4" />
                  <span>Help Center</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Hackathon Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Team Building Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Status Page
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Press Kit
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Investors
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Stay in the Loop</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Get notified about new hackathons, platform updates, and success stories.
            </p>
            <div className="flex space-x-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} fre{'{queue}'}ncy. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;