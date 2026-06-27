import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Cpu, Zap, Star } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-brand-500/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0,transparent_55%)]"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-brand-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Next-Gen AI Career Infrastructure
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-200 to-zinc-500 max-w-4xl mx-auto leading-[1.1]">
            Empowering Students with AI-Driven Career Guidance
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Architect your professional roadmap. Optimize deep resume vectors, isolate complex skill fragmentation, and interface with predictive interview models.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate('/dashboard')} className="px-6 py-3 rounded-xl bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center gap-2">
              Deploy Dashboard <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium text-sm hover:bg-zinc-800 transition-all">
              Inspect Architecture
            </button>
          </div>
        </div>
      </section>

      {/* Metrics Ledger */}
      <section className="max-w-7xl mx-auto px-4 py-12 border-y border-zinc-900 bg-zinc-950">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[["94.2%", "ATS Validation Rate"], ["14M+", "Evaluation Tokens Provided"], ["220k+", "Engineered Pipelines"], ["4.9/5", "System Feedback Integrity"]].map(([stat, label], i) => (
            <div key={i}>
              <div className="text-3xl font-bold tracking-tight text-white">{stat}</div>
              <div className="text-xs font-medium text-zinc-500 mt-1 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Systems Integration */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Engineered Suite Features</h2>
          <p className="mt-4 text-zinc-400 text-sm">Everything required to interface with modern global talent telemetry.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Cpu, title: "Neural Profile Verification", desc: "Isolates formatting variables and processes keyword entity values dynamically." },
            { icon: Zap, title: "Predictive Capability Analysis", desc: "Compiles operational matrices targeting direct gaps between dynamic job criteria." },
            { icon: Shield, title: "Real-time AI Simulation", desc: "LLM instances mimic technical and conversational stressors with telemetry grading." }
          ].map((feat, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl border border-zinc-800/80 hover:border-brand-500/30 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 mb-4 group-hover:border-brand-500/20">
                <feat.icon className="w-5 h-5 text-brand-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feat.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}