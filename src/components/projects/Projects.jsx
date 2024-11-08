import styles from "./projects.module.css";
import data from "../../data/projectsData.json";
import { useState } from "react";
import network from "../../assets/redes/network-logo.svg";
import github from "../../assets/redes/github-logo-1.svg";

export const Projects = () => {
  const [projects, setProjects] = useState(data);

  return (
    <section className={styles.projectsContainer} id="projects">
      {/* estilar globalmente */}
      <h2 className={styles.projectsTitle} id="projects-heading">
        ultimos Proyectos
      </h2>

      <div className={styles.projects}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <div className={styles.cardImage}>
              <img src={project.image} alt="Project Image" />
            </div>

            <div className={styles.cardContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <span>stack : </span>

              {project.technologies.map((technologi, index) => (
                <span key={index}> {technologi} </span>
              ))}

              <div className={styles.linksContainer}>
                <a href={project.link} target="blank">
                  <img
                    className={styles.icon}
                    src={network}
                    alt="icon-network"
                  />
                </a>
                <a href={project.github} target="blank">
                  <img className={styles.icon} src={github} alt="icon-github" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.btn}>ver mas </button>
    </section>
  );
};
