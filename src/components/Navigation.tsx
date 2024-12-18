import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { Button } from './Button';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 px-4 py-6`}
    >
      <div className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      } px-6 py-3`}>
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-[#7289DA]" />
            <span className="text-xl font-bold">Opus</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/"
              className={`transition-colors ${
                location.pathname === '/' ? 'text-[#7289DA]' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/how-it-works"
              className={`transition-colors ${
                location.pathname === '/how-it-works' ? 'text-[#7289DA]' : 'text-gray-300 hover:text-white'
              }`}
            >
              How It Works
            </Link>
            <Link 
              to="/docs"
              className={`transition-colors ${
                location.pathname === '/docs' ? 'text-[#7289DA]' : 'text-gray-300 hover:text-white'
              }`}
            >
              Documentation
            </Link>
          </div>
          
          <Button>Add to Discord</Button>
        </div>
      </div>
    </motion.nav>
  );
}