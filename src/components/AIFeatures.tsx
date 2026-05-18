import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, UserPlus, PhoneForwarded, BarChart4, Globe2, BrainCircuit } from 'lucide-react';
import { VERBATIM_CONTENT } from '../constants';

const features = [
  {
    title: 'AI Menu للمطاعم',
    desc: VERBATIM_CONTENT.aiMenu,
    detail: VERBATIM_CONTENT.aiMenuDetail,
    icon: <Utensils />,
    color: 'emerald'
  },
  {
    title: 'مساعد التوظيف الذكي',
    desc: VERBATIM_CONTENT.recruitmentBot,
    detail: VERBATIM_CONTENT.recruitmentDetail,
    icon: <UserPlus />,
    color: 'blue'
  },
  {
    title: 'روبوت المكالمات الباردة',
    desc: VERBATIM_CONTENT.coldCallingBot,
    detail: 'أتمتة كاملة لعمليات البيع عبر الهاتف والوصول للآلاف يومياً.',
    icon: <PhoneForwarded />,
    color: 'indigo'
  },
  {
    title: 'تحليلات الأداء المتطورة',
    desc: 'مراقبة دقيقة لكل مؤشرات الأداء KPIs عبر الذكاء الاصطناعي.',
    detail: VERBATIM_CONTENT.voiceBotKPIs,
    icon: <BarChart4 />,
    color: 'amber'
  },
  {
    title: 'لغات متعددة ودعم عالمي',
    desc: 'دعم كامل لمختلف اللغات واللهجات لاستهداف الجمهور العالمي.',
    detail: 'روبوتاتنا مجهزة للتعامل مع لغات ولهجات متعددة بكفاءة عالية.',
    icon: <Globe2 />,
    color: 'rose'
  },
  {
    title: 'حلول مخصصة Tailored',
    desc: 'أنظمة أتمتة مصممة خصيصاً لتناسب احتياجات كيانك التجاري.',
    detail: VERBATIM_CONTENT.tailoredMarketingSolutions,
    icon: <BrainCircuit />,
    color: 'purple'
  }
];

export const AIFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-black" id="features">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Intelligent Ecosystem</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Explore the advanced AI modules we integrate into your business infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-10 glass-dark rounded-[2.5rem] overflow-hidden border-white/5 hover:border-white/10 transition-all"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${feature.color}-500/10 blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-${feature.color}-500/20 flex items-center justify-center text-${feature.color}-400 mb-8 group-hover:scale-110 transition-transform`}>
                {React.cloneElement(feature.icon as React.ReactElement, { size: 28 })}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 rtl">{feature.title}</h3>
              <p className="text-slate-400 mb-6 rtl leading-relaxed line-clamp-2">
                {feature.desc}
              </p>
              
              <div className="pt-6 border-t border-white/5">
                <p className="text-sm text-slate-500 rtl leading-relaxed line-clamp-3 italic">
                   {feature.detail.slice(0, 150)}...
                </p>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button className="text-blue-400 font-bold text-sm hover:text-blue-300 transition-colors flex items-center gap-2 rtl">
                  <span>اقرأ المزيد</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
