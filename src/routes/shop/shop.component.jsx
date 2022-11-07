import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.contexts";
import ProductCard from "../../components/product-cart/product-cart.component";
import "./shop.styles.scss";

const Shop = () => {
  const { productData } = useContext(ProductsContext);
  return (
    <div className="product-container">
      {productData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
