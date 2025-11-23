import { Icons } from '@/components/icons';
import { HomeIcon } from 'lucide-react';

const iconAssets = {
  java: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fjava.png?alt=media&token=05868522-3669-4764-adb5-6e32221226de',
  mongodb:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fmongodb.png?alt=media&token=f149507b-fecf-43ab-ab29-68c045e7b25c',
  mysql:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fmysql.png?alt=media&token=3ce81f25-1570-40a1-b0b9-3756084ff4d6',
  reactHookForm:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Freact-hook-form.png?alt=media&token=4968c051-fa12-48ec-a094-0be04853f319',
  sql: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fsql.png?alt=media&token=435dfa58-37d7-4986-a44b-373daf038e77',
  sqlserver:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fsqlserver.png?alt=media&token=b369c25b-b4ef-43bf-8390-0002fee83382',
  checkmark_dark:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fcheckmark-dark.svg?alt=media&token=fe10bf1e-e604-4916-b89e-c0e95236e8a7',
  checkmark_light:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fcheckmark-light.svg?alt=media&token=9a154ceb-fd20-4d20-a9df-394dd30ef796',
  css: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fcss.svg?alt=media&token=43837e5c-0cb1-4adf-a635-fdadd27518b1',
  docker:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fdocker.svg?alt=media&token=1526ac90-ed73-463a-a56c-bf3699c44122',
  git_dark:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fgit-dark.svg?alt=media&token=9496ffc3-f175-4764-a383-214a54710b10',
  git_light:
    '/https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fgit-light.svg?alt=media&token=8a7851ce-fb5d-4b97-890d-dda0c91a2d2f',
  html: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fhtml.svg?alt=media&token=c153da86-7193-47e6-8216-be4261c79dff',
  jest: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fjest.svg?alt=media&token=0df56ee9-335c-4ccb-b973-89ddd129c439',
  nodejs:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fnodejs.svg?alt=media&token=7b9c2f34-d68c-4c49-9753-155359903930',
  prime_react:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fprimereact.svg?alt=media&token=737f0ead-8c03-4be9-a768-938d7f9c92a5',
  react_native_icon:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Freact-native.svg?alt=media&token=8bb85020-9344-4b5a-bbe1-a4d82b4ef813',
  reactIcon:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Freact.svg?alt=media&token=52ff1731-0d7c-4dc9-b12d-bd5702c200c4',
  redux_toolkit:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fredux-toolkit.svg?alt=media&token=ef236876-7229-47fb-87aa-09d0d02f288f',
  tailwindcss:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Ftailwindcss.svg?alt=media&token=ff744f1f-cfaf-441e-9715-4e5ab0c34d06',
  typescript:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Ftypescript.svg?alt=media&token=4838853e-d84e-43e4-8da5-d8045d945088',
  webpack:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fwebpack.svg?alt=media&token=18fd24c5-d4f6-4fc3-8429-246e4a7a735e',
  swift:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fswift.svg?alt=media&token=a95e3e4e-dfa5-468a-bf48-2416ddb0a07e',
  swift_ui:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fswiftui.svg?alt=media&token=6f6a86cf-b4d4-49c4-8436-f400f227a00c',
  sql_server:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fsqlserver.png?alt=media&token=b369c25b-b4ef-43bf-8390-0002fee83382',
  jira: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fjira-icon.png?alt=media&token=19b4b9b6-264c-4761-8f75-f585ac7a9777',
  firebase:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flogos%2Flogo-firebase.png?alt=media&token=b75323b8-3596-45cd-a9cc-69686a2567ad',
  redis:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fredis-icon.webp?alt=media&token=e18eb970-9923-4b62-a81f-3dbdc2fa2acd',
  postgres:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fpostgresql.png?alt=media&token=62e1e871-bc5d-42a6-94a9-84eda6007599',
  postman:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fpostman-icon.svg?alt=media&token=bcd304ec-deac-4938-b47f-362561b75615',
  figma:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Ffigma-icon.png?alt=media&token=b45ec485-aaa9-4600-84e4-9130a417251a',
  git: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fgit_icon.png?alt=media&token=2c71fcb9-b28b-47d4-8cca-8cc02569a84a',
  nextjs:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fnextjs-icon.svg?alt=media&token=787214e3-8feb-48c2-b636-b36afd04aa01',
  nestjs:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftechstack-icons%2Fnestjs-icon.svg?alt=media&token=ef986dbe-7a66-4b0e-bf0a-a7029cf0e402',
};

export const DATA = {
  name: 'Trung Kien Nguyen',
  initials: 'NK',
  url: 'https://kanetech.id.vn',
  location: 'Vietnam',
  locationLink: 'https://www.google.com/maps/place/Vietnam',
  description:
    'As a Fullstack Mobile Developer, I create scalable and user-centric applications using React Native, SwiftUI, Next.js, and NestJS. I focus on clean architecture, smooth performance, and great user experience, with proven experience in building cross-platform solutions and collaborating effectively in dynamic teams.',
  summary:
    'Co-Founder & Mobile Engineer at Unicourse LLC. Experienced in building cross-platform mobile/web apps with React Native, SwiftUI, ReactJS. Awarded Top 1 Rocket Boost, Excellent Student Achievement Awards. GPA 3.5/4. Passionate about scalable, high-performance solutions and great UX.',
  avatarUrl:
    'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fprofile_img.jpg?alt=media&token=c02a63c0-d726-4213-bfcf-f6aad34b7049',
  skills: [
    { name: 'Next.js', icon: iconAssets.nextjs },
    { name: 'NestJS', icon: iconAssets.nestjs },
    { name: 'React Native', icon: iconAssets.react_native_icon },
    { name: 'ReactJS', icon: iconAssets.reactIcon },
    { name: 'TypeScript', icon: iconAssets.typescript },
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
      logoUrl:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flogos%2Flogo-terralogic.jpeg?alt=media&token=c2e180ee-ea10-459c-bc97-0189b68d96c1',
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
      logoUrl:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flogos%2Flogo-hopperse.jpg?alt=media&token=59942c97-c0be-43a6-9aa7-fa7d47139e8f',
      start: '01/2025',
      end: '01/2026',
      description:
        'Design and develop a financial web application for Hopper SE, following the Agile Scrum methodology. Utilize modern technologies including Next.js, NestJS, and AWS to build scalable and high-performance web systems. Collaborate closely with cross-functional teams to deliver well-architected, user-centric solutions in a fast-paced environment.',
    },
    {
      company: 'Unicourse LLC',
      href: 'https://unicourse.vn',
      badges: ['Full-time'],
      location: 'Vietnam',
      title: 'Co-Founder & Mobile Developer',
      logoUrl:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flogos%2Flogo-unicourse.png?alt=media&token=4666b815-fcec-4226-94ed-f63a329bc37b',
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
      logoUrl:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flogos%2Flogo-fsoft.png?alt=media&token=bbc44d83-c240-4e16-a87e-005e5c1961f6',
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
      logoUrl:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flogos%2Flogo-fpt-uni.png?alt=media&token=74897e8a-2da8-4296-b96b-f1afd50681cc',
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
      href: 'https://lucent-fe.netlify.app/home',
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
          href: 'https://lucent-app.info',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'iOS',
          href: 'https://apps.apple.com/app/lucent-focus-timer/id6754592413',
          icon: <Icons.apple className='size-3' />,
        },
        {
          type: 'Android',
          href: 'https://play.google.com/store/apps/details?id=com.kane.lucent',
          icon: <Icons.googlePlay className='size-3' />,
        },
        {
          type: 'Github',
          href: 'https://github.com/Lucent-RN',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flogos%2Flogo-lucent.png?alt=media&token=478af717-300e-4acd-a03f-62e4578a7ff8',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fprojects%2Flucent-app-project.png?alt=media&token=182d9240-c4b8-43c7-a066-ad0c2c9b0685',
    },
    {
      title: 'ReScope – Retrospective Management Platform',
      href: 'https://github.com/Trungkien03/ReScope',
      dates: '10/2024 – Now',
      active: true,
      description:
        'A comprehensive retrospective management platform designed to help Agile teams conduct effective retrospectives and improve development processes. Features include AI-assisted polls, real-time collaboration, analytics dashboard, and Kanban board for continuous improvement.',
      technologies: [
        'Next.js 15',
        'TypeScript',
        'TailwindCSS',
        'Shadcn-UI',
        'Zustand',
        'Socket.io',
        'Recharts',
        'React Hook Form',
        'Zod',
      ],
      links: [
        {
          type: 'Github',
          href: 'https://github.com/Trungkien03/ReScope',
          icon: <Icons.github className='size-3' />,
        },
        {
          type: 'Video',
          href: 'https://www.youtube.com/watch?v=gWoVVuO-liQ',
          icon: <Icons.youtube className='size-3' />,
        },
      ],
      image:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flogos%2Flogo-rescope.png?alt=media&token=3acfed8f-a8cd-4fb6-a61b-7d75d5be50fa',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fprojects%2Frescope-project.jpeg?alt=media&token=71e6453a-4b56-47c7-8777-a11d45f2d0c7',
    },
    {
      title: 'Unicourse – University Course Applications',
      href: 'https://unicourse.vn',
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
      image:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flogos%2Flogo-unicourse.png?alt=media&token=4666b815-fcec-4226-94ed-f63a329bc37b',
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
      image:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flogos%2Flogo-lambda-icon.png?alt=media&token=57f24547-4295-407b-b560-15d4bdd8d095',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fprojects%2Flamda-admin-project.jpg?alt=media&token=7538e03c-44ba-4f5c-9d92-cc84d902affc',
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
      image:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flogos%2Flogo-whale-home.png?alt=media&token=8fc9c70c-6924-466b-adc4-211a82887539',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fprojects%2Fwhale-home-project.png?alt=media&token=c0e6aaa3-4197-43a0-9906-b754d99b095d',
    },
  ],
  awards: [
    {
      title: '2nd Runner-up – You & AI Hackathon',
      date: 'September 13, 2025',
      icon: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fawards%2F2nd-ai-hackathon.jpeg?alt=media&token=045a2d7f-7561-4b48-9c71-90dcc299839d',
      description: '',
      location: 'You & AI Hackathon - Terralogic',
    },
    {
      title: 'Top 1 - Rocket Boost - FPT Education',
      date: 'November 08, 2024',
      icon: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fawards%2Frocket-boost.jpg?alt=media&token=ebc761ab-abbf-416c-b61b-f754db13325b',
      description: '',
      location: 'FPT University',
    },
    {
      title: 'Top 100 Excellent Students of FPT University',
      date: 'August 16, 2024',
      icon: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fawards%2Fsummer-2024.jpg?alt=media&token=0a41d2d9-01d4-4e20-b1b8-2e54a7badaab',
      description: '',
      location: 'FPT University',
    },
    {
      title: 'Best E-Learning Platform of FPT University',
      date: 'Aug 25, 2024',
      icon: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fawards%2Flearning-service.jpg?alt=media&token=d65f96eb-e9f5-465c-aab9-ff1a9173e589',
      description: '',
      location: 'Rocket Boost Contest',
    },
    {
      title: 'Honorable Student Achievement Awards',
      date: '2022 - 2023 - 2024',
      icon: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fawards%2Fhonorable-student.jpg?alt=media&token=7a30de11-13f8-4306-a53a-7ded6e1f1e7c',
      description: '',
      location: 'FPT University',
    },
    {
      title: 'Excellent Student Achievement Awards',
      date: '2023 - FALL',
      icon: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fawards%2Fexcellent-student-2023.jpg?alt=media&token=36e61cea-49bf-4e89-8422-808dd8e97d52',
      description: '',
    },
    {
      title: 'Excellent Student Achievement Awards',
      date: '2022 - FALL',
      icon: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fawards%2Fexcellent-student-2022.jpg?alt=media&token=f1c6b773-16b7-4fd3-b64c-b845e8ffc89d',
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
      icon: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flogos%2Flogo-coursera.png?alt=media&token=e88bea67-b36e-47b1-b029-0716c03b1545',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fcertifications%2Fuser-experience-research-coursera.png?alt=media&token=68ab42f8-a0a6-4edd-9261-1faea8c5d7ca',
    },
    {
      title: 'Project Management Principles and Practices',
      organization: 'Coursera',
      date: 'Feb 21, 2024',
      description: '',
      link: 'https://www.coursera.org/account/accomplishments/specialization/8W48V5ERJJU6',
      icon: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flogos%2Flogo-coursera.png?alt=media&token=e88bea67-b36e-47b1-b029-0716c03b1545',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fcertifications%2Fproject-management-coursera.png?alt=media&token=53a95c85-fde9-430d-909e-99ef26a2753d',
    },
    {
      title: 'Software Development Lifecycle',
      organization: 'Coursera',
      date: 'Mar 26, 2023',
      description: '',
      link: 'https://www.coursera.org/account/accomplishments/specialization/ESCFBJD794M7',
      icon: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flogos%2Flogo-coursera.png?alt=media&token=e88bea67-b36e-47b1-b029-0716c03b1545',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fcertifications%2Fsoftware-development-coursera.png?alt=media&token=6cc8c656-5813-4d72-85cc-b4b7e6479917',
    },
    {
      title: 'Web Design for Everybody: Basics of Web Development & Coding',
      organization: 'Coursera',
      date: 'Nov 22, 2022',
      description: '',
      link: 'https://www.coursera.org/account/accomplishments/specialization/FVLS39XDNXC7',
      icon: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flogos%2Flogo-coursera.png?alt=media&token=e88bea67-b36e-47b1-b029-0716c03b1545',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fcertifications%2Fweb-design-for-every-body-coursera.png?alt=media&token=9f4dcd2f-b5d0-49b0-80ae-df3fb698c06c',
    },
    {
      title: 'CertNexus Certified Ethical Emerging Technologist',
      organization: 'Coursera',
      date: 'Jun 22, 2023',
      description: '',
      link: 'https://www.coursera.org/account/accomplishments/specialization/JXKY2KJFRFJL',
      icon: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flogos%2Flogo-coursera.png?alt=media&token=e88bea67-b36e-47b1-b029-0716c03b1545',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fcertifications%2Fethical-emerging-coursera.png?alt=media&token=6c6d5724-4f69-4bc6-a8d6-53aa1dfd69aa',
    },
    {
      title: 'IBSTPI Standards',
      organization: 'Coursera',
      date: 'Sep 25, 2024',
      description: '',
      link: '',
      icon: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flogos%2Flogo-fpt-uni.png?alt=media&token=74897e8a-2da8-4296-b96b-f1afd50681cc',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fcertifications%2Fibstpi-standards-fpt.png?alt=media&token=93cd2613-ba77-454a-b98a-fb6b8753da9a',
    },
    {
      title: 'Frontend Developer (React) Certificate',
      organization: 'Hackerrank',
      date: 'Jul 30, 2024',
      description: '',
      link: 'https://www.hackerrank.com/certificates/b0ae477b9a18',
      icon: 'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flogos%2Flogo-fpt-uni.png?alt=media&token=74897e8a-2da8-4296-b96b-f1afd50681cc',
      imageProject:
        'https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fcertifications%2Ffrontend-development-hackerank.png?alt=media&token=51a4e150-4ce7-4765-91fb-04a7782ecbb0',
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
