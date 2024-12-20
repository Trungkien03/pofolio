// eslint-disable-next-line no-unused-vars
import React from "react";
import CertificatesCard from "../../common/CertificatesCard/CertificatesCard";
import styles from "./ExperiencesStyles.module.css";
import freelance2024 from "../../assets/freelance-2024.jpg";
import fsoft2023 from "../../assets/fsoft-2023.jpg";
import frontendDeveloper from "../../assets/frontend-developer.jpg";

const ExperiencesData = [
  {
    date: "December 10, 2024",
    title: "Mobile Developer at Unicourse",
    imageUrl: freelance2024,
  },
  {
    date: "December 20, 2023",
    title: "Software Developer at FPT Software",
    imageUrl: fsoft2023,
  },
  {
    date: "August 20, 2023",
    title: "Frontend Developer at FPT Software",
    imageUrl: frontendDeveloper,
  },
];

function Experiences() {
  return (
    <section className={styles.container}>
      <h1 className="sectionTitle">Experiences</h1>
      <div className={styles.projectsContainer}>
        {ExperiencesData.map((cert, index) => (
          <CertificatesCard
            key={index}
            date={cert.date}
            title={cert.title}
            imageUrl={cert.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Experiences;
