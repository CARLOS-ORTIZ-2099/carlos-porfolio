import styles from "./projects.module.css";
import data from "../../data/projectsData.json";
import { useState } from "react";
import { Card } from "./Card.jsx";

export const Projects = () => {
  const [projects] = useState(data);

  return (
    <section className={styles.projectsContainer} id="projects">
      <h2 className={styles.projectsTitle} id="projects-heading">
        Projects
      </h2>
      <div className={styles.projects}>
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>

      <a
        className={styles.btn}
        target="_blank"
        href="https://github.com/CARLOS-ORTIZ-2099?tab=repositories"
        rel="noreferrer"
      >
        View My GitHub
      </a>
    </section>
  );
};
