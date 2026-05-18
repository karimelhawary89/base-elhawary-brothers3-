import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search as SearchIcon } from 'lucide-react';
import Fuse, { type FuseResult } from 'fuse.js';
import { VERBATIM_CONTENT } from '../constants';
import { SearchItem } from '../types';

const searchData: SearchItem[] = Object.entries(VERBATIM_CONTENT).map(([key, value]) => ({
  id: key,
  title: key, // In a real app we'd map these to nice names
  content: value,
  category: 'marketing'
}));

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState<FuseResult<SearchItem>[]>([]);

  const fuse = new Fuse(searchData, {
    keys: ['content', 'title'],
    threshold: 0.3,
    ignoreLocation: true
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim()) {
      setResults(fuse.search(val));
    } else {
      setResults([]);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl p-4 md:p-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8 text-white">
              <h2 className="text-2xl font-bold">البحث في المحتوى</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                id="close-search"
              >
                <X size={32} />
              </button>
            </div>

            <div className="relative mb-12">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="ابحث عن أي خدمة أو خطوة..."
                className="w-full bg-white/5 border border-white/20 rounded-2xl py-6 pl-14 pr-6 text-2xl text-white focus:outline-none focus:border-blue-500 transition-colors text-right"
                dir="rtl"
                id="search-input"
              />
            </div>

            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
              {results.map((result) => (
                <div 
                  key={result.item.id}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer"
                  onClick={() => {
                    const el = document.getElementById(`section-${result.item.id}`);
                    if (el) {
                      onClose();
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  id={`search-result-${result.item.id}`}
                >
                  <p className="text-gray-300 text-lg rtl line-clamp-3">
                    {result.item.content}
                  </p>
                </div>
              ))}
              {query && results.length === 0 && (
                <p className="text-center text-gray-500 text-xl py-20">لا توجد نتائج تطابق بحثك</p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
