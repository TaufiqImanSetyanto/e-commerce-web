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
  }, []);
  return <ProductContext.Provider value={{ products, isLoading, detail, setDetail, carts, setCarts, totalHarga, setTotalHarga }}>{children}</ProductContext.Provider>;
};
