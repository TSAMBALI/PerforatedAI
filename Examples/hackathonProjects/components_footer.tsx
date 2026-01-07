
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center font-black">P</div>
          <span className="font-bold text-xl tracking-tight">Perforated Hub</span>
        </div>
        
        <div className="flex gap-8 text-sm text-gray-500 font-medium">
          <a href="https://github.com/PerforatedAI/PerforatedAI" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://docs.google.com/document/d/1MJcxo7tTPXfAky8qrIPrav3WzR_tfdfUDPKpp1BDN_Y/edit?tab=t.0" className="hover:text-white transition-colors">Rules</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-xs text-gray-600">
          © {new Date().getFullYear()} Perforated AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
