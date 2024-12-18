import React, { useEffect } from 'react';
import { Book } from 'lucide-react';
import { Sidebar } from '../components/docs/Sidebar';
import { DocSection } from '../components/docs/DocSection';
import { Command } from '../components/docs/Command';

export function Documentation() {
  // Smooth scroll to section on hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Handle initial hash on page load
    if (window.location.hash) {
      handleHashChange();
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const commands = [
    {
      name: "!opus setup",
      description: "Initialize Opus protection in your server",
      usage: "!opus setup"
    },
    {
      name: "!opus config",
      description: "Configure security settings and thresholds",
      usage: "!opus config <setting> <value>"
    },
    {
      name: "!opus logs",
      description: "View security logs and alerts",
      usage: "!opus logs [timeframe]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center space-x-2 mb-8">
          <Book className="w-8 h-8 text-[#7289DA]" />
          <h1 className="text-4xl font-bold">Documentation</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <DocSection id="getting-started" title="Getting Started">
              <div className="prose prose-invert">
                <p className="text-gray-400">
                  Get started with Opus by adding it to your Discord server and following these simple steps:
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4">
                  <li>Click the "Add to Discord" button</li>
                  <li>Select your server and authorize the bot</li>
                  <li>Use !opus setup to initialize protection</li>
                  <li>Configure security settings using !opus config</li>
                </ol>
              </div>
            </DocSection>

            <DocSection id="commands" title="Commands">
              {commands.map((command) => (
                <Command key={command.name} {...command} />
              ))}
            </DocSection>

            <DocSection id="configuration" title="Configuration">
              <div className="prose prose-invert">
                <p className="text-gray-400">
                  Customize Opus's security settings to match your server's needs:
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4">
                  <li>Anti-raid protection thresholds</li>
                  <li>Alt account detection sensitivity</li>
                  <li>Notification settings</li>
                  <li>Auto-moderation rules</li>
                </ul>
              </div>
            </DocSection>
          </div>
        </div>
      </div>
    </div>
  );
}