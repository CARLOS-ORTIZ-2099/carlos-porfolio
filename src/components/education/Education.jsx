import { useState } from "react";
import educationsData from "../../data/educations.json";
import styles from "./education.module.css";
import { Link } from "react-router-dom";

export const Education = () => {
  console.log(educationsData);

  const [certifications, setCertifications] = useState(educationsData);

  return (
    <section className={styles.eduactionsContainer} id="education">
      <div className={styles.hero}>
        <h2>my studies</h2>
      </div>

      <div className={styles.certificationsLinksContainer}>
        {certifications.slice(0, 7).map((certification) => (
          <div
            key={certification.date}
            data-aos="fade-up"
            className={styles.cardLinkInfo}
          >
            {/*  <div className={styles.cardLink}> */}
            <div className={styles.link}>
              <a
                className={styles.surround}
                href={certification.link}
                target="blank"
              >
                see certificate
              </a>
            </div>

            <div className={styles.texto}>
              <time className={styles.fecha}>{certification.date}</time>
              <h3 className={styles.curso}>{certification.course}</h3>
            </div>
            {/* </div> */}
          </div>
        ))}
      </div>

      <button className={styles.btn}>
        <Link to={"/education-page"}>ver mas</Link>
      </button>
    </section>
  );
};
