import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';

export const metadata: Metadata = {
  title: 'Théodore BAWANA — Ingénieur IA & Développeur',
  description:
    "Portfolio de Théodore BAWANA — Ingénieur de Conception en Informatique, spécialiste Intelligence Artificielle, développeur de modèles IA et Fullstack.",
  keywords: [
    'Intelligence Artificielle',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'NLP',
    'Python',
    'Développeur IA',
    'Théodore BAWANA',
    'Ingénieur Informatique',
  ],
  authors: [{ name: 'Théodore BAWANA' }],
  openGraph: {
    title: 'Théodore BAWANA — Ingénieur IA',
    description: 'Spécialiste Intelligence Artificielle · Développeur de Modèles IA · Fullstack',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
