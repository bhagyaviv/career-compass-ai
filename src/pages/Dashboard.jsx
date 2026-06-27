import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Target, Flame, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const analyticsData = [
  { name: 'W1', score: 62 }, { name: 'W2', score: 68 }, { name: 'W3', score: 74 }, { name: 'W4', score: 81 }, { name: 'W5', score: 89 }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Telemetry Command Center</h1>
          <p className="text-xs text-zinc-400">Continuous system health evaluation and skill metrics visualization.</p>
        </div>
      </div>

      {/* Topline Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="glass-panel p-5 rounded-2xl relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Core Index Rating</p>
              <h3 className="text-3xl font-bold mt-2">89/100</h3>
            </div>
            <div className="p-2.5 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400"><Target className="w-5 h-5" /></div>
          </div>
          <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-400"><ArrowUpRight className="w-3.5 h-3.5" /> +4.2% optimized vector alignment this cycle</div>
        </div>

        <div className="glass-panel p-5 rounded-2xl">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Pipeline Execution Streak</p>
              <h3 className="text-3xl font-bold mt-2">14 Cycles</h3>
            </div>
            <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400"><Flame className="w-5 h-5" /></div>
          </div>
          <p className="mt-4 text-xs text-zinc-400">Next validation milestone due inside 20 hours.</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Autonomous Core Insights</p>
              <h3 className="text-3xl font-bold mt-2">3 Flagged</h3>
            </div>
            <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400"><Cpu className="w-5 h-5" /></div>
          </div>
          <p className="mt-4 text-xs text-brand-400 underline cursor-pointer">Refactor AWS container networking modules</p>
        </div>
      </div>

      {/* Analytics & System Event Logging Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass-panel p-5 rounded-2xl lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-6">Employability Index Track</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analyticsData}>
                <defs>
                  <linearGradient id="scoreGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#18181b" />
                <XAxis dataKey="name" stroke="#52525b" fontSize={11} />
                <YAxis stroke="#52525b" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a', color: '#fff' }} />
                <Area type="monotone" dataKey="score" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#scoreGlow)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">Pipeline Execution Log</h3>
          <div className="space-y-4">
            {[
              { text: "Optimized ATS validation schema vectors", time: "2 hours ago" },
              { text: "Completed System Architecture interview run", time: "Yesterday" },
              { text: "Integrated Redis cluster node mock configurations", time: "3 days ago" }
            ].map((log, index) => (
              <div key={index} className="flex gap-3 items-start border-l border-zinc-800 pl-4 relative">
                <div className="absolute w-2 h-2 rounded-full bg-brand-500 -left-[4.5px] top-1.5"></div>
                <div>
                  <p className="text-xs text-zinc-200 font-medium">{log.text}</p>
                  <span className="text-[10px] text-zinc-500">{log.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}