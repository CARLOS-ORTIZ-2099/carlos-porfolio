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
        <h2 id="about-heading">About me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          totam? Molestiae tempore dolore consequatur labore tenetur autem
          voluptates rerum doloremque hic alias, eos, modi, quia porro nostrum
          perferendis doloribus eaque Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <div>
          <a
            target="_blank"
            href="https://github.com/CARLOS-ORTIZ-2099"
            rel="noreferrer"
          >
            <img src={githubLogo} alt="github-logo" />
          </a>

          <a href="#">
            <img src={linkedin} alt="linkedin-logo" />
          </a>
          <a href="#">
            <img src={cv} alt="cv-logo" />
          </a>
        </div>
      </div>
    </section>
  );
};
