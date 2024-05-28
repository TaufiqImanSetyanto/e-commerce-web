import React, { useContext } from "react";
import Products from "./Products";
import Loading from "./ui/Loading";
import { ProductContext } from "../context/product";

export default function ProductsList() {
  const { products, isLoading } = useContext(ProductContext);
  return (
    <div id="products" className="pb-10 px-10 pt-1 text-slate-800 dark:bg-semidark dark:text-white">
      <div>
        <h2 className="text-3xl font-bold text-center my-5">Product</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 place-items-center">
        {!isLoading ? products.map((product) => <Products key={product.id} id={product.id} title={product.title} rating={product.rating} normalPrice={product.price.normalPrice} discountPrice={product.price.discountPrice} image={product.image} />) : <Loading />}
      </div>
    </div>
  );
}
