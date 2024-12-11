import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import lambda from "../../assets/lambda-icon.png";
import lambdaAdmin from "../../assets/lambda.png";
import todo from "../../assets/todo-icon.png";
import unicourse from "../../assets/unicourse-icon.png";
import whalehome from "../../assets/whale-home.png";
import lengthUnitConverter from "../../assets/length-unit-converter-icon.png";

const projects = [
  {
    src: unicourse,
    link: "https://apps.apple.com/vn/app/unicourse/id6736771264",
    h3: "Unicourse (iOS)",
    p: "E-Learning Platform App",
  },
  {
    src: unicourse,
    link: "https://play.google.com/store/apps/details?id=com.kane.dev.unicourse",
    h3: "Unicourse (Android)",
    p: "E-Learning Platform App",
  },
  {
    src: lambda,
    link: "https://github.com/Ade-mir/company-landing-page-2",
    h3: "Lambda",
    p: "Yoga Class Booking App",
  },
  {
    src: lambdaAdmin,
    link: "https://github.com/VinHomeRentApp",
    h3: "Lambda Admin",
    p: "Yoga Class Management",
  },
  {
    src: whalehome,
    link: "https://github.com/VinHomeRentApp",
    h3: "Whale Home",
    p: "Rental App for Vinhomes",
  },
  {
    src: todo,
    link: "https://github.com/Ade-mir/company-landing-page-2",
    h3: "To-do List",
    p: "Task Management App",
  },
  {
    src: lengthUnitConverter,
    link: "https://github.com/Ade-mir/company-landing-page-2",
    h3: "Unit Converter",
    p: "Length Unit Converter App",
  },
];

function Projects() {
  return (
    <section className={styles.container}>
      <h1 id="projects" className="sectionTitle">
        Projects
      </h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            link={project.link}
            h3={project.h3}
            p={project.p}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
