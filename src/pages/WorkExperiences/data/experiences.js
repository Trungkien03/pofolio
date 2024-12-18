import fsoft2023 from "../../../assets/fsoft-2023.jpg";
import frontendDeveloper from "../../../assets/frontend-developer.jpg";
import freelance from "../../../assets/freelance-2024.jpg";
import freelance1 from "../../../assets/showcase-2024.jpg";

const experiences = [
  {
    date: "April 2024 - Present",
    title: "Co-Founder & Mobile Developer At Unicourse",
    description:
      "Developed a Yoga App for both admin and customer use, including features for class management, bookings, and user engagement. Created a mobile chess game with real-time gameplay and an interactive UI. Built an E-learning platform with features for course content, user progress tracking, and interactive learning.",
    images: [freelance, freelance1],
  },
  {
    date: "December 2023 - Now",
    title: "UniCourse - FPT Learning Platform",
    description:
      "Lead the development of mobile and web interfaces for UniCourse, a startup platform tailored for university students. Integrated backend APIs, enabling smooth data flow across devices. Achieved recognition as Top 1 in the Rocket Boost startup competition. The platform is live and generating revenue.",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Funicourse-android-app.jpg?alt=media&token=f93346dd-b027-4ac5-aa8c-d2444ddd3a6b",
      freelance,
      freelance1,
    ],
  },
  {
    date: "December 2023 - April 2024",
    title: "Whale Home - Rental Apartment Application",
    description:
      "Led the technical direction for WhaleHome, a dedicated platform offering rental and sales services for apartments. Designed and implemented React Native mobile features with technologies such as Expo and PostgreSQL.",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fonboard.png?alt=media&token=2940ef95-ccd9-4255-8a46-2a679950e380",
    ],
  },
  {
    date: "August 2022 - December 2023",
    title: "Frontend Developer at FPT Software",
    description:
      "Implemented features and user interfaces using ReactJS and PrimeReact. Collaborated closely with teammates to optimize application performance and applied Jest testing to ensure quality and functionality.",
    images: [frontendDeveloper, fsoft2023],
  },
];

export default experiences;
