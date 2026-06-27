import React from 'react';
import { Award, Zap, Trophy, ShieldAlert } from 'lucide-react';

export default function ProgressTracker() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Performance Matrix Platform</h1>
        <p className="text-xs text-zinc-400">Track task accomplishments and systematic leveling structures.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="glass-panel p-5 rounded-2xl flex items-center gap-4">
          <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400"><Trophy className="w-6 h-6" /></div>
          <div>
            <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Total Experience Points</p>
            <h3 className="text-2xl font-bold text-white">4,850 XP</h3>
          </div>
        </div>
        
        <div className="glass-panel p-5 rounded-2xl flex items-center gap-4">
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400"><Zap className="w-6 h-6" /></div>
          <div>
            <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Active System Multiplier</p>
            <h3 className="text-2xl font-bold text-white">1.4x Active</h3>
          </div>
        </div>
      </div>

      <div className="glass-panel p-5 rounded-2xl">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">Earned Verification Badges</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['System Parser Core', 'Deployment Infrastructure Master', 'Query Design Strategist', 'Architecture Engineering Elite'].map((badge, i) => (
            <div key={i} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center space-y-2 group hover:border-brand-500/30 transition-all">
              <Award className="w-8 h-8 text-brand-400 mx-auto group-hover:scale-110 transition-transform" />
              <p className="text-xs font-medium text-zinc-300 leading-tight">{badge}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}