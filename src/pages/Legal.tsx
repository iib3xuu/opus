import React from 'react';
import { FileText, Lock } from 'lucide-react';

export function Legal() {
  return (
    <div className="min-h-screen bg-[#121212] text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-4">
            <FileText className="w-8 h-8 text-[#7289DA]" />
            <h1 className="text-4xl font-bold">Terms of Service</h1>
          </div>
          <div className="prose prose-invert">
            <p className="text-gray-400">
              By using Opus Bot, you agree to the following terms and conditions:
            </p>
            <div className="space-y-6 mt-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Service Usage</h2>
                <p className="text-gray-400">
                  Opus Bot is provided as-is, and while we strive for 100% uptime, we cannot guarantee uninterrupted service. Users must comply with Discord's Terms of Service and Community Guidelines.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">2. User Responsibilities</h2>
                <p className="text-gray-400">
                  Users are responsible for configuring security settings appropriately for their servers. Opus Bot should be used as part of a comprehensive security strategy.
                </p>
              </section>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center space-x-2 mb-4">
            <Lock className="w-8 h-8 text-[#7289DA]" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          <div className="prose prose-invert">
            <p className="text-gray-400">
              Your privacy is important to us. Here's how we handle your data:
            </p>
            <div className="space-y-6 mt-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
                <p className="text-gray-400">
                  We collect minimal data necessary for bot functionality, including server IDs, user IDs, and security-related events. This data is used solely for providing security services.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
                <p className="text-gray-400">
                  All collected data is encrypted and stored securely. We do not share your data with third parties unless required by law.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                <p className="text-gray-400">
                  You have the right to request access to your data, correct any inaccuracies, or request deletion of your data from our systems.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}