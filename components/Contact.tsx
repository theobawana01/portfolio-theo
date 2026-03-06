'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Globe, Github, CheckCircle, AlertCircle } from 'lucide-react';
import { Profile } from '@/lib/types';
import { useLanguage } from '@/lib/LanguageContext';

interface ContactProps {
  profile: Profile;
}

export default function Contact({ profile }: ContactProps) {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');

    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
      const res = await fetch(`${API_BASE}/contact/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed');
      setFormState('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setFormState('error');
    }

    setTimeout(() => setFormState('idle'), 5000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/30 to-surface-950" />
      <div className="ambient-glow top-1/3 right-0" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-accent-500 text-sm font-mono font-semibold tracking-wider uppercase mb-3 block">
            {t.contact.overline}
          </span>
          <h2 className="section-title">
            {t.contact.title} <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mt-4">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-8 space-y-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500 group-hover:bg-accent-500/20 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-surface-500 uppercase tracking-wider">{t.contact.emailLabel}</p>
                  <p className="text-surface-200 font-medium text-sm group-hover:text-accent-400 transition-colors">
                    {profile.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-surface-500 uppercase tracking-wider">{t.contact.locationLabel}</p>
                  <p className="text-surface-200 font-medium text-sm">{profile.location}</p>
                </div>
              </div>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500 group-hover:bg-accent-500/20 transition-colors">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-xs text-surface-500 uppercase tracking-wider">{t.contact.githubLabel}</p>
                  <p className="text-surface-200 font-medium text-sm group-hover:text-accent-400 transition-colors">
                    github.com/theobawana
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-xs text-surface-500 uppercase tracking-wider">{t.contact.nationalityLabel}</p>
                  <p className="text-surface-200 font-medium text-sm">{profile.nationality}</p>
                  <p className="text-emerald-400 text-xs font-medium mt-0.5">
                    {t.contact.umoaEligible}
                  </p>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass-card p-6 border-emerald-500/20">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <div>
                  <p className="text-emerald-400 font-bold text-sm">{t.contact.availabilityTitle}</p>
                  <p className="text-surface-400 text-xs">{t.contact.availabilityText}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">
                    {t.contact.formName}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface-800/50 border border-surface-700/50 text-surface-100 text-sm placeholder-surface-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all duration-300"
                    placeholder={t.contact.formNamePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">
                    {t.contact.formEmail}
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface-800/50 border border-surface-700/50 text-surface-100 text-sm placeholder-surface-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all duration-300"
                    placeholder={t.contact.formEmailPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">
                  {t.contact.formSubject}
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface-800/50 border border-surface-700/50 text-surface-100 text-sm placeholder-surface-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all duration-300"
                  placeholder={t.contact.formSubjectPlaceholder}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">
                  {t.contact.formMessage}
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface-800/50 border border-surface-700/50 text-surface-100 text-sm placeholder-surface-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all duration-300 resize-none"
                  placeholder={t.contact.formMessagePlaceholder}
                />
              </div>

              {/* Status Messages */}
              {formState === 'success' && (
                <div className="flex items-center gap-2 text-emerald-400 text-sm">
                  <CheckCircle size={16} />
                  {t.contact.formSuccess}
                </div>
              )}
              {formState === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  {t.contact.formError}
                </div>
              )}

              <button
                type="submit"
                disabled={formState === 'sending'}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
                {formState === 'sending' ? t.contact.formSending : t.contact.formSubmit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
