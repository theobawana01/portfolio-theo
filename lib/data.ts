import { PortfolioData, Profile, Education, Experience, Project, SkillCategory } from './types';
import { Locale } from './i18n';
import { profileEn, educationEn, experiencesEn, projectsEn, skillCategoriesEn } from './data-en';

/* ── Hardcoded data — also fetchable from Django API ── */

const profile: Profile = {
  id: 1,
  full_name: 'BAWANA Théodore',
  title: 'Ingénieur de Conception en Informatique',
  subtitle: 'Spécialiste Intelligence Artificielle · Développeur de Modèles IA · Fullstack',
  email: 'theodore8bawana@gmail.com',
  phone: '',
  location: 'Libreville, Gabon',
  nationality: 'Togolaise',
  date_of_birth: '2001-04-07',
  website: 'https://theo.portefolio.io',
  github: 'https://github.com/theobawana',
  linkedin: '',
  bio: "Ingénieur de Conception diplômé de l'Institut Africain d'Informatique (IAI), admis sur concours national après un solide parcours en Mathématiques Fondamentales. Ma passion pour l'Intelligence Artificielle remonte à mes années universitaires en mathématiques, où j'ai découvert les fondements théoriques du Machine Learning. Depuis, j'ai traduit cette passion en projets concrets et impactants : vision par ordinateur, NLP, modèles prédictifs et systèmes de sécurité IA. Je suis aujourd'hui opérationnel pour concevoir et déployer des solutions IA ambitieuses au sein d'institutions de premier plan.",
  photo: '/images/theodore-bawana.jpg',
  cv_file: null,
  available: true,
  availability_text: 'Immédiate',
};

const education: Education[] = [
  {
    id: 1,
    title: "Diplôme d'Ingénieur de Conception en Informatique",
    institution: "Institut Africain d'Informatique (IAI) — Siège",
    location: 'Libreville, Gabon',
    start_year: 2023,
    end_year: 2025,
    degree_type: "Formation d'ingénieur",
    description: '',
    highlights: [
      'Admis sur concours national, parmi les meilleurs candidats sélectionnés',
      'Spécialisation en Intelligence Artificielle : développement de modèles, Computer Vision, NLP',
    ],
    order: 1,
  },
  {
    id: 2,
    title: 'Études en Mathématiques Fondamentales — 151 crédits validés',
    institution: 'Université de Lomé',
    location: 'Lomé, Togo',
    start_year: 2019,
    end_year: 2022,
    degree_type: 'Études universitaires',
    description: '',
    highlights: [
      "Solides bases en algèbre linéaire, analyse, probabilités et statistiques — fondements directs de l'IA",
      "Parcours interrompu pour intégrer l'IAI sur concours avant la fin de la 3ème année — 151 crédits acquis",
    ],
    order: 2,
  },
  {
    id: 3,
    title: 'Baccalauréat Scientifique — Série D',
    institution: 'Lycée de Aouda',
    location: 'Togo',
    start_year: 2018,
    end_year: 2018,
    degree_type: "Diplôme d'État",
    description: '',
    highlights: [],
    order: 3,
  },
];

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Développeur IA',
    company: 'SAHELYS (Gabon Telecom)',
    location: 'Gabon',
    start_date: 'Octobre 2025',
    end_date: 'Février 2026',
    duration: '5 mois',
    contract_type: 'Prestation / Consultance',
    description: '',
    highlights: [
      "Développement d'un système limitant les fraudes en contrôlant le nombre d'occurrences par abonné",
      "Paramétrage flexible : les administrateurs définissent les seuils d'occurrences autorisés",
      'Projet livré et déployé avec succès en production',
    ],
    technologies: ['Python', 'Django', 'PostgreSQL'],
    order: 1,
  },
  {
    id: 2,
    title: 'Développeur IA',
    company: 'SAHELYS',
    location: 'Gabon',
    start_date: 'Avril 2025',
    end_date: 'Octobre 2025',
    duration: '7 mois',
    contract_type: 'Stage ingénieur',
    description: '',
    highlights: [
      'Modèle de classification visuelle : 500+ objets — Accuracy : 94%',
      'Chatbot IA intégré pour le service client',
      "Système de recommandation basé sur achats, distance et prix",
      'Pipeline ETL/ELT complet pour la gestion des données',
      "Intégration du modèle IA dans une plateforme e-commerce fonctionnelle",
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'EfficientNet', 'ResNet', 'OpenCV', 'FastAPI', 'Angular', 'PostgreSQL'],
    order: 2,
  },
  {
    id: 3,
    title: 'Développeur IA',
    company: 'SAHELYS',
    location: 'Gabon',
    start_date: 'Juillet 2024',
    end_date: 'Octobre 2024',
    duration: '3 mois',
    contract_type: 'Contrat professionnel',
    description: '',
    highlights: [
      'Détection, tracking et comptage de personnes en temps réel via flux vidéo',
      'Précision de détection : 96% — YOLO v8 + InsightFace',
      'Calcul automatique du temps de présence de chaque individu',
      'Pipeline complet temps réel : acquisition → détection → tracking → stockage → reporting',
    ],
    technologies: ['YOLO v8', 'CNN', 'InsightFace', 'OpenCV', 'Python', 'FastAPI'],
    order: 3,
  },
];

const projects: Project[] = [
  {
    id: 1,
    title: 'HTR Manuscript → LaTeX System',
    slug: 'htr-manuscript-latex',
    category: 'ia',
    status: 'completed',
    short_description: "Reconnaissance d'écriture manuscrite mathématique et conversion automatique en LaTeX",
    full_description: "Système de reconnaissance d'écriture manuscrite (HTR) convertissant automatiquement des manuscrits mathématiques en code LaTeX structuré. Application directe à la correction automatisée de copies dans les systèmes éducatifs.",
    highlights: [
      'Conversion automatique de manuscrits en LaTeX — Accuracy : 92%',
      'Computer Vision pour la reconnaissance des caractères manuscrits (HTR)',
      "NLP pour l'interprétation et la conversion syntaxique en LaTeX",
      'Application : correction automatisée de copies éducatives',
    ],
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'PyTorch', 'Transformers', 'FastAPI', 'CNN', 'NLP'],
    metrics: { accuracy: '92%', duration: '11 mois' },
    github_url: 'https://github.com/theobawana',
    demo_url: '',
    image: null,
    featured: true,
    is_confidential: false,
    order: 1,
    start_date: 'Février 2025',
    end_date: 'Décembre 2025',
  },
  {
    id: 2,
    title: 'Surveillance Intelligente par Analyse Vidéo',
    slug: 'surveillance-intelligente',
    category: 'ia',
    status: 'completed',
    short_description: 'Détection, tracking et comptage de personnes en temps réel via flux vidéo',
    full_description: "Système de surveillance intelligente analysant les flux vidéo en temps réel pour détecter, suivre et compter les personnes avec calcul automatique du temps de présence.",
    highlights: [
      'Détection, tracking et comptage de personnes en temps réel',
      'Précision de détection : 96% — YOLO v8 + InsightFace',
      'Calcul automatique du temps de présence de chaque individu',
      'Pipeline complet déployé en production',
    ],
    technologies: ['YOLO v8', 'CNN', 'InsightFace', 'OpenCV', 'Python', 'FastAPI'],
    metrics: { accuracy: '96%', duration: '3 mois' },
    github_url: '',
    demo_url: '',
    image: null,
    featured: true,
    is_confidential: true,
    order: 2,
    start_date: 'Juillet 2024',
    end_date: 'Octobre 2024',
  },
  {
    id: 3,
    title: 'E-Commerce avec Vision IA & Chatbot',
    slug: 'ecommerce-vision-ia',
    category: 'ia',
    status: 'completed',
    short_description: 'Plateforme e-commerce avec reconnaissance visuelle, chatbot IA et système de recommandation',
    full_description: "Plateforme e-commerce complète intégrant classification visuelle, chatbot IA pour le service client et système de recommandation basé sur achats, distance et prix.",
    highlights: [
      'Classification visuelle : 500+ objets — Accuracy : 94%',
      'Chatbot IA pour le service client',
      'Système de recommandation (achats, distance, prix)',
      'Pipeline ETL/ELT complet',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'EfficientNet', 'ResNet', 'OpenCV', 'FastAPI', 'Angular', 'PostgreSQL'],
    metrics: { accuracy: '94%', objects: '500+', dataset: '3 000 images' },
    github_url: 'https://github.com/theobawana',
    demo_url: '',
    image: null,
    featured: true,
    is_confidential: false,
    order: 3,
    start_date: 'Avril 2025',
    end_date: 'Octobre 2025',
  },
  {
    id: 4,
    title: 'Algorithme Anti-Fraude Telecom',
    slug: 'anti-fraude-telecom',
    category: 'ia',
    status: 'completed',
    short_description: 'Système de détection et limitation des fraudes pour opérateur télécom',
    full_description: "Algorithme anti-fraude pour Gabon Telecom limitant les fraudes en contrôlant le nombre d'occurrences par abonné avec paramétrage flexible.",
    highlights: [
      "Contrôle du nombre d'occurrences par abonné",
      "Paramétrage flexible des seuils",
      'Déployé en production',
    ],
    technologies: ['Python', 'Django', 'PostgreSQL', 'FastAPI'],
    metrics: { status: 'En production' },
    github_url: '',
    demo_url: '',
    image: null,
    featured: false,
    is_confidential: true,
    order: 4,
    start_date: 'Octobre 2025',
    end_date: 'Février 2026',
  },
  {
    id: 5,
    title: 'Modèle Prédictif Énergie — Sud Togo',
    slug: 'prediction-energie',
    category: 'data',
    status: 'completed',
    short_description: 'Modèle ML de prédiction de consommation énergétique avec tableaux de bord BI',
    full_description: "Collecte, nettoyage et traitement de données énergétiques. Modèle ML prédictif avec pipeline ETL complet et visualisation BI.",
    highlights: [
      'Pipeline ETL complet',
      'Modèle ML de prédiction',
      'Tableaux de bord BI',
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
    metrics: { duration: '11 mois' },
    github_url: 'https://github.com/theobawana',
    demo_url: '',
    image: null,
    featured: false,
    is_confidential: false,
    order: 5,
    start_date: 'Février 2025',
    end_date: 'Décembre 2025',
  },
  {
    id: 6,
    title: "Détection d'Intrusion en Temps Réel",
    slug: 'detection-intrusion',
    category: 'ia',
    status: 'in_progress',
    short_description: "Système de Computer Vision pour la surveillance d'espaces et le contrôle d'accès intelligent",
    full_description: "Algorithme de Computer Vision analysant en temps réel un espace pour détecter les intrusions non autorisées avec envoi d'alertes instantanées.",
    highlights: [
      'Analyse temps réel des espaces',
      "Contrôle d'accès intelligent",
      "Alertes instantanées",
    ],
    technologies: ['YOLO', 'OpenCV', 'Python', 'FastAPI', 'WebSockets'],
    metrics: {},
    github_url: '',
    demo_url: '',
    image: null,
    featured: true,
    is_confidential: true,
    order: 6,
    start_date: '2025',
    end_date: 'En cours',
  },
  {
    id: 7,
    title: 'Intervention Rapide',
    slug: 'intervention-rapide',
    category: 'fullstack',
    status: 'completed',
    short_description: 'Plateforme de mise en relation pour interventions à domicile',
    full_description: "Plateforme web de mise en relation type LinkedIn de l'intervention rapide.",
    highlights: [
      'Mise en relation professionnels / particuliers',
      'Interface moderne et intuitive',
    ],
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL'],
    metrics: {},
    github_url: '',
    demo_url: 'https://snaptaf.vercel.app/',
    image: null,
    featured: false,
    is_confidential: false,
    order: 7,
    start_date: '2024',
    end_date: '2025',
  },
  {
    id: 8,
    title: 'SIG / Géolocalisation',
    slug: 'sig-geolocalisation',
    category: 'fullstack',
    status: 'completed',
    short_description: "Système d'Information Géographique avec localisation en temps réel",
    full_description: "SIG permettant de localiser en temps réel des activités et personnes via GPS avec cartographie interactive.",
    highlights: [
      'Localisation GPS en temps réel',
      'Cartographie interactive Leaflet / MapBox',
    ],
    technologies: ['Angular', 'Leaflet', 'MapBox', 'Spring Boot', 'PostgreSQL'],
    metrics: {},
    github_url: '',
    demo_url: '',
    image: null,
    featured: false,
    is_confidential: false,
    order: 8,
    start_date: '2024',
    end_date: '2025',
  },
];

const skill_categories: SkillCategory[] = [
  {
    id: 1, name: 'IA & Deep Learning', icon: 'brain', order: 1,
    skills: [
      { id: 1, name: 'Computer Vision (YOLO, CNN, OpenCV)', level: 95, category: 1 },
      { id: 2, name: 'NLP (Transformers, HTR)', level: 90, category: 1 },
      { id: 3, name: 'Machine Learning', level: 92, category: 1 },
      { id: 4, name: 'Deep Learning (PyTorch, TensorFlow)', level: 93, category: 1 },
      { id: 5, name: 'Transfer Learning / Fine-tuning', level: 88, category: 1 },
      { id: 6, name: 'Systèmes de Recommandation', level: 85, category: 1 },
      { id: 7, name: 'Agents IA & Chatbots', level: 85, category: 1 },
      { id: 8, name: 'Analyse Prédictive', level: 88, category: 1 },
    ],
  },
  {
    id: 2, name: 'Data & Pipelines', icon: 'database', order: 2,
    skills: [
      { id: 9, name: 'ETL / ELT', level: 90, category: 2 },
      { id: 10, name: 'Préparation & nettoyage de datasets', level: 92, category: 2 },
      { id: 11, name: 'Analyse statistique', level: 88, category: 2 },
      { id: 12, name: 'Tableaux de bord BI', level: 85, category: 2 },
    ],
  },
  {
    id: 3, name: 'Langages', icon: 'code', order: 3,
    skills: [
      { id: 13, name: 'Python (expert)', level: 97, category: 3 },
      { id: 14, name: 'TypeScript', level: 85, category: 3 },
      { id: 15, name: 'PHP', level: 78, category: 3 },
      { id: 16, name: 'Dart', level: 75, category: 3 },
    ],
  },
  {
    id: 4, name: 'Frameworks Backend', icon: 'server', order: 4,
    skills: [
      { id: 17, name: 'FastAPI', level: 93, category: 4 },
      { id: 18, name: 'Django', level: 90, category: 4 },
      { id: 19, name: 'Spring Boot', level: 82, category: 4 },
    ],
  },
  {
    id: 5, name: 'Frontend / Mobile', icon: 'layout', order: 5,
    skills: [
      { id: 20, name: 'Angular', level: 88, category: 5 },
      { id: 21, name: 'Next.js', level: 85, category: 5 },
      { id: 22, name: 'Flutter', level: 80, category: 5 },
    ],
  },
  {
    id: 6, name: 'DevOps & Infra', icon: 'cloud', order: 6,
    skills: [
      { id: 23, name: 'Docker', level: 88, category: 6 },
      { id: 24, name: 'Kubernetes', level: 78, category: 6 },
      { id: 25, name: 'CI/CD (GitHub Actions, GitLab CI)', level: 85, category: 6 },
      { id: 26, name: 'Git / GitLab', level: 92, category: 6 },
    ],
  },
  {
    id: 7, name: 'Bases de données', icon: 'hard-drive', order: 7,
    skills: [
      { id: 27, name: 'PostgreSQL', level: 92, category: 7 },
      { id: 28, name: 'MySQL', level: 88, category: 7 },
    ],
  },
  {
    id: 8, name: 'Outils Data & ML', icon: 'bar-chart', order: 8,
    skills: [
      { id: 29, name: 'Pandas / NumPy', level: 95, category: 8 },
      { id: 30, name: 'Scikit-learn', level: 90, category: 8 },
      { id: 31, name: 'Matplotlib / Seaborn', level: 88, category: 8 },
      { id: 32, name: 'Jupyter Notebook', level: 92, category: 8 },
      { id: 33, name: 'APIs OpenAI / HuggingFace', level: 85, category: 8 },
    ],
  },
];

export function getPortfolioData(): PortfolioData {
  return { profile, education, experiences, projects, skill_categories };
}

export function getLocalizedPortfolioData(locale: Locale): PortfolioData {
  if (locale === 'fr') return getPortfolioData();

  // Apply English translations
  const localizedProfile: Profile = { ...profile, ...profileEn };

  const localizedEducation: Education[] = education.map((edu) => {
    const en = educationEn[edu.id];
    return en ? { ...edu, ...en, highlights: en.highlights || edu.highlights } : edu;
  });

  const localizedExperiences: Experience[] = experiences.map((exp) => {
    const en = experiencesEn[exp.id];
    return en ? { ...exp, ...en, highlights: en.highlights || exp.highlights } : exp;
  });

  const localizedProjects: Project[] = projects.map((proj) => {
    const en = projectsEn[proj.id];
    return en
      ? {
          ...proj,
          ...en,
          highlights: en.highlights || proj.highlights,
          metrics: en.metrics || proj.metrics,
        }
      : proj;
  });

  const localizedSkillCategories: SkillCategory[] = skill_categories.map((cat) => {
    const en = skillCategoriesEn[cat.id];
    if (!en) return cat;
    return {
      ...cat,
      name: en.name,
      skills: cat.skills.map((skill) => ({
        ...skill,
        name: en.skills[skill.id] || skill.name,
      })),
    };
  });

  return {
    profile: localizedProfile,
    education: localizedEducation,
    experiences: localizedExperiences,
    projects: localizedProjects,
    skill_categories: localizedSkillCategories,
  };
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export async function fetchPortfolioData(): Promise<PortfolioData> {
  try {
    const res = await fetch(`${API_BASE}/portfolio/`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('API unavailable');
    return res.json();
  } catch {
    // Fallback to hardcoded data
    return getPortfolioData();
  }
}

export async function sendContactMessage(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const res = await fetch(`${API_BASE}/contact/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to send message');
  return res.json();
}
