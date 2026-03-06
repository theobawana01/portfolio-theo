'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Brain, Database, Code, Server, Layout, Cloud, HardDrive, BarChart3,
} from 'lucide-react';
import { SkillCategory } from '@/lib/types';
import { useLanguage } from '@/lib/LanguageContext';

interface SkillsProps {
  skillCategories: SkillCategory[];
}

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain size={22} />,
  database: <Database size={22} />,
  code: <Code size={22} />,
  server: <Server size={22} />,
  layout: <Layout size={22} />,
  cloud: <Cloud size={22} />,
  'hard-drive': <HardDrive size={22} />,
  'bar-chart': <BarChart3 size={22} />,
};

export default function Skills({ skillCategories }: SkillsProps) {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" className="relative py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/50 to-surface-950" />
      <div className="ambient-glow bottom-0 left-1/4" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-accent-500 text-sm font-mono font-semibold tracking-wider uppercase mb-3 block">
            {t.skills.overline}
          </span>
          <h2 className="section-title">
            {t.skills.title} <span className="gradient-text">{t.skills.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mt-4">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="glass-card-hover p-6 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500 group-hover:bg-accent-500/20 transition-colors duration-300">
                  {iconMap[category.icon] || <Code size={22} />}
                </div>
                <h3 className="text-sm font-bold text-surface-100">{category.name}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs text-surface-300 font-medium">{skill.name}</span>
                      <span className="text-[10px] text-surface-500 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-surface-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.08, ease: 'easeOut' }}
                        className={`h-full rounded-full ${
                          skill.level >= 90
                            ? 'bg-gradient-to-r from-accent-500 to-accent-400'
                            : skill.level >= 80
                            ? 'bg-gradient-to-r from-primary-500 to-primary-400'
                            : 'bg-gradient-to-r from-surface-500 to-surface-400'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 glass-card p-6 sm:p-8"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-bold text-surface-100 mb-2">{t.skills.languages}</h4>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">{t.skills.langFrench}</span>
                <span className="tech-badge">{t.skills.langEnglish}</span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-surface-100 mb-2">{t.skills.aiIntegration}</h4>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">{t.skills.aiOpenai}</span>
                <span className="tech-badge">{t.skills.aiHuggingface}</span>
                <span className="tech-badge">{t.skills.aiPretrained}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
