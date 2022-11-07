import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contexts";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { removeItemsfromCart, addItemstoCart, clearItemFromCart } =
    useContext(CartContext);
  const { id, name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemsfromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemstoCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>

      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
