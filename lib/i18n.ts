export type Locale = 'fr' | 'en';

export const translations = {
  fr: {
    // Navbar
    nav: {
      home: 'Accueil',
      about: 'Profil',
      projects: 'Projets',
      experience: 'Expériences',
      skills: 'Compétences',
      education: 'Formation',
      resume: 'CV',
      contact: 'Contact',
      cta: 'Me Contacter',
    },

    // Hero
    hero: {
      photoAlt: 'BAWANA Théodore',
      photoCaption: 'BAWANA Théodore — Ingénieur IA',
      photoAriaLabel: 'Voir la photo en grand',
      availability: 'Disponibilité',
      typingSequence: [
        'Ingénieur en Intelligence Artificielle',
        'Développeur de Modèles IA',
        'Spécialiste Computer Vision & NLP',
        'Développeur Fullstack',
      ],
      subtitle: "Diplômé de l'Institut Africain d'Informatique • Passionné par la conception et le déploiement de solutions IA à fort impact",
      nationality: 'Nationalité :',
      ctaProjects: 'Voir mes Projets IA',
      ctaContact: 'Me Contacter',
    },

    // About
    about: {
      overline: '— À propos',
      title: 'Profil',
      titleHighlight: 'Professionnel',
      highlights: [
        {
          title: 'Intelligence Artificielle',
          description: 'Computer Vision, NLP, Deep Learning, Modèles prédictifs & Systèmes de recommandation',
        },
        {
          title: 'Ingénierie & Développement',
          description: 'Pipelines ETL/ELT, déploiement de modèles, architectures Fullstack robustes',
        },
        {
          title: 'Résultats Concrets',
          description: 'Projets déployés en production avec des métriques vérifiables (92%, 94%, 96% accuracy)',
        },
      ],
      nationalityLabel: 'Nationalité',
      locationLabel: 'Localisation',
      umoaLabel: 'Éligibilité UMOA',
      umoaValue: '✓ Ressortissant togolais',
      mobilityLabel: 'Mobilité',
      mobilityValue: 'International',
      statProjects: 'Projets IA réalisés',
      statAccuracy: 'Meilleure accuracy',
      statProduction: 'Projets en production',
      statExperience: "Mois d'expérience professionnelle",
    },

    // Projects
    projects: {
      overline: '— Projets',
      title: 'Réalisations',
      titleHighlight: 'IA & Tech',
      subtitle: 'Des projets concrets avec des résultats mesurables, du concept au déploiement en production.',
      categories: {
        all: 'Tous',
        ia: 'Intelligence Artificielle',
        data: 'Data & Analytics',
        fullstack: 'Fullstack',
      },
      featured: 'Featured',
      completed: 'Terminé',
      inProgress: 'En cours',
      confidential: 'Projet Confidentiel',
      github: 'GitHub',
      demo: 'Demo',
    },

    // Experience
    experience: {
      overline: '— Expériences',
      title: 'Parcours',
      titleHighlight: 'Professionnel',
      subtitle: "Stage volontaire dès les congés de 2ème année, puis rappelé par SAHELYS pour le stage de fin de cycle, suivi d'un contrat de prestation.",
    },

    // Skills
    skills: {
      overline: '— Compétences',
      title: 'Stack',
      titleHighlight: 'Technique',
      subtitle: "Un profil polyvalent centré sur l'Intelligence Artificielle, avec des compétences solides en développement Fullstack.",
      languages: 'Langues',
      langFrench: 'Français (courant)',
      langEnglish: 'Anglais technique (docs, recherche)',
      aiIntegration: 'Intégration IA',
      aiOpenai: 'APIs OpenAI',
      aiHuggingface: 'HuggingFace',
      aiPretrained: 'Modèles préentraînés',
    },

    // Education
    education: {
      overline: '— Formation',
      title: 'Parcours',
      titleHighlight: 'Académique',
    },

    // Resume
    resume: {
      overline: '— Curriculum Vitae',
      title: 'Mon',
      titleHighlight: 'CV',
      subtitle: 'Téléchargez mon CV pour un aperçu complet de mon parcours et de mes compétences.',
      fileType: 'PDF',
      cardTitle: 'BAWANA Théodore — CV',
      cardDescription: "Ingénieur en Intelligence Artificielle & Développeur Fullstack. Retrouvez l'ensemble de mon parcours, mes compétences techniques et mes réalisations dans ce document.",
      download: 'Télécharger le CV',
      view: 'Consulter en ligne',
      cvHighlights: [
        'Ingénieur en Intelligence Artificielle',
        'Diplômé IAI — Cycle Ingénieur',
        '8+ projets IA réalisés',
        "15+ mois d'expérience professionnelle",
        'Computer Vision, NLP, Deep Learning',
        'Développeur Fullstack',
      ],
    },

    // Contact
    contact: {
      overline: '— Contact',
      title: 'Restons en',
      titleHighlight: 'Contact',
      subtitle: "N'hésitez pas à me contacter pour toute opportunité ou collaboration.",
      emailLabel: 'Email',
      locationLabel: 'Localisation',
      githubLabel: 'GitHub',
      nationalityLabel: 'Nationalité',
      umoaEligible: '✓ Éligible UMOA — Ressortissant togolais',
      availabilityTitle: 'Disponibilité Immédiate',
      availabilityText: 'Ouvert aux opportunités internationales',
      formName: 'Nom complet',
      formNamePlaceholder: 'Votre nom',
      formEmail: 'Email',
      formEmailPlaceholder: 'votre@email.com',
      formSubject: 'Sujet',
      formSubjectPlaceholder: 'Objet de votre message',
      formMessage: 'Message',
      formMessagePlaceholder: 'Votre message...',
      formSuccess: 'Message envoyé avec succès !',
      formError: "Erreur lors de l'envoi. Réessayez ou contactez-moi par email.",
      formSending: 'Envoi en cours...',
      formSubmit: 'Envoyer le Message',
    },

    // Footer
    footer: {
      subtitle: 'AI Engineer',
      description: "Ingénieur de Conception en Informatique, spécialiste Intelligence Artificielle. Ouvert aux opportunités internationales.",
      navTitle: 'Navigation',
      navAbout: 'Profil',
      navProjects: 'Projets',
      navExperience: 'Expériences',
      navSkills: 'Compétences',
      navEducation: 'Formation',
      contactTitle: 'Contact',
      contactNationality: 'Nationalité Togolaise',
      socialTitle: 'Liens',
      copyright: (year: number) => `© ${year} BAWANA Théodore. Fait avec ❤ et beaucoup de Python.`,
      backToTop: 'Retour en haut',
    },
  },

  en: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      resume: 'Resume',
      contact: 'Contact',
      cta: 'Contact Me',
    },

    // Hero
    hero: {
      photoAlt: 'BAWANA Théodore',
      photoCaption: 'BAWANA Théodore — AI Engineer',
      photoAriaLabel: 'View full photo',
      availability: 'Availability:',
      typingSequence: [
        'Artificial Intelligence Engineer',
        'AI Model Developer',
        'Computer Vision & NLP Specialist',
        'Fullstack Developer',
      ],
      subtitle: "Graduate of the African Institute of Computer Science • Passionate about designing and deploying high-impact AI solutions",
      nationality: 'Nationality:',
      ctaProjects: 'View My AI Projects',
      ctaContact: 'Contact Me',
    },

    // About
    about: {
      overline: '— About',
      title: 'Professional',
      titleHighlight: 'Profile',
      highlights: [
        {
          title: 'Artificial Intelligence',
          description: 'Computer Vision, NLP, Deep Learning, Predictive Models & Recommendation Systems',
        },
        {
          title: 'Engineering & Development',
          description: 'ETL/ELT Pipelines, Model Deployment, Robust Fullstack Architectures',
        },
        {
          title: 'Concrete Results',
          description: 'Projects deployed in production with verifiable metrics (92%, 94%, 96% accuracy)',
        },
      ],
      nationalityLabel: 'Nationality',
      locationLabel: 'Location',
      umoaLabel: 'WAEMU Eligibility',
      umoaValue: '✓ Togolese national',
      mobilityLabel: 'Mobility',
      mobilityValue: 'International',
      statProjects: 'AI Projects completed',
      statAccuracy: 'Best accuracy',
      statProduction: 'In production',
      statExperience: 'Months of professional experience',
    },

    // Projects
    projects: {
      overline: '— Projects',
      title: 'AI & Tech',
      titleHighlight: 'Achievements',
      subtitle: 'Concrete projects with measurable results, from concept to production deployment.',
      categories: {
        all: 'All',
        ia: 'Artificial Intelligence',
        data: 'Data & Analytics',
        fullstack: 'Fullstack',
      },
      featured: 'Featured',
      completed: 'Completed',
      inProgress: 'In Progress',
      confidential: 'Confidential Project',
      github: 'GitHub',
      demo: 'Demo',
    },

    // Experience
    experience: {
      overline: '— Experience',
      title: 'Professional',
      titleHighlight: 'Journey',
      subtitle: 'Voluntary internship from 2nd year break, then called back by SAHELYS for final cycle internship, followed by a consulting contract.',
    },

    // Skills
    skills: {
      overline: '— Skills',
      title: 'Technical',
      titleHighlight: 'Stack',
      subtitle: 'A versatile profile focused on Artificial Intelligence, with strong Fullstack development skills.',
      languages: 'Languages',
      langFrench: 'French (fluent)',
      langEnglish: 'Technical English (docs, research)',
      aiIntegration: 'AI Integration',
      aiOpenai: 'OpenAI APIs',
      aiHuggingface: 'HuggingFace',
      aiPretrained: 'Pre-trained Models',
    },

    // Education
    education: {
      overline: '— Education',
      title: 'Academic',
      titleHighlight: 'Background',
    },

    // Resume
    resume: {
      overline: '— Curriculum Vitae',
      title: 'My',
      titleHighlight: 'Resume',
      subtitle: 'Download my resume for a complete overview of my background and skills.',
      fileType: 'PDF',
      cardTitle: 'BAWANA Théodore — Resume',
      cardDescription: 'AI Engineer & Fullstack Developer. Find my complete background, technical skills and achievements in this document.',
      download: 'Download Resume',
      view: 'View Online',
      cvHighlights: [
        'Artificial Intelligence Engineer',
        'IAI Graduate — Engineering Degree',
        '8+ AI projects completed',
        '15+ months of professional experience',
        'Computer Vision, NLP, Deep Learning',
        'Fullstack Developer',
      ],
    },

    // Contact
    contact: {
      overline: '— Contact',
      title: "Let's Stay in",
      titleHighlight: 'Touch',
      subtitle: "Don't hesitate to reach out for any opportunity or collaboration.",
      emailLabel: 'Email',
      locationLabel: 'Location',
      githubLabel: 'GitHub',
      nationalityLabel: 'Nationality',
      umoaEligible: '✓ WAEMU Eligible — Togolese national',
      availabilityTitle: 'Immediately Available',
      availabilityText: 'Open to international opportunities',
      formName: 'Full Name',
      formNamePlaceholder: 'Your name',
      formEmail: 'Email',
      formEmailPlaceholder: 'your@email.com',
      formSubject: 'Subject',
      formSubjectPlaceholder: 'Subject of your message',
      formMessage: 'Message',
      formMessagePlaceholder: 'Your message...',
      formSuccess: 'Message sent successfully!',
      formError: 'Error sending message. Please try again or contact me by email.',
      formSending: 'Sending...',
      formSubmit: 'Send Message',
    },

    // Footer
    footer: {
      subtitle: 'AI Engineer',
      description: 'Computer Science Engineer, specializing in Artificial Intelligence. Open to international opportunities.',
      navTitle: 'Navigation',
      navAbout: 'About',
      navProjects: 'Projects',
      navExperience: 'Experience',
      navSkills: 'Skills',
      navEducation: 'Education',
      contactTitle: 'Contact',
      contactNationality: 'Togolese Nationality',
      socialTitle: 'Links',
      copyright: (year: number) => `© ${year} BAWANA Théodore. Made with ❤ and a lot of Python.`,
      backToTop: 'Back to top',
    },
  },
};

export type Translations = typeof translations.fr;
