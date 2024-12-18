import React from 'react';
import { Shield, AlertTriangle, Activity, Bell, Settings, ShieldCheck } from 'lucide-react';
import { Feature } from './Feature';

export function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Alt Account Detection",
      description: "Advanced algorithms to detect and prevent alt accounts from joining your server."
    },
    {
      icon: AlertTriangle,
      title: "Anti-Nuke Protection",
      description: "Prevent malicious attempts to damage your server with real-time threat detection."
    },
    {
      icon: Activity,
      title: "Server Monitoring",
      description: "24/7 monitoring of all server activities with detailed security logs."
    },
    {
      icon: Shield,
      title: "Raid Protection",
      description: "Automatic detection and prevention of coordinated raid attempts."
    },
    {
      icon: Bell,
      title: "Suspicious Activity Alerts",
      description: "Instant notifications about potential security threats and suspicious behavior."
    },
    {
      icon: Settings,
      title: "Custom Configuration",
      description: "Flexible security settings tailored to your server's specific needs."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Feature 
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}