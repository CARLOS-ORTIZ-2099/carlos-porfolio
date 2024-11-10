/* eslint-disable react/prop-types */
import { useMyContext } from "../../context/ThemeProvider";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Outlet } from "react-router-dom";

export const AppContainer = () => {
  const { theme } = useMyContext();

  return (
    <div className={theme === "light" ? "app-container" : "app-containerDark"}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
