/* eslint-disable react/prop-types */
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Outlet } from "react-router-dom";

export const AppContainer = ({ classStyle }) => {
  return (
    <div className={classStyle}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
