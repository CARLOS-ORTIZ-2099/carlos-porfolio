import styles from "./skills.module.css";
import html from "/skills/html-logo.svg";
import css from "/skills/css-logo.svg";
import js from "/skills/js-logo.svg";
import react from "/skills/react-logo.svg";
import bootstrap from "/skills/bootstrap-logo.svg";
import git from "/skills/git-logo.svg";
import node from "/skills/node-logo.svg";
import express from "/skills/express-logo.svg";
import mongo from "/skills/mongo-logo.svg";

export const Skills = () => {
  return (
    <section className={styles.skillsContainer} id="skills">
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
