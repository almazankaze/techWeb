import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart-selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

import "./cart.scss";

const CartInfo = () => {
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="cart-checkout-info">
      <h3>Summary of your purchase</h3>
      <div className="amounts-container">
        <div className="amount">
          <p>Subtotal:</p>
          <p>${cartTotal}</p>
        </div>
        <div className="amount">
          <p>Taxes:</p>
          <p>$4.00</p>
        </div>
        <div className="amount">
          <p>Shipping:</p>
          <p>$0.00</p>
        </div>
      </div>
      <hr className="cart-checkout-divider"></hr>
      <div className="total-container">
        <h3>Total</h3>
        <h3>${cartTotal}</h3>
      </div>

      <Button type="button" buttonType={BUTTON_TYPE_CLASSES.cart}>
        Go to Checkout
      </Button>
    </div>
  );
};

export default CartInfo;
