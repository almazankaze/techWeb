import { PRODUCT_ACTIONS } from "./product-types";

export const PRODUCTS_INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: null,
};

export const productReducer = (state = PRODUCTS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_ACTIONS.FETCH_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      };

    case PRODUCT_ACTIONS.FETCH_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case PRODUCT_ACTIONS.FETCH_PRODUCTS_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
