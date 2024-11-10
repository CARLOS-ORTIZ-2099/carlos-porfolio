/* eslint-disable react-hooks/exhaustive-deps */
import logo2 from "../../assets/nav/logo2.svg";
import moon from "../../assets/nav/moon.svg";
import sun from "../../assets/nav/sun.svg";
import menu from "../../assets/nav/menu.svg";
import closeMenu from "../../assets/nav/close-menu.svg";
import styles from "./header.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useMyContext } from "../../context/ThemeProvider";

export const Header = () => {
  const { theme, handleTheme } = useMyContext();
  console.log(theme);

  const location = useLocation();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => setOpenMenu(!openMenu);

  /* este useffect se ejecutara cuando el usuario haga navegaciones internas */
  useEffect(() => {
    //console.log(location);
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
    //console.log(location);
    const sectionId = location.hash.replace("#", "");
    const section = document.getElementById(sectionId);
    //console.log(section);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <header
      className={
        theme === "light"
          ? styles.headerContainer
          : `${styles.headerContainer} ${styles.headerContainerDark}`
      }
    >
      <div className={styles.headerLogo}>
        <Link to={"/"}>
          <img src={logo2} alt="logo-principal" />
        </Link>
      </div>

      <div className={styles.headerDarkLight}>
        <img
          onClick={handleTheme}
          src={theme == "light" ? moon : sun}
          alt="logo-dark-light"
        />
      </div>

      <div className={styles.headerMenu}>
        <img
          onClick={handleOpenMenu}
          src={openMenu ? closeMenu : menu}
          alt="logo-menu"
        />
      </div>

      <nav className={`${styles.headerNav} ${openMenu && styles.show}`}>
        <ul className={styles.headerUl}>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#education">Education</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
