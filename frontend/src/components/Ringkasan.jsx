import React from "react";
import Button from "../components/ui/Button";

export default function Ringkasan({totalHarga}) {
  return (
    <div className="shadow py-2 px-4 md:px-6 h-min rounded dark:bg-semidark">
      <h2 className="font-semibold text-lg ">Ringkasan belanja</h2>
      <div className="flex justify-between my-2">
        <p className="font-medium">Total</p>
        <p className="text-xl font-semibold">${totalHarga}</p>
      </div>
      <hr className="m-3" />
      <Button children={"Bayar"} />
    </div>
  );
}
