import React from "react";
import { Link } from "react-router-dom";

export default function Products({ id, title, rating, price, image }) {
  return (
    <Link to={`/detail/${id}`}>
      <div className="shadow-lg w-48 h-[17rem] p-2 rounded-lg ">
        <img src={image} alt="" className="mx-auto max-h-32 hover:scale-110 duration-500" />
        <hr className="mt-5 " />
        <div className="my-3 mx-2">
          <h1 className="font-semibold text-xl">{title.substring(0, 10)}..</h1>
          <p className="my-1 ">
            ⭐ <span className="italic">{rating}</span>
          </p>
          <p className="text-end font-bold">
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
        </div>
      </div>
    </Link>
  );
}
