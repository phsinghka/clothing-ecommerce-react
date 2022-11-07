import { useContext } from "react";

import { CartContext } from "../../contexts/cart.contexts";

import "./product-cart.styles.scss";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { addItemstoCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const handleAddToCart = () => addItemstoCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
