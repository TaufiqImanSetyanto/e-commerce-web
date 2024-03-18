import React from "react";
import Button from "../components/ui/Button";

export default function DetailItem({ id, image, title, price, rate, count, description, onSetCarts }) {
  return (
    <div key={id} className="pt-5 grid grid-cols-1 md:grid-cols-2 px-10 shadow min-h-screen text-slate-800 dark:bg-dark dark:text-white duration-500">
      <div className="flex justify-center items-center py-10 ">
        <img src={image} className="max-w-72 md:w-96" />
      </div>
      <div className="flex flex-col gap-1.5 p-5">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-3xl font-medium">
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <p className="text-xl mb-5">
          ⭐{rate}/5({count})
        </p>
        <p>Description : </p>
        <p className="font-light">{description}</p>
        <div className="my-4">
          <Button handler={onSetCarts} children={"Add to Cart"}></Button>
        </div>
      </div>
    </div>
  );
}
