import React, { useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import { ProductContext } from "../context/product";
import Ringkasan from "../components/Ringkasan";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { carts, setCarts, totalHarga, setTotalHarga } = useContext(ProductContext);
  useEffect(() => {
    const qty = carts.map((cart) => cart.qty * (cart.price.normalPrice - cart.price.discountPrice));
    const total = qty.reduce((acc, cur) => acc + cur, 0);
    setTotalHarga(total);
  }, [carts]);

  function onDeleteCartHandler(id) {
    const deleteCart = carts.find((cart) => cart.id == id);
    delete deleteCart.qty;
    const updateCarts = carts.filter((cart) => cart.id !== id);
    setCarts(updateCarts);
  }
  function onPlusQtyCartHandler(id) {
    const minusQty = carts.find((cart) => cart.id == id);
    minusQty.qty += 1;
    setCarts([...carts]);
  }
  function onMinusQtyCartHandler(id) {
    const minusQty = carts.find((cart) => cart.id == id);
    minusQty.qty -= 1;
    setCarts([...carts]);
  }
  console.log(carts);
  return (
    <div className="dark:bg-dark min-h-screen duration-500">
      <NavBar />
      <div className="m-5 text-slate-800 dark:text-white ">
        <h1 className="text-2xl font-bold my-2 ">Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-2 shadow p-2 md:px-6 rounded dark:bg-semidark">
            {carts.length != 0 ? (
              carts.map((cart) => (
                <CartItem
                  id={cart.id}
                  image={cart.image}
                  title={cart.title}
                  fixedPrice={cart.price.normalPrice - cart.price.discountPrice}
                  qty={cart.qty}
                  onMinusQty={() => onMinusQtyCartHandler(cart.id)}
                  onPlusQty={() => onPlusQtyCartHandler(cart.id)}
                  onDeleteCart={() => onDeleteCartHandler(cart.id)}
                />
              ))
            ) : (
              <div className="flex justify-center items-center h-full font-light">Your cart is empty</div>
            )}
          </div>
          <Ringkasan totalHarga={totalHarga} />
        </div>
      </div>
    </div>
  );
}
