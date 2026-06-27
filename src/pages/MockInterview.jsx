import React, { useState } from 'react';
import { Video, Mic, ShieldAlert, Cpu, CheckCircle } from 'lucide-react';

export default function MockInterview() {
  const [activeSession, setActiveSession] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">AI Interview Simulator</h1>
        <p className="text-xs text-zinc-400">LLM testing terminal evaluation environments mimicking strict technical vetting.</p>
      </div>

      {!activeSession ? (
        <div className="max-w-md glass-panel p-6 rounded-2xl space-y-4">
          <div className="h-40 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-600"><Video className="w-12 h-12" /></div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-200">Configure Simulation Parameters</h3>
            <p className="text-xs text-zinc-500 mt-0.5">Tests voice parameters, communication capability, and domain knowledge depth metrics.</p>
          </div>
          <button onClick={() => setActiveSession(true)} className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-medium text-xs transition-all">Instantiate Stream Session</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="glass-panel p-5 rounded-2xl lg:col-span-2 bg-zinc-900/60 flex flex-col justify-between h-96">
            <div className="flex justify-between items-center bg-zinc-950 p-3 rounded-xl border border-zinc-800"><div className="flex items-center gap-2 text-xs text-zinc-300"><Cpu className="w-4 h-4 text-brand-400" /> <span className="font-mono">Interrogator Instance node_04:</span> How do you approach eventual consistency architecture across database clusters?</div></div>
            <div className="flex justify-center gap-4 py-8"><div className="w-16 h-16 rounded-full bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 animate-pulse"><Mic className="w-6 h-6" /></div></div>
            <button onClick={() => setActiveSession(false)} className="w-full py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-all text-xs font-medium">Terminate Simulation Sandbox</button>
          </div>

          <div className="glass-panel p-5 rounded-2xl space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Real-time Telemetry Metrics</h3>
            {[['Articulation Factor', '88%'], ['Stress Coherence Index', '91%'], ['Core Domain Accuracy', '76%']].map(([label, val], i) => (
              <div key={i} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex justify-between items-center">
                <span className="text-xs text-zinc-400">{label}</span>
                <span className="text-xs font-bold text-brand-400">{val}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}