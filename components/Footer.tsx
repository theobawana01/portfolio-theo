'use client';

import { Mail, Github, Globe, MapPin, Heart, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-surface-800/50">
      <div className="absolute inset-0 bg-surface-950" />

      <div className="section-container relative z-10 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center font-bold text-surface-950 text-lg">
                TB
              </div>
              <div>
                <span className="text-sm font-bold text-surface-100">BAWANA Théodore</span>
                <span className="block text-[10px] text-accent-500 tracking-[0.15em] uppercase">
                  {t.footer.subtitle}
                </span>
              </div>
            </div>
            <p className="text-surface-400 text-sm leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-surface-100 font-semibold text-sm mb-4">{t.footer.navTitle}</h4>
            <nav className="space-y-2">
              {[
                { label: t.footer.navAbout, href: '#about' },
                { label: t.footer.navProjects, href: '#projects' },
                { label: t.footer.navExperience, href: '#experience' },
                { label: t.footer.navSkills, href: '#skills' },
                { label: t.footer.navEducation, href: '#education' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-surface-400 text-sm hover:text-accent-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-surface-100 font-semibold text-sm mb-4">{t.footer.contactTitle}</h4>
            <div className="space-y-3">
              <a
                href="mailto:theodore8bawana@gmail.com"
                className="flex items-center gap-2 text-surface-400 text-sm hover:text-accent-400 transition-colors"
              >
                <Mail size={14} />
                theodore8bawana@gmail.com
              </a>
              <span className="flex items-center gap-2 text-surface-400 text-sm">
                <MapPin size={14} />
                Libreville, Gabon
              </span>
              <span className="flex items-center gap-2 text-surface-400 text-sm">
                <Globe size={14} />
                {t.footer.contactNationality}
              </span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-surface-100 font-semibold text-sm mb-4">{t.footer.socialTitle}</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-surface-800 flex items-center justify-center text-surface-400 hover:text-accent-400 hover:bg-surface-700 transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:theodore8bawana@gmail.com"
                className="w-10 h-10 rounded-xl bg-surface-800 flex items-center justify-center text-surface-400 hover:text-accent-400 hover:bg-surface-700 transition-all"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://theo.portefolio.io"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-surface-800 flex items-center justify-center text-surface-400 hover:text-accent-400 hover:bg-surface-700 transition-all"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-surface-800/50">
          <p className="text-surface-500 text-xs flex items-center gap-1">
            {t.footer.copyright(new Date().getFullYear()).split('❤')[0]}
            <Heart size={12} className="text-accent-500" />
            {t.footer.copyright(new Date().getFullYear()).split('❤')[1]}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs text-surface-400 bg-surface-800/50 border border-surface-700/50 hover:text-accent-400 hover:border-accent-500/30 transition-all"
          >
            <ArrowUp size={14} />
            {t.footer.backToTop}
          </button>
        </div>
      </div>
    </footer>
  );
}
