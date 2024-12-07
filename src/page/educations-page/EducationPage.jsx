import { useState } from "react";
import educationsData from "../../data/educations.json";
import styles from "./education-page.module.css";

export const EducationPage = () => {
  const [certifications, setCertifications] = useState(educationsData);
  return (
    <div className={styles.educationPageContainer}>
      {certifications.map((certification) => (
        <div className={styles.card} key={certification.id}>
          <img
            className={styles.cardImg}
            src={certification.link}
            alt="certificate-img"
          />

          <div className={styles.overlay}>
            <span>
              <a target="_blank" href={certification.link} rel="noreferrer">
                see more
              </a>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
