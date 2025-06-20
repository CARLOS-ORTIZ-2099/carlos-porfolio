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
          más de 2 años de experiencia, así también continuo en constante
          aprendizaje explorando nuevas tecnologías y mejores prácticas para
          mejorar mis habilidades, seguir creciendo y aportar valor a este mundo
          de la tecnología, me encanta asumir nuevos retos y resolver problemas
          tanto en el ámbito digital como en la vida cotidiana.
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
