import { createSelector } from "reselect";

const selectProductReducer = (state) => state.product;

export const selectProducts = createSelector(
  [selectProductReducer],
  (productsSlice) => productsSlice.products
);

export const selectProductsMap = createSelector(
  [selectProducts],
  (productsSlice) => productsSlice
);

export const selectIsLoading = createSelector(
  [selectProductReducer],
  (productsSlice) => productsSlice.isLoading
);
