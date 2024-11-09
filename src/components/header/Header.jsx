/* eslint-disable react-hooks/exhaustive-deps */
import logo2 from "../../assets/nav/logo2.svg";
import moon from "../../assets/nav/moon.svg";
import menu from "../../assets/nav/menu.svg";
import styles from "./header.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Header = () => {
  /*  console.log(styles); */

  const location = useLocation();
  const navigate = useNavigate();

  /* este useffect se ejecutara cuando el usuario haga navegaciones internas */
  useEffect(() => {
    console.log(location);
    // si estando en la pagina education-page el usuario interactua
    // con la navegacion forzara un cambio de hash y se hara una redirrecion de pagina
    if (location.pathname === "/education-page" && location.hash) {
      console.log("estas en la pagina education");
      navigate(`/${location.hash}`);
    }
  }, [location.hash]);

  /* este efecto se ejecutara cuando se cambie de pagina */
  useEffect(() => {
    // si el usuario cambia de education-page al indice entonces lo
    // llevamos hasta la seccion propia del indice
    console.log(location);
    const sectionId = location.hash.replace("#", "");
    const section = document.getElementById(sectionId);
    console.log(section);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <Link to={"/"}>
          <img style={{ width: "30px" }} src={logo2} alt="logo-principal" />
        </Link>
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
            <a href="#skills">Habilidades</a>
          </li>

          <li>
            <a href="#projects">Proyectos</a>
          </li>

          <li>
            <a href="#education">Education</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
