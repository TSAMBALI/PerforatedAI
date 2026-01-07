
import React from 'react';

const InfoCards: React.FC = () => {
  const judges = [
    { name: 'Rorry Brenner', org: 'Perforated AI', role: 'Founder' },
    { name: 'Mohammad Bakir', org: 'Weights & Biases', role: 'Machine Learning' },
    { name: 'Arisa Chelsea Ueno', org: 'DraperU Ventures', role: 'Investor' }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Judges */}
        <div>
          <h2 className="text-3xl font-bold mb-8">The Jury</h2>
          <div className="space-y-4">
            {judges.map((j, idx) => (
              <div key={idx} className="glass-card p-4 rounded-xl flex items-center gap-4 border border-white/5">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center font-bold text-purple-400">
                  {j.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{j.name}</div>
                  <div className="text-sm text-gray-500">{j.org} • {j.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prizes */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Prizes</h2>
          <div className="glass-card p-8 rounded-2xl border border-purple-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl group-hover:bg-purple-500/20 transition-all"></div>
            <div className="text-sm uppercase tracking-widest font-bold text-purple-500 mb-2">Total Pool</div>
            <div className="text-6xl font-bold mb-6 tracking-tighter">$18,500</div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Awarded for top projects demonstrating significant improvements in model efficiency and performance using Dendritic Optimization.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-300">Technical Innovation</span>
                <span className="text-purple-400 font-mono">Top Category</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-300">Efficiency Gains</span>
                <span className="text-purple-400 font-mono">Top Category</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-300">Open Source Impact</span>
                <span className="text-purple-400 font-mono">Top Category</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
