import React from "react";
import styles from "./AwardCard.module.css";

function AwardCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <img
          className={styles.cardImage}
          src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"
          alt="Desk"
        />
        <div className={styles.gradientOverlay}>
          <div className={styles.cardText}>
            <span>Mar 16, 2020</span>
            <span className="mx-2">•</span>
          </div>
          <h3 className={styles.cardTitle}>Boost your conversion rate</h3>
        </div>
      </div>
    </div>
  );
}

export default AwardCard;
