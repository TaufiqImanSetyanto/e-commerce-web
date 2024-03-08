import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="flex justify-between items-center py-2 px-10  shadow text-slate-800">
      <div>
        <Link to={"/"} className="text-2xl font-extrabold pl-4 text-cyan-600">
          Shopku
        </Link>
      </div>
      <div className="flex justify-center gap-10 items-center ">
        <Link to={"/login"}>
          <button className="border border-cyan-900 hover:bg-cyan-900 hover:text-cyan-50 duration-300 rounded px-4 font-semibold pb-0.5">Login</button>
        </Link>
        <Link to={"/cart"}>
          <FaCartShopping className="text-xl hover:scale-125 hover:text-cyan-600 transition-all" />
        </Link>
      </div>
    </div>
  );
}
