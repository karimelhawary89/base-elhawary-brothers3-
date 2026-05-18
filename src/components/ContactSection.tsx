import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Mail, 
  Calendar, 
  Send, 
  Globe, 
  Youtube, 
  BookOpen, 
  Github,
  Award
} from 'lucide-react';

const contactMethods = [
  { name: 'WhatsApp', value: '+20 100 086 7697', href: 'https://wa.me/201000867697', icon: <MessageSquare size={24} />, color: 'bg-green-500' },
  { name: 'Email', value: 'karim@elhawarybrothers.com', href: 'mailto:karim@elhawarybrothers.com', icon: <Mail size={24} />, color: 'bg-blue-500' },
  { name: 'Calendly', value: 'احجز موعد استشارة', href: 'https://calendly.com/karimelhawary89', icon: <Calendar size={24} />, color: 'bg-blue-600' },
  { name: 'Telegram', value: 't.me/karimelhawary', href: 'https://t.me/karimelhawary', icon: <Send size={24} />, color: 'bg-sky-500' },
  { name: 'Official Website', value: 'hawary.online', href: 'https://hawary.online', icon: <Globe size={24} />, color: 'bg-purple-500' },
  { name: 'YouTube', value: 'Elhawary Brothers', href: 'https://youtube.com/@ElhawaryBrothers', icon: <Youtube size={24} />, color: 'bg-red-500' },
  { name: 'Service Guide', value: 'gitbook.io/ai', href: 'https://gitbook.io/ai', icon: <BookOpen size={24} />, color: 'bg-emerald-500' },
  { name: 'GitHub', value: 'Elhawary Brothers LLC', href: 'https://github.com/elhawarybrothers', icon: <Github size={24} />, color: 'bg-gray-700' },
  { name: 'ProductHunt', value: 'Elhawary Brothers', href: 'https://www.producthunt.com/@karimelhawary89', icon: <Award size={24} />, color: 'bg-orange-500' },
];

export const ContactSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden" id="contact">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Connect with Our Architects</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to integrate advanced AI into your business? Choose your preferred channel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative p-8 glass-dark rounded-[2rem] hover:bg-white/10 transition-all border-white/5 hover:border-white/10"
              id={`contact-${method.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-4 rounded-2xl bg-${method.color.split('-')[1]}-500/20 text-${method.color.split('-')[1]}-400 group-hover:scale-110 transition-transform`}>
                  {method.icon}
                </div>
                <div className="text-white/20 group-hover:text-white/40">
                  <Globe size={16} />
                </div>
              </div>
              
              <div className="text-left">
                <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{method.name}</h4>
                <p className="text-white font-bold text-lg leading-tight group-hover:text-blue-400 transition-colors">{method.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
