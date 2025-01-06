import styles from "./skills.module.css";
import skills from "../../data/skills.json";

export const Skills = () => {
  return (
    <section className={styles.skillsContainer} id="skills">
      <h2 className={styles.skillsTitle} id="skills-heading">
        Skills
      </h2>

      <div className={styles.skillsImagesContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skills}>
            <img
              className={styles.imageSkill}
              data-aos="fade-up-right"
              src={skill.image}
              alt="image-skill"
            />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
