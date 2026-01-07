
import React from 'react';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Advisor from './components/Advisor';
import InfoCards from './components/InfoCards';
import Storyteller from './components/Storyteller';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-6 py-3 rounded-full border border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center font-black">P</div>
            <span className="font-bold text-lg tracking-tight hidden sm:block">Perforated Hub</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm font-medium text-gray-400">
            <a href="#schedule" className="hover:text-white transition-colors">Schedule</a>
            <a href="#advisor" className="hover:text-white transition-colors">AI Advisor</a>
            <a href="#finalist-toolkit" className="hover:text-white transition-colors">Storyteller</a>
            <a href="https://github.com/PerforatedAI/PerforatedAI" target="_blank" className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">Submit PR</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        
        {/* Core Concept Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Dendrites?</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Standard artificial neurons simplify computation into a single dot product. Biological dendrites perform complex non-linear operations *before* the signal ever reaches the soma. By mimicking this architecture, we create models that require 10x less memory while maintaining superior accuracy.
            </p>
          </div>
        </section>

        <section id="schedule">
          <Schedule />
        </section>

        <Advisor />

        <Storyteller />
        
        <InfoCards />

        {/* Requirements Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto glass-card p-10 rounded-3xl border border-purple-500/20 bg-purple-500/5">
            <h2 className="text-3xl font-bold mb-6">Submission Requirements</h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-4">
                <span className="text-purple-500 font-bold">01.</span>
                <span>Submit as a Pull Request to the <a href="https://github.com/PerforatedAI/PerforatedAI" className="text-purple-400 hover:underline">Official Repository</a>.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-purple-500 font-bold">02.</span>
                <span>Use existing PyTorch project (don't build from scratch).</span>
              </li>
              <li className="flex gap-4">
                <span className="text-purple-500 font-bold">03.</span>
                <span>Include Weights & Biases report showing performance gains.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-purple-500 font-bold">04.</span>
                <span>Follow the <a href="https://github.com/PerforatedAI/PerforatedAI/tree/main/Examples/hackathonProjects/mnist-example-submission" className="text-purple-400 hover:underline">Example Format</a> for documentation.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
