import React from "react";
import { Link } from "react-router-dom";
import { TbShoppingBagPlus, TbListDetails } from "react-icons/tb";

export default function SideBarAdmin() {
  
  return (
    <div className="flex flex-col w-1/4 bg-white dark:bg-dark shadow-md gap-1">
      <Link to={"/admin/addproduct"} className="text-md font-semibold flex justify-center gap-2 text-emerald-800 py-2 hover:bg-gray-200 focus-within:bg-gray-200 dark:hover:bg-semidark dark:focus-within:bg-semidark">
        <TbShoppingBagPlus className="text-xl"/>
        <p>Add Product</p>
      </Link>
      <Link to={"/admin/listproducts"} className="text-md font-semibold flex justify-center gap-2 text-emerald-800 py-2 hover:bg-gray-200 focus-within:bg-gray-200 dark:hover:bg-semidark dark:focus-within:bg-semidark">
        <TbListDetails className="text-xl" />
        <p>List Products</p>
      </Link>
    </div>
  );
}
