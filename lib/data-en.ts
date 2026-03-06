import { Profile, Education, Experience, Project, SkillCategory } from './types';

/**
 * English translations for all portfolio data content.
 * These override the French defaults when locale is 'en'.
 */

export const profileEn: Partial<Profile> = {
  title: 'Computer Science Engineer',
  subtitle: 'AI Specialist · AI Model Developer · Fullstack',
  nationality: 'Togolese',
  bio: "Design Engineer graduate from the African Institute of Computer Science (IAI), admitted through national competitive exam after a strong background in Fundamental Mathematics. My passion for Artificial Intelligence dates back to my university years in mathematics, where I discovered the theoretical foundations of Machine Learning. Since then, I have translated this passion into concrete, impactful projects: computer vision, NLP, predictive models and AI security systems. I am now fully operational to design and deploy ambitious AI solutions within leading institutions.",
  availability_text: 'Immediate',
};

export const educationEn: Record<number, Partial<Education>> = {
  1: {
    title: 'Computer Science Design Engineering Degree',
    institution: 'African Institute of Computer Science (IAI) — Headquarters',
    degree_type: 'Engineering degree',
    highlights: [
      'Admitted through national competitive exam, among the top selected candidates',
      'Specialization in Artificial Intelligence: model development, Computer Vision, NLP',
    ],
  },
  2: {
    title: 'Fundamental Mathematics Studies — 151 credits validated',
    institution: 'University of Lomé',
    location: 'Lomé, Togo',
    degree_type: 'University studies',
    highlights: [
      'Strong foundations in linear algebra, analysis, probability and statistics — direct foundations of AI',
      'Studies interrupted to join IAI through competitive exam before the end of 3rd year — 151 credits earned',
    ],
  },
  3: {
    title: 'Scientific Baccalaureate — Series D',
    institution: 'Lycée de Aouda',
    degree_type: 'State diploma',
  },
};

export const experiencesEn: Record<number, Partial<Experience>> = {
  1: {
    title: 'AI Developer & Anti-Fraud Algorithm',
    start_date: 'October 2025',
    end_date: 'February 2026',
    duration: '5 months',
    contract_type: 'Consulting / Freelance',
    highlights: [
      'Development of a system limiting fraud by controlling the number of occurrences per subscriber',
      'Flexible configuration: administrators define the authorized occurrence thresholds',
      'Project delivered and successfully deployed in production',
    ],
  },
  2: {
    title: 'Engineering Internship — AI E-Commerce Platform',
    start_date: 'April 2025',
    end_date: 'October 2025',
    duration: '7 months',
    contract_type: 'Engineering internship',
    highlights: [
      'Visual classification model: 500+ objects — Accuracy: 94%',
      'AI chatbot integrated for customer service',
      'Recommendation system based on purchases, distance and price',
      'Complete ETL/ELT pipeline for data management',
      'AI model integration into a functional e-commerce platform',
    ],
  },
  3: {
    title: 'AI Developer — Intelligent Surveillance',
    start_date: 'July 2024',
    end_date: 'October 2024',
    duration: '3 months',
    contract_type: 'Professional contract',
    highlights: [
      'Real-time person detection, tracking and counting via video streams',
      'Detection accuracy: 96% — YOLO v8 + InsightFace',
      'Automatic calculation of each individual\'s presence time',
      'Complete real-time pipeline: acquisition → detection → tracking → storage → reporting',
    ],
  },
};

export const projectsEn: Record<number, Partial<Project>> = {
  1: {
    short_description: 'Handwritten mathematical manuscript recognition and automatic conversion to LaTeX',
    full_description: 'Handwritten text recognition (HTR) system automatically converting mathematical manuscripts into structured LaTeX code. Direct application to automated grading in educational systems.',
    highlights: [
      'Automatic manuscript to LaTeX conversion — Accuracy: 92%',
      'Computer Vision for handwritten character recognition (HTR)',
      'NLP for syntactic interpretation and LaTeX conversion',
      'Application: automated educational grading',
    ],
    metrics: { accuracy: '92%', duration: '11 months' },
    start_date: 'February 2025',
    end_date: 'December 2025',
  },
  2: {
    title: 'Intelligent Surveillance via Video Analysis',
    short_description: 'Real-time person detection, tracking and counting via video streams',
    full_description: 'Intelligent surveillance system analyzing video streams in real time to detect, track and count people with automatic presence time calculation.',
    highlights: [
      'Real-time person detection, tracking and counting',
      'Detection accuracy: 96% — YOLO v8 + InsightFace',
      'Automatic presence time calculation for each individual',
      'Complete pipeline deployed in production',
    ],
    metrics: { accuracy: '96%', duration: '3 months' },
    start_date: 'July 2024',
    end_date: 'October 2024',
  },
  3: {
    title: 'E-Commerce with AI Vision & Chatbot',
    short_description: 'E-commerce platform with visual recognition, AI chatbot and recommendation system',
    full_description: 'Complete e-commerce platform integrating visual classification, AI chatbot for customer service and recommendation system based on purchases, distance and price.',
    highlights: [
      'Visual classification: 500+ objects — Accuracy: 94%',
      'AI chatbot for customer service',
      'Recommendation system (purchases, distance, price)',
      'Complete ETL/ELT pipeline',
    ],
    metrics: { accuracy: '94%', objects: '500+', dataset: '3,000 images' },
    start_date: 'April 2025',
    end_date: 'October 2025',
  },
  4: {
    title: 'Telecom Anti-Fraud Algorithm',
    short_description: 'Fraud detection and limitation system for telecom operator',
    full_description: 'Anti-fraud algorithm for Gabon Telecom limiting fraud by controlling the number of occurrences per subscriber with flexible configuration.',
    highlights: [
      'Occurrence control per subscriber',
      'Flexible threshold configuration',
      'Deployed in production',
    ],
    metrics: { status: 'In production' },
    start_date: 'October 2025',
    end_date: 'February 2026',
  },
  5: {
    title: 'Energy Predictive Model — South Togo',
    short_description: 'ML model for energy consumption prediction with BI dashboards',
    full_description: 'Collection, cleaning and processing of energy data. Predictive ML model with complete ETL pipeline and BI visualization.',
    highlights: [
      'Complete ETL pipeline',
      'Predictive ML model',
      'BI dashboards',
    ],
    metrics: { duration: '11 months' },
    start_date: 'February 2025',
    end_date: 'December 2025',
  },
  6: {
    title: 'Real-Time Intrusion Detection',
    short_description: 'Computer Vision system for space surveillance and intelligent access control',
    full_description: 'Computer Vision algorithm analyzing spaces in real time to detect unauthorized intrusions with instant alert sending.',
    highlights: [
      'Real-time space analysis',
      'Intelligent access control',
      'Instant alerts',
    ],
    end_date: 'In progress',
  },
  7: {
    title: 'Quick Intervention',
    short_description: 'Platform connecting professionals and individuals for home interventions',
    full_description: 'Web platform connecting professionals and individuals, like a LinkedIn for quick intervention services.',
    highlights: [
      'Professional / individual matching',
      'Modern and intuitive interface',
    ],
  },
  8: {
    title: 'GIS / Geolocation',
    short_description: 'Geographic Information System with real-time location tracking',
    full_description: 'GIS enabling real-time locating of activities and people via GPS with interactive mapping.',
    highlights: [
      'Real-time GPS location',
      'Interactive Leaflet / MapBox mapping',
    ],
  },
};

export const skillCategoriesEn: Record<number, { name: string; skills: Record<number, string> }> = {
  1: {
    name: 'AI & Deep Learning',
    skills: {
      1: 'Computer Vision (YOLO, CNN, OpenCV)',
      2: 'NLP (Transformers, HTR)',
      3: 'Machine Learning',
      4: 'Deep Learning (PyTorch, TensorFlow)',
      5: 'Transfer Learning / Fine-tuning',
      6: 'Recommendation Systems',
      7: 'AI Agents & Chatbots',
      8: 'Predictive Analytics',
    },
  },
  2: {
    name: 'Data & Pipelines',
    skills: {
      9: 'ETL / ELT',
      10: 'Dataset Preparation & Cleaning',
      11: 'Statistical Analysis',
      12: 'BI Dashboards',
    },
  },
  3: {
    name: 'Languages',
    skills: {
      13: 'Python (expert)',
      14: 'TypeScript',
      15: 'PHP',
      16: 'Dart',
    },
  },
  4: {
    name: 'Backend Frameworks',
    skills: {
      17: 'FastAPI',
      18: 'Django',
      19: 'Spring Boot',
    },
  },
  5: {
    name: 'Frontend / Mobile',
    skills: {
      20: 'Angular',
      21: 'Next.js',
      22: 'Flutter',
    },
  },
  6: {
    name: 'DevOps & Infra',
    skills: {
      23: 'Docker',
      24: 'Kubernetes',
      25: 'CI/CD (GitHub Actions, GitLab CI)',
      26: 'Git / GitLab',
    },
  },
  7: {
    name: 'Databases',
    skills: {
      27: 'PostgreSQL',
      28: 'MySQL',
    },
  },
  8: {
    name: 'Data & ML Tools',
    skills: {
      29: 'Pandas / NumPy',
      30: 'Scikit-learn',
      31: 'Matplotlib / Seaborn',
      32: 'Jupyter Notebook',
      33: 'OpenAI / HuggingFace APIs',
    },
  },
};
