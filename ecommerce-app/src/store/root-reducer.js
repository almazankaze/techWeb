import { combineReducers } from "redux";

import { userReducer } from "./user/user-reducer";
import { productReducer } from "./product/product-reducer.js";
import { NavReducer } from "./navbar/navbar-reducer.js";

export const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  navbar: NavReducer,
});
