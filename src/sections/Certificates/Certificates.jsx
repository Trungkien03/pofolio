// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./CertificatesStyles.module.css";
import certificates from "./certificates-data";
import CertificatesCard from "../../common/CertificatesCard/CertificatesCard";

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
            linkUrl={cert.linkUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Certificates;
