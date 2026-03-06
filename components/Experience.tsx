'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Calendar, Clock } from 'lucide-react';
import { Experience as ExperienceType } from '@/lib/types';
import { useLanguage } from '@/lib/LanguageContext';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export default function Experience({ experiences }: ExperienceProps) {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="relative py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/30 to-surface-950" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-accent-500 text-sm font-mono font-semibold tracking-wider uppercase mb-3 block">
            {t.experience.overline}
          </span>
          <h2 className="section-title">
            {t.experience.title} <span className="gradient-text">{t.experience.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mt-4">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/50 via-surface-700 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                className="relative flex gap-6 sm:gap-8"
              >
                {/* Timeline Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-accent-500/20 to-accent-600/10 border border-accent-500/30 flex items-center justify-center shadow-xl shadow-accent-500/5">
                    <Briefcase size={24} className="text-accent-500" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 glass-card-hover p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-surface-100 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-accent-500 font-semibold text-sm">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-surface-800 border border-surface-700 text-surface-300">
                        <Calendar size={12} />
                        {exp.start_date} – {exp.end_date}
                      </span>
                      <div className="flex gap-1.5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-surface-800 border border-surface-700 text-surface-300">
                          <Clock size={12} />
                          {exp.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-surface-800 border border-surface-700 text-surface-300">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Contract Type */}
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-600/10 text-primary-400 border border-primary-600/20 mb-5">
                    {exp.contract_type}
                  </span>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-surface-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-badge text-[11px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
