import React, { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/context";
import icon from "../assets/shop.svg";

export default function () {
  const { carts } = useContext(ProductContext);
  return (
    <div className="flex justify-between items-center py-2 px-6  shadow text-slate-800">
      <div>
        <Link to={"/"} className="text-2xl font-extrabold pl-4 text-cyan-600 flex gap-1">
          <img src={icon} alt="" className="h-8" />
          <p>Shopku</p>
        </Link>
      </div>
      <div className="flex justify-center gap-6 items-center mr-3">
        <Link to={"/login"}>
          <button className="border border-cyan-900 hover:bg-cyan-900 hover:text-cyan-50 duration-300 rounded px-4 font-semibold pb-0.5">Login</button>
        </Link>
        <Link to={"/cart"}>
          {carts.length != 0 ? (
            <div className="bg-red-600 w-3 h-3 rounded-full absolute ml-3 -mt-1.5 flex place-content-center opacity-90">
              <p className="text-white text-[10px] -mt-0.5">{carts.length}</p>
            </div>
          ) : (
            <div></div>
          )}
          <FaCartShopping className="text-xl hover:scale-105 hover:text-cyan-700 transition-all" />
        </Link>
      </div>
    </div>
  );
}
