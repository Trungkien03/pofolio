// eslint-disable-next-line no-unused-vars
import React from "react";
import lambda from "../../assets/lambda-icon.png";
import lambdaAdmin from "../../assets/lambda.png";
import lengthUnitConverter from "../../assets/length-unit-converter-icon.png";
import clothShop from "../../assets/shopping-project.png";
import todo from "../../assets/todo-icon.png";
import unicourse from "../../assets/unicourse-icon.png";
import vHomeClean from "../../assets/v-home-clean.png";
import whalehome from "../../assets/whale-home.png";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../sections/Footer/Footer";
import "./Projects.css";
import ProjectPageCard from "./components/ProjectPageCard";
const projectsData = [
  {
    src: unicourse,
    link: "https://apps.apple.com/vn/app/unicourse/id6736771264",
    title: "Unicourse (iOS)",
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Funicourse-apple-app.jpg?alt=media&token=9c896d9c-4b9b-4d07-98d4-f6f753cbc40a",
    description: "E-Learning Platform Mobile App",
  },
  {
    src: unicourse,
    link: "https://play.google.com/store/apps/details?id=com.kane.dev.unicourse",
    title: "Unicourse (Android)",
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Funicourse-android-app.jpg?alt=media&token=f93346dd-b027-4ac5-aa8c-d2444ddd3a6b",
    description: "E-Learning Platform Mobile App",
  },
  {
    src: unicourse,
    link: "https://unicourse.id.vn",
    title: "Unicourse (Website)",
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2FScreenshot%202024-12-14%20at%2020.58.31.png?alt=media&token=5dd9ba39-0368-436f-98e6-0ae0a3c94b1c",
    description: "E-Learning Platform Website",
  },
  {
    src: lambda,
    link: "https://github.com/Trungkien03/Lambda",
    title: "Lambda",
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flambda.jpg?alt=media&token=ca23c00e-afb3-4a15-a873-1330b8e845af",
    description: "Yoga Class Booking Mobile App",
  },
  {
    src: lambdaAdmin,
    link: "https://github.com/Trungkien03/Lambda-Admin",
    title: "Lambda Admin",
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Flambda-admin.jpg?alt=media&token=570174cb-f44d-451d-87cc-36fad8984741",
    description: "Yoga Class Management Mobile App",
  },
  {
    src: whalehome,
    link: "https://github.com/VinHomeRentApp",
    title: "Whale Home",
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Fonboard.png?alt=media&token=2940ef95-ccd9-4255-8a46-2a679950e380",
    description: "Rental Mobile App for Vinhomes",
  },
  {
    src: todo,
    link: "https://github.com/Trungkien03/Todo-list-sqlite",
    title: "To-do List",
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2Ftodo-list.png?alt=media&token=525f0240-b417-4456-8e91-7961ec9942e4",
    description: "Task Management Mobile App",
  },
  {
    src: lengthUnitConverter,
    link: "https://github.com/Trungkien03/Length-Unit-",
    title: "Unit Converter",
    description: "Length Unit Converter Mobile App",
  },
  {
    src: vHomeClean,
    link: "https://github.com/Trungkien03/V-HomeClean",
    title: "Cleaning Services",
    description: "Cleaning Services Website for Vinhomes Grand Park",
  },
  {
    src: clothShop,
    link: "https://github.com/Trungkien03/ShopingProject",
    title: "Clothing Store",
    description: "Cloth Store Website",
  },
];

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="header">
          <h1>
            Writing on Website and Mobile App, emerging technologies, and some
            tech philosophy.
          </h1>
          <p>
            Essays and ramblings on creative app development and technology.
          </p>
        </div>
        <div className="list">
          {projectsData.map((project, index) => (
            <>
              <h2 className="title">20 Jul, 2024</h2>
              <div className="item" key={index}>
                <ProjectPageCard
                  src={project.src}
                  bgImg={project.bgImg}
                  link={project.link}
                  title={project.title}
                  description={project.description}
                />
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
