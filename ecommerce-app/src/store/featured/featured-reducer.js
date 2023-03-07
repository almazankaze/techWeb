import { FEATURED_ACTIONS } from "./featured-types";

export const FEATURED_INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: null,
};

export const featuredReducer = (
  state = FEATURED_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case FEATURED_ACTIONS.FETCH_FEATURED_START:
      return {
        ...state,
        isLoading: true,
      };

    case FEATURED_ACTIONS.FETCH_FEATURED_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case FEATURED_ACTIONS.FETCH_FEATURED_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
