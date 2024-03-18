import React from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen text-slate-800 dark:bg-dark dark:text-white">
      <div className="shadow max-w-sm md:max-w-lg w-full rounded-lg p-8 dark:bg-semidark">
        <h1 className="text-3xl font-bold text-emerald-700 -mt-3 mb-2">Register</h1>
        <p className="mb-2 text-xs font-light">
          Sudah punya akun?
          <Link to={"/login"} className="text-emerald-700 font-normal">
            Login
          </Link>
        </p>
        <form action="">
          <Input name="name" type="text" placeholder="Masukkan nama" title="Name" />
          <Input name="email" type="email" placeholder="example@gmail.com" title="Email" />
          <Input name="password" type="password" placeholder="********" title="Password" />
          <Input name="password" type="password" placeholder="********" title="Confirm Password" />
          <Link to={"/login"}>
            <Button children={"Register"} />
          </Link>
        </form>
      </div>
    </div>
  );
}
