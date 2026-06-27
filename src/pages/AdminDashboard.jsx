import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Users, CreditCard, Activity, ShieldAlert } from 'lucide-react';

const telemetryOverview = [
  { day: 'Mon', active: 1200 }, { day: 'Tue', active: 1850 }, { day: 'Wed', active: 2400 }, { day: 'Thu', active: 2100 }, { day: 'Fri', active: 3100 }
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-red-400 bg-red-500/5 border border-red-500/10 p-3 rounded-xl max-w-md">
        <ShieldAlert className="w-4 h-4 shrink-0" />
        <span className="text-xs font-medium">System Terminal Elevated Privileges Active</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {[
          { icon: Users, label: "Total Platform Registrations", val: "18,491 Nodes" },
          { icon: Activity, label: "Active Evaluation Queries", val: "4.1M calls/sec" },
          { icon: CreditCard, label: "MRR Pipeline Tracking", val: "$42,910 USD" }
        ].map((card, i) => (
          <div key={i} className="glass-panel p-5 rounded-2xl space-y-3">
            <div className="text-zinc-500"><card.icon className="w-4 h-4" /></div>
            <div>
              <p className="text-[10px] font-semibold tracking-wider uppercase text-zinc-500">{card.label}</p>
              <h3 className="text-xl font-bold mt-1 text-zinc-100">{card.val}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-panel p-5 rounded-2xl">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-6">Global Evaluation Activity Streams</h3>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={telemetryOverview}>
              <CartesianGrid strokeDasharray="3 3" stroke="#18181b" />
              <XAxis dataKey="day" stroke="#52525b" fontSize={11} />
              <YAxis stroke="#52525b" fontSize={11} />
              <Bar dataKey="active" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}