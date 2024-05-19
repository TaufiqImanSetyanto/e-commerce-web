import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  useEffect(() => {
    if(theme == "dark"){
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark")
    } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light")
    }
  }, [theme]);
  
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
