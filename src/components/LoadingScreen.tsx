import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
          className="inline-block mb-4"
        >
          <Shield className="w-16 h-16 text-[#7289DA]" />
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-semibold text-[#7289DA]"
        >
          Loading...
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-[#7289DA] mt-4 rounded-full w-32"
        />
      </motion.div>
    </div>
  );
}