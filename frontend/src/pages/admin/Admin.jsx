import React from "react";
import NavBarAdmin from "../../components/admin/NavBarAdmin";
import SideBarAdmin from "../../components/admin/SideBarAdmin";
import { Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div className=" bg-gray-100 dark:bg-semidark h-screen overflow-hidden">
      <NavBarAdmin />
      <div className="flex h-full">
        <SideBarAdmin />
        <Outlet />
      </div>
    </div>
  );
}
