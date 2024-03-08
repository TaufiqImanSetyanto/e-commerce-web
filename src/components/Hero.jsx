import React from "react";
import hero from "../assets/hero.png";
export default function Hero() {
  return (
    <div className="h-[600px]  grid grid-cols-1 sm:grid-cols-2 px-10 text-center pb-5 text-slate-800">
      <div className="flex justify-center pt-10 lg:pt-8">
        <img src={hero} alt="hero" className="h-72 sm:h-96 lg:h-[464px]" />
      </div>
      <div className="flex flex-col gap-4 justify-center sm:text-left ">
        <h1 className="text-5xl sm:text-6xl font-bold  ">Big Sale Only This Week</h1>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ipsum temporibus beatae voluptatibus nesciunt impedit aut numquam animi iusto alias!</p>
        <div >
          <a href="#products" className="bg-gradient-to-r from-cyan-800 to-cyan-600 px-4 py-1.5 rounded-lg font-bold shadow-sm text-white hover:scale-105 transition-all ">Buy Now!</a>
        </div>
      </div>
    </div>
  );
}
