import { combineReducers } from "redux";

import { userReducer } from "./user/user-reducer";
import { productReducer } from "./products/product-reducer.js";
import { featuredReducer } from "./featured/featured-reducer.js";
import { NavReducer } from "./navbar/navbar-reducer.js";
import { cartReducer } from "./cart/cart-reducer";
import { singleProductReducer } from "./singleProduct/product-reducer.js";

export const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  featured: featuredReducer,
  navbar: NavReducer,
  cart: cartReducer,
  singleProduct: singleProductReducer,
});
