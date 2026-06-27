import React, { useState } from 'react';
import { UploadCloud, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

export default function ResumeAnalyzer() {
  const [analyzed, setAnalyzed] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Resume Vector Parser</h1>
        <p className="text-xs text-zinc-400">Optimize documents dynamically against ATS validation token systems.</p>
      </div>

      {!analyzed ? (
        <div className="glass-panel border-2 border-dashed border-zinc-800 rounded-2xl p-12 text-center hover:border-brand-500/40 transition-all cursor-pointer" onClick={() => setAnalyzed(true)}>
          <UploadCloud className="w-12 h-12 text-zinc-500 mx-auto mb-4" />
          <p className="text-sm font-medium text-zinc-200">Ingest compiled resume profiles (PDF, DOCX)</p>
          <p className="text-xs text-zinc-500 mt-1">Files drop inside private local sandboxed environments</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl text-center">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Compiled Target Score</h3>
            <div className="text-6xl font-bold text-brand-400 my-4">84%</div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">Production Grade</span>
          </div>

          <div className="glass-panel p-6 rounded-2xl md:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Suggested Structuring Corrections</h3>
            <div className="space-y-2.5">
              {[
                { icon: AlertTriangle, color: "text-amber-400", bg: "bg-amber-500/5", text: "Low keyword saturation density identified for: 'Distributed Systems Architecture'." },
                { icon: CheckCircle, color: "text-emerald-400", bg: "bg-emerald-500/5", text: "Chronological employment hierarchy layout passes layout model verification perfectly." },
                { icon: AlertTriangle, color: "text-brand-400", bg: "bg-brand-500/5", text: "Isolate passive experience summaries; use precise metric markers to show business impact." }
              ].map((item, i) => (
                <div key={i} className={`flex items-start gap-3 p-3 rounded-xl ${item.bg} border border-zinc-800/60`}>
                  <item.icon className={`w-4 h-4 ${item.color} shrink-0 mt-0.5`} />
                  <p className="text-xs text-zinc-300 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <button onClick={() => setAnalyzed(false)} className="mt-2 text-xs font-medium text-brand-400 hover:underline flex items-center gap-1">Reset Matrix Stream <ArrowRight className="w-3 h-3" /></button>
          </div>
        </div>
      )}
    </div>
  );
}