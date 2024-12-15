/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectPageCard = ({
  bgImg,
  src,
  link,
  title,
  description,
  imageTechStack,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img src={bgImg} alt={`${title} logo`} />
      </div>
      <img className={styles.image} src={src} alt={`${title} logo`} />

      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.techstack}>
          <h2 className={styles.title}>Tech Stacks</h2>
          {imageTechStack.map((item, index) => (
            <img
              key={index}
              src={item}
              className={styles.icontechstack}
              alt={`${title} logo`}
            />
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewButton}
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectPageCard;
