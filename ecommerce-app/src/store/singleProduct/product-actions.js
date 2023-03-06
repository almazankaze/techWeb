import { PRODUCT_ACTIONS } from "./product-types";
import { createAction } from "../../utils/reducer/reducer";
import { getProductAndDocument } from "../../utils/firebase/firebase";

export const fetchProductStart = () =>
  createAction(PRODUCT_ACTIONS.FETCH_PRODUCT_START);

export const fetchProductSuccess = (product) =>
  createAction(PRODUCT_ACTIONS.FETCH_PRODUCT_SUCCESS, product);

export const fetchProductFailure = (error) =>
  createAction(PRODUCT_ACTIONS.FETCH_PRODUCT_FAILED, error);

export const fetchProductStartAsync = (id) => {
  return async (dispatch) => {
    dispatch(fetchProductStart());
    try {
      const product = await getProductAndDocument(id);

      dispatch(fetchProductSuccess(product));
    } catch (error) {
      dispatch(fetchProductFailure(error));
    }
  };
};
