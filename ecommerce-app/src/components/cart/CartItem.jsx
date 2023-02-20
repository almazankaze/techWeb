import { useDispatch, useSelector } from "react-redux";

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart-actions";
import { selectCartItems } from "../../store/cart/cart-selector";

import "./cart.scss";

const CartItem = ({ cartItem }) => {
  const { name, img, oPrice, dPrice, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className="cart-item-container">
      <div className="image-container">
        <img src={img} alt={name} />
        <span className="name"> {name} </span>
      </div>
      <span className="price">${dPrice ? dPrice : oPrice}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CartItem;
