import styles from "./about.module.css";
import Lottie from "lottie-react";
import animationData3 from "../../assets/about/about-image3.json";

export const About = () => {
  /* console.log(styles); */
  return (
    <section className={styles.aboutContainer} id="about">
      <div className={styles.aboutImage}>
        <Lottie animationData={animationData3} />
      </div>

      <div className={styles.aboutInformation}>
        <h2 id="about-heading">Acerca de mí</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          totam? Molestiae tempore dolore consequatur labore tenetur autem
          voluptates rerum doloremque hic alias, eos, modi, quia porro nostrum
          perferendis doloribus eaque Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Assumenda autem delectus nam magni excepturi, quis
          quod perspiciatis eveniet maxime ipsa alias, eaque sapiente vero
          deleniti accusantium quam? Id, velit labore.
        </p>
      </div>
    </section>
  );
};
