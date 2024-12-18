import React from 'react';
import { motion } from 'framer-motion';

interface StatProps {
  value: string;
  label: string;
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-[#7289DA] mb-2"
      >
        {value}
      </motion.div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      <Stat value="100,000+" label="Protected Servers" />
      <Stat value="1M+" label="Threats Prevented" />
      <Stat value="10M+" label="Users Protected" />
    </div>
  );
}