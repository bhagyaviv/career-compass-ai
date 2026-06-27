import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Chatbot from './components/Chatbot';

// Pages Import Engine
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import ResumeAnalyzer from './pages/ResumeAnalyzer';
import SkillGap from './pages/SkillGap';
import RoadmapGenerator from './pages/RoadmapGenerator';
import Internships from './pages/Internships';
import MockInterview from './pages/MockInterview';
import ProgressTracker from './pages/ProgressTracker';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';

function LayoutWrapper({ children }) {
  const location = useLocation();
  const fullScreenPaths = ['/', '/login'];
  const isFullScreen = fullScreenPaths.includes(location.pathname);

  if (isFullScreen) return <>{children}</>;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Structural Header Wrapper */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-zinc-950 border-b border-zinc-900 flex items-center px-6 z-40 justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center font-bold text-xs">C</div>
          <span className="font-bold text-sm tracking-tight text-white">CareerCompass<span className="text-brand-500">.AI</span></span>
        </div>
        <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700"></div>
      </header>

      <Sidebar />
      
      <main className="pl-64 pt-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-8 py-8">
          {children}
        </div>
      </main>
      
      <Chatbot />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resume" element={<ResumeAnalyzer />} />
          <Route path="/skills" element={<SkillGap />} />
          <Route path="/roadmap" element={<RoadmapGenerator />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/interview" element={<MockInterview />} />
          <Route path="/tracker" element={<ProgressTracker />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}