export const profile = {
  name: 'Abdulaziz Siddiqui',
  role: 'Full Stack Web Developer',
  tagline:
    'I build fast, responsive, and accessible web experiences with the MERN stack and Next.js.',
  about: [
    'I\u2019m a motivated Full Stack Web Developer specializing in the MERN stack \u2014 React.js, Node.js, Express.js, and MongoDB \u2014 along with Next.js. I love turning ideas into polished, performant products with clean UI/UX.',
    'A collaborative team player keen to learn and implement industry best practices, I combine strong technical proficiency with analytical problem-solving. I\u2019m eager to contribute innovative ideas and adapt to changing priorities within cross-functional teams.',
    'I have completed my BS in Computer Science at PMAS-UIIT (2022\u20132026), I\u2019ve built everything from AI-driven e-learning platforms to educational 2D games.',
  ],
  location: 'Rawalpindi, Pakistan',
  email: 'abdulazizsiddiqui3456@gmail.com',
  phone: '+92 308 5841484',
  github: 'https://github.com/Abdulaziz-Siddiqui-2003',
  linkedin: 'https://www.linkedin.com/in/abdulaziz-siddiqui-7a6768346',
}

export const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: 'Frontend',
    skills: ['Next.js', 'React.js', 'JavaScript', 'HTML', 'Tailwind CSS', 'CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'APIs', 'Postman'],
  },
  {
    title: 'Tools & Other',
    skills: ['VS Code', '2D Game Dev', 'Construct 3', 'JWT Auth', 'Git'],
  },
  {
    title: 'AI Proficiency',
    skills: ['ChatGPT', 'Claude AI', 'Google Gemini', 'Google Stitch'],
  },
]

export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  year: string
}

export const projects: Project[] = [
  {
    title: 'Intelli-Learn \u2014 E-Learning Platform',
    description:
      'A comprehensive MERN-stack e-learning platform with secure portals for Students, Instructors, and Admins. Integrated a custom ML model fine-tuned over 120 epochs for personalized quiz explanations, an automated Quiz Generator, and Automatic Scoring, all secured with robust JWT authentication.',
    image: '/projects/intelli-learn.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Machine Learning', 'JWT'],
    link: 'https://github.com/Abdulaziz-Siddiqui-2003/Intelli-Learn-Latest',
    year: '2025\u20132026',
  },
  {
    title: 'IT Solutions Website',
    description:
      'A fast, component-based web application built with React.js and styled with Tailwind CSS. Made dynamic with MongoDB for form submissions and for seeding & rendering graph data to the site from the database, connected through an Express API.',
    image: '/projects/it-solutions.png',
    tags: ['React', 'Tailwind CSS', 'MongoDB', 'Express'],
    link: 'https://github.com/Abdulaziz-Siddiqui-2003/IT-solutions-website',
    year: '2025',
  },
  {
    title: 'Business Nexus',
    description:
      'A networking platform built during the DevelopersHub internship that connects investors and entrepreneurs. Built with React and made dynamic with MongoDB for signup/login logic and data rendering through an Express API.',
    image: '/projects/business-nexus.png',
    tags: ['React', 'Tailwind CSS', 'MongoDB', 'Express'],
    link: 'https://github.com/Abdulaziz-Siddiqui-2003/Business-Nexus',
    year: '2025',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'A full e-commerce web application developed during the DevelopersHub internship. Built with React for a responsive component-based UI, with MongoDB-backed authentication and data rendered through an Express API.',
    image: '/projects/ecommerce.png',
    tags: ['React', 'Tailwind CSS', 'MongoDB', 'Express'],
    link: 'https://github.com/Abdulaziz-Siddiqui-2003/ECOMMERCE-Full-Project',
    year: '2025',
  },
  {
    title: 'Injury Claim Website',
    description:
      'A clean, responsive, and visually appealing injury claim settlement website developed with HTML and styled with CSS, focused on performance and usability with smooth UI/UX.',
    image: '/projects/injury-claim.png',
    tags: ['HTML', 'CSS', 'Responsive'],
    link: 'https://github.com/Abdulaziz-Siddiqui-2003/MV-Claim-Settlement',
    year: '2025',
  },
  {
    title: 'Educational 2D Games',
    description:
      'Multiple educational 2D games built in Construct 3, including complete 50-level games. Implemented game logic and backend systems using JSON and JavaScript to deliver engaging learning experiences.',
    image: '/projects/2d-games.png',
    tags: ['Construct 3', 'JavaScript', 'JSON', 'Game Logic'],
    link: 'https://github.com/Abdulaziz-Siddiqui-2003',
    year: '2023\u20132024',
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  description: string
  tags: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Frontend / Full Stack Developer (Intern)',
    company: 'ROBX.AI',
    period: 'Dec 2025 \u2014 Jan 2026',
    description:
      'Redesigned multiple landing pages following Figma designs in Next.js and built multiple modules and pages. Developed error-free APIs in Express.js including OpenAI Prompt, Google Search Analytics, and Google Console integrations while working on real company projects.',
    tags: ['Next.js', 'Express.js', 'OpenAI API', 'Figma'],
  },
  {
    role: 'Full Stack Developer (Intern)',
    company: 'DevelopersHub',
    period: '6-Week Internship \u00b7 2025',
    description:
      'Developed responsive, component-based web applications with React.js and Tailwind CSS. Built Business Nexus and a full E-Commerce platform, made dynamic with MongoDB for authentication and data rendering through Express APIs.',
    tags: ['React', 'MongoDB', 'Express', 'Tailwind CSS'],
  },
  {
    role: 'Full Stack Web Developer',
    company: 'Personal Projects',
    period: '2 Years \u00b7 2023 \u2014 2025',
    description:
      'Developed multiple full-stack web applications from concept to deployment. Designed and implemented responsive front-end interfaces and scalable back-end APIs, working across the entire development stack to deliver complete solutions.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'React'],
  },
  {
    role: '2D Game Developer',
    company: 'Construct 3 Projects',
    period: '2023 \u2014 2024',
    description:
      'Built multiple educational 2D games, delivering complete 50-level experiences. Implemented diverse game logic and backend systems using JSON and JavaScript.',
    tags: ['Construct 3', 'JavaScript', 'JSON'],
  },
]

export const education = {
  degree: 'BS in Computer Science',
  school: 'PMAS \u2014 Arid Agriculture University Institute of Information Technology (UIIT)',
  period: '2022 \u2014 2026',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
