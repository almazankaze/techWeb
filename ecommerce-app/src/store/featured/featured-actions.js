import { FEATURED_ACTIONS } from "./featured-types";
import { createAction } from "../../utils/reducer/reducer";
import { getFeaturedAndDocuments } from "../../utils/firebase/firebase";

export const fetchFeaturedStart = () =>
  createAction(FEATURED_ACTIONS.FETCH_FEATURED_START);

export const fetchFeaturedSuccess = (productsArray) =>
  createAction(FEATURED_ACTIONS.FETCH_FEATURED_SUCCESS, productsArray);

export const fetchFeaturedFailure = (error) =>
  createAction(FEATURED_ACTIONS.FETCH_FEATURED_FAILED, error);

export const fetchFeaturedStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchFeaturedStart());
    try {
      const productsArray = await getFeaturedAndDocuments();

      dispatch(fetchFeaturedSuccess(productsArray));
    } catch (error) {
      dispatch(fetchFeaturedFailure(error));
    }
  };
};
