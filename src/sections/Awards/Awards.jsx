// eslint-disable-next-line no-unused-vars
import React from "react";
import exellent2022 from "../../assets/excellent-student-2022.jpg";
import exellent from "../../assets/excellent-student.jpg";
import honorable from "../../assets/honorable-student.jpg";
import learningService from "../../assets/learning-service.jpg";
import rocketBoost from "../../assets/rocket-boost.jpg";
import summer2024 from "../../assets/summer-2024.jpg";
import AwardCard from "../../common/AwardCard/AwardCard";
import styles from "./AwardsStyles.module.css";

const awards = [
  {
    date: "November 08, 2024",
    title: "Top 1 - Rocket Boost - FPT Education",
    imageUrl: rocketBoost,
  },
  {
    date: "August 16 , 2024",
    title: "Top 100 Excellent Students of FPT University",
    imageUrl: summer2024,
  },
  {
    date: "Aug 25, 2024",
    title: "Best E-Learning Platform of FPT University",
    imageUrl: learningService,
  },
  {
    date: "2022 - 2023 - 2024",
    title: "Honorable Student Achievement Awards",
    imageUrl: honorable,
  },
  {
    date: "2023 - FALL",
    title: "Excellent Student Achievement Awards",
    imageUrl: exellent,
  },
  {
    date: "2022 - FALL",
    title: "Excellent Student Achievement Awards",
    imageUrl: exellent2022,
  },
];

function Awards() {
  return (
    <section id="awards" className={styles.container}>
      <h1 className="sectionTitle">Awards</h1>
      <div className={styles.projectsContainer}>
        {awards.map((award, index) => (
          <AwardCard
            key={index}
            date={award.date}
            title={award.title}
            imageUrl={award.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Awards;
