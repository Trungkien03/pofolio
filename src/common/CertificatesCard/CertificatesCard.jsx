/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "./CertificatesCard.module.css";

function CertificatesCard({ date, title, imageUrl, linkUrl }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          <img className={styles.cardImage} src={imageUrl} alt={title} />
          <div className={styles.gradientOverlay}>
            <div className={styles.cardText}>
              <span>{date}</span>
              <span className="mx-2">•</span>
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
          </div>
        </a>
      </div>
    </div>
  );
}

export default CertificatesCard;
