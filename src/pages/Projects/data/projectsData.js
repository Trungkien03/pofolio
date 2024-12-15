import lambda from "../../../assets/lambda-icon.png";
import lambdaAdmin from "../../../assets/lambda.png";
import lengthUnitConverter from "../../../assets/length-unit-converter-icon.png";
import clothShop from "../../../assets/shopping-project.png";
import todo from "../../../assets/todo-icon.png";
import unicourse from "../../../assets/unicourse-icon.png";
import vHomeClean from "../../../assets/v-home-clean.png";
import whalehome from "../../../assets/whale-home.png";

import java from "../../../assets/java.png";
import mysql from "../../../assets/mysql.png";
import reactHookForm from "../../../assets/react-hook-form.png";
import sqlserver from "../../../assets/sqlserver.png";
import docker from "../../../assets/svg/docker.svg";
import nodejs from "../../../assets/svg/nodejs.svg";
import reactNativeIcon from "../../../assets/svg/react-native.svg";
import reactIcon from "../../../assets/svg/react.svg";
import reduxToolkit from "../../../assets/svg/redux-toolkit.svg";
import swift from "../../../assets/svg/swift.svg";
import swiftui from "../../../assets/svg/swiftui.svg";
import tailwindcss from "../../../assets/svg/tailwindcss.svg";
import typescript from "../../../assets/svg/typescript.svg";
import webpack from "../../../assets/svg/webpack.svg";

const projectsData = [
  {
    src: unicourse,
    link: "https://apps.apple.com/vn/app/unicourse/id6736771264",
    title: "Unicourse (iOS)",
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Funicourse-apple-app.jpg?alt=media&token=9c896d9c-4b9b-4d07-98d4-f6f753cbc40a",
    description:
      "Unicourse is an E-learning platform designed for students to access personalized courses, track progress, and engage in interactive learning. The iOS version provides a seamless experience optimized for Apple devices, ensuring accessibility and high performance.",
    imageTechStack: [swift, swiftui],
  },
  {
    src: unicourse,
    link: "https://play.google.com/store/apps/details?id=com.kane.dev.unicourse",
    title: "Unicourse (Android)",
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Funicourse-android-app.jpg?alt=media&token=f93346dd-b027-4ac5-aa8c-d2444ddd3a6b",
    description:
      "Unicourse Android app brings the convenience of flexible learning to mobile devices. Students can browse courses, participate in discussions, and complete assignments anytime, anywhere, with a focus on accessibility and scalability.",
    imageTechStack: [
      reactNativeIcon,
      typescript,
      nodejs,
      reactHookForm,
      reduxToolkit,
    ],
  },
  {
    src: unicourse,
    link: "https://unicourse.id.vn",
    title: "Unicourse (Website)",
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2FScreenshot%202024-12-14%20at%2020.58.31.png?alt=media&token=5dd9ba39-0368-436f-98e6-0ae0a3c94b1c",
    description:
      "The Unicourse website is a comprehensive e-learning hub offering a wide range of courses tailored for university students. It features AI-powered recommendations, gamified learning experiences, and a robust dashboard for progress tracking.",
    imageTechStack: [typescript, mysql, nodejs, docker, webpack],
  },
  {
    src: lambda,
    link: "https://github.com/Trungkien03/Lambda",
    title: "Lambda",
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flambda.jpg?alt=media&token=ca23c00e-afb3-4a15-a873-1330b8e845af",
    description:
      "Lambda is a mobile app designed for yoga enthusiasts to book classes, explore schedules, and connect with instructors. The app prioritizes user-friendly navigation and real-time updates to enhance the booking experience.",
    imageTechStack: [reactNativeIcon, typescript, reduxToolkit],
  },
  {
    src: lambdaAdmin,
    link: "https://github.com/Trungkien03/Lambda-Admin",
    title: "Lambda Admin",
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flambda-admin.jpg?alt=media&token=570174cb-f44d-451d-87cc-36fad8984741",
    description:
      "The Lambda Admin app provides yoga studio managers with tools to manage classes, track attendance, and monitor performance metrics. It simplifies administrative tasks, ensuring efficient operation for studios.",
    imageTechStack: [java],
  },
  {
    src: whalehome,
    link: "https://github.com/VinHomeRentApp",
    title: "Whale Home",
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fonboard.png?alt=media&token=2940ef95-ccd9-4255-8a46-2a679950e380",
    description:
      "Whale Home is a rental app tailored for Vinhomes residents, featuring property listings, booking functionalities, and secure payment options. The app focuses on convenience and reliability for renters and property managers.",
    imageTechStack: [
      reactNativeIcon,
      typescript,
      reactHookForm,
      sqlserver,
      java,
    ],
  },
  {
    src: todo,
    link: "https://github.com/Trungkien03/Todo-list-sqlite",
    title: "To-do List",
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftodo-list.png?alt=media&token=525f0240-b417-4456-8e91-7961ec9942e4",
    description:
      "A lightweight task management app for organizing daily activities. It features SQLite integration for offline data storage, ensuring tasks are accessible even without an internet connection.",
    imageTechStack: [reactNativeIcon, typescript],
  },
  {
    src: lengthUnitConverter,
    link: "https://github.com/Trungkien03/Length-Unit-",
    title: "Unit Converter",
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2FBlue%20Modern%20Mobile%20Application%20Presentation.jpg?alt=media&token=4ecc8b24-1e77-4b66-a9de-ccfa4c5f436e",
    description:
      "This mobile app allows users to quickly and accurately convert between various length units, making it a handy tool for students, professionals, and everyday use.",
    imageTechStack: [reactNativeIcon, typescript],
  },
  {
    src: vHomeClean,
    link: "https://github.com/Trungkien03/V-HomeClean",
    title: "Cleaning Services",
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fv-home-clean.jpg?alt=media&token=3e9bdc87-8b26-47e8-9d86-2fe9f4560973",
    description:
      "A website offering cleaning services tailored for residents of Vinhomes Grand Park. It provides easy service booking, transparent pricing, and high-quality service standards.",
    imageTechStack: [java, sqlserver],
  },
  {
    src: clothShop,
    link: "https://github.com/Trungkien03/ShopingProject",
    title: "Clothing Store",
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fclothing-store.jpg?alt=media&token=5f286c32-f4d2-43a3-8c56-0e86121ccd62",
    description:
      "An e-commerce website for a clothing store that offers an intuitive shopping experience, including product browsing, cart management, and secure payment integrations.",
    imageTechStack: [reactIcon, typescript, tailwindcss],
  },
];

export default projectsData;
