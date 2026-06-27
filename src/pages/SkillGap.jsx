import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { skillGapData } from '../utils/sampleData';
import { Code, Layers, Zap } from 'lucide-react';

export default function SkillGap() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Capability Gap Matrix</h1>
        <p className="text-xs text-zinc-400">Map active telemetry performance data against live criteria frameworks.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass-panel p-5 rounded-2xl lg:col-span-2 flex flex-col justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">Telemetry Structural Contrast</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={skillGapData}>
                <PolarGrid stroke="#27272a" />
                <PolarAngleAxis dataKey="subject" stroke="#a1a1aa" fontSize={11} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#27272a" fontSize={10} />
                <Radar name="User Profile Assets" dataKey="A" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.25} />
                <Radar name="Target Matrix Profile" dataKey="B" stroke="#a1a1aa" fill="#a1a1aa" fillOpacity={0.05} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-4 justify-center text-xs mt-2">
            <div className="flex items-center gap-1.5 text-brand-400">🎁 <span className="text-zinc-400">Active Identity Capacity</span></div>
            <div className="flex items-center gap-1.5 text-zinc-500">⬜ <span className="text-zinc-400">Baseline Target Target Profile</span></div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass-panel p-5 rounded-2xl">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Isolated Critical Path</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="p-2 rounded-lg bg-red-500/10 text-red-400"><Layers className="w-4 h-4" /></div>
                <div>
                  <h4 className="text-xs font-medium text-white">System Architecture</h4>
                  <p className="text-[10px] text-zinc-500">System latency gap: -45% criteria metrics</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400"><Code className="w-4 h-4" /></div>
                <div>
                  <h4 className="text-xs font-medium text-white">Cloud Deployments</h4>
                  <p className="text-[10px] text-zinc-500">System latency gap: -50% criteria metrics</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl bg-gradient-to-br from-brand-900/10 to-transparent border-brand-500/20">
            <div className="flex items-center gap-2 text-brand-400 mb-2"><Zap className="w-4 h-4" /> <h4 className="text-xs font-semibold uppercase tracking-wider">Suggested Fix Strategy</h4></div>
            <p className="text-xs text-zinc-400 leading-relaxed">Your profile lacks isolated structural verification data. Resolve this instantly by verifying the advanced deployment framework module node.</p>
          </div>
        </div>
      </div>
    </div>
  );
}