'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { Locale } from '@/lib/i18n';
import Image from 'next/image';

const languages: { code: Locale; label: string; flagUrl: string }[] = [
  { code: 'fr', label: 'Français', flagUrl: 'https://flagcdn.com/w40/fr.png' },
  { code: 'en', label: 'English', flagUrl: 'https://flagcdn.com/w40/gb.png' },
];

export default function LanguageSelector() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-800/60 border border-surface-700/50 hover:border-accent-500/30 transition-all duration-300"
        aria-label="Select language"
      >
        <img
          src={current.flagUrl}
          alt={current.label}
          width={24}
          height={16}
          className="rounded-sm"
        />
        <svg
          className={`w-3 h-3 text-surface-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 bg-surface-800 border border-surface-700/50 rounded-xl overflow-hidden shadow-xl shadow-black/30 z-50 min-w-[100px]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLocale(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 transition-colors duration-150 ${
                  locale === lang.code
                    ? 'bg-accent-500/10'
                    : 'hover:bg-surface-700/50'
                }`}
              >
                <img
                  src={lang.flagUrl}
                  alt={lang.label}
                  width={28}
                  height={19}
                  className="rounded-sm"
                />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
