import { useState } from "react";
import educationsData from "../../data/educations.json";
import styles from "./education-page.module.css";
console.log(educationsData);

export const EducationPage = () => {
  const [certifications, setCertifications] = useState(educationsData);
  return (
    <div className={styles.educationPageContainer}>
      {certifications.map((certification) => (
        <div className={styles.card} key={certification.id}>
          <img className={styles.cardImg} src={certification.link} alt="" />

          <div className={styles.overlay}>
            <button className={styles.cardBtn}>
              <a target="_blank" href={certification.link} rel="noreferrer">
                ver mas
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};