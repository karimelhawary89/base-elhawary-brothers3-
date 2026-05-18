import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Star, Target, Zap, Search } from 'lucide-react';
import { VERBATIM_CONTENT } from '../constants';

const icons = {
  step1: <Target className="text-blue-400" />,
  step2: <Zap className="text-emerald-400" />,
  step3: <Search className="text-purple-400" />,
  step4: <Star className="text-amber-400" />,
};

export const VerbatimSection: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | null>('marketingGoal');

  const sections = [
    { id: 'marketingGoal', title: 'هدفنا التسويقي', content: VERBATIM_CONTENT.marketingGoal },
    { id: 'step1', title: 'الخطوة الأولى: الموقع الإلكتروني', content: VERBATIM_CONTENT.step1 },
    { id: 'step2', title: 'الخطوة الثانية: العرض الجذاب', content: VERBATIM_CONTENT.step2 },
    { id: 'step3', title: 'الخطوة الثالثة: قائمة العملاء', content: VERBATIM_CONTENT.step3 },
    { id: 'step4', title: 'الخطوة الرابعة: حملات التواصل', content: VERBATIM_CONTENT.step4 },
    { id: 'initialSummary', title: 'حصاد الخطوات الأربع الأولى', content: VERBATIM_CONTENT.initialSummary },
    { id: 'step5to10', title: 'استراتيجية النمو والمتابعة (خطوات 5-10)', content: VERBATIM_CONTENT.step5to10 },
    { id: 'timeline', title: 'الجدول الزمني المتوقع', content: VERBATIM_CONTENT.timeline },
    { id: 'speedUp', title: 'كيف نسرّع العملية؟', content: VERBATIM_CONTENT.speedUp },
    { id: 'linkedIn', title: 'قوة منصة LinkedIn', content: VERBATIM_CONTENT.linkedIn },
    { id: 'linkedinTips', title: 'نصائح LinkedIn الذهبية', content: VERBATIM_CONTENT.linkedinTips },
    { id: 'voiceBot', title: 'روبوت التدريب الصوتي', content: VERBATIM_CONTENT.voiceBot },
    { id: 'voiceBotKPIs', title: 'مؤشرات أداء التدريب', content: VERBATIM_CONTENT.voiceBotKPIs },
    { id: 'recruitmentBot', title: 'مساعد التوظيف الذكي', content: VERBATIM_CONTENT.recruitmentBot },
    { id: 'coldCallingBot', title: 'روبوت مكالمات البيع وخدمة العملاء', content: VERBATIM_CONTENT.coldCallingBot },
    { id: 'brandStandout', title: 'تميز ELHAWARY BROTHERS عن المنافسين', content: VERBATIM_CONTENT.brandStandout },
    { id: 'tailoredMarketingSolutions', title: 'حلول تسويقية مخصصة', content: VERBATIM_CONTENT.tailoredMarketingSolutions },
    { id: 'aiMenu', title: 'منيو الذكاء الاصطناعي', content: VERBATIM_CONTENT.aiMenu },
    { id: 'aiMenuDetail', title: 'تفاصيل AI Menu للمطاعم', content: VERBATIM_CONTENT.aiMenuDetail },
    { id: 'metaLlama', title: 'الشراكة مع Meta Llama', content: VERBATIM_CONTENT.metaLlama },
    { id: 'specializedAgents', title: 'وكلاء ذكاء اصطناعي متخصصون', content: VERBATIM_CONTENT.specializedAgents },
  ];

  return (
    <section className="py-24 bg-slate-950" id="marketing">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Master Strategy Blueprint</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A comprehensive roadmap for integrating AI into your enterprise workflow.
          </p>
        </div>

        <div className="space-y-3">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              initial={false}
              className={`border transition-all duration-500 rounded-[2rem] overflow-hidden ${
                expanded === section.id 
                  ? 'bg-white/10 border-white/20 ring-1 ring-white/10 shadow-2xl' 
                  : 'bg-white/5 border-white/5 hover:bg-white/10'
              }`}
              id={`section-${section.id}`}
            >
              <button
                onClick={() => setExpanded(expanded === section.id ? null : section.id)}
                className="w-full flex items-center justify-between p-8 text-right transition-colors"
              >
                <div className={`p-2 rounded-full transition-colors ${expanded === section.id ? 'bg-blue-600 text-white' : 'bg-white/10 text-slate-400'}`}>
                   {expanded === section.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                <h3 className={`text-xl font-bold transition-colors rtl ${expanded === section.id ? 'text-white' : 'text-slate-300'}`}>
                  {section.title}
                </h3>
              </button>

              <AnimatePresence>
                {expanded === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 border-t border-white/5">
                      <div className="whitespace-pre-wrap text-gray-300 rtl leading-relaxed text-lg" id={`content-${section.id}`}>
                        {section.content}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
