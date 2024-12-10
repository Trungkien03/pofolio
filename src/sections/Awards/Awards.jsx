import styles from "./AwardsStyles.module.css";

import AwardCard from "../../common/AwardCard/AwardCard";

function Awards() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Awards</h1>
      <div className={styles.projectsContainer}>
        <AwardCard />
      </div>
    </section>
  );
}

export default Awards;
