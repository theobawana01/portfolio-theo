export interface Profile {
  id: number;
  full_name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  nationality: string;
  date_of_birth: string;
  website: string;
  github: string;
  linkedin: string;
  bio: string;
  photo: string | null;
  cv_file: string | null;
  available: boolean;
  availability_text: string;
}

export interface Education {
  id: number;
  title: string;
  institution: string;
  location: string;
  start_year: number;
  end_year: number | null;
  degree_type: string;
  description: string;
  highlights: string[];
  order: number;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string;
  duration: string;
  contract_type: string;
  description: string;
  highlights: string[];
  technologies: string[];
  order: number;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  status: string;
  short_description: string;
  full_description: string;
  highlights: string[];
  technologies: string[];
  metrics: Record<string, string>;
  github_url: string;
  demo_url: string;
  image: string | null;
  featured: boolean;
  is_confidential: boolean;
  order: number;
  start_date: string;
  end_date: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
  category: number;
}

export interface SkillCategory {
  id: number;
  name: string;
  icon: string;
  order: number;
  skills: Skill[];
}

export interface PortfolioData {
  profile: Profile;
  education: Education[];
  experiences: Experience[];
  projects: Project[];
  skill_categories: SkillCategory[];
}
