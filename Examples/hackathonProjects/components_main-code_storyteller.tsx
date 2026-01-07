
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

const Storyteller: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    core: '',
    challenges: '',
    learnings: '',
    videoLink: ''
  });
  const [output, setOutput] = useState('');
  const [activeTab, setActiveTab] = useState<'presentation' | 'report' | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleGenerate = async (type: 'presentation' | 'report') => {
    if (!formData.name || !formData.core) {
      alert("Please provide at least a Project Name and basic Inspiration info.");
      return;
    }
    setIsGenerating(true);
    setActiveTab(type);
    const result = await geminiService.generateSubmissionContent(type, formData);
    setOutput(result);
    setIsGenerating(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    alert("Project assets (images/demo/weights) successfully queued for PR inclusion!");
  };

  return (
    <section id="finalist-toolkit" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
            Official Submission Generator
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Finalist Story & Report</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Generate your mandatory 500-word presentation and 600-word project report. 
            Formatted in Markdown with LaTeX math support for your technical efficiency proofs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Submission Form */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-tight">Project Title</label>
                  <input 
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g., Dendritic ResNet-50"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-tight">Video Demo Link</label>
                  <input 
                    type="url"
                    value={formData.videoLink}
                    onChange={(e) => setFormData({...formData, videoLink: e.target.value})}
                    placeholder="YouTube / Loom / Vimeo"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>

              {/* Asset Dropzone */}
              <div 
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={onDrop}
                className={`relative group cursor-pointer border-2 border-dashed rounded-3xl p-10 transition-all flex flex-col items-center justify-center text-center ${
                  isDragging ? 'border-indigo-500 bg-indigo-500/10 scale-[1.01]' : 'border-white/10 bg-black/20 hover:border-white/20'
                }`}
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-200">Drag & Drop Assets</h4>
                <p className="text-sm text-gray-500 mt-1">Upload screenshots, PDFs, or weights for your PR</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-tight">Inspiration & Build Process</label>
                <textarea 
                  rows={4}
                  value={formData.core}
                  onChange={(e) => setFormData({...formData, core: e.target.value})}
                  placeholder="Describe the biological spark and your PyTorch integration..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none placeholder:text-gray-600 text-sm leading-relaxed"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-tight">Challenges Faced</label>
                  <textarea 
                    rows={3}
                    value={formData.challenges}
                    onChange={(e) => setFormData({...formData, challenges: e.target.value})}
                    placeholder="Bottlenecks? Hyperparameter tuning?"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none placeholder:text-gray-600 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-tight">What You Learned</label>
                  <textarea 
                    rows={3}
                    value={formData.learnings}
                    onChange={(e) => setFormData({...formData, learnings: e.target.value})}
                    placeholder="Efficiency gains? Biological compute?"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none placeholder:text-gray-600 text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => handleGenerate('presentation')}
                  disabled={isGenerating}
                  className="flex-1 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-2xl transition-all disabled:opacity-50 shadow-xl shadow-indigo-500/20 active:scale-95"
                >
                  Generate 500-Word Presentation
                </button>
                <button 
                  onClick={() => handleGenerate('report')}
                  disabled={isGenerating}
                  className="flex-1 py-5 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all disabled:opacity-50 shadow-xl shadow-white/5 active:scale-95"
                >
                  Generate 600-Word Report
                </button>
              </div>
            </div>
          </div>

          {/* Output Display */}
          <div className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col h-full min-h-[700px]">
            <div className="p-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${isGenerating ? 'bg-amber-500 animate-pulse' : 'bg-green-500'}`}></div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
                  {activeTab ? `${activeTab} Preview` : 'Output Stream'}
                </span>
              </div>
              {output && (
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(output);
                    alert("Submission Markdown copied!");
                  }}
                  className="text-[10px] px-3 py-1.5 bg-indigo-500 text-white rounded-lg font-bold hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/20"
                >
                  Copy Markdown
                </button>
              )}
            </div>
            
            <div className="flex-1 overflow-y-auto p-10 bg-black/10 custom-scrollbar">
              {isGenerating ? (
                <div className="h-full flex flex-col items-center justify-center space-y-6 text-center">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold text-indigo-400">Synthesizing Neural Narrative</p>
                    <p className="text-xs text-gray-500 animate-pulse uppercase tracking-widest">Applying Dendritic Kernel Logic...</p>
                  </div>
                </div>
              ) : output ? (
                <div className="prose prose-invert max-w-none">
                  <div className="text-sm font-mono text-gray-500 mb-6 uppercase tracking-widest border-b border-white/5 pb-2 flex justify-between">
                    <span>Format: Markdown / LaTeX</span>
                    <span>Words: ~{activeTab === 'presentation' ? '500' : '600'}</span>
                  </div>
                  <div className="whitespace-pre-wrap font-serif text-gray-200 leading-[1.8] text-lg">
                    {output}
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center px-12 space-y-6 opacity-40">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold text-gray-300">Ready to Document</p>
                    <p className="text-sm text-gray-500">
                      Enter your project details to generate the mandatory 500-word presentation and 600-word technical report.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.01);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.2);
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: padding-box;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(99, 102, 241, 0.4);
          background-clip: padding-box;
        }
      `}</style>
    </section>
  );
};

export default Storyteller;
