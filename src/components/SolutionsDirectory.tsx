import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Home, Sun, ShieldCheck, CreditCard, Laptop, ChevronRight } from 'lucide-react';

const solutions = [
  { id: 'real-estate', title: 'العقارات', icon: <Building2 />, color: 'blue', items: ['جلب عملاء محتملين للمطورين', 'أتمتة التعامل مع المستأجرين', 'تقييم العقارات بالذكاء الاصطناعي'] },
  { id: 'home-improvement', title: 'تحسين المنازل', icon: <Home />, color: 'emerald', items: ['تحديد مواعيد المعاينة', 'متابعة عروض الأسعار', 'إدارة المقاولين من الباطن'] },
  { id: 'solar', title: 'الطاقة الشمسية', icon: <Sun />, color: 'amber', items: ['حساب استهلاك الطاقة', 'تأهيل العملاء للتركيب', 'متابعة الصيانة الدورية'] },
  { id: 'medicare', title: 'التأمين الصحي', icon: <ShieldCheck />, color: 'rose', items: ['توضيح باقات التأمين', 'تسجيل المرضى الجدد', 'الرد على استفسارات التغطية'] },
  { id: 'debt', title: 'تسوية الديون', icon: <CreditCard />, color: 'indigo', items: ['تحليل الالتزامات المالية', 'جدولة دفعات السداد', 'التواصل مع الدائنين'] },
  { id: 'saas', title: 'البرمجيات SaaS', icon: <Laptop />, color: 'purple', items: ['دعم فني ذكي 24/7', 'تأهيل المستخدمين الجدد Onboarding', 'جلب صفقات لفرق المبيعات'] },
];

export const SolutionsDirectory: React.FC = () => {
  const [selected, setSelected] = React.useState<string | null>(null);

  return (
    <section className="py-24 bg-black" id="industries">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">دليل حلول الصناعات B2B</h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol) => (
            <motion.div
              key={sol.id}
              layoutId={sol.id}
              onClick={() => setSelected(sol.id)}
              className="group relative h-64 cursor-pointer bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all overflow-hidden"
              id={`solution-card-${sol.id}`}
            >
              <div className={`mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-${sol.color}-500/20 text-${sol.color}-400 group-hover:scale-110 transition-transform`}>
                {sol.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 rtl">{sol.title}</h3>
              <p className="text-gray-400 rtl">اضغط للتفاصيل</p>
              
              <div className="absolute bottom-8 left-8 text-white/20 group-hover:text-white/50 transition-colors">
                <ChevronRight size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              layoutId={selected}
              className="bg-gray-900 border border-white/10 w-full max-w-2xl p-10 rounded-3xl shadow-2xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                 <button onClick={() => setSelected(null)} className="p-2 hover:bg-white/10 rounded-full">
                   <ChevronRight className="rotate-180" />
                 </button>
                 <div className="flex items-center gap-4">
                    <h3 className="text-3xl font-bold text-white rtl">{solutions.find(s => s.id === selected)?.title}</h3>
                    <div className="text-emerald-400">
                      {solutions.find(s => s.id === selected)?.icon}
                    </div>
                 </div>
              </div>

              <ul className="space-y-4 text-right">
                {solutions.find(s => s.id === selected)?.items.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-end gap-3 text-gray-300 text-xl"
                  >
                    <span>{item}</span>
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-12 flex justify-end">
                <a 
                  href="#contact" 
                  onClick={() => setSelected(null)}
                  className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold transition-colors"
                >
                  اطلب استشارة لهذه الصناعة
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
