import { PRODUCT_ACTIONS } from "./product-types";

export const SINGLE_PRODUCT_INITIAL_STATE = {
  product: [],
  isLoading: false,
  error: null,
};

export const singleProductReducer = (
  state = SINGLE_PRODUCT_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_ACTIONS.FETCH_PRODUCT_START:
      return {
        ...state,
        isLoading: true,
      };

    case PRODUCT_ACTIONS.FETCH_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, product: payload };
    case PRODUCT_ACTIONS.FETCH_PRODUCT_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
