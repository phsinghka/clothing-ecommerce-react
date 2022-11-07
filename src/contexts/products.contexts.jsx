import { useState, createContext } from "react";
import SHOP_DATA from "../shop-data.json";

export const ProductsContext = createContext({
  productData: [],
  setProductData: () => null,
});

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState(SHOP_DATA);
  const value = { productData, setProductData };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
