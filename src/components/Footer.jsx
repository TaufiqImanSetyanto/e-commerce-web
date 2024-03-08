import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
export default function Footer() {
  return (
    <div className="bg-cyan-800 h-30 grid grid-cols-1 md:grid-cols-3 text-white md:place-items-center p-5 gap-5 ">
      <div>
        <h1 className="text-2xl font-bold">Shopku</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, mollitia?</p>
      </div>
      <div className="w-20">
        <p className="md:text-center text-xl font-semibold">Link</p>
        <ul className="text-sm my-1">
          <li className="my-2">
            <a href="#">Home</a>
          </li>
          <li className="my-2">
            <a href="#products">Products</a>
          </li>
          <li className="my-2">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="flex items-center">
          <FaInstagram className="mx-1" />
          @taufiq_iman_setyanto
        </p>
        <p className="flex items-center">
          <MdOutlineEmail className="mx-1" />
          taufiqimamsetyanto@gmail.com
        </p>
        <p className="flex items-center">
          <FaLinkedinIn className="mx-1" />
          Taufiq Iman Setyanto
        </p>
        <p className="flex items-center">
          <MdOutlinePhone className="mx-1" />
          085335221469
        </p>
      </div>
    </div>
  );
}
