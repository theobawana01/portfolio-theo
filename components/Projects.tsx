'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Sparkles, Layers, BarChart3, ArrowRight, Lock } from 'lucide-react';
import { Project } from '@/lib/types';
import { useLanguage } from '@/lib/LanguageContext';

interface ProjectsProps {
  projects: Project[];
}

const categoryIcons: Record<string, React.ReactNode> = {
  ia: <Sparkles size={14} />,
  data: <BarChart3 size={14} />,
  fullstack: <Layers size={14} />,
};

export default function Projects({ projects }: ProjectsProps) {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = activeCategory === 'all' ? projects : projects.filter((p) => p.category === activeCategory);
  const sortedProjects = [...filtered].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return a.order - b.order;
  });

  return (
    <section id="projects" className="relative py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/50 to-surface-950" />
      <div className="ambient-glow -top-40 right-1/4" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-accent-500 text-sm font-mono font-semibold tracking-wider uppercase mb-3 block">
            {t.projects.overline}
          </span>
          <h2 className="section-title">
            {t.projects.title} <span className="gradient-text">{t.projects.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mt-4">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {Object.entries(t.projects.categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-accent-500 text-surface-950 shadow-lg shadow-accent-500/20'
                  : 'bg-surface-800/50 text-surface-400 border border-surface-700/50 hover:text-surface-200 hover:border-surface-600'
              }`}
            >
              {key !== 'all' && categoryIcons[key]}
              {label}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {sortedProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`glass-card-hover group overflow-hidden ${project.featured ? 'ring-1 ring-accent-500/20' : ''}`}
              >
                {/* Gradient Top Bar */}
                <div className={`h-1 w-full ${
                  project.category === 'ia'
                    ? 'bg-gradient-to-r from-accent-500 via-accent-400 to-accent-600'
                    : project.category === 'data'
                    ? 'bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600'
                    : 'bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600'
                }`} />

                <div className="p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {project.featured && (
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-accent-500/10 text-accent-400 border border-accent-500/20">
                            {t.projects.featured}
                          </span>
                        )}
                        <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded ${
                          project.status === 'completed'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        }`}>
                          {project.status === 'completed' ? t.projects.completed : t.projects.inProgress}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-surface-100 group-hover:text-accent-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      {project.is_confidential ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-800/80 text-surface-400 text-xs font-medium border border-surface-700/50">
                          <Lock size={12} />
                          {t.projects.confidential}
                        </span>
                      ) : (
                        <>
                          {project.github_url && (
                            <a
                              href={project.github_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-800 text-surface-400 text-xs font-medium hover:text-surface-100 hover:bg-surface-700 transition-colors border border-surface-700/50"
                            >
                              <Github size={14} />
                              {t.projects.github}
                            </a>
                          )}
                          {project.demo_url && (
                            <a
                              href={project.demo_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-500/10 text-accent-400 text-xs font-medium hover:bg-accent-500/20 transition-colors border border-accent-500/20"
                            >
                              <ExternalLink size={14} />
                              {t.projects.demo}
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  {/* Date */}
                  <p className="text-surface-500 text-xs font-mono mb-4">
                    {project.start_date} → {project.end_date}
                  </p>

                  {/* Description */}
                  <p className="text-surface-400 text-sm leading-relaxed mb-5">
                    {project.short_description}
                  </p>

                  {/* Metrics */}
                  {Object.keys(project.metrics).length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <span key={key} className="metric-badge">
                          <span className="font-bold">{value}</span>
                          <span className="text-emerald-400/60 text-xs">{key}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-6">
                    {project.highlights.slice(0, 3).map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-surface-300">
                        <ArrowRight size={12} className="text-accent-500 mt-0.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge text-[11px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
