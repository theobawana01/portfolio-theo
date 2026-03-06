'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageSelector from './LanguageSelector';

const navKeys = ['home', 'about', 'projects', 'experience', 'skills', 'education', 'resume', 'contact'] as const;
const navHrefs = ['#hero', '#about', '#projects', '#experience', '#skills', '#education', '#resume', '#contact'];

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = navKeys.map((key, i) => ({
    label: t.nav[key],
    href: navHrefs[i],
  }));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-surface-950/80 backdrop-blur-xl border-b border-surface-800/50 shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center font-bold text-surface-950 text-lg shadow-lg shadow-accent-500/20 group-hover:shadow-accent-500/40 transition-shadow duration-300">
            TB
          </div>
          <div className="hidden sm:block">
            <span className="text-sm font-bold text-surface-100 tracking-wide">THÉODORE</span>
            <span className="block text-[10px] font-medium text-accent-500 tracking-[0.2em] uppercase">
              AI Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'text-accent-400'
                  : 'text-surface-400 hover:text-surface-100'
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent-500 rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right Controls */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSelector />
          <a href="#contact" className="btn-primary text-xs">
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <LanguageSelector />
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 rounded-lg text-surface-300 hover:text-surface-100 hover:bg-surface-800/50 transition-colors"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface-950/95 backdrop-blur-xl border-t border-surface-800/50"
          >
            <div className="section-container py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === link.href.slice(1)
                      ? 'text-accent-400 bg-accent-500/10'
                      : 'text-surface-400 hover:text-surface-100 hover:bg-surface-800/50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMobileOpen(false)} className="btn-primary text-center mt-4 text-xs">
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
