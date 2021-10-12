import { createSelector } from "reselect";


const selectProducts = (state) => state.allProductReducer;


export const AllProductSelector = createSelector([selectProducts], products => products.allProduct)
export const singleProductSelector = createSelector([selectProducts], products => products.singleProduct)
export const isLoadingSelector = createSelector([selectProducts], products => products.isLoading)