export const siteContent = {
  meta: {
    title: 'Jayden Ellul | Interactive CV',
    description: 'Interactive CV of Jayden Ellul, IT Multimedia student focused on front-end development and design.'
  },
  theme: {
    surfaceGradient: 'from-gray-950 via-red-950 to-gray-900',
    heroSphereColor: '#ef4444',
    particleColors: ['#ef4444', '#facc15', '#dc2626']
  },
  navigation: {
    brand: 'Jayden Ellul',
    items: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'education', label: 'Education' },
      { id: 'achievements', label: 'Achievements' },
      { id: 'contact', label: 'Contact' }
    ]
  },
  hero: {
    greeting: "Hello, I'm",
    displayName: 'Jayden',
    title: 'IT Multimedia Student',
    tagline: 'Building clean, engaging front-end experiences with simplicity and efficiency in mind.',
    primaryCta: { label: 'View Projects', href: '#projects' },
    secondaryCta: { label: 'Contact Me', href: '#contact' }
  },
  about: {
    heading: 'About Me',
    paragraphs: [
      'I am Jayden Ellul, a 17-year-old IT Multimedia student at MCAST currently completing Advanced Diploma Level 4 (Year 2). I have been exploring coding and front-end design since getting my first personal computer in 2019.',
      'I enjoy combining design and development to deliver user-friendly interfaces. I am currently building practical experience in technical environments while growing as a front-end developer and creative problem solver.'
    ],
    quickFacts: {
      location: 'Kappara, Malta',
      yearsExperience: '1 year',
      workAuthorization: 'Authorized to work in Malta'
    },
    targetRoles: ['Front-End Development', 'Graphic Design', 'IT Repairs'],
    technologies: ['React', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Illustrator', 'Photoshop', 'Git']
  },
  skills: {
    heading: 'Skills & Expertise',
    categories: [
      {
        category: 'Frontend',
        skills: [
          { name: 'React', level: 85 },
          { name: 'JavaScript', level: 85 },
          { name: 'HTML', level: 90 },
          { name: 'CSS', level: 88 }
        ]
      },
      {
        category: 'Design & Graphics',
        skills: [
          { name: 'Adobe Illustrator', level: 80 },
          { name: 'Adobe Photoshop', level: 82 },
          { name: 'UI Styling', level: 84 },
          { name: 'Digital Media/Photography', level: 78 }
        ]
      },
      {
        category: 'Programming & Tools',
        skills: [
          { name: 'Java', level: 72 },
          { name: 'Python', level: 75 },
          { name: 'Node.js', level: 78 },
          { name: 'Git', level: 82 }
        ]
      }
    ]
  },
  experience: {
    heading: 'Experience',
    items: [
      {
        company: 'APS',
        role: 'DevOps Officer',
        period: 'Feb - Oct',
        location: 'Hybrid',
        highlights: [
          'Supported day-to-day DevOps tasks in both on-site and remote environments.',
          'Collaborated with team members across technical and operational workflows.',
          'Built practical experience in process reliability, troubleshooting, and system support.'
        ]
      }
    ]
  },
  projects: {
    heading: 'Featured Projects',
    items: [
      {
        title: 'JaysIRacingToolbox',
        description: 'A mobile app that helps sim racers prepare before events with practical setup and comparison tools.',
        tech: ['Node.js', 'React', 'JavaScript', 'HTML', 'CSS'],
        contribution: 'Full-stack development, server setup, and visual design.',
        outcome: 'Currently under development.',
        liveUrl: '',
        repoUrl: 'https://github.com/jaydeninja/JaysIRacingToolbox',
        gradient: 'from-yellow-400 to-amber-500'
      }
    ]
  },
  education: {
    heading: 'Education',
    items: [
      {
        institution: 'MCAST',
        degree: 'Advanced Diploma (Level 4)',
        period: 'Current',
        notes: 'IT Multimedia, Year 2'
      }
    ]
  },
  achievements: {
    heading: 'Achievements',
    items: [
      {
        title: 'RoboCup - 3rd Place',
        year: '2024',
        context: "International robotics league hosted in Italy; our team placed third against top university teams."
      }
    ]
  },
  contact: {
    heading: "Let's Work Together",
    subheading: 'I am open to opportunities in front-end development, graphic design, and IT support.',
    email: 'jaydenellul11@gmail.com',
    phone: '+356 79208468',
    showPhone: true,
    links: [
      {
        label: 'GitHub',
        handle: '@jaydeninja',
        href: 'https://github.com/jaydeninja',
        icon: 'GitHub'
      },
      {
        label: 'LinkedIn',
        handle: 'Jayden Ellul',
        href: 'https://www.linkedin.com/in/jayden-ellul',
        icon: 'LinkedIn'
      }
    ]
  },
  footer: {
    text: 'Jayden Ellul. Built with React, Vite, Framer Motion, and Three.js.'
  }
}
