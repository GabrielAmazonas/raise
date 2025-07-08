import {
  Project,
  Skill,
  Experience,
  ContactInfo,
  ScientificPaper,
  CommunityReference,
} from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Stripe',
      'PostgreSQL',
      'Tailwind CSS',
    ],
    githubUrl: 'https://github.com/example/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/example/task-manager',
    liveUrl: 'https://task-manager-demo.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description:
      'A weather dashboard with location-based forecasts and historical data.',
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'Vite'],
    githubUrl: 'https://github.com/example/weather-dashboard',
    liveUrl: 'https://weather-demo.com',
    featured: false,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', proficiency: 'expert' },
  { name: 'Next.js', category: 'frontend', proficiency: 'advanced' },
  { name: 'TypeScript', category: 'frontend', proficiency: 'advanced' },
  { name: 'Vue.js', category: 'frontend', proficiency: 'intermediate' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 'advanced' },

  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 'advanced' },
  { name: 'Express.js', category: 'backend', proficiency: 'advanced' },
  { name: 'Python', category: 'backend', proficiency: 'intermediate' },
  { name: 'Django', category: 'backend', proficiency: 'intermediate' },

  // Database
  { name: 'PostgreSQL', category: 'database', proficiency: 'advanced' },
  { name: 'MongoDB', category: 'database', proficiency: 'intermediate' },
  { name: 'Redis', category: 'database', proficiency: 'intermediate' },

  // DevOps
  { name: 'Docker', category: 'devops', proficiency: 'intermediate' },
  { name: 'AWS', category: 'devops', proficiency: 'intermediate' },
  { name: 'CI/CD', category: 'devops', proficiency: 'intermediate' },

  // Other
  { name: 'Git', category: 'other', proficiency: 'advanced' },
  { name: 'Jest', category: 'other', proficiency: 'advanced' },
  { name: 'Cypress', category: 'other', proficiency: 'intermediate' },
];

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Tech Corp',
    position: 'Senior Software Engineer',
    startDate: '2022-01',
    endDate: '2024-01',
    description:
      'Led development of multiple full-stack applications using React, Node.js, and PostgreSQL.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    achievements: [
      'Improved application performance by 40% through optimization',
      'Mentored 3 junior developers',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
    ],
  },
  {
    id: '2',
    company: 'Startup Inc',
    position: 'Full Stack Developer',
    startDate: '2020-03',
    endDate: '2022-01',
    description:
      'Built and maintained web applications using modern JavaScript frameworks.',
    technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Redis'],
    achievements: [
      'Developed 5+ production applications',
      'Reduced bug reports by 30% through improved testing',
      'Collaborated with design team to improve UX',
    ],
  },
];

export const contactInfo: ContactInfo = {
  email: 'hello@softwareengineer.dev',
  linkedin: 'https://linkedin.com/in/softwareengineer',
  github: 'https://github.com/softwareengineer',
  twitter: 'https://twitter.com/softwareengineer',
};

export const scientificPapers: ScientificPaper[] = [
  {
    id: '1',
    title: 'Attention Is All You Need',
    institutions: ['Google', 'University of Toronto'],
    paperUrl: 'https://arxiv.org/abs/1706.03762',
  },
  {
    id: '2',
    title:
      'Large Language Models (LLMs): Deployment, Tokenomics and Sustainability',
    institutions: ['Huawei', 'University of Ottawa'],
    paperUrl: 'https://arxiv.org/abs/2405.17147',
  },
];

export const communityReferences: CommunityReference[] = [
  {
    id: '1',
    name: 'Uncle Bob Martin',
    twitterUrl: 'https://twitter.com/unclebobmartin',
    postImageUrl: '/uncle-bob-tdd.webp',
    description: 'Clean Code advocate and Agile development pioneer',
    idea: 'Test-Driven Development principles that guide robust software architecture and maintainable code practices',
  },
  {
    id: '2',
    name: 'Kent Beck',
    twitterUrl: 'https://twitter.com/kentbeck',
    postImageUrl: '/kent-beck-on-ai.webp',
    description: 'Creator of Extreme Programming and Test-Driven Development',
    idea: 'AI-assisted development workflows that enhance productivity while maintaining code quality and developer creativity',
  },
];
