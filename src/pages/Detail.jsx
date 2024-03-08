import React, { useContext, useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/context";

export default function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const { products } = useContext(ProductsContext);
  useEffect(() => {
    const detailProduct = products.filter((product) => product.id == id);
    setDetail(detailProduct);
  }, [products]);
  console.log(detail);
  return (
    <div>
      <NavBar />
      {detail.map((detail) => (
        <div key={detail.id} className="mt-5 grid grid-cols-1 md:grid-cols-2 mx-10 shadow min-h-screen text-slate-800">
          <div className="flex justify-center items-center py-10 ">
            <img src={detail.image} className="max-w-72 md:w-96" />
          </div>
          <div className="flex flex-col gap-1.5 p-5">
            <h1 className="text-4xl font-bold">{detail.title}</h1>
            <p className="text-3xl font-medium">${detail.price}</p>
            <p className="text-xl mb-5">
              ⭐{detail.rating.rate}/5({detail.rating.count})
            </p>
            <p>Description : </p>
            <p className="font-light">{detail.description}</p>
            <div className="my-4">
              <Button children={"Add to Cart"}></Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
