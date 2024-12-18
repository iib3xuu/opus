import React from 'react';
import { motion } from 'framer-motion';
import { Book, Terminal, Settings, Code, Shield, Bell, HelpCircle } from 'lucide-react';

interface SidebarItemProps {
  id: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

function SidebarItem({ id, icon, children, isActive, onClick }: SidebarItemProps) {
  return (
    <motion.button
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full flex items-center space-x-2 p-2 rounded-lg transition-colors ${
        isActive 
          ? 'bg-[#7289DA] text-white' 
          : 'hover:bg-gray-800 text-gray-400 hover:text-white'
      }`}
    >
      {icon}
      <span>{children}</span>
    </motion.button>
  );
}

export function Sidebar() {
  const sections = [
    { id: 'getting-started', label: 'Getting Started', icon: <Book className="w-5 h-5" /> },
    { id: 'commands', label: 'Commands', icon: <Terminal className="w-5 h-5" /> },
    { id: 'configuration', label: 'Configuration', icon: <Settings className="w-5 h-5" /> },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL without scrolling
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const currentSection = window.location.hash.slice(1) || 'getting-started';

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-900 rounded-lg p-4 sticky top-24"
    >
      <nav className="space-y-1">
        {sections.map((section) => (
          <SidebarItem
            key={section.id}
            id={section.id}
            icon={section.icon}
            isActive={currentSection === section.id}
            onClick={() => scrollToSection(section.id)}
          >
            {section.label}
          </SidebarItem>
        ))}
      </nav>
    </motion.div>
  );
}