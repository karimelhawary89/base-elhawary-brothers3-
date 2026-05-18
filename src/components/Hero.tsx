import React from 'react';
import { motion } from 'framer-motion';
import { BACKGROUND_GIF, LOGO_GIF } from '../constants';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden" id="hero">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={BACKGROUND_GIF} 
          alt="Technical Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img 
            src={LOGO_GIF} 
            alt="ELHAWARY BROTHERS Logo" 
            className="w-48 h-48 mx-auto mb-6 rounded-3xl shadow-2xl shadow-blue-500/10 border border-white/5"
            referrerPolicy="no-referrer"
          />
          <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter" id="hero-title">
            <span className="text-gradient animate-gradient bg-[length:200%_auto]">
              ELHAWARY BROTHERS
            </span>
            <br />
            <span className="text-white">
              AI MARKETING SOLUTIONS
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-medium mb-12 rtl leading-relaxed max-w-3xl mx-auto" id="hero-subtitle">
            نحن نبني أنظمة الأتمتة المتقدمة وندمج حلول الذكاء الاصطناعي في صميم عملياتك التجارية لزيادة الكفاءة والنمو المستدام.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#workflow"
              className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
              id="hero-cta-primary"
            >
              استكشف خدماتنا
            </a>
            <a 
              href="#contact"
              className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all active:scale-95 backdrop-blur-sm"
              id="hero-cta-secondary"
            >
              استشارة مجانية
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
