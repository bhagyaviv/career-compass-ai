import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, BarChart3, Map, Briefcase, Video, Award, User, ShieldAlert, LogOut } from 'lucide-react';

const menuItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/resume', label: 'Resume Analyzer', icon: FileText },
  { path: '/skills', label: 'Skill Gap Matrix', icon: BarChart3 },
  { path: '/roadmap', label: 'AI Roadmap', icon: Map },
  { path: '/internships', label: 'AI Openings', icon: Briefcase },
  { path: '/interview', label: 'Mock Simulation', icon: Video },
  { path: '/tracker', label: 'Performance Matrix', icon: Award },
  { path: '/profile', label: 'Identity Profile', icon: User },
  { path: '/admin', label: 'Admin Terminal', icon: ShieldAlert },
];

export default function Sidebar() {
  return (
    <aside className="w-64 fixed left-0 top-16 bottom-0 border-r border-zinc-800 bg-zinc-950/40 backdrop-blur-md p-4 flex flex-col justify-between">
      <div className="space-y-1.5">
        <div className="px-3 mb-4"><span className="text-[10px] font-semibold tracking-widest text-zinc-500 uppercase">Systems Operations</span></div>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${isActive ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 border border-transparent'}`}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </NavLink>
          );
        })}
      </div>
      <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-500 hover:text-red-400 hover:bg-red-500/5 transition-all group">
        <LogOut className="w-4 h-4" />
        Terminate Session
      </button>
    </aside>
  );
}