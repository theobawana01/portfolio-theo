import { Profile, Education, Experience, Project, SkillCategory } from './types';

/**
 * English translations for all portfolio data content.
 * These override the French defaults when locale is 'en'.
 */

export const profileEn: Partial<Profile> = {
  title: 'Design Engineer specialized in Artificial Intelligence',
  subtitle: 'AI & Data Analysis · Computer Vision · NLP · Fullstack',
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
    title: 'AI Engineering — KYC & Identity Anti-Fraud System',
    start_date: 'December 1, 2025',
    end_date: 'Present',
    duration: 'Ongoing',
    contract_type: 'Consulting / Freelance',
    highlights: [
      'Designed a CNN + OCR engine to automate SIM activation workflows',
      'Built unique biometric fingerprinting (face matching) to detect duplicates and identity theft',
      'Automated identity data prefill and improved subscriber base security',
      'Optimized architecture to handle over 5 million identity vectors',
      'Technically validated in pre-production before final rollout',
    ],
  },
  2: {
    title: 'Professional Internship — GIS, AI & Computer Vision',
    start_date: 'April 22, 2025',
    end_date: 'October 25, 2025',
    duration: '6 months',
    contract_type: 'Engineering internship',
    highlights: [
      'Developed geographic recommendation and collaborative filtering algorithms',
      'Deployed a cartographic infrastructure centralizing economic activity flows',
      'Used spatial analytics to anticipate service demand',
      'Solution deployed in test environment (FindMe)',
    ],
  },
  3: {
    title: 'Professional Internship — Web Applications & Backend APIs',
    start_date: 'July 22, 2024',
    end_date: 'October 25, 2024',
    duration: '4 months',
    contract_type: 'Professional internship',
    highlights: [
      'Designed and developed web applications and backend APIs integrated into business systems',
      'Performed maintenance and incremental improvements on existing systems',
      'Produced technical documentation and GitHub-based follow-up',
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
    title: 'Identity Verification via OCR & Image Recognition',
    short_description: 'Self-taught identity verification project using OCR and image recognition — adopted and deployed in production by SAHELYS at Gabon Telecom',
    full_description: 'Identity verification system designed independently, leveraging OCR and image recognition to automatically extract data from ID documents, match them with expected fields based on document type, and control the number of accounts per subscriber. Adopted by SAHELYS and deployed in production at Gabon Telecom.',
    highlights: [
      'Self-designed project, adopted by SAHELYS for production deployment',
      'Automatic data extraction from ID documents via OCR',
      'Image recognition for document validation',
      'Intelligent matching of extracted data with prefixed columns by document type',
      'Subscriber account control — enrollment security',
      'Deployed in production at Gabon Telecom',
    ],
    metrics: { status: 'In production at Gabon Telecom' },
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
    title: 'Energy Consumption Forecasting — UEMOA Zone',
    short_description: 'Predictive modeling and BI personal project to anticipate energy trajectories across the UEMOA area',
    full_description: 'Hybrid regression architecture (Stacking Regressor) trained on 33 years of World Bank macroeconomic indicators. The model is integrated into a web app with dynamic dashboards to analyze and forecast energy consumption across UEMOA.',
    highlights: [
      'Stacking Regressor architecture for multi-indicator forecasting',
      'Training on 33 years of macroeconomic data (World Bank)',
      'Integrated into a web app with dynamic BI dashboards',
      'Energy trajectory analysis for the UEMOA zone',
      'Functional prototype currently in test phase',
    ],
    metrics: { period: '33 years', scope: 'UEMOA', status: 'Prototype in testing' },
    start_date: 'December 2023',
    end_date: 'February 2024',
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
    title: 'SnapTaf — Employment Platform & Market Observatory (AI + NLP)',
    short_description: 'AI/NLP web platform collecting market flows and delivering predictive insights on employment dynamics',
    full_description: 'Semantic understanding system based on RAG Agents and Transformer architectures (BERT/GPT), integrated into a web platform to monitor labor-market dynamics in near real time.',
    highlights: [
      'AI/NLP architecture with RAG Agents and Transformers (BERT/GPT)',
      'Market-flow collection to power economic intelligence',
      'Predictive analytics for real-time employment dynamics',
      'Operational platform currently in test phase',
    ],
    start_date: 'January 2024',
    end_date: 'September 2024',
  },
  8: {
    title: 'GIS / Geolocation Intelligence',
    short_description: 'GIS project with AI and computer vision for territorial intelligence and service-demand anticipation',
    full_description: 'Cartographic infrastructure centralizing economic activity flows, enriched with geographic recommendation and collaborative filtering for decision-oriented spatial analytics.',
    highlights: [
      'Geographic recommendation and collaborative filtering algorithms',
      'Centralization of economic activity flows in a GIS stack',
      'Spatial analytics to anticipate service demand',
      'Solution deployed in a test environment (FindMe)',
    ],
    start_date: 'April 2025',
    end_date: 'October 2025',
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
