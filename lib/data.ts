import { PortfolioData, Profile, Education, Experience, Project, SkillCategory } from './types';
import { Locale } from './i18n';
import { profileEn, educationEn, experiencesEn, projectsEn, skillCategoriesEn } from './data-en';

/* ── Hardcoded data — also fetchable from Django API ── */

const profile: Profile = {
  id: 1,
  full_name: 'BAWANA Théodore',
  title: 'Ingénieur de Conception spécialisé en Intelligence Artificielle',
  subtitle: 'IA & Analyse de données · Computer Vision · NLP · Fullstack',
  email: 'theodore8bawana@gmail.com',
  phone: '',
  location: 'Libreville, Gabon',
  nationality: 'Togolaise',
  date_of_birth: '2001-04-07',
  website: 'https://theo.portefolio.io',
  github: 'https://github.com/theobawana01',
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
    title: 'Ingénierie IA — Système KYC & Anti-fraude identitaire',
    company: 'SAHELYS GABON (partenaire Gabon Télécom)',
    location: 'Gabon',
    start_date: '1er Décembre 2025',
    end_date: 'Présent',
    duration: 'En cours',
    contract_type: 'Prestation / Consultance',
    description: '',
    highlights: [
      "Conception d'un moteur de vision (CNN) et d'OCR pour l'automatisation de l'activation SIM",
      'Génération d’empreinte biométrique unique (comparaison faciale) pour détecter doublons et usurpations',
      "Pré-remplissage automatique des données d'identité et sécurisation du parc d'abonnés",
      "Architecture optimisée pour la gestion de plus de 5 millions de vecteurs d'identités",
      'Solution validée techniquement en pré-production avant déploiement final',
    ],
    technologies: ['Python', 'OCR', 'CNN', 'Computer Vision', 'FastAPI', 'Django', 'PostgreSQL'],
    order: 1,
  },
  {
    id: 2,
    title: 'Stage professionnel — SIG, IA & Computer Vision',
    company: 'SAHELYS',
    location: 'Gabon',
    start_date: '22 Avril 2025',
    end_date: '25 Octobre 2025',
    duration: '6 mois',
    contract_type: 'Stage ingénieur',
    description: '',
    highlights: [
      'Développement d’algorithmes de recommandation géographique et de filtrage collaboratif',
      'Mise en service d’une infrastructure cartographique centralisant les flux d’activités économiques',
      'Analyse spatiale pour anticiper les demandes de services',
      'Solution déployée en environnement de test (FindMe)',
    ],
    technologies: ['Python', 'GIS', 'Leaflet', 'MapBox', 'Angular', 'Spring Boot', 'PostgreSQL'],
    order: 2,
  },
  {
    id: 3,
    title: "Stage professionnel — Développement d'applications web & API backend",
    company: 'SAHELYS GABON',
    location: 'Gabon',
    start_date: '22 Juillet 2024',
    end_date: '25 Octobre 2024',
    duration: '4 mois',
    contract_type: 'Stage professionnel',
    description: '',
    highlights: [
      'Conception et développement d’applications web et d’API backend intégrées à des systèmes métiers',
      'Maintenance évolutive et corrective des systèmes existants',
      'Production de documentation technique et suivi sous GitHub',
    ],
    technologies: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'GitHub'],
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
    github_url: 'https://github.com/theobawana01/htr-math',
    demo_url: '',
    image: null,
    featured: false,
    is_confidential: false,
    order: 4,
    start_date: 'Février 2025',
    end_date: 'Décembre 2025',
  },
  {
    id: 2,
    title: "Vérification d'Identité par OCR & Reconnaissance d'Image",
    slug: 'verification-identite-ocr',
    category: 'ia',
    status: 'completed',
    short_description: "Projet personnel de vérification d'identité par OCR et reconnaissance d'image — adopté et déployé en production par SAHELYS chez Gabon Telecom",
    full_description: "Système de vérification d'identité conçu en autodidacte, exploitant l'OCR et la reconnaissance d'image pour extraire automatiquement les données des pièces d'identité, les matcher avec les champs attendus selon le type de document, et contrôler le nombre de comptes par abonné. Adopté par SAHELYS et intégré en production dans l'environnement de Gabon Telecom.",
    highlights: [
      "Projet conçu en autodidacte, adopté par SAHELYS pour un déploiement en production",
      "Extraction automatique des données des pièces d'identité par OCR",
      "Reconnaissance d'image pour la validation des documents",
      'Matching intelligent des données extraites avec les colonnes préfixées par type de pièce',
      "Contrôle du nombre de comptes par abonné — sécurité à l'inscription",
      'Déployé en production chez Gabon Telecom',
    ],
    technologies: ['Python', 'OCR', 'Computer Vision', 'OpenCV', 'FastAPI', 'PostgreSQL'],
    metrics: { status: 'En production chez Gabon Telecom' },
    github_url: '',
    demo_url: '',
    image: null,
    featured: false,
    is_confidential: false,
    order: 5,
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
    github_url: 'https://github.com/theobawana01/ECommerce-IA',
    demo_url: '',
    image: null,
    featured: false,
    is_confidential: false,
    order: 6,
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
    title: 'Prévision de la consommation énergétique — Zone UEMOA',
    slug: 'prediction-energie-uemoa',
    category: 'data',
    status: 'completed',
    short_description: 'Projet personnel de modélisation prédictive et BI pour anticiper les trajectoires énergétiques de la zone UEMOA',
    full_description: "Architecture de régression hybride (Stacking Regressor) entraînée sur 33 ans d'indicateurs macroéconomiques de la Banque Mondiale. Le modèle est intégré dans une application web avec tableaux de bord dynamiques pour analyser et projeter la consommation énergétique dans l'espace UEMOA.",
    highlights: [
      'Architecture Stacking Regressor pour la prévision multi-indicateurs',
      'Entraînement sur 33 ans de données macroéconomiques (Banque Mondiale)',
      'Intégration dans une application web avec dashboards dynamiques',
      'Analyse des trajectoires énergétiques pour la zone UEMOA',
      'Prototype fonctionnel en phase de test',
    ],
    technologies: ['Python', 'Scikit-learn', 'Stacking Regressor', 'Pandas', 'NumPy', 'Plotly', 'Streamlit', 'API REST'],
    metrics: { period: '33 ans', scope: 'UEMOA', status: 'Prototype en test' },
    github_url: '',
    demo_url: 'https://energy-prediction-theo.streamlit.app',
    image: null,
    featured: true,
    is_confidential: false,
    order: 1,
    start_date: 'Décembre 2023',
    end_date: 'Février 2024',
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
    featured: false,
    is_confidential: true,
    order: 7,
    start_date: '2025',
    end_date: 'En cours',
  },
  {
    id: 7,
    title: 'SnapTaf — Plateforme Emploi & Observatoire du Marché (IA + NLP)',
    slug: 'snaptaf-observatoire-marche',
    category: 'fullstack',
    status: 'completed',
    short_description: 'Plateforme web IA/NLP pour collecter les flux du marché et produire des analyses prédictives sur l’emploi',
    full_description: "Système de compréhension sémantique basé sur des Agents RAG et des architectures Transformers (BERT/GPT), intégré à une plateforme web d'observation des dynamiques d'emploi en temps réel.",
    highlights: [
      'Architecture IA/NLP avec Agents RAG et Transformers (BERT/GPT)',
      'Collecte des flux du marché pour alimenter la veille économique',
      'Analyses prédictives des dynamiques d’emploi en temps réel',
      'Plateforme opérationnelle en phase de test',
    ],
    technologies: ['Python', 'NLP', 'Transformers', 'BERT', 'GPT', 'RAG', 'Next.js', 'FastAPI'],
    metrics: {},
    github_url: '',
    demo_url: 'https://snaptaf02.vercel.app/analytics',
    image: null,
    featured: true,
    is_confidential: false,
    order: 2,
    start_date: 'Janvier 2024',
    end_date: 'Septembre 2024',
  },
  {
    id: 8,
    title: 'SIG / Géolocalisation',
    slug: 'sig-geolocalisation',
    category: 'fullstack',
    status: 'completed',
    short_description: "Projet SIG avec IA et computer vision pour l'intelligence territoriale et l'anticipation de la demande de services",
    full_description: "Infrastructure cartographique centralisant les flux d'activités économiques, enrichie par des algorithmes de recommandation géographique et de filtrage collaboratif pour l'analyse spatiale décisionnelle.",
    highlights: [
      'Algorithmes de recommandation géographique et filtrage collaboratif',
      'Centralisation des flux d’activités économiques sur une infrastructure SIG',
      'Analyse spatiale pour anticiper les demandes de services',
      'Solution déployée en environnement de test (FindMe)',
    ],
    technologies: ['Angular', 'Leaflet', 'MapBox', 'Spring Boot', 'PostgreSQL'],
    metrics: {},
    github_url: '',
    demo_url: 'https://findme-theta-ten.vercel.app',
    image: null,
    featured: true,
    is_confidential: false,
    order: 3,
    start_date: 'Avril 2025',
    end_date: 'Octobre 2025',
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
