import React, { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GrSun, GrMoon } from "react-icons/gr";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/product";
import icon from "../assets/shop.svg";
import { ThemeContext } from "../context/theme";
import Buttonv2 from "./ui/Buttonv2";

export default function () {
  const { carts } = useContext(ProductContext);
  const { theme, setTheme } = useContext(ThemeContext);
  function onSetThemeHandler() {
    setTheme(theme == "light" ? "dark" : "light");
  }
  return (
    <div className="flex justify-between items-center py-2 px-6 shadow text-slate-900 dark:bg-dark dark:text-white duration-500">
      <div>
        <Link to={"/"} className="text-2xl font-extrabold pl-4 text-emerald-600 flex gap-1">
          <img src={icon} alt="" className="h-8" />
          <p>Shopku</p>
        </Link>
      </div>
      <div className="flex justify-center gap-6 items-center mr-3">
        <Link to={"/login"}>
          <Buttonv2>Login</Buttonv2>
        </Link>
        <Link to={"/cart"}>
          {carts.length != 0 ? (
            <div className="bg-red-600 w-3 h-3 rounded-full absolute ml-3 -mt-1.5 flex place-content-center opacity-90">
              <p className="text-white text-[10px] -mt-0.5">{carts.length}</p>
            </div>
          ) : (
            <div></div>
          )}
          <FaCartShopping className="text-xl" />
        </Link>
        <button className="text-2xl" onClick={onSetThemeHandler}>
          {theme == "dark" ? <GrSun className="text-white" /> : <GrMoon />}
        </button>
      </div>
    </div>
  );
}
