import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { GrSun, GrMoon } from "react-icons/gr";
import icon from "../../assets/shop.svg";
import { ThemeContext } from "../../context/theme";

export default function NavBarAdmin() {
  const { theme, setTheme } = useContext(ThemeContext);
  function onSetThemeHandler() {
    setTheme(theme == "light" ? "dark" : "light");
  }
  return (
    <div className="flex justify-between items-center py-2 px-6 shadow text-slate-900 bg-white dark:bg-dark dark:text-white duration-500">
      <div>
        <Link to={"/admin"} className="text-2xl font-extrabold pl-4 text-emerald-600 flex gap-1">
          <img src={icon} alt="" className="h-8" />
          <p>Admin Dashboard</p>
        </Link>
      </div>
      <div className="flex justify-center gap-6 items-center mr-3">
        <button className="text-2xl" onClick={onSetThemeHandler}>
          {theme == "dark" ? <GrSun className="text-white" /> : <GrMoon />}
        </button>
      </div>
    </div>
  );
}
