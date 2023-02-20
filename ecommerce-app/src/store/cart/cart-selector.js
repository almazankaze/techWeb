import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => {
    if (cartItem.dPrice === "")
      return total + cartItem.quantity * cartItem.oPrice;
    else return total + cartItem.quantity * cartItem.dPrice;
  }, 0)
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
