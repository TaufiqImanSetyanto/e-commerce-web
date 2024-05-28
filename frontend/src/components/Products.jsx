import React from "react";
import { Link } from "react-router-dom";

export default function Products({ id, title, rating, normalPrice, discountPrice, image }) {
  return (
    <Link to={`/detail/${id}`}>
      <div className="grid grid-rows-2 shadow-md w-48 h-[17rem] p-2 rounded-lg text-slate-800 bg-white dark:bg-dark dark:text-white">
        <img src={image} alt="" className="mx-auto max-h-32 hover:scale-110 duration-500 self-center" />
        <div>
          <hr className="mt-5 " />
          <div className="my-3 mx-2">
            <h1 className="font-light text-md">{title}</h1>
            <p className="my-1 mb-4 text-sm">
              ⭐ <span className="italic">{rating}</span>
            </p>
            {discountPrice != 0 ? (
              <div className="flex justify-end gap-3">
                <p className="font-bold">${normalPrice - discountPrice}</p>
                <p className="text-sm line-through">${normalPrice}</p>
              </div>
            ) : (
              <p className="text-end font-bold">${normalPrice}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
