import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart-selector";

import CartItem from "./CartItem";

import "./cart.scss";

const CartController = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <div className="header-block">
          <span>Product Name</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default CartController;
