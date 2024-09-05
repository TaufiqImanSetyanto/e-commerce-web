import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [detail, setDetail] = useState([]);
  const [carts, setCarts] = useState([]);
  const [totalHarga, setTotalHarga] = useState(0);
  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:4000/allproducts");
      const products = await response.json();
      setProducts(products);
      setIsLoading(false);
    };
    getProduct();
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((res) => res.json())
        .then((data) => setCarts(data));
    }
  }, []);
  return <ProductContext.Provider value={{ products, isLoading, detail, setDetail, carts, setCarts, totalHarga, setTotalHarga }}>{children}</ProductContext.Provider>;
};
