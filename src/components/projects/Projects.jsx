import styles from "./projects.module.css";
import data from "../../data/projectsData.json";
import { useState } from "react";
import network from "/redes/network-logo.svg";
import github from "/redes/github-logo-1.svg";

export const Projects = () => {
  const [projects, setProjects] = useState(data);

  return (
    <section className={styles.projectsContainer} id="projects">
      <h2 className={styles.projectsTitle} id="projects-heading">
        Projects
      </h2>
      <div className={styles.projects}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <div className={styles.cardImage}>
              <img loading="lazy" src={project.image} alt="Project Image" />
            </div>

            <div className={styles.cardContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <span>stack : </span>

              {project.technologies.map((technologi, index) => (
                <span key={index}> {technologi} </span>
              ))}

              <div className={styles.linksContainer}>
                <a href={project.link} target="blank" rel="noopener noreferrer">
                  <img
                    className={styles.icon}
                    src={network}
                    alt="visitar el proyecto en línea"
                  />
                </a>
                <a
                  href={project.github}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={styles.icon}
                    src={github}
                    alt="Ver el repositorio en GitHub"
                  />
                </a>
              </div>
            </div>
          </div>
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
