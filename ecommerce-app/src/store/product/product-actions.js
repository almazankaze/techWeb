import { PRODUCT_ACTIONS } from "./product-types";
import { createAction } from "../../utils/reducer/reducer";
import { getProductsAndDocuments } from "../../utils/firebase/firebase";

export const fetchProductsStart = () =>
  createAction(PRODUCT_ACTIONS.FETCH_PRODUCTS_START);

export const fetchProductsSuccess = (productsArray) =>
  createAction(PRODUCT_ACTIONS.FETCH_PRODUCTS_SUCCESS, productsArray);

export const fetchProductsFailure = (error) =>
  createAction(PRODUCT_ACTIONS.FETCH_PRODUCTS_FAILED, error);

export const fetchProductsStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchProductsStart());
    try {
      const productsArray = await getProductsAndDocuments();

      dispatch(fetchProductsSuccess(productsArray));
    } catch (error) {
      dispatch(fetchProductsFailure(error));
    }
  };
};
