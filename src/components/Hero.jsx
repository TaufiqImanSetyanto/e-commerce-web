import React from "react";
import hero from "../assets/hero.png";
import Buttonv2 from "./ui/Buttonv2";

export default function Hero() {
  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 px-10 text-center pb-5 text-slate-800 dark:bg-dark dark:text-white duration-500">
      <div className="flex justify-center pt-10 lg:pt-8">
        <img src={hero} alt="hero" className="h-72 sm:h-96 lg:h-[464px]" />
      </div>
      <div className="flex flex-col gap-4 justify-center sm:text-left ">
        <h1 className="text-5xl sm:text-6xl font-bold  "><span className="text-emerald-700">Big Sale</span> Only This Week</h1>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ipsum temporibus beatae voluptatibus nesciunt impedit aut numquam animi iusto alias!</p>
        <a href="#products">
        <Buttonv2 >Buy Now!</Buttonv2>
        </a>
      </div>
    </div>
  );
}
