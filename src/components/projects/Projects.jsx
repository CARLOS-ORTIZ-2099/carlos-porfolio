import styles from "./projects.module.css";
import data from "../../data/projectsData.json";

console.log(data);

export const Projects = () => {
  return (
    <section className={styles.projectsContainer} id="projects">
      <h2 id="projects-heading">Proyectos</h2>
      <article>
        <h3>Proyecto 1</h3>
        <p>Descripción del proyecto, tecnologías usadas y enlace.</p>
      </article>
      <article>
        <h3>Proyecto 2</h3>
        <p>Descripción del proyecto, tecnologías usadas y enlace.</p>
      </article>
    </section>
  );
};
