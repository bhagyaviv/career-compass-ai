import React, { useState } from 'react';
import { MessageSquare, X, Send, Cpu } from 'lucide-react';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'System Online. Input processing queries regarding active career metrics.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', text: `Query parsed: processing optimized path profiles matching "${input}".` }]);
    }, 750);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open ? (
        <button onClick={() => setOpen(true)} className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-lg hover:bg-brand-500 transition-all border border-brand-400/20">
          <MessageSquare className="w-5 h-5" />
        </button>
      ) : (
        <div className="w-80 h-96 glass-panel border border-zinc-800 rounded-2xl shadow-2xl flex flex-col justify-between overflow-hidden">
          <div className="bg-zinc-900/80 p-3 border-b border-zinc-800 flex justify-between items-center">
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-400"><Cpu className="w-3.5 h-3.5" /> Core Interface Assistant</div>
            <button onClick={() => setOpen(false)} className="text-zinc-500 hover:text-white transition-colors"><X className="w-4 h-4" /></button>
          </div>

          <div className="p-4 flex-1 overflow-y-auto space-y-3.5">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] text-xs rounded-xl px-3 py-2 leading-relaxed ${msg.role === 'user' ? 'bg-brand-600 text-white' : 'bg-zinc-900 border border-zinc-800 text-zinc-300'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-2 border-t border-zinc-900 bg-zinc-950/60 flex gap-1.5">
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Query platform assistant..." className="flex-1 bg-zinc-900 border border-zinc-800 text-xs rounded-xl px-3 py-1.5 text-white focus:outline-none focus:border-brand-500/50" />
            <button type="submit" className="p-1.5 rounded-xl bg-brand-600 text-white hover:bg-brand-500 transition-all"><Send className="w-3.5 h-3.5" /></button>
          </form>
        </div>
      )}
    </div>
  );
}