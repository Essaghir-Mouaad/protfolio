// lib/data.ts
import { Owner, Project, SkillGroup, Education, Experience, Club } from './types'

export const owner: Owner = {
  name: 'Mouaad Essaghir',
  title: 'Élève Ingénieur – Computer Science & Artificial Intelligence',
  email: 'mouadessaghir7@gmail.com',
  phone: '+212 600 42 37 05',
  location: 'Tahenoute Seti Fadema, El Haouz',
  linkedin: 'Mouaad Essaghir',
  github: 'Mouaad Essaghir',
  languages: ['Tamazight (native)', 'Arabic (native)', 'French (fluent)', 'English (intermediate)'],
}

export const aiProjects: Project[] = [
  {
    id: 'waste-sorting',
    title: 'Waste Sorting Module',
    date: 'March 2025',
    description: 'Classification model for waste types (plastic, paper, etc.) using Python, TensorFlow, MobileNet, and Pandas. Deployed on Arduino in C++ for hardware integration. Web interface built with FastAPI + React featuring advanced analysis (waste hazard level, statistics dashboard).',
    stack: ['Python', 'TensorFlow', 'MobileNet', 'Pandas', 'FastAPI', 'React', 'C++', 'Arduino'],
    badge: 'Featured',
  },
  {
    id: 'house-price-prediction',
    title: 'House Price Prediction',
    date: 'January 2025',
    description: 'ML regression model built with Scikit-learn to estimate real estate prices. Data visualization with Matplotlib. Deployed via Flask.',
    stack: ['Python', 'Scikit-learn', 'Matplotlib', 'Flask'],
  },
  {
    id: 'autocomplete-model',
    title: 'Auto Complete Model (from scratch)',
    date: '2025',
    description: 'Language model built from scratch using n-gram techniques for text auto-completion.',
    stack: ['Python', 'N-gram models'],
  },
  {
    id: 'autocorrect-model',
    title: 'Auto Correct Model (from scratch)',
    date: '2025–2026',
    description: 'Spell correction model built from scratch using dynamic programming and the Minimum Edit Distance algorithm.',
    stack: ['Python', 'Dynamic Programming'],
  },
  {
    id: 'nmt-model',
    title: 'Neural Machine Translation (from scratch)',
    date: '2025–2026',
    description: 'Full NMT system built from scratch implementing the attention mechanism, encoder, and decoder for English-to-Portuguese translation.',
    stack: ['Python', 'Attention Mechanism', 'Encoder-Decoder'],
  },
  {
    id: 'qa-transformers',
    title: 'Question Answering with Transformers (from scratch)',
    date: '2023–2024',
    description: 'QA model built from scratch implementing self-attention, cross-attention, masked-attention, and multi-head attention.',
    stack: ['Python', 'Transformers', 'PyTorch'],
  },
]

export const webProjects: Project[] = [
  {
    id: 'stock-management',
    title: 'Stock Management App — GTE Internship',
    date: 'July–September 2025 (last updated January 2026)',
    description: 'Full-stack stock management application built for an association during internship at Guarhim Technologie (GTE), Marrakech. Upcoming integration of AI models to analyze product consumption, identify top categories, and perform stock analytics.',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    badge: 'Internship · GTE Marrakech',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    date: 'January 2025',
    description: 'Complete e-commerce solution with React.js frontend and Node.js/Express backend. MongoDB for product and user management.',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'codequize',
    title: 'CodeQuize — Interactive Quiz App',
    date: 'December 2024',
    description: 'Interactive quiz platform to learn programming concepts. Backend with Node.js, Express, MongoDB. Frontend with HTML, EJS, CSS, Bootstrap. REST API tested with Postman.',
    stack: ['Node.js', 'Express', 'MongoDB', 'HTML', 'EJS', 'CSS', 'Bootstrap', 'Postman'],
  },
]

export const aiSkills: SkillGroup[] = [
  {
    category: 'ML & DL Frameworks',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'MobileNet', 'Pandas', 'Matplotlib'],
  },
  {
    category: 'NLP & LLMs',
    skills: ['N-gram models', 'Minimum Edit Distance', 'Attention mechanisms', 'Encoder-Decoder architecture', 'Neural Machine Translation', 'LLMs techniques', 'Transformers'],
  },
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'Java', 'C/C++', 'Dart'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'FastAPI', 'Flask', 'Linux', 'Git', 'GitHub Actions', 'Postman'],
  },
]

export const webSkills: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'jQuery', 'EJS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Flask', 'FastAPI'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'SQL', 'Prisma'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Postman', 'Linux'],
  },
  {
    category: 'Languages',
    skills: ['JavaScript', 'Python', 'Java', 'C/C++', 'Dart'],
  },
]

export const education: Education[] = [
  {
    school: 'ENSA Safi',
    degree: 'Engineering Cycle, Génie Informatique & IA',
    period: '2025 – present',
    location: 'Safi, Morocco',
  },
  {
    school: 'ENSA Safi',
    degree: 'Cycle Préparatoire',
    period: '2022 – 2024',
    location: 'Safi, Morocco',
  },
  {
    school: 'Lycée Technique Mohammed VI',
    degree: 'Bac Sciences Math B',
    period: '2021 – 2022',
    location: 'Marrakech, Morocco',
  },
]

export const experience: Experience[] = [
  {
    company: 'Guarhim Technologie (GTE)',
    role: 'Stage d\'initiation',
    period: 'July 14 – September 14, 2025',
    description: [
      'Full-stack stock management app for an association',
      'Upcoming AI integration for consumption analytics',
    ],
  },
]

export const clubs: Club[] = [
  {
    name: 'Club FALCON',
    role: 'Project cell member',
    org: 'ENSA Safi',
  },
  {
    name: 'Club ENIAC',
    role: 'Active member',
    org: 'ENSA Safi',
  },
]
