import React from 'react';
import { sampleJobs } from '../utils/sampleData';
import { Building2, MapPin, Calendar, Sparkles } from 'lucide-react';

export default function Internships() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end border-b border-zinc-900 pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">AI Targeted Targets Matrix</h1>
          <p className="text-xs text-zinc-400">Match open roles automatically based on profile capability analysis scores.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sampleJobs.map((job) => (
          <div key={job.id} className="glass-panel p-5 rounded-2xl border border-zinc-800 flex flex-col justify-between relative group hover:border-brand-500/40 transition-all">
            <div className="absolute top-4 right-4 bg-brand-500/10 text-brand-400 border border-brand-500/20 px-2.5 py-0.5 rounded-full text-[11px] font-medium flex items-center gap-1"><Sparkles className="w-3 h-3" /> {job.match}% match</div>
            
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 font-mono text-sm font-bold">{job.company[0]}</div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-200 mt-2">{job.title}</h3>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-1"><Building2 className="w-3.5 h-3.5 text-zinc-600" /> {job.company}</div>
              </div>
            </div>

            <div className="border-t border-zinc-900 mt-5 pt-4 space-y-2 text-xs text-zinc-500">
              <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {job.location}</div>
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Deadline: {job.deadline}</div>
              <button className="w-full mt-2 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium text-xs hover:bg-brand-600 hover:text-white hover:border-transparent transition-all">Initialize Application Flow</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}