'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Github, Globe, ChevronDown, Sparkles, X } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Profile } from '@/lib/types';
import { useLanguage } from '@/lib/LanguageContext';

interface HeroProps {
  profile: Profile;
}

export default function Hero({ profile }: HeroProps) {
  const { t, locale } = useLanguage();
  const [photoOpen, setPhotoOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Photo Lightbox */}
      <AnimatePresence>
        {photoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPhotoOpen(false)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-lg w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPhotoOpen(false)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
              >
                <X size={28} />
              </button>
              <img
                src="/images/theodore-bawana.jpg"
                alt={t.hero.photoAlt}
                className="w-full rounded-2xl shadow-2xl shadow-black/50 border border-surface-700/50"
              />
              <p className="text-center text-surface-300 text-sm mt-4 font-medium">
                {t.hero.photoCaption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-950 via-surface-900 to-surface-950" />
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="ambient-glow top-1/4 -left-40" />
        <div className="ambient-glow bottom-1/4 -right-40" />
        {/* Animated orbs */}
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-accent-500/5 blur-3xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-primary-600/5 blur-3xl"
        />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Photo - Left Side with professional backdrop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 relative"
          >
            {/* Outer decorative rings - tech/professional vibe */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-6 rounded-full border border-dashed border-accent-500/15"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-10 rounded-full border border-dashed border-primary-500/10"
            />
            {/* Decorative dots on orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-6 rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent-500/60" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-primary-400/50" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-10 rounded-full"
            >
              <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-400/40" />
              <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
            </motion.div>

            {/* Gradient glow behind photo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-500/20 via-primary-500/10 to-emerald-500/15 blur-2xl scale-110" />

            <button
              onClick={() => setPhotoOpen(true)}
              className="relative inline-block group cursor-pointer"
              aria-label={t.hero.photoAriaLabel}
            >
              {/* Outer gradient border ring */}
              <div className="w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full p-[3px] bg-gradient-to-br from-accent-500 via-accent-400/50 to-primary-500 shadow-2xl shadow-accent-500/20 group-hover:shadow-accent-500/40 transition-shadow duration-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-surface-900">
                  <img
                    src="/images/theodore-bawana.jpg"
                    alt={t.hero.photoAlt}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              {/* Status dot */}
              <div className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-emerald-500 border-[3px] border-surface-950 shadow-lg z-10" />
            </button>
          </motion.div>

          {/* Text Content - Right Side */}
          <div className="text-center lg:text-left flex-1 min-w-0">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 text-sm font-medium">
                {t.hero.availability} {profile.availability_text}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4"
            >
              <span className="text-surface-100">BAWANA</span>
              <br />
              <span className="gradient-text">Théodore</span>
            </motion.h1>

            {/* Animated Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-surface-300 font-light mb-3 h-9"
            >
              <TypeAnimation
                key={locale}
                sequence={[
                  t.hero.typingSequence[0], 2000,
                  t.hero.typingSequence[1], 2000,
                  t.hero.typingSequence[2], 2000,
                  t.hero.typingSequence[3], 2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="font-light"
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-surface-400 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Contact Info Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            >
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-800/50 border border-surface-700/50 text-surface-300 text-sm hover:border-accent-500/30 hover:text-accent-400 transition-all duration-300"
              >
                <Mail size={14} />
                {profile.email}
              </a>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-800/50 border border-surface-700/50 text-surface-300 text-sm">
                <MapPin size={14} />
                {profile.location}
              </span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-800/50 border border-surface-700/50 text-surface-300 text-sm hover:border-accent-500/30 hover:text-accent-400 transition-all duration-300"
              >
                <Github size={14} />
                GitHub
              </a>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-800/50 border border-surface-700/50 text-surface-300 text-sm">
                <Globe size={14} />
                {t.hero.nationality} {profile.nationality}
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a href="#projects" className="btn-primary">
                <Sparkles size={16} />
                {t.hero.ctaProjects}
              </a>
              <a href="#contact" className="btn-outline">
                <Mail size={16} />
                {t.hero.ctaContact}
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-surface-500 hover:text-accent-400 transition-colors"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
}
