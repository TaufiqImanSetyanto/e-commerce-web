import React, { useContext } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";

export default function Login() {
  const { formUser, setFormUser } = useContext(UserContext);
  function onChangeHandler(e) {
    setFormUser({ ...formUser, [e.target.name]: e.target.value });
  }
  async function onSignUpHandler() {
    let response;
    await fetch("http://localhost:4000/signin", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formUser),
    })
      .then((res) => res.json())
      .then((data) => {
        response = data;
      });
    if (response.success) {
      localStorage.setItem("auth-token", response.token);
      window.location.replace("/");
    } else {
      alert(response.errors);
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen text-slate-800 dark:bg-dark dark:text-white">
      <div className="shadow max-w-sm md:max-w-lg w-full rounded-lg p-8 dark:bg-semidark">
        <h1 className="text-3xl font-bold text-emerald-700 -mt-3 mb-2">Login</h1>
        <p className="mb-2 text-xs font-light">
          Belum punya akun?
          <Link to={"/register"} className="text-emerald-600 font-normal">
            Register
          </Link>
        </p>
        <Input name="email" value={formUser.email} handler={onChangeHandler} type="email" placeholder="example@gmail.com" title="Email" />
        <Input name="password" value={formUser.password} handler={onChangeHandler} type="password" placeholder="********" title="Password" />
        <Button handler={() => onSignUpHandler()} children={"Login"} />
      </div>
    </div>
  );
}
