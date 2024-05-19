import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
export default function Footer() {
  return (
    <div className="bg-emerald-950 dark:bg-dark grid grid-cols-1 md:grid-cols-3 text-white md:place-items-center px-6 py-3 gap-5 duration-500 text-sm">
      <div>
        <h1 className="text-2xl font-bold">Shopku</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, mollitia?</p>
      </div>
      <div className="w-20">
        <p className="md:text-center text-lg font-semibold">Link</p>
        <ul className="text-sm my-1">
          <li className="my-1">
            <a href="#">Home</a>
          </li>
          <li className="my-1">
            <a href="#products">Products</a>
          </li>
          <li className="my-1">
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
