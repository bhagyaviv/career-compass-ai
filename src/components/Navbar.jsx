import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Compass, Terminal } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-violet-400 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">CareerCompass<span className="text-brand-500">.AI</span></span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Sign In</Link>
          <button onClick={() => navigate('/dashboard')} className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none">
            <span className="absolute inset-0 bg-gradient-to-r from-brand-500 to-violet-500 rounded-xl transition-all duration-300 group-hover:opacity-90"></span>
            <div className="px-4 py-2 relative bg-zinc-950 rounded-[11px] transition-all duration-300 group-hover:bg-transparent flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-brand-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-white">Console Dashboard</span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}