import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart-selector";

import CartController from "../../components/cart/CartController";
import CartInfo from "../../components/cart/CartInfo";
import SectionHeader from "../../components/section-header/SectionHeader";
import "./cart.scss";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="container">
      <SectionHeader sectionTitle={"Shopping Cart"} />

      {cartItems.length === 0 ? (
        <div className="cart-empty-message">Cart is Empty</div>
      ) : (
        <div className="cart-grid-container">
          <CartController />
          <CartInfo />
        </div>
      )}
    </div>
  );
};

export default Cart;
