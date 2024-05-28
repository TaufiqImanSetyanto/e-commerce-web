import React, { useEffect, useState } from "react";
import DeleteButton from "../ui/DeleteButton";

export default function ListProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const getAllProducts = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  async function onDeleteProductHandler(id) {
    await fetch("http://localhost:4000/deleteproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id:id}),
    })
    getAllProducts()
  }
  
  return (
    <div className="m-5 w-full text-center overflow-auto pb-10 dark:text-white">
      <h1 className="text-2xl font-semibold mb-3">List Product</h1>
      <div className="grid grid-flow-col font-medium grid-cols-5">
        <p>Image</p>
        <p>Title</p>
        <p>Normal Price</p>
        <p>Discount Price</p>
        <p>Delete</p>
      </div>
      <hr />
      {allProducts.map((product) => {
        
        return (
          <div>
            <div className="grid grid-flow-col grid-cols-5 justify-items-center items-center my-2">
              <img src={product.image} alt="" className="h-16" />
              <p>{product.title}</p>
              <p>${product.price.normalPrice}</p>
              <p>${product.price.discountPrice}</p>
              <DeleteButton handler={()=>onDeleteProductHandler(product.id)}/>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
