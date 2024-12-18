import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, AlertTriangle, CheckCircle } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function Step({ icon, title, description, delay }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex items-start space-x-4"
    >
      <div className="flex-shrink-0 bg-[#7289DA] p-3 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}

export function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#121212] text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">How Opus Works</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Understanding how Opus protects your Discord server from threats
          </p>
        </div>

        <div className="grid gap-12 max-w-4xl mx-auto">
          <Step
            icon={<Shield className="w-6 h-6 text-white" />}
            title="Continuous Monitoring"
            description="Opus constantly monitors your server for suspicious activities, user behaviors, and potential security threats."
            delay={0.1}
          />
          <Step
            icon={<Users className="w-6 h-6 text-white" />}
            title="User Analysis"
            description="Advanced algorithms analyze user patterns to detect alt accounts and suspicious behavior in real-time."
            delay={0.2}
          />
          <Step
            icon={<AlertTriangle className="w-6 h-6 text-white" />}
            title="Threat Detection"
            description="When a threat is detected, Opus immediately takes action based on your configured security settings."
            delay={0.3}
          />
          <Step
            icon={<CheckCircle className="w-6 h-6 text-white" />}
            title="Automated Protection"
            description="Automatic enforcement of security measures keeps your server safe without requiring constant manual intervention."
            delay={0.4}
          />
        </div>

        <div className="mt-20 bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Security Dashboard Preview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Real-time Monitoring</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Server Status</span>
                  <span className="text-green-400">Protected</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Threats</span>
                  <span className="text-red-400">0</span>
                </div>
                <div className="flex justify-between">
                  <span>Users Monitored</span>
                  <span>1,234</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Alt Accounts Blocked</span>
                  <span>23</span>
                </div>
                <div className="flex justify-between">
                  <span>Raid Attempts Prevented</span>
                  <span>5</span>
                </div>
                <div className="flex justify-between">
                  <span>Security Alerts</span>
                  <span>12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}