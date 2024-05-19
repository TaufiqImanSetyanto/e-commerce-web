import React from "react";
import PlusButton from "./ui/PlusButton";
import MinusButton from "./ui/MinusButton";
import DeleteButton from "./ui/DeleteButton";

export default function CartItem({ id, image, title, category, price, qty, onPlusQty, onMinusQty, onDeleteCart }) {
  return (
    <div key={id} className="grid grid-cols-6 mb-2">
      <div className="grid justify-center">
        <img src={image} alt="" className=" p-1 max-w-20 max-h-20 my-3 mx-5" />
      </div>
      <div className="grid grid-flow-col grid-cols-3 col-span-5 justify-between w-full md:m-5 gap-3">
        <div className="ml-5 md:ml-2 col-span-2 ">
          <p className="text-lg font-medium">{title}</p>
          <p className="text-slate-500 dark:text-slate-300">{category}</p>
        </div>
        <div className="grid justify-end col-span-1 ">
          <p className="text-xl font-semibold mr-4">
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <div className="mt-2 mr-4 grid grid-flow-col text-xl gap-2">
            {qty > 1 ? <MinusButton handler={onMinusQty} /> : <DeleteButton handler={onDeleteCart} />}
            <div className="-mt-1">{qty}</div>
            <PlusButton handler={onPlusQty} />
          </div>
        </div>
      </div>
      <hr className="mt-2 col-span-6" />
    </div>
  );
}
