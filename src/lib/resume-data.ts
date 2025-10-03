import { Github, Linkedin } from 'lucide-react';

export const resumeData = {
  name: 'Narges Hashemi',
  title: 'Backend Developer · Java Developer',
  location: 'Tehran, Iran',
  contact: {
    phone: '+98 933 732 3247',
    email: 'hasheminarges76@gmail.com',
  },
  socials: [
    { name: 'GitHub', url: 'https://github.com/NargesHme', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nargeshme', icon: Linkedin },
  ],
  summary: [
    'Highly skilled **Backend Developer** with over four years of experience architecting and revitalizing mission-critical systems. My expertise lies in **Java, Spring Boot, and Oracle Database**, where I have a proven track record of modernizing legacy applications, building scalable APIs, and delivering high-performance, revenue-generating solutions.',
    'I bridge the gap between traditional enterprise software and the future of intelligent applications. As a polyglot programmer proficient in **Java, Python, and .NET**, I combine disciplined, clean coding practices with a passion for leveraging **new-age AI and LLMs** to create innovative and efficient software. I thrive on solving complex problems and transforming business logic into robust, future-proof technology.',
  ],
  experience: [
    {
      company: 'Naji Research and Development Company',
      location: 'Tehran, Iran',
      role: 'Backend Developer',
      period: 'Sep 2022 – Present',
      description: [
        'Modernized an **insurance credit system** by migrating from **Java 5 to Java 8** and **Oracle DB**, improving performance and maintainability.',
        'Rebuilt web services in **.NET and C**, enhancing functionality and speed for data transformation.',
        'Migrated **100,000+ users** to an online working system, generating over **20 billion Toman (~200 billion Rial)** in revenue for Omid’s insurance credit company.',
        'Refactored **legacy government web services**, streamlining workflows for the **Governmental Discretionary Punishments Organization**.',
        'Developed reporting services handling **high-volume requests** with data consistency.',
        'Built **3 enterprise-grade web services** for the **National Oil Company** using **Spring Boot & Java 8**.',
        'Announced and reported news to the **Economic Security Police** through a dedicated reporting system.',
        'Built a web service to send **seizure discovery minutes** to the **Governmental Penalties Authority**.',
        'Built a web service to receive **customs/forfeiture warehouse receipts**.',
        'Rewrote the **input/output business logic** for Omid Insurance, improving data flow and operational efficiency.',
      ],
      techStack: ['Java', 'Spring', 'Hibernate', 'JSP', 'JDBC', 'PL/SQL', 'Struts', 'Maven', 'REST APIs', 'Git', 'Oracle DB', 'C', '.NET'],
    },
    {
      company: 'Freelance',
      location: 'Remote',
      role: 'Full-Stack Developer',
      period: '2022',
      description: [
        'Designed and deployed an **NLP-based web application** using **Django & ReactJS**.',
        'Delivered **text classification, sentiment analysis, and entity extraction** features.',
        'Built REST APIs to integrate NLP services into third-party applications.',
      ],
      techStack: ['Python', 'Machine Learning', 'ReactJS', 'Django', 'REST API'],
    },
    {
      company: 'Bridge',
      location: 'Remote (Iran)',
      role: 'Python Developer – Data Science',
      period: 'Dec 2020 – Sep 2021',
      description: [
        'Built **statistical models** on financial data to assist traders in market trend prediction.',
        'Designed **data pipelines** for dietary analysis, identifying risks in food consumption.',
        'Developed **Django REST APIs** for a diet-tracking application.',
      ],
      techStack: ['Python', 'Machine Learning', 'Deep Learning', 'Django', 'Git'],
    },
    {
      company: 'Iran Argham',
      location: 'Tehran, Iran',
      role: 'C++ Developer',
      period: 'Jun 2018 – Sep 2019',
      description: [
        'Created an **ATM receipt printer testing application** using **C++ & XFS Framework**.',
      ],
      techStack: ['C++', 'XFS Framework'],
    },
  ],
  education: {
    institution: 'Shahid Rajaei University',
    location: 'Sirjan, Iran',
    degree: 'B.Sc. in Computer Hardware Engineering',
    period: 'Jun 2015 – Feb 2020',
    details: 'Specialized in **IoT applications**, including design and manufacturing of sensors and actuators.',
  },
  skills: {
    'Backend Development': ['Java (8+)', 'Spring Boot', 'Hibernate', 'Struts', '.NET', 'C', 'REST API Development'],
    'Frontend Development': ['JSP', 'ReactJS'],
    'Python & Data Science': ['Python', 'Django', 'Machine Learning', 'Deep Learning', 'NLP'],
    'Databases': ['Oracle', 'MySQL', 'PL/SQL', 'JDBC'],
    'Tools & DevOps': ['Git', 'Maven', 'Agile/Scrum'],
    'Core Concepts': ['Data Structures & Algorithms', 'OOP', 'System Architecture', 'Microservices', 'Generative AI'],
  },
  languages: [
    { name: 'English', proficiency: 'Professional proficiency' },
    { name: 'Persian', proficiency: 'Native proficiency' },
  ],
  projects: [
    {
        title: "Insurance Credit System Modernization",
        description: "Migrated a legacy insurance credit system from Java 5 to Java 8 and Oracle DB, significantly improving performance and maintainability.",
        techStack: ["Java 8", "Oracle DB", "Spring", "Hibernate"],
        link: "https://github.com/NargesHme",
        company: "Naji R&D"
    },
    {
        title: "NLP-Powered Web Application",
        description: "Designed and deployed a full-stack web application for text classification, sentiment analysis, and entity extraction using Django and React.",
        techStack: ["Python", "Django", "ReactJS", "Machine Learning", "REST API"],
        link: "https://github.com/NargesHme",
        company: "Freelance"
    },
    {
        title: "National Oil Company Web Services",
        description: "Built three enterprise-grade, robust web services to support critical operations for the National Oil Company.",
        techStack: ["Java 8", "Spring Boot", "REST APIs", "Oracle DB"],
        link: "https://github.com/NargesHme",
        company: "Naji R&D"
    },
    {
        title: "Financial Market Trend Prediction",
        description: "Constructed statistical and machine learning models on financial data to help traders predict market trends and make informed decisions.",
        techStack: ["Python", "Machine Learning", "Deep Learning", "Data Pipelines"],
        link: "https://github.com/NargesHme",
        company: "Bridge"
    }
  ]
};

export type ResumeData = typeof resumeData;
