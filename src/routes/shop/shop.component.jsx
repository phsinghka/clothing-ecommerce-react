import { useContext } from "react";
import { ProductContext } from "../../contexts/products.contexts";

const Shop = () => {
  const { productData } = useContext(ProductContext);
  return (
    <div>
      {productData.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
