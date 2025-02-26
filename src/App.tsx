import React from 'react';
import { Brain, Sparkles, Cpu, Lock, Globe2, Zap } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Nemo <span className="text-blue-600">AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Empowering the future with intelligent solutions that transform the way we interact with technology
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful AI Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our advanced AI technology can revolutionize your workflow
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Brain}
            title="Advanced Learning"
            description="Self-improving algorithms that adapt to your needs and grow smarter over time"
          />
          <FeatureCard
            icon={Sparkles}
            title="Natural Language"
            description="Seamless communication with AI using natural language processing"
          />
          <FeatureCard
            icon={Cpu}
            title="Neural Networks"
            description="State-of-the-art neural networks for complex problem solving"
          />
          <FeatureCard
            icon={Lock}
            title="Secure & Private"
            description="Enterprise-grade security with end-to-end encryption"
          />
          <FeatureCard
            icon={Globe2}
            title="Global Scale"
            description="Deployed worldwide with low-latency response times"
          />
          <FeatureCard
            icon={Zap}
            title="Real-time Processing"
            description="Lightning-fast processing for immediate results"
          />
        </div>
      </div>

      {/* Demo Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Experience the Power of AI
              </h2>
              <p className="text-gray-600 mb-6">
                Our advanced AI platform provides intelligent solutions for businesses of all sizes. From natural language processing to complex data analysis, we've got you covered.
              </p>
              <ul className="space-y-4">
                {[
                  'Real-time data processing',
                  'Advanced analytics dashboard',
                  'Custom AI model training',
                  'API integration support'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
                alt="AI Visualization"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Nemo AI</h3>
              <p className="text-gray-400">
                Building the future of artificial intelligence, one innovation at a time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Features', 'Pricing', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <p className="text-gray-400 mb-4">
                Stay updated with our latest developments
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-1"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} Nemo AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;