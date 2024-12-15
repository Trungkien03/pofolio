// eslint-disable-next-line no-unused-vars
import React from "react";

import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../sections/Footer/Footer";
import "./Projects.css";
import ProjectPageCard from "./components/ProjectPageCard";
import projectsData from "./data/projectsData";

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
                  imageTechStack={project.imageTechStack}
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
