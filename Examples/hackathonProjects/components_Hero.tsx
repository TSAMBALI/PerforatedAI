
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8 animate-pulse">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          $18,500 Prize Pool • Open Source Week
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Smarter. Smaller. <br />
          <span className="gradient-text">Dendritic Optimization</span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          The brain is more than just neurons. Join Perforated AI to unlock the power of biological dendrites in your PyTorch models.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#advisor"
            className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all hover:scale-105 neon-glow"
          >
            Ask the AI Advisor
          </a>
          <a 
            href="https://github.com/PerforatedAI/PerforatedAI"
            target="_blank"
            className="w-full sm:w-auto px-8 py-4 glass-card text-white font-bold rounded-xl transition-all hover:bg-white/10"
          >
            View Repository
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
