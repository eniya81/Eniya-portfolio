// Single source of truth for all portfolio content.
// Everything here comes from the resume / brief – edit this file to update the site.

export const profile = {
  name: 'ENIYA K',
  shortName: 'Eniya K',
  title: 'Aspiring Software Engineer',
  roles: 'Python Developer | Backend Developer | AI/ML Enthusiast',

  intro:
    "I'm a Computer Science and Engineering student passionate about building intelligent applications, scalable backend systems, and modern software solutions. I enjoy solving challenging problems and transforming ideas into practical applications.",

  tagline: 'Building intelligent solutions through code.',

  // Fixed asset paths for GitHub Pages deployment
  photo: `${import.meta.env.BASE_URL}images/profile.jpg`,
  photoWebp: `${import.meta.env.BASE_URL}images/profile.webp`,
  resume: `${import.meta.env.BASE_URL}resume.pdf`,

  email: 'eniyakasilingam1@gmail.com',
  github: 'https://github.com/eniya81',
  linkedin: 'https://linkedin.com/in/eniya-kasilingam-795b77327',
  leetcode: 'https://leetcode.com/u/Eniyaah_07/',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  summary:
    'Computer Science and Engineering student with strong foundations in Data Structures, Algorithms, Object-Oriented Programming, and Full-Stack Development. Experienced in developing AI-powered applications, machine learning models, and web-based platforms using Python, React, FastAPI, Scikit-learn, and SQL. Interested in solving real-world problems through software engineering and intelligent applications.',
  highlights: [
    { icon: 'GraduationCap', title: 'Computer Science & Engineering Student' },
    { icon: 'Layers', title: 'Full-Stack Development' },
    { icon: 'Server', title: 'Python & Backend Development' },
    { icon: 'BrainCircuit', title: 'Artificial Intelligence & Machine Learning' },
    { icon: 'Binary', title: 'Data Structures & Algorithms' },
  ],
}

export const skills = [
  { icon: 'Code2', category: 'Programming Languages', items: ['Python', 'SQL'] },
  { icon: 'Server', category: 'Frameworks', items: ['FastAPI', 'Flask'] },
  { icon: 'Library', category: 'Libraries', items: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'] },
  { icon: 'Database', category: 'Databases', items: ['MySQL', 'Firebase'] },
  { icon: 'Wrench', category: 'Tools & Platforms', items: ['Git', 'GitHub', 'Power BI'] },
  {
    icon: 'Cpu',
    category: 'Core Concepts',
    items: ['Data Structures and Algorithms', 'Object-Oriented Programming', 'Operating Systems'],
  },
]

export const experience = [
  {
    company: 'Privacy Weave',
    role: 'Software Developer Intern',
    duration: 'December 2025 – January 2026',
    location: 'Coimbatore, India',
    points: [
      'Developed and integrated REST API endpoints using Python and Flask.',
      'Implemented and tested backend application modules.',
      'Identified and resolved application logic errors.',
      'Collaborated with fellow interns on group projects and presentations.',
    ],
  },
  {
    company: 'Infosys Springboard',
    role: 'Python Developer',
    duration: 'June 2026 – September 2026',
    location: null,
    points: [
      'Developed Python-based application modules.',
      'Built and integrated REST APIs.',
      'Implemented business logic and data processing.',
      'Applied debugging and problem-solving skills to improve application functionality.',
    ],
  },
]

export const projects = [
  {
    icon: 'LineChart',
    title: 'Creator Analytics & Content Performance Dashboard',
    overview:
      'A full-stack analytics platform that helps content creators monitor and analyze their social media performance through an interactive dashboard.',
    tech: [
      'Python',
      'FastAPI',
      'React.js',
      'Vite',
      'PostgreSQL',
      'SQLAlchemy',
      'Alembic',
      'JWT',
      'YouTube Data API',
      'Recharts',
    ],
    features: [
      'REST APIs built with FastAPI, backed by PostgreSQL for creator profiles, content performance, audience insights, revenue, and sponsorship data.',
      'YouTube Data API integration to retrieve content metrics and visualize trends with interactive charts.',
      'JWT-based authentication, analytics modules, and notification management.',
      'PDF and Excel report generation.',
    ],
    github: 'https://github.com/eniya81/CONTENT-CREATOR-ANALYTICS',
    demo: null,
  },
  {
    icon: 'Target',
    title: 'PrepPilot AI – AI-Based Placement Preparation Assistant',
    overview:
      'A full-stack AI-powered placement preparation platform that helps students evaluate their placement readiness through personalized assessments and intelligent skill analysis.',
    tech: [
      'Python',
      'FastAPI',
      'React.js',
      'Vite',
      'SQLite',
      'SQLAlchemy',
      'JWT',
      'Scikit-learn',
      'NLP',
      'Recharts',
    ],
    features: [
      'REST APIs with FastAPI and SQLite/SQLAlchemy for student profiles, resumes, assessment records, and skill requirements.',
      'Resume analysis using NLP and keyword extraction.',
      'Automated aptitude assessments, role-based interview question recommendations, and skill gap analysis.',
      'Weighted placement readiness scoring algorithm with personalized study roadmaps on an interactive dashboard.',
    ],
    github: 'https://github.com/eniya81/PrepPilot-AI',
    demo: null,
  },
  {
    icon: 'ShieldAlert',
    title: 'Toxic Comment Prediction Model',
    overview:
      'A machine learning-based NLP model that identifies and classifies toxic, offensive, and harmful comments in online sports discussions.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'NLP', 'Machine Learning', 'Matplotlib'],
    features: [
      'Text preprocessing including tokenization, stop-word removal, and feature extraction.',
      'Evaluation of multiple classification algorithms to improve detection accuracy and reduce false predictions.',
      'Automatically flags inappropriate content to support content moderation in digital communities.',
    ],
    github: 'https://github.com/eniya81/Toxic_Comment_Prediction_Model',
    demo: null,
  },
]

export const education = [
  {
    school: 'KPR Institute of Engineering and Technology',
    qualification: 'Bachelor of Engineering',
    detail: 'Computer Science and Engineering',
    duration: 'September 2024 – June 2028',
    score: 'CGPA: 8.35',
  },
  {
    school: 'Vidya Nethrra Matriculation Higher Secondary School',
    qualification: 'Higher Secondary',
    detail: null,
    duration: 'June 2023 – March 2024',
    score: 'Score: 91%',
  },
  {
    school: 'Sri Vagisvari Vidya Mandir Matriculation Higher Secondary School',
    qualification: 'Secondary (SSLC)',
    detail: null,
    duration: 'June 2021 – May 2022',
    score: 'Score: 79%',
  },
]

export const certifications = [
  { icon: 'Cloud', title: 'Introduction to Generative AI', issuer: 'AWS' },
  { icon: 'BarChart3', title: 'Power BI for Beginners', issuer: 'Microsoft' },
  { icon: 'Users', title: 'Career Edge: Soft Skills Certification', issuer: 'TCS' },
]