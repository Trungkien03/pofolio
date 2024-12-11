// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./CertificatesStyles.module.css";
import CertificatesCard from "../../common/CertificatesCard/CertificatesCard";

const certificates = [
  {
    date: "",
    title: "User Experience Research and Design",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2FScreenshot%202024-12-11%20at%2014.22.19.png?alt=media&token=ce53f57a-b013-4e81-84d7-e4fc2a0379d4",
  },
  {
    date: "",
    title: "Project Management Principles and Practices",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2FScreenshot%202024-12-11%20at%2014.22.40.png?alt=media&token=1f45c6d8-5211-48ec-b47e-b5bd0d305af9",
  },
  {
    date: "November 08, 2024",
    title: "Top 1 - Rocket Boost - FPT Education",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2FScreenshot%202024-12-11%20at%2014.24.09.png?alt=media&token=59ee1354-2e99-4b9b-b44f-250d1ddfcb66",
  },
  {
    date: "November 08, 2024",
    title: "Top 1 - Rocket Boost - FPT Education",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2FScreenshot%202024-12-11%20at%2014.24.33.png?alt=media&token=c5214b49-7091-4730-8718-9a12624492b3",
  },
  {
    date: "November 08, 2024",
    title: "Top 1 - Rocket Boost - FPT Education",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/pofolio-e89e1.firebasestorage.app/o/Images%2FScreenshot%202024-12-11%20at%2014.24.42.png?alt=media&token=0991cf73-56ff-41a6-9779-fe871fb77d9f",
  },
];

function Certificates() {
  return (
    <section id="certificates" className={styles.container}>
      <h1 className="sectionTitle">Certificates</h1>
      <div className={styles.projectsContainer}>
        {certificates.map((cert, index) => (
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

export default Certificates;
