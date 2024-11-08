import styles from "./about.module.css";
import Lottie from "lottie-react";
import animationData3 from "../../assets/about/about-image3.json";
import githubLogo from "../../assets/redes/github-logo.svg";
import linkedin from "../../assets/redes/linkedin-logo.svg";
import cv from "../../assets/redes/cv-logo.svg";

export const About = () => {
  /* console.log(styles); */
  return (
    <section className={styles.aboutContainer} id="about">
      <div className={styles.aboutImage}>
        <Lottie animationData={animationData3} />
      </div>

      <div className={styles.aboutInformation}>
        {/* este h3 deberia estilarse globalmente, en tamaño y color */}
        <h2 id="about-heading">Acerca de mí</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          totam? Molestiae tempore dolore consequatur labore tenetur autem
          voluptates rerum doloremque hic alias, eos, modi, quia porro nostrum
          perferendis doloribus eaque Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <div>
          <img src={githubLogo} alt="github-logo" />
          <img src={linkedin} alt="linkedin-logo" />
          <img src={cv} alt="cv-logo" />
        </div>
      </div>
    </section>
  );
};
