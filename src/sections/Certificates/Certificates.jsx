import styles from "./CertificatesStyles.module.css";
import unicourse from "../../assets/unicourse-icon.png";
import ProjectCard from "../../common/ProjectCard";

function Certificates() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Certificates</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={unicourse}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={unicourse}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={unicourse}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={unicourse}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
        <ProjectCard
          src={unicourse}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Certificates;
