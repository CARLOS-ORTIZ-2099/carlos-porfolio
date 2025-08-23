/* eslint-disable react/prop-types */
import styles from "./projects.module.css";
import network from "/redes/network-logo.svg";
import github from "/redes/github-logo.svg";
import youtube from "/redes/youtube.svg";
import { insertPipesArray } from "../../helpers/index.js";

export const Card = ({ project }) => {
  const obj = insertPipesArray(project?.technologies);

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img loading="lazy" src={project.image} alt="Project Image" />
      </div>

      <div className={styles.cardContent}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <span className={styles.stackTitle}>stack : </span>
        <div className={`${styles.imagesTecnologiesContainer}`}>
          {project.technologies.map((technologi, index) => (
            <div
              key={index}
              className={
                obj.doble[index]
                  ? styles.doble
                  : obj.uno[index]
                  ? styles.uno
                  : ""
              }
            >
              <img
                src={`/skills/` + technologi + "-logo.svg"}
                alt="image-technologi"
              />
              <span key={index}> {technologi} </span>
            </div>
          ))}
        </div>
        <div className={styles.linksContainer}>
          <a href={project.link} target="blank" rel="noopener noreferrer">
            <img
              className={styles.icon}
              src={network}
              alt="visitar el proyecto en línea"
            />
          </a>
          {project.demo ? (
            <a href={project.demo} target="blank" rel="noopener noreferrer">
              <img
                className={styles.icon}
                src={youtube}
                alt="Ver la demo en youtube"
              />
            </a>
          ) : null}

          <a href={project.github} target="blank" rel="noopener noreferrer">
            <img
              className={styles.icon}
              src={github}
              alt="Ver el repositorio en GitHub"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
