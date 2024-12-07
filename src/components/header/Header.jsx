/* eslint-disable react-hooks/exhaustive-deps */
import logo from "/nav/logo.svg";
import moon from "/nav/moon.svg";
import sun from "/nav/sun.svg";
import menu from "/nav/menu.svg";
import closeMenu from "/nav/close-menu.svg";
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

  useEffect(() => {
    if (location.pathname === "/education-page" && location.hash) {
      console.log("estas en la pagina education");
      navigate(`/${location.hash}`);
    }
  }, [location.hash]);

  useEffect(() => {
    const sectionId = location.hash.replace("#", "");
    const section = document.getElementById(sectionId);
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
          <img src={logo} alt="logo-principal" />
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
