import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<{role: 'ai' | 'user', text: string}[]>([
    { role: 'ai', text: 'Hello! I am your AI Business Architect. How can I help you automate your growth today?' }
  ]);
  const [input, setInput] = React.useState('');
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    
    // Simple mock response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: 'That sounds like a great plan. Our AI voice bots can handle up to 10,000 concurrent calls to scale your outreach instantly.' }]);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/20 z-50 transition-all hover:scale-110 active:scale-95"
      >
        <MessageSquare />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-28 right-8 w-96 max-w-[calc(100vw-4rem)] h-[500px] glass-dark rounded-3xl overflow-hidden shadow-2xl z-50 flex flex-col"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Bot />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">AI Business Consultant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold">Live Integration</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg text-slate-400 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-6 space-y-4 custom-scrollbar bg-black/20"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${
                    msg.role === 'ai' ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-700 text-slate-100'
                  }`}>
                    {msg.role === 'ai' ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed max-w-[80%] ${
                    msg.role === 'ai' 
                      ? 'bg-white/10 text-white border border-white/5 rounded-tl-none' 
                      : 'bg-blue-600 text-white shadow-lg rounded-tr-none'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-4 bg-white/5 border-t border-white/10">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about AI automation..."
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                />
                <button
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-500 hover:text-blue-400 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
