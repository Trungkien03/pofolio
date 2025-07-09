import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Trung Kien Nguyen",
  initials: "NK",
  url: "https://kanetech.id.vn",
  location: "Vietnam",
  locationLink: "https://www.google.com/maps/place/Vietnam",
  description:
    "As a Mobile Developer, I focus on building mobile and web applications using React Native, SwiftUI and React. During my time as Co-Founder at Unicourse LLC, I developed user-friendly and scalable cross-platform solutions, ensuring high performance and great user experiences. I enjoy collaborating in teams and continuously improving my skills to create effective, innovative applications.",
  summary:
    "Co-Founder & Mobile Engineer at Unicourse LLC. Experienced in building cross-platform mobile/web apps with React Native, SwiftUI, ReactJS. Awarded Top 1 Rocket Boost, Excellent Student Achievement Awards. GPA 3.5/4. Passionate about scalable, high-performance solutions and great UX.",
  avatarUrl: "/profile_img.jpg",
  skills: [
    "TypeScript",
    "JavaScript",
    "Swift",
    "ReactJS",
    "React Native",
    "NodeJS",
    "SwiftUI",
    "PrimeReact",
    "Ant Design",
    "SQL Server",
    "PostgreSQL",
    "MongoDB",
    "Agile",
    "Scrum",
    "Waterfall",
    "Spiral Methodology",
    "Postman",
    "Git",
    "Figma",
    "Docker",
    "Redis",
    "JIRA",
    "Firebase",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kiennt.it.work@gmail.com",
    tel: "+84 974102437",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Trungkien03",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kane03",
        icon: Icons.linkedin,
        navbar: true,
      },
      Website: {
        name: "Website",
        url: "https://kanetech.id.vn",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kiennt.it.work@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Unicourse LLC",
      href: "https://unicourse.vn",
      badges: ["Rocket Boost Top 1 Award"],
      location: "Vietnam",
      title: "Co-Founder & Mobile Developer",
      logoUrl: "/unicourse-icon.png",
      start: "01/2024",
      end: "Now",
      description:
        "Developed cross-platform mobile and web applications for Unicourse, enhancing user experience and performance. Designed and implemented seamless user experiences across iOS, Android, and web platforms using React Native, SwiftUI and ReactJS. Achieved Rocket Boost’s Top 1 Award, with the platform generating active revenue and growth.",
    },
    {
      company: "FPT Software",
      href: "https://fpt.com.vn",
      badges: [],
      location: "Vietnam",
      title: "Frontend Developer",
      logoUrl: "/logo-fsoft.png",
      start: "08/2022",
      end: "12/2023",
      description:
        "Implemented features and user interfaces on the website using ReactJS and PrimeReact, ensuring a seamless user experience. Collaborated with development teammates and other departments to ensure code consistency and efficiency. Applied strong knowledge of ReactJS and TypeScript to address technical challenges and optimize application performance. Applied Testing with Jest to ensure the quality and functionality.",
    },
  ],
  education: [
    {
      school: "FPT University",
      href: "https://fpt.edu.vn",
      degree: "Software Engineer (GPA: 3.5/4)",
      logoUrl: "/logo-fpt-uni.png",
      start: "2019",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "UniCourse – FPT Learning Platform",
      href: "https://unicourse.vn",
      dates: "12/2023 – Now",
      active: true,
      description:
        "A startup offering web and mobile access to university courses, focusing on FPT University students in short term. Lead the development of user interfaces for both mobile and web platforms, ensuring a seamless and responsive user experience across devices. Recognized as one of the top projects at FPT University and awarded Top 1 in the Rocket Boost startup competition. The platform is live and generating revenue.",
      technologies: [
        "React Native",
        "SwiftUI",
        "ReactJS",
        "TypeScript",
        "PrimeReact",
        "MUI",
        "Angular",
        "PrimeNG",
        "Firebase",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://unicourse.vn",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/Trungkien03",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/unicourse-icon.png",
      video: "",
    },
    {
      title: "Lambda – Yoga Class Applications",
      href: "https://github.com/Trungkien03/Lambda.git",
      dates: "05/2024 – 09/2024",
      active: false,
      description:
        "A comprehensive mobile solution for managing and booking yoga classes, tailored for both customers and administrators. Developed cross-platform mobile applications using React Native and Typescript. Designed intuitive interfaces for seamless user and admin experiences. Integrated real-time booking and class management features for optimal performance.",
      technologies: [
        "React Native",
        "Typescript",
        "Kotlin",
        "Expo",
        "Firebase",
      ],
      links: [
        {
          type: "Github Customer App",
          href: "https://github.com/Trungkien03/Lambda.git",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Github Admin App",
          href: "https://github.com/Trungkien03/Lambda-Admin.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Whale Home – Rental Apartment Application",
      href: "https://github.com/Trungkien03/WhaleHome",
      dates: "12/2023 – 04/2024",
      active: false,
      description:
        "A dedicated platform offering rental and sales services for apartments within the VinHomes area. Lead the technical direction of a React Native initiative, balancing responsibilities as a Technical Leader and hands-on Frontend Developer. Technologies: React Native, Expo, ContextAPI, Spring Boot, Java, SQL, Docker, PostgreSQL, Visual Studio Code, IntelliJ, Docker.",
      technologies: [
        "React Native",
        "Expo",
        "ContextAPI",
        "Spring Boot",
        "Java",
        "SQL",
        "Docker",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Trungkien03/WhaleHome",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/whale-home.png",
      video: "",
    },
  ],
  hackathons: [],
  awards: [
    "TOP 1 – Rocket Boost – An Entrepreneurial Competition",
    "Top 100 EXCELLENT STUDENT ACHIEVEMENT AWARDS | FALL 2024",
    "HONORABLE STUDENT ACHIEVEMENT AWARDS | FALL 2023 | SPRING 2023 | SUMMER 2022",
    "EXCELLENT STUDENT ACHIEVEMENT AWARDS | FALL 2022",
  ],
  certifications: [
    "Top 1 – Rocket Boost – An Entrepreneurial Competition (FPT University, Nov 2024)",
    "Software Development Lifecycle (University of Minnesota, Coursera, Mar 2023)",
    "Project Management Principles and Practices (University of California, Coursera, Feb 2024)",
    "Web Design for Everybody: Basics of Web Development & Coding (University of Michigan, Coursera, Nov 2022)",
  ],
  references: [
    {
      name: "Le Hong Nhu",
      position: "Senior Frontend Developer at FPT Software",
      email: "nhuhl8@fpt.com.vn",
      phone: "+84 778 735 572",
    },
    {
      name: "Phan Thi Dieu Ha",
      position: "Lecturer at FPT University",
      email: "hapt2@fpt.edu.vn",
    },
  ],
} as const;
