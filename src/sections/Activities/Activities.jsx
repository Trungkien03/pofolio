// eslint-disable-next-line no-unused-vars
import React from "react";
import CertificatesCard from "../../common/CertificatesCard/CertificatesCard";
import styles from "./ActivitiesStyles.module.css";
import showcase2024 from "../../assets/showcase-2024.jpg";
import rocketBoostActivity from "../../assets/rocket-boost-activities.jpg";

const ActivitiesData = [
  {
    date: "November 15, 2024",
    title: "Unicourse showcase Mobile App and Website at Convocation Day 2024",
    imageUrl: showcase2024,
  },
  {
    date: "November 8, 2024",
    title: "Rocket Boost - An Entrepreneurial Competition",
    imageUrl: rocketBoostActivity,
  },
];

function Activities() {
  return (
    <section id="certificates" className={styles.container}>
      <h1 className="sectionTitle">Activities</h1>
      <div className={styles.projectsContainer}>
        {ActivitiesData.map((cert, index) => (
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

export default Activities;
