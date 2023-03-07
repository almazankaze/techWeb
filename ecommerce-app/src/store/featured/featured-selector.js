import { createSelector } from "reselect";

const selectFeaturedReducer = (state) => state.featured;

export const selectFeatured = createSelector(
  [selectFeaturedReducer],
  (featuredSlice) => featuredSlice.products
);

export const selectFeaturedMap = createSelector(
  [selectFeatured],
  (featuredSlice) => featuredSlice
);

export const featuredIsLoading = createSelector(
  [selectFeaturedReducer],
  (featuredSlice) => featuredSlice.isLoading
);
