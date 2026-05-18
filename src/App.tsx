import React from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { VerbatimSection } from './components/VerbatimSection';
import { ContactSection } from './components/ContactSection';
import { SearchOverlay } from './components/SearchOverlay';
import { SolutionsDirectory } from './components/SolutionsDirectory';
import { Pricing } from './components/Pricing';
import { AIWorkflow } from './components/AIWorkflow';
import { AIAssistant } from './components/AIAssistant';
import { AIFeatures } from './components/AIFeatures';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { BACKGROUND_GIF, VERBATIM_CONTENT } from './constants';

function App() {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 overflow-x-hidden">
      {/* Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 z-[110] origin-left"
        style={{ scaleX }}
      />

      <Navigation onSearchOpen={() => setIsSearchOpen(true)} />

      <main>
        <Hero />
        
        <AIWorkflow />

        <AIFeatures />

        <VerbatimSection />
        
        <SolutionsDirectory />
        
        <section className="py-24 bg-slate-900/50 border-y border-white/5 relative overflow-hidden" id="voice">
          <div className="absolute inset-0 bg-blue-500/5 pulse" />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                    Machine Intelligence
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold rtl leading-tight">الروبوتات الصوتية والذكاء الاصطناعي</h2>
                  <p className="text-xl text-slate-400 rtl leading-relaxed">
                    نقدم حلولاً متطورة تشمل روبوتات التدريب الصوتي التي تحاكي السيناريوهات الحقيقية، مما يوفر بيئة تدريب آمنة وفعالة لموظفيك وتحليل دقيق للأداء.
                  </p>
                  <div className="flex flex-wrap gap-4 rtl">
                    <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-slate-300 font-medium">تدريب الموظفين المتقدم</div>
                    <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-slate-300 font-medium">تحليل الأداء اللحظي</div>
                    <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-slate-300 font-medium">أتمتة العمليات المعقدة</div>
                  </div>
                </motion.div>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-[2rem] blur-2xl group-hover:opacity-100 opacity-50 transition-opacity" />
                  <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-slate-800">
                    <img 
                      src={BACKGROUND_GIF}
                      alt="AI Intelligence"
                      className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  </div>
                </div>
             </div>
          </div>
        </section>

        <Pricing />

        <section className="py-24 bg-black border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">Enterprise Infrastructure</h2>
            <div className="p-12 glass rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <p className="text-xl text-slate-300 rtl leading-relaxed whitespace-pre-wrap font-medium">
                {VERBATIM_CONTENT.metaLlama}
              </p>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <footer className="py-12 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">E</div>
              <span className="font-bold tracking-widest text-slate-200">ELHAWARY BROTHERS</span>
           </div>
           <p className="text-xs text-slate-500 font-mono tracking-widest uppercase">
             © 2026 AI Marketing Solutions | Built for Enterprise Excellence
           </p>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
}

export default App;
