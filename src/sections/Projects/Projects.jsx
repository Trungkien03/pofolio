import lambda from "../../assets/lambda-icon.png";
import lambdaAdmin from "../../assets/lambda.png";
import lengthUnitConverter from "../../assets/length-unit-converter-icon.png";
import clothShop from "../../assets/shopping-project.png";
import todo from "../../assets/todo-icon.png";
import unicourse from "../../assets/unicourse-icon.png";
import vHomeClean from "../../assets/v-home-clean.png";
import whalehome from "../../assets/whale-home.png";
import ProjectCard from "../../common/ProjectCard";
import styles from "./ProjectsStyles.module.css";

const projects = [
  {
    src: unicourse,
    link: "https://apps.apple.com/vn/app/unicourse/id6736771264",
    h3: "Unicourse (iOS)",
    p: "E-Learning Platform Mobile App",
  },
  {
    src: unicourse,
    link: "https://play.google.com/store/apps/details?id=com.kane.dev.unicourse",
    h3: "Unicourse (Android)",
    p: "E-Learning Platform Mobile App",
  },
  {
    src: unicourse,
    link: "https://unicourse.id.vn",
    h3: "Unicourse (Website)",
    p: "E-Learning Platform Website",
  },
  {
    src: lambda,
    link: "https://github.com/Trungkien03/Lambda",
    h3: "Lambda",
    p: "Yoga Class Booking Mobile App",
  },
  {
    src: lambdaAdmin,
    link: "https://github.com/Trungkien03/Lambda-Admin",
    h3: "Lambda Admin",
    p: "Yoga Class Management Mobile App",
  },
  {
    src: whalehome,
    link: "https://github.com/VinHomeRentApp",
    h3: "Whale Home",
    p: "Rental Mobile App for Vinhomes",
  },
  {
    src: todo,
    link: "https://github.com/Trungkien03/Todo-list-sqlite",
    h3: "To-do List",
    p: "Task Management Mobile App",
  },
  {
    src: lengthUnitConverter,
    link: "https://github.com/Trungkien03/Length-Unit-",
    h3: "Unit Converter",
    p: "Length Unit Converter Mobile App",
  },
  {
    src: vHomeClean,
    link: "https://github.com/Trungkien03/V-HomeClean",
    h3: "Cleaning Services",
    p: "Cleaning Services Websites for Vinhomes Grand Park",
  },
  {
    src: clothShop,
    link: "https://github.com/Trungkien03/ShopingProject",
    h3: "Clothing Store",
    p: "Cloth Store Website",
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
