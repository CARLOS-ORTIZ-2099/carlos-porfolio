import styles from "./about.module.css";
import Lottie from "lottie-react";
import aboutImage from "../../assets/about/about-image.json";
import githubImage from "/redes/github-logo.svg";
import youtubeImage from "/redes/youtube.svg";
import gmailImage from "/redes/gmail-logo.svg";
import linkedinImage from "/redes/linkedin-logo.svg";
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
          Soy un <span className={styles.role}>PROGRAMADOR FULLSTACK </span> con
          más de <span className={styles.role}>2 años</span> de experiencia, en
          este tiempo desarrolle varias aplicaciones web desde cero, estos
          proyectos me permitieron mejorar mis conocimientos en varios aspectos
          del desarrollo web como front-end, back-end, bases de datos y aprender
          buenas practicas como principios{" "}
          <span className={styles.role}>SOLID</span> y
          <span className={styles.role}> PATRONES DE DISEÑO</span>
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
            href="https://www.youtube.com/@carledudev"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtubeImage} alt="youtube-logo" />
          </a>

          <a
            href="mailto:carledudev@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gmailImage} alt="gmail-logo" />
          </a>

          <a
            href="https://www.linkedin.com/in/carlos-eduardo-ortiz-pari-105973348/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinImage} alt="linkedin-logo" />
          </a>

          <a href="/CARLOS-DEVELOPER-CV.pdf" target="_blank">
            <img src={cvImage} alt="cv-logo" />
          </a>
        </div>
      </div>
    </section>
  );
};
