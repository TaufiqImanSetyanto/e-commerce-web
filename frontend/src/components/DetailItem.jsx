import React from "react";
import Button from "../components/ui/Button";

export default function DetailItem({ id, image, title, normalPrice, discountPrice, rating, description, onSetCarts }) {
  return (
    <div key={id} className="pt-5 grid grid-cols-1 md:grid-cols-2 px-10 shadow min-h-screen text-slate-800 dark:bg-dark dark:text-white duration-500">
      <div className="flex justify-center items-center py-10 ">
        <img src={image} className="max-w-72 md:w-96" />
      </div>
      <div className="flex flex-col gap-1.5 p-5">
        <h1 className="text-4xl font-semibold">{title}</h1>
        {discountPrice != 0 ? (
          <div className="flex gap-3">
            <p className="font-bold text-2xl">${normalPrice - discountPrice}</p>
            <p className="line-through">${normalPrice}</p>
          </div>
        ) : (
          <p className="font-bold text-2xl">${normalPrice}</p>
        )}
        <p className="mb-5">⭐{rating}</p>
        <p>Description : </p>
        <p className="font-light">{description}</p>
        <div className="my-4">
          <Button handler={onSetCarts} children={"Add to Cart"}></Button>
        </div>
      </div>
    </div>
  );
}
