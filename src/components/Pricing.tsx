import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Building, Crown } from 'lucide-react';

const tiers = [
  {
    name: 'الباقة البرونزية (Starter)',
    price: '2,500 ج.م',
    description: 'مثالية للشركات الناشئة التي تريد دخول عالم الأتمتة.',
    features: [
      'موقع إلكتروني ذكي لجلب العملاء',
      'شات بوت للرد على الأسئلة المتكررة',
      'حملات إيميل باردة (Cold Email)',
      'تحليلات الأداء الأساسية',
      'دعم عبر الواتساب'
    ],
    icon: <Zap className="w-6 h-6" />,
    color: 'blue'
  },
  {
    name: 'الباقة الفضية (Professional)',
    price: '7,500 ج.م',
    description: 'حلول متقدمة للنمو السريع والأتمتة الكاملة.',
    features: [
      'روبوت مبيعات صوتي مخصص',
      'أتمتة عملية التوظيف بالكامل',
      'تحسين محركات البحث SEO بالذكاء الاصطناعي',
      'تكامل CRM مع WhatsApp',
      'جلسة استراتيجية أسبوعية'
    ],
    highlight: true,
    icon: <Crown className="w-6 h-6" />,
    color: 'emerald'
  },
  {
    name: 'الباقة الذهبية (Enterprise)',
    price: '15,000 ج.م',
    description: 'أنظمة ذكاء اصطناعي شاملة للمؤسسات الكبيرة.',
    features: [
      'روبوتات مخصصة لقطاعات مختلفة',
      'تدريب نماذج LLM خاصة بالشركة',
      'أتمتة العمليات المعقدة والمنيو الذكي',
      'دعم فني مخصص 24/7',
      'مهندس حلول مخصص لإدارة مشروعك'
    ],
    icon: <Building className="w-6 h-6" />,
    color: 'indigo'
  }
];

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950" id="pricing">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Invest in Future Scale</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Choose a roadmap that aligns with your business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-3xl border ${
                tier.highlight 
                  ? 'bg-white/10 border-emerald-500/50 shadow-2xl shadow-emerald-500/10' 
                  : 'bg-white/5 border-white/10'
              } flex flex-col`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-black text-xs font-bold rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className={`w-12 h-12 rounded-2xl bg-${tier.color}-500/20 flex items-center justify-center text-${tier.color}-400 mb-6`}>
                {tier.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-slate-400">/mo</span>}
              </div>
              <p className="text-slate-400 mb-8">{tier.description}</p>

              <div className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-slate-300 text-sm leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                tier.highlight
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}>
                Schedule Consultation
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
