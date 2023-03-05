import { combineReducers } from "redux";

import { userReducer } from "./user/user-reducer";
import { productReducer } from "./products/product-reducer.js";
import { NavReducer } from "./navbar/navbar-reducer.js";
import { cartReducer } from "./cart/cart-reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  navbar: NavReducer,
  cart: cartReducer,
});
