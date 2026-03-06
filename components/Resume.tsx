'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Download, Eye, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Resume() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="resume" className="relative py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/50 to-surface-950" />
      <div className="ambient-glow bottom-0 right-1/4" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-accent-500 text-sm font-mono font-semibold tracking-wider uppercase mb-3 block">
            {t.resume.overline}
          </span>
          <h2 className="section-title">
            {t.resume.title} <span className="gradient-text">{t.resume.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mt-4">
            {t.resume.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              {/* CV Icon / Preview */}
              <div className="flex-shrink-0">
                <div className="w-28 h-36 rounded-xl bg-gradient-to-br from-accent-500/20 via-accent-400/10 to-primary-500/10 border border-accent-500/30 flex flex-col items-center justify-center gap-2 shadow-lg shadow-accent-500/5">
                  <FileText size={36} className="text-accent-400" />
                  <span className="text-[10px] font-bold text-accent-400 uppercase tracking-wider">{t.resume.fileType}</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-bold text-surface-100 mb-2">
                  {t.resume.cardTitle}
                </h3>
                <p className="text-surface-400 text-sm mb-5 leading-relaxed">
                  {t.resume.cardDescription}
                </p>

                {/* Highlights chips */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-6">
                  {t.resume.cvHighlights.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-800/60 text-surface-300 text-xs border border-surface-700/40"
                    >
                      <CheckCircle size={10} className="text-emerald-400" />
                      {item}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                  <a
                    href="/cv/BAWANA_Theodore_CV.pdf"
                    download
                    className="btn-primary text-sm"
                  >
                    <Download size={16} />
                    {t.resume.download}
                  </a>
                  <a
                    href="/cv/BAWANA_Theodore_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm"
                  >
                    <Eye size={16} />
                    {t.resume.view}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
