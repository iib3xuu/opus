import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Secure Your Discord Server with{' '}
          <span className="text-[#7289DA]">Opus</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Advanced protection against alt accounts, nuking attempts, and raids with our intelligent security system.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg">
            Add to Discord
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => navigate('/docs')}
          >
            View Documentation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}