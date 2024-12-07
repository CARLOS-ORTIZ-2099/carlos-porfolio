/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    let themeValue = localStorage.getItem("theme");
    if (themeValue) {
      return themeValue;
    } else {
      return "light";
    }
  });

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  const data = { theme, setTheme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export const useMyContext = () => {
  try {
    const myContext = useContext(ThemeContext);
    if (!myContext) {
      throw new Error("no existe el contexto");
    }
    return myContext;
  } catch (error) {
    console.log(error);
  }
};
