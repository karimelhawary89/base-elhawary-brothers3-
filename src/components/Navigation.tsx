import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';

interface NavigationProps {
  onSearchOpen: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onSearchOpen }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'الاستراتيجية', href: '#workflow' },
    { name: 'الحلول الذكية', href: '#industries' },
    { name: 'الذكاء الاصطناعي', href: '#voice' },
    { name: 'الأسعار', href: '#pricing' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-slate-950/80 backdrop-blur-xl border-b border-white/5" id="main-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl">
              E
            </div>
            <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
              ELHAWARY BROTHERS
            </span>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1 space-x-reverse">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/5"
                  id={`nav-item-${item.name}`}
                >
                  {item.name}
                </a>
              ))}
              <div className="w-px h-6 bg-white/10 mx-4" />
              <button
                onClick={onSearchOpen}
                className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all"
                id="search-trigger"
              >
                <Search size={18} />
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={onSearchOpen}
              className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-black/90 border-b border-white/10"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};
