import React, { useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/product";
import DetailItem from "../components/DetailItem";

export default function Detail() {
  const { id } = useParams();
  const { products, detail, setDetail, carts, setCarts } = useContext(ProductContext);
  useEffect(() => {
    const detailProduct = products.filter((product) => product.id == id);
    setDetail(detailProduct);
  }, [products]);
  function onSetCartsHandler() {
    const cartProducts = products.find((product) => product.id == id);
    if (cartProducts.qty == undefined) {
      cartProducts.qty = 1;
      setCarts([...carts, cartProducts]);
    } else cartProducts.qty += 1;
  }
  return (
    <div>
      <NavBar />
      {detail.map((detail) => (
        <DetailItem id={detail.id} image={detail.image} title={detail.title} price={detail.price} rate={detail.rating.rate} count={detail.rating.count} description={detail.description} onSetCarts={onSetCartsHandler} />
      ))}
    </div>
  );
}
