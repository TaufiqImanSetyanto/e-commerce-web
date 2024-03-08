import React from "react";
import hero from "../assets/hero.png";
import product from "../assets/product.png";
import NavBar from "../components/NavBar";
import Button from "../components/Button";

export default function Cart() {
  return (
    <div>
      <NavBar />
      <div className="m-5 text-slate-800">
        <h1 className="text-2xl font-bold my-2 ">Cart</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="md:col-span-2 shadow p-2 md:px-6">
            <div className="grid grid-cols-6 mb-2">
              <div className="flex justify-center">
                <img src={hero} alt="" className="border p-1 rounded max-w-20 max-h-20 my-3 mx-5" />
              </div>
              <div className="flex col-span-5 justify-between w-full md:m-5">
                <div className="ml-5 md:ml-2">
                  <p className="text-xl font-medium">Baju</p>
                  <p className="text-slate-600">L</p>
                </div>
                <div>
                  <p className="text-xl font-semibold mr-4">Rp. 100.000</p>
                </div>
              </div>
              <hr className="mt-2 col-span-6" />
            </div>
            <div className="grid grid-cols-6 mb-2">
              <div className="flex justify-center">
                <img src={product} alt="" className="border p-1 rounded max-w-20 max-h-20 my-3 mx-5" />
              </div>
              <div className="flex col-span-5 justify-between w-full md:m-5">
                <div className="ml-5 md:ml-2">
                  <p className="text-xl font-medium">Baju</p>
                  <p className="text-slate-600">L</p>
                </div>
                <div>
                  <p className="text-xl font-semibold mr-4">Rp. 100.000</p>
                </div>
              </div>
              <hr className="mt-2 col-span-6" />
            </div>
          </div>
          <div className="shadow py-2 px-4 md:px-6 h-min">
            <h2 className="font-semibold text-lg ">Ringkasan belanja</h2>
            <div className="flex justify-between my-2">
              <p className="font-medium">Total</p>
              <p className="text-xl font-semibold">Rp. 100.000</p>
            </div>
            <hr className="m-3" />
            <Button children={"Bayar"} />
          </div>
        </div>
      </div>
    </div>
  );
}
