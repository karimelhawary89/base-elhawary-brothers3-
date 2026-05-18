import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, BarChart3, Users, Network, Target } from 'lucide-react';

const steps = [
  {
    title: 'Data Collection',
    desc: 'Automated scraping and skip tracing to identify high-intent leads.',
    icon: <Search />,
    color: 'blue'
  },
  {
    title: 'Content Engine',
    desc: 'AI generates hyper-personalized proposals and marketing assets.',
    icon: <PenTool />,
    color: 'emerald'
  },
  {
    title: 'Smart Outreach',
    desc: 'Voice bots and automated email sequences initiate the conversation.',
    icon: <Users />,
    color: 'indigo'
  },
  {
    title: 'Qualification',
    desc: 'Predictive scoring filters for genuine business opportunities.',
    icon: <Target />,
    color: 'amber'
  },
  {
    title: 'CRM Sync',
    desc: 'Seamless integration with your existing business workflow.',
    icon: <Network />,
    color: 'purple'
  },
  {
    title: 'Scale & Predict',
    desc: 'Real-time analytics drive continuous strategy optimization.',
    icon: <BarChart3 />,
    color: 'rose'
  }
];

export const AIWorkflow: React.FC = () => {
  return (
    <section className="py-24 bg-black" id="workflow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Operational Workflow</h2>
            <p className="text-xl text-slate-400">
              We don't just provide tools; we build end-to-end automated systems that handle the heavy lifting.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-slate-400 text-sm font-mono tracking-wider uppercase">
              Operational Depth
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-xl bg-${step.color}-500/20 flex items-center justify-center text-${step.color}-400 group-hover:scale-110 transition-transform shadow-lg shadow-${step.color}-500/10`}>
                  {step.icon}
                </div>
                {idx !== steps.length - 1 && (
                  <div className="w-px h-full bg-gradient-to-b from-white/10 to-transparent mt-4" />
                )}
              </div>
              
              <div className="pb-12">
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed max-w-sm">
                  {step.desc}
                </p>
              </div>
              
              <div className="absolute -left-4 top-0 text-white/5 text-8xl font-bold select-none -z-10 group-hover:text-white/10 transition-colors">
                {idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
