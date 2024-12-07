import styles from "./about.module.css";
import Lottie from "lottie-react";
import aboutImage from "../../assets/about/about-image.json";
import githubImage from "/redes/github-logo.svg";
import gmailImage from "/redes/gmail-logo.svg";
import cvImage from "/redes/cv-logo.svg";

export const About = () => {
  return (
    <section className={styles.aboutContainer} id="about">
      <div className={styles.aboutImage}>
        <Lottie animationData={aboutImage} />
      </div>

      <div className={styles.aboutInformation}>
        <h2 id="about-heading">About me</h2>
        <p>
          soy una persona autodidacta con ganas de seguir aprendiendo y
          creciendo en este mundo de la tecnología, así mismo me encuentro en
          constante aprendizaje explorando nuevas tecnologías y mejores
          prácticas para mejorar mis habilidades y hacer las cosas cada vez
          mejor me encanta asumir nuevos retos y resolver problemas tanto en el
          ámbito digital como en la vida cotidiana.
        </p>
        <div>
          <a
            href="https://github.com/CARLOS-ORTIZ-2099"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubImage} alt="github-logo" />
          </a>

          <a
            href="mailto:carledudev@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gmailImage} alt="gmail-logo" />
          </a>
          <a href="/carlos-cv.pdf" target="_blank">
            <img src={cvImage} alt="cv-logo" />
          </a>
        </div>
      </div>
    </section>
  );
};
