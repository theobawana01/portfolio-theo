'use client';

import { useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { PortfolioData } from '@/lib/types';
import { useLanguage } from '@/lib/LanguageContext';
import { getLocalizedPortfolioData } from '@/lib/data';

interface ClientPageProps {
  data: PortfolioData;
}

export default function ClientPage({ data }: ClientPageProps) {
  const { locale } = useLanguage();
  const localizedData = useMemo(() => getLocalizedPortfolioData(locale), [locale]);

  return (
    <>
      <Navbar />
      <main>
        <Hero profile={localizedData.profile} />
        <About profile={localizedData.profile} />
        <Projects projects={localizedData.projects} />
        <Experience experiences={localizedData.experiences} />
        <Skills skillCategories={localizedData.skill_categories} />
        <Education education={localizedData.education} />
        <Resume />
        <Contact profile={localizedData.profile} />
      </main>
      <Footer />
    </>
  );
}
