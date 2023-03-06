import { createSelector } from "reselect";

const selectProductReducer = (state) => state.singleProduct;

export const selectProduct = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice.product
);

export const selectProductMap = createSelector(
  [selectProduct],
  (productSlice) => productSlice
);

export const selectIsLoading = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice.isLoading
);
