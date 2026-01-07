
import React from 'react';

const Schedule: React.FC = () => {
  const dates = [
    { 
      date: 'Oct 23', 
      title: 'Hacking Day', 
      events: [
        '6:30 PM - Welcome & Networking',
        '7:00 PM - Dinner & Dendritic Presentation',
        '8:00 PM - Hacking Session'
      ],
      active: true
    },
    { 
      date: 'Oct 24 - Jan 4', 
      title: 'Experiments Period', 
      events: [
        'Run W&B Hyperparameter Sweeps',
        'Analyze model performance',
        'Optimize compute efficiency'
      ],
      active: false
    },
    { 
      date: 'Jan 5', 
      title: 'Final Deadline', 
      events: [
        'PR Submissions Due on GitHub',
        'Documentation check'
      ],
      active: false
    },
    { 
      date: 'Jan 8', 
      title: 'Grand Finale', 
      events: [
        'Online Wrap-up Session',
        'Awarding $18,500 in Prizes'
      ],
      active: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Hackathon Roadmap</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {dates.map((item, idx) => (
            <div key={idx} className={`relative p-6 rounded-2xl glass-card border transition-all hover:-translate-y-1 ${item.active ? 'border-purple-500/50 bg-purple-500/5' : 'border-white/5'}`}>
              <div className="text-purple-400 font-bold mb-2">{item.date}</div>
              <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
              <ul className="space-y-3">
                {item.events.map((e, i) => (
                  <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
                    <span className="mt-1 w-1 h-1 rounded-full bg-gray-700 shrink-0"></span>
                    {e}
                  </li>
                ))}
              </ul>
              {idx < dates.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
