import React from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen text-slate-800">
      <div className="shadow max-w-sm md:max-w-lg w-full rounded-lg p-8">
        <h1 className="text-3xl font-bold text-cyan-600 -mt-3 mb-2">Login</h1>
        <p className="mb-2 text-xs font-light">
          Belum punya akun?
          <Link to={"/register"} className="text-cyan-600 font-normal">
            Register
          </Link>
        </p>
        <form action="">
          <Input name="email" type="email" placeholder="example@gmail.com" title="Email" />
          <Input name="password" type="password" placeholder="********" title="Password" />
          <Link to={"/"}>
            <Button children={"Login"} />
          </Link>
        </form>
      </div>
    </div>
  );
}
