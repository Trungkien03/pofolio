import { Icons } from '@/components/icons';
import { HomeIcon } from 'lucide-react';

const iconAssets = {
  java: '/java.png',
  mongodb: '/mongodb.png',
  mysql: '/svg/mysql.svg',
  reactHookForm: '/svg/react-hook-form.svg',
  sql: '/svg/sql.svg',
  sqlserver: '/svg/sqlserver.svg',
  checkmark_dark: '/svg/checkmark-dark.svg',
  checkmark_light: '/svg/checkmark-light.svg',
  css: '/svg/css.svg',
  docker: '/svg/docker.svg',
  git_dark: '/svg/git-dark.svg',
  git_light: '/svg/git-light.svg',
  html: '/svg/html.svg',
  jest: '/svg/jest.svg',
  nodejs: '/svg/nodejs.svg',
  prime_react: '/svg/primereact.svg',
  react_native_icon: '/svg/react-native.svg',
  reactIcon: '/svg/react.svg',
  redux_toolkit: '/svg/redux-toolkit.svg',
  tailwindcss: '/svg/tailwindcss.svg',
  typescript: '/svg/typescript.svg',
  webpack: '/svg/webpack.svg',
  swift: '/svg/swift.svg',
  swift_ui: '/svg/swiftui.svg',
  sql_server: '/sqlserver.png',
  jira: '/jira-icon.png',
  firebase: '/logo-firebase.png',
  redis: '/redis-icon.webp',
  postgres: '/postgresql.png',
  postman: '/svg/postman-icon.svg',
  figma: '/figma-icon.png',
  git: '/git_icon.png',
};

export const DATA = {
  name: 'Trung Kien Nguyen',
  initials: 'NK',
  url: 'https://kanetech.id.vn',
  location: 'Vietnam',
  locationLink: 'https://www.google.com/maps/place/Vietnam',
  description:
    'As a Mobile Developer, I focus on building mobile and web applications using React Native, SwiftUI and React. During my time as Co-Founder at Unicourse LLC, I developed user-friendly and scalable cross-platform solutions, ensuring high performance and great user experiences. I enjoy collaborating in teams and continuously improving my skills to create effective, innovative applications.',
  summary:
    'Co-Founder & Mobile Engineer at Unicourse LLC. Experienced in building cross-platform mobile/web apps with React Native, SwiftUI, ReactJS. Awarded Top 1 Rocket Boost, Excellent Student Achievement Awards. GPA 3.5/4. Passionate about scalable, high-performance solutions and great UX.',
  avatarUrl: '/profile.jpg',
  skills: [
    { name: 'TypeScript', icon: iconAssets.typescript },
    { name: 'ReactJS', icon: iconAssets.reactIcon },
    { name: 'React Native', icon: iconAssets.react_native_icon },
    { name: 'NodeJS', icon: iconAssets.nodejs },
    { name: 'Swift', icon: iconAssets.swift },
    { name: 'SwiftUI', icon: iconAssets.swift_ui },
    { name: 'PrimeReact', icon: iconAssets.prime_react },
    { name: 'SQL Server', icon: iconAssets.sql_server },
    { name: 'PostgreSQL', icon: iconAssets.postgres },
    { name: 'MongoDB', icon: iconAssets.mongodb },
    { name: 'TailwindCSS', icon: iconAssets.tailwindcss },
    { name: 'Postman', icon: iconAssets.postman },
    { name: 'Git', icon: iconAssets.git },
    { name: 'Figma', icon: iconAssets.figma },
    { name: 'Docker', icon: iconAssets.docker },
    { name: 'Redis', icon: iconAssets.redis },
    { name: 'JIRA', icon: iconAssets.jira },
    { name: 'Firebase', icon: iconAssets.firebase },
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    // { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'kiennt.it.work@gmail.com',
    tel: '+84 974102437',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/Trungkien03',
        icon: Icons.github,
        navbar: true,
      },
      Hackerrank: {
        name: 'Hackerrank',
        url: 'https://www.hackerrank.com/Trungkien03',
        icon: Icons.hackerrank,
        navbar: true,
      },
      Leetcode: {
        name: 'Leetcode',
        url: 'https://leetcode.com/Trungkien03',
        icon: Icons.leetcode,
        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/kane03',
        icon: Icons.linkedin,
        navbar: true,
      },
      Gmail: {
        name: 'Send Email',
        url: 'mailto:kiennt.it.work@gmail.com',
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: 'Terralogic LLC',
      href: 'https://terralogic.com/',
      location: 'Vietnam',
      badges: ['Full-time'],
      title: 'Mobile Developer & Web Developer',
      logoUrl: '/logo/logo-terralogic.jpeg',
      start: '01/2025',
      end: 'Now',
      description:
        'Design mobile application with React Native Expo. Build website application with Next.js and NestJS. Participate in the development process following Agile methodology. Deploy products on AWS and package with Docker. Use English for daily communication.',
    },
    {
      company: 'Hopper SE',
      href: 'https://hopper.se',
      location: 'Vietnam',
      badges: ['Part-time'],
      title: 'Full Stack Developer',
      logoUrl: '/logo/logo-hopperse.jpg',
      start: '01/2025',
      end: 'Now',
      description:
        'Design and develop a financial web application for Hopper SE, following the Agile Scrum methodology. Utilize modern technologies including Next.js, NestJS, and AWS to build scalable and high-performance web systems. Collaborate closely with cross-functional teams to deliver well-architected, user-centric solutions in a fast-paced environment.',
    },
    {
      company: 'Unicourse LLC',
      href: 'https://unicourse.vn',
      badges: ['Full-time', 'Rocket Boost Top 1 Award'],
      location: 'Vietnam',
      title: 'Co-Founder & Mobile Developer',
      logoUrl: '/logo/logo-unicourse.png',
      start: '01/2024',
      end: '05/2025',
      description:
        'Developed cross-platform mobile and web applications for Unicourse, enhancing user experience and performance. Designed and implemented seamless user experiences across iOS, Android, and web platforms using React Native, SwiftUI and ReactJS. Achieved Rocket Boost’s Top 1 Award, with the platform generating active revenue and growth.',
    },
    {
      company: 'FPT Software',
      href: 'https://fpt.com.vn',
      badges: ['Full-time'],
      location: 'Vietnam',
      title: 'Software Engineer',
      logoUrl: '/logo/logo-fsoft.png',
      start: '08/2022',
      end: '12/2023',
      description:
        'Implemented features and user interfaces on the website using ReactJS and PrimeReact, ensuring a seamless user experience. Collaborated with development teammates and other departments to ensure code consistency and efficiency. Applied strong knowledge of ReactJS and TypeScript to address technical challenges and optimize application performance. Applied Testing with Jest to ensure the quality and functionality.',
    },
  ],
  education: [
    {
      school: 'FPT University',
      href: 'https://fpt.edu.vn',
      location: 'Vietnam',
      degree: 'Software Engineer (GPA: 3.5/4)',
      logoUrl: '/logo/logo-fpt-uni.png',
      start: '2019',
      end: '2024',
      description: `
        During my time at FPT University, I received a comprehensive education in Software Engineering with a strong emphasis on real-world applications and technology innovation. 
  
        I actively participated in multiple team projects, where we developed full-stack applications that solved real-life problems. These experiences sharpened my technical and collaboration skills, from ideation to deployment.
  
        I also completed specialized online courses from Coursera, focusing on Design Systems and Project Management, which helped me understand how to structure scalable interfaces and manage development cycles effectively.
  
        Additionally, I was part of a startup initiative where our team successfully launched a digital product to market, gaining hands-on experience in product development, market fit validation, and iterative design.
      `,
    },
  ],
  projects: [
    {
      title: 'Lucent – Pomodoro Timer',
      href: 'https://github.com/Lucent-RN',
      dates: '05/2025 – Now',
      active: true,
      description:
        'A Pomodoro Timer app that helps you focus and stay productive. It allows you to set a timer for work and breaks, and provides a simple and intuitive interface for tracking your progress.',
      technologies: [
        'React Native',
        'TypeScript',
        'ReactJS',
        'TailwindCSS',
        'Expo',
        'Firebase',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://lucent-timer.vercel.app/',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Github',
          href: 'https://github.com/Lucent-RN',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/logo/logo-lucent.png',
      imageProject: '/logo/logo-lucent.png',
      video: '',
    },
    {
      title: 'Lambda – Yoga Class Applications',
      href: 'https://github.com/Trungkien03/Lambda.git',
      dates: '05/2024 – 09/2024',
      active: true,
      description:
        'A startup offering web and mobile access to university courses, focusing on FPT University students in short term. Lead the development of user interfaces for both mobile and web platforms, ensuring a seamless and responsive user experience across devices. Recognized as one of the top projects at FPT University and awarded Top 1 in the Rocket Boost startup competition. The platform is live and generating revenue.',
      technologies: [
        'React Native',
        'SwiftUI',
        'ReactJS',
        'TypeScript',
        'PrimeReact',
        'MUI',
        'Angular',
        'PrimeNG',
        'Firebase',
        'PostgreSQL',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://unicourse.vn',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Github',
          href: 'https://github.com/Unicourse-LC',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/logo/logo-unicourse.png',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Funicourse-apple-app.jpg?alt=media&token=9c896d9c-4b9b-4d07-98d4-f6f753cbc40a',
      video: '',
    },
    {
      title: 'Lambda – Yoga Class Applications',
      href: 'https://github.com/Trungkien03/Lambda.git',
      dates: '05/2024 – 09/2024',
      active: false,
      description:
        'A comprehensive mobile solution for managing and booking yoga classes, tailored for both customers and administrators. Developed cross-platform mobile applications using React Native and Typescript. Designed intuitive interfaces for seamless user and admin experiences. Integrated real-time booking and class management features for optimal performance.',
      technologies: [
        'React Native',
        'Typescript',
        'Kotlin',
        'Expo',
        'Firebase',
      ],
      links: [
        {
          type: 'Github',
          href: 'https://github.com/Lambda-RN',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/lambda-icon.png',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flambda-admin.jpg?alt=media&token=570174cb-f44d-451d-87cc-36fad8984741',
      video: '',
    },
    {
      title: 'Whale Home – Rental Apartment Application',
      href: 'https://github.com/Whale-Home',
      dates: '12/2023 – 04/2024',
      active: false,
      description:
        'A dedicated platform offering rental and sales services for apartments within the VinHomes area. Lead the technical direction of a React Native initiative, balancing responsibilities as a Technical Leader and hands-on Frontend Developer. Technologies: React Native, Expo, ContextAPI, Spring Boot, Java, SQL, Docker, PostgreSQL, Visual Studio Code, IntelliJ, Docker.',
      technologies: [
        'React Native',
        'Expo',
        'ContextAPI',
        'Spring Boot',
        'Java',
        'SQL',
        'Docker',
        'PostgreSQL',
      ],
      links: [
        {
          type: 'Github',
          href: 'https://github.com/Trungkien03/WhaleHome',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/whale-home.png',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fonboard.png?alt=media&token=2940ef95-ccd9-4255-8a46-2a679950e380',
      video: '',
    },
  ],
  awards: [
    {
      title: 'Top 1 - Rocket Boost - FPT Education',
      date: 'November 08, 2024',
      icon: '/rocket-boost.jpg',
      description: '',
      location: 'FPT University',
    },
    {
      title: 'Top 100 Excellent Students of FPT University',
      date: 'August 16, 2024',
      icon: '/summer-2024.jpg',
      description: '',
      location: 'FPT University',
    },
    {
      title: 'Best E-Learning Platform of FPT University',
      date: 'Aug 25, 2024',
      icon: '/learning-service.jpg',
      description: '',
      location: 'Rocket Boost Contest',
    },
    {
      title: 'Honorable Student Achievement Awards',
      date: '2022 - 2023 - 2024',
      icon: '/honorable-student.jpg',
      description: '',
      location: 'FPT University',
    },
    {
      title: 'Excellent Student Achievement Awards',
      date: '2023 - FALL',
      icon: '/excellent-student.jpg',
      description: '',
    },
    {
      title: 'Excellent Student Achievement Awards',
      date: '2022 - FALL',
      icon: '/excellent-student-2022.jpg',
      description: '',
      location: 'FPT University',
    },
  ],
  certifications: [
    {
      title: 'User Experience Research and Design',
      organization: 'Coursera',
      date: 'Mar 27, 2024',
      description: '',
      link: 'https://www.coursera.org/account/accomplishments/specialization/5ZWUFTEEWYFQ',
      icon: '/logo/logo-coursera.png',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2FScreenshot%202024-12-11%20at%2014.22.19.png?alt=media&token=ce53f57a-b013-4e81-84d7-e4fc2a0379d4',
    },
    {
      title: 'Project Management Principles and Practices',
      organization: 'Coursera',
      date: 'Feb 21, 2024',
      description: '',
      link: 'https://www.coursera.org/account/accomplishments/specialization/8W48V5ERJJU6',
      icon: '/logo/logo-coursera.png',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2FScreenshot%202024-12-11%20at%2014.22.40.png?alt=media&token=1f45c6d8-5211-48ec-b47e-b5bd0d305af9',
    },
    {
      title: 'Software Development Lifecycle',
      organization: 'Coursera',
      date: 'Mar 26, 2023',
      description: '',
      link: 'https://www.coursera.org/account/accomplishments/specialization/ESCFBJD794M7',
      icon: '/logo/logo-coursera.png',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2FScreenshot%202024-12-11%20at%2014.24.09.png?alt=media&token=59ee1354-2e99-4b9b-b44f-250d1ddfcb66',
    },
    {
      title: 'Web Design for Everybody: Basics of Web Development & Coding',
      organization: 'Coursera',
      date: 'Nov 22, 2022',
      description: '',
      link: 'https://www.coursera.org/account/accomplishments/specialization/FVLS39XDNXC7',
      icon: '/logo/logo-coursera.png',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2FScreenshot%202024-12-11%20at%2014.24.33.png?alt=media&token=c5214b49-7091-4730-8718-9a12624492b3',
    },
    {
      title: 'CertNexus Certified Ethical Emerging Technologist',
      organization: 'Coursera',
      date: 'Jun 22, 2023',
      description: '',
      link: 'https://www.coursera.org/account/accomplishments/specialization/JXKY2KJFRFJL',
      icon: '/logo/logo-coursera.png',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2FScreenshot%202024-12-11%20at%2014.24.42.png?alt=media&token=0991cf73-56ff-41a6-9779-fe871fb77d9f',
    },
    {
      title: 'IBSTPI Standards',
      organization: 'Coursera',
      date: 'Sep 25, 2024',
      description: '',
      link: '',
      icon: '/logo/logo-fpt-uni.png',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2FScreenshot%202024-12-13%20at%2012.05.33.png?alt=media&token=2d5ec51d-fe7a-4d3a-95ed-21c2bf099be3',
    },
    {
      title: 'Frontend Developer (React) Certificate',
      organization: 'Hackerrank',
      date: 'Jul 30, 2024',
      description: '',
      link: 'https://www.hackerrank.com/certificates/b0ae477b9a18',
      icon: '/logo/logo-fpt-uni.png',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2FScreenshot%202024-12-14%20at%2016.17.22.png?alt=media&token=607469c5-b0de-404a-a5c1-fd53853135fb',
    },
  ],
  references: [
    {
      name: 'Le Hong Nhu',
      position: 'Senior Frontend Developer at FPT Software',
      email: 'nhuhl8@fpt.com.vn',
      phone: '+84 778 735 572',
    },
    {
      name: 'Phan Thi Dieu Ha',
      position: 'Lecturer at FPT University',
      email: 'hapt2@fpt.edu.vn',
    },
  ],
} as const;
