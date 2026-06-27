import React from 'react';
import { User, Shield, Key, Database } from 'lucide-react';

export default function Profile() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Identity Profile Matrix</h1>
        <p className="text-xs text-zinc-400">Manage user configuration data and active developer skills vectors.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl space-y-6 lg:col-span-2">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400"><User className="w-6 h-6" /></div>
            <div>
              <h3 className="text-base font-semibold text-white">Alex Mercer</h3>
              <p className="text-xs text-zinc-500 font-mono">ID: usr_0x7f4391b1aa4</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">Primary Domain Vector</label>
              <input type="text" readOnly value="Distributed Systems Engineer" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-300 focus:outline-none" />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-1.5">Configured Target Location</label>
              <input type="text" readOnly value="Remote / SF Available" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-300 focus:outline-none" />
            </div>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Security Parameters</h3>
          <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
            <span className="flex items-center gap-2"><Key className="w-3.5 h-3.5 text-zinc-500" /> MFA Authentication</span>
            <span className="text-emerald-400 font-medium">Verified Active</span>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
            <span className="flex items-center gap-2"><Database className="w-3.5 h-3.5 text-zinc-500" /> Local Encrypted Storage</span>
            <span className="text-brand-400 font-medium">9.4 GB Allocation</span>
          </div>
        </div>
      </div>
    </div>
  );
}