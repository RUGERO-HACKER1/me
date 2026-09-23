export const site = {
  name: 'Rugero Fidele',
  tagline: 'Full-Stack & Mobile Developer',
  location: 'Kigali, Rwanda',
  availability: 'Open to remote and part-time work.',
  headline:
    'I build high-performance full-stack web and mobile apps, powered by a background in Applied Mathematics.',
  contact: {
    email: 'fidelerugero100@gmail.com',
    github: 'https://github.com/RUGERO-HACKER1',
  },
  cta: "Let's build something together",
  stack: [
    'React',
    'TypeScript',
    'Tailwind',
    'Node',
    'Express',
    'Prisma',
    'Postgres',
    'MongoDB',
    'React Native',
  ],
  nav: [
    { label: 'Expertise', href: '#expertise' },
    { label: 'History', href: '#history' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
};

export const expertise = [
  {
    id: 'fullstack',
    title: 'Full-Stack Web',
    description:
      'End-to-end web applications with React, TypeScript, Node.js, and PostgreSQL — from schema design to polished UI.',
    icon: 'code',
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description:
      'Cross-platform apps with React Native and Expo, including offline sync and field-ready experiences.',
    icon: 'mobile',
  },
  {
    id: 'math',
    title: 'Applied Mathematics',
    description:
      'Statistical aggregation, optimization, and data modeling that turn raw datasets into actionable insights.',
    icon: 'chart',
  },
];

export const timeline = [
  {
    year: '2026',
    title: 'BSc Applied Mathematics — Year 2',
    org: 'University of Rwanda',
    description: 'Building analytical foundations that inform how I design and optimize software systems.',
  },
  {
    year: '2025',
    title: '1st Place — kLab Hackathon',
    org: 'Tech Upskill for All · December 2025',
    description: 'Led development of UmuhinziHub, an AI-powered agritech platform for smallholder farmers.',
  },
  {
    year: '2025',
    title: 'kLab Full-Stack Graduate',
    org: 'kLab Rwanda',
    description: 'Intensive training in modern web development, APIs, databases, and deployment workflows.',
  },
  {
    year: '2024',
    title: 'FabLab Robotics Program',
    org: 'FabLab Rwanda',
    description: 'Hands-on experience with embedded systems, prototyping, and hardware-software integration.',
  },
];

export const projects = [
  {
    id: 'umuhinzihub',
    title: 'UmuhinziHub',
    type: 'Full-Stack · Mobile',
    badge: 'Hackathon Winner',
    description:
      'AI-powered agritech platform helping smallholder farmers with localized insights, crop cycles, and field-ready mobile access.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'React Native'],
    links: {
      live: 'https://umuhinzihub-fe.andasy.dev/',
      github: 'https://github.com/Klab-Rwanda/umuhinziHub-fe',
      repos: [
        { label: 'Frontend', url: 'https://github.com/Klab-Rwanda/umuhinziHub-fe' },
        { label: 'Backend', url: 'https://github.com/Klab-Rwanda/umuhinziHub-be' },
        { label: 'Mobile', url: 'https://github.com/Klab-Rwanda/umuhinziHub-mb' },
      ],
    },
  },
  {
    id: 'telemedicine',
    title: 'TeleMedicine Rwanda',
    type: 'Full-Stack',
    badge: 'Healthcare',
    description:
      'Telehealth platform connecting patients and providers across Rwanda with appointment scheduling and virtual consultations.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB'],
    links: {
      live: 'https://telemedecine-rw.vercel.app/',
    },
  },
  {
    id: 'ur-attendance',
    title: 'UR Attendance',
    type: 'Full-Stack',
    badge: 'EdTech',
    description:
      'Digital attendance management system for University of Rwanda with real-time tracking and reporting dashboards.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL'],
    links: {
      live: 'https://ur-attendance.vercel.app/',
    },
  },
];
