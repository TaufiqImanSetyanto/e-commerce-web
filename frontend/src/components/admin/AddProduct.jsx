import React, { useState } from "react";
import uploadhere from "../../assets/uploadhere.svg";
import Input from "../ui/Input";

export default function AddProduct() {
  const [image, setImage] = useState(false);
  const [inputProduct, setInputProduct] = useState({
    title: "",
    image: "",
    price: {
      normalPrice: 0,
      discountPrice: 0,
    },
    description: "",
    rating: 0,
  });
  function onImageHandler(e) {
    setImage(e.target.files[0]);
  }
  function onInputProductHandler(e) {
    if (e.target.name === 'normalPrice' || e.target.name === 'discountPrice') {
      setInputProduct({
        ...inputProduct,
        price: {
          ...inputProduct.price,
          [e.target.name]: e.target.value,
        },
      });
    } else {
      setInputProduct({ ...inputProduct, [e.target.name] : e.target.value });
    }
  }
  async function onAddProductHandler() {
    console.log(inputProduct);
    let responData;
    let product = inputProduct;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        responData = data;
      });
    if (responData.success) {
      product.image = responData.imageUrl;
      console.log(product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          data.success ? alert("Product Added") : alert("Failed");
        });
    }
  }

  return (
    <div className="m-5 w-full dark:text-white">
      <div className="grid grid-flow-col grid-cols-2 gap-8">
        <Input name="title" value={inputProduct.title} handler={onInputProductHandler} type="text" placeholder="Masukkan nama product" title="Title" />
        <Input name="description" value={inputProduct.description} handler={onInputProductHandler} type="text" placeholder="Masukkan deskripsi" title="Description" />
      </div>
      <div className="grid grid-flow-col grid-cols-2 gap-8">
        <Input name="normalPrice" value={inputProduct.price.normalPrice} handler={onInputProductHandler} type="number" placeholder="" title="Normal Price" />
        <Input name="rating" value={inputProduct.rating} handler={onInputProductHandler} type="number" placeholder="" title="Rating" />
      </div>
      <div className="grid grid-flow-col grid-cols-2 gap-8">
        <Input name="discountPrice" value={inputProduct.price.discountPrice} handler={onInputProductHandler} type="number" placeholder="" title="Discount Price" />
      </div>
      <div className="w-fit">
        <label htmlFor="fileInput">
          Input Image
          <img src={image ? URL.createObjectURL(image) : uploadhere} className="h-48 bg-white rounded-lg" alt="" />
        </label>
        <input onChange={onImageHandler} id="fileInput" type="file" name="image" hidden />
      </div>
      <button onClick={() => onAddProductHandler()} className="border rounded-md bg-emerald-700 border-none hover:bg-emerald-900 text-white py-1 px-5 my-3">
        Add Product
      </button>
    </div>
  );
}
