import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductContextProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setProducts(products);
      setIsLoading(false);
    };
    getProduct();
  }, []);
  return(
    <ProductsContext.Provider value={{products,isLoading}}>
      {children}
    </ProductsContext.Provider>
  )
};
