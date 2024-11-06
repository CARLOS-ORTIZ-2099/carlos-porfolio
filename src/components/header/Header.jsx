import logo2 from "../../assets/nav/logo2.svg";
import moon from "../../assets/nav/moon.svg";
import menu from "../../assets/nav/menu.svg";
import styles from "./header.module.css";

export const Header = () => {
  /*  console.log(styles); */

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <img style={{ width: "30px" }} src={logo2} alt="logo-principal" />
      </div>

      <div className={styles.headerDarkLight}>
        <img style={{ width: "30px" }} src={moon} alt="logo-dark-light" />
      </div>

      <div className={styles.headerMenu}>
        <img style={{ width: "30px" }} src={menu} alt="logo-menu" />
      </div>

      <nav className={styles.headerNav}>
        <ul className={styles.headerUl}>
          <li>
            <a href="#about">Acerca de</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
