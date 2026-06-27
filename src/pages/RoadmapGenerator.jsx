import React from 'react';
import { sampleRoadmap } from '../utils/sampleData';
import { CheckCircle2, Circle, Milestone } from 'lucide-react';

export default function RoadmapGenerator() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dynamic Engineering Path</h1>
        <p className="text-xs text-zinc-400">Chronological training node generation using real-time career profiles.</p>
      </div>

      <div className="max-w-3xl space-y-6 relative before:absolute before:inset-y-0 before:left-6 before:w-[1px] before:bg-zinc-850">
        {sampleRoadmap.map((stage, idx) => (
          <div key={idx} className="relative pl-14 group">
            <div className="absolute left-3 top-1 z-10 flex items-center justify-center -translate-x-1/2 bg-zinc-950 p-1">
              {stage.status === 'completed' ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              ) : stage.status === 'current' ? (
                <div className="w-6 h-6 rounded-full bg-brand-500/20 border border-brand-500 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></div></div>
              ) : (
                <Circle className="w-6 h-6 text-zinc-700" />
              )}
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-zinc-800 group-hover:border-zinc-700 transition-all">
              <div className="flex items-center justify-between gap-4 mb-3">
                <h3 className="text-sm font-semibold tracking-tight text-zinc-200">{stage.month}</h3>
                <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded border ${stage.status === 'completed' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : stage.status === 'current' ? 'bg-brand-500/10 border-brand-500/20 text-brand-400' : 'bg-zinc-900 border-zinc-800 text-zinc-500'}`}>{stage.status}</span>
              </div>
              <ul className="space-y-2">
                {stage.items.map((item, i) => (
                  <li key={i} className="text-xs text-zinc-400 flex items-center gap-2"><Milestone className="w-3 h-3 text-zinc-600" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
