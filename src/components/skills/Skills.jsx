import styles from "./skills.module.css";
import html from "../../assets/skills/html-logo.svg";
import css from "../../assets/skills/css-logo.svg";
import js from "../../assets/skills/js-logo.svg";
import react from "../../assets/skills/react-logo.svg";
import bootstrap from "../../assets/skills/bootstrap-logo.svg";
import git from "../../assets/skills/git-logo.svg";
import node from "../../assets/skills/node-logo.svg";
import express from "../../assets/skills/express-logo.svg";
import mongo from "../../assets/skills/mongo-logo.svg";

export const Skills = () => {
  // console.log(styles);
  return (
    <section className={styles.skillsContainer} id="skills">
      {/* estilarse globalmente */}
      <h2 className={styles.skillsTitle} id="skills-heading">
        Skills
      </h2>

      <div className={styles.skillsImagesContainer}>
        <div className={styles.skills}>
          <img
            className={styles.imageSkill}
            data-aos="fade-up-right"
            src={html}
            alt="image-skill"
          />
          <h3>html</h3>
        </div>
        <div className={styles.skills}>
          <img
            className={styles.imageSkill}
            data-aos="fade-up-right"
            src={css}
            alt="image-skill"
          />
          <h3>css</h3>
        </div>
        <div className={styles.skills}>
          <img
            className={styles.imageSkill}
            data-aos="fade-up-right"
            src={js}
            alt="image-skill"
          />
          <h3>javascript</h3>
        </div>
        <div className={styles.skills}>
          <img
            className={styles.imageSkill}
            data-aos="fade-up-right"
            src={react}
            alt="image-skill"
          />
          <h3>react</h3>
        </div>
        <div className={styles.skills}>
          <img
            className={styles.imageSkill}
            data-aos="fade-up-right"
            src={bootstrap}
            alt="image-skill"
          />
          <h3>bootstrap</h3>
        </div>
        <div className={styles.skills}>
          <img
            className={styles.imageSkill}
            data-aos="fade-up-right"
            src={git}
            alt="image-skill"
          />
          <h3>git</h3>
        </div>
        <div className={styles.skills}>
          <img
            className={styles.imageSkill}
            data-aos="fade-up-right"
            src={node}
            alt="image-skill"
          />
          <h3>node</h3>
        </div>
        <div className={styles.skills}>
          <img
            className={styles.imageSkill}
            data-aos="fade-up-right"
            src={express}
            alt="image-skill"
          />
          <h3>express</h3>
        </div>
        <div className={styles.skills}>
          <img
            className={styles.imageSkill}
            data-aos="fade-up-right"
            src={mongo}
            alt="image-skill"
          />
          <h3>mongo Db</h3>
        </div>
      </div>
    </section>
  );
};
