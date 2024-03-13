import React, { useContext } from "react";
import Products from "./Products";
import Loading from "./ui/Loading";
import { ProductContext } from "../context/context";

export default function ProductsList() {
  const {products,isLoading} = useContext(ProductContext)
  return (
    <div id="products" className="mb-10 mx-10 text-slate-800">
      <div>
        <h2 className="text-3xl font-bold text-center my-5">Product</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 place-items-center">
        {!isLoading ? products.map((product) => <Products key={product.id} id={product.id} title={product.title} rating={product.rating.rate} price={product.price} image={product.image} />) : <Loading />}
      </div>
    </div>
  );
}
