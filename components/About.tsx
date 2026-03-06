'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Brain, Cpu, ArrowRight } from 'lucide-react';
import { Profile } from '@/lib/types';
import { useLanguage } from '@/lib/LanguageContext';

interface AboutProps {
  profile: Profile;
}

const highlightIcons = [Brain, Cpu, Target];

export default function About({ profile }: AboutProps) {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = t.about.highlights.map((h, i) => ({
    icon: highlightIcons[i],
    title: h.title,
    description: h.description,
  }));

  return (
    <section id="about" className="relative py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/50 to-surface-950" />
      <div className="ambient-glow top-0 left-1/3" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-accent-500 text-sm font-mono font-semibold tracking-wider uppercase mb-3 block">
            {t.about.overline}
          </span>
          <h2 className="section-title">
            {t.about.title} <span className="gradient-text">{t.about.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 sm:p-10">
              <p className="text-surface-300 text-lg leading-relaxed mb-8">
                {profile.bio}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-accent-500 font-semibold">{t.about.nationalityLabel}</span>
                  <span className="text-surface-300">{profile.nationality}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-accent-500 font-semibold">{t.about.locationLabel}</span>
                  <span className="text-surface-300">{profile.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-accent-500 font-semibold">{t.about.umoaLabel}</span>
                  <span className="text-emerald-400">{t.about.umoaValue}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-accent-500 font-semibold">{t.about.mobilityLabel}</span>
                  <span className="text-surface-300">{t.about.mobilityValue}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass-card p-6 text-center">
              <div className="text-4xl font-black gradient-text mb-1">8+</div>
              <div className="text-surface-400 text-sm">{t.about.statProjects}</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-black text-emerald-400 mb-1">96%</div>
                <div className="text-surface-400 text-xs">{t.about.statAccuracy}</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-black text-primary-400 mb-1">3</div>
                <div className="text-surface-400 text-xs">{t.about.statProduction}</div>
              </div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-4xl font-black text-accent-400 mb-1">15+</div>
              <div className="text-surface-400 text-sm">{t.about.statExperience}</div>
            </div>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
              className="glass-card-hover p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500 mb-4 group-hover:bg-accent-500/20 transition-colors duration-300">
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-surface-100 mb-2">{item.title}</h3>
              <p className="text-surface-400 text-sm leading-relaxed">{item.description}</p>
              <ArrowRight size={16} className="text-accent-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
