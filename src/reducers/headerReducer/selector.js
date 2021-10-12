import { createSelector } from "reselect";

const headerDropHidden = (state) => state.headerReducer;

export const CartHiddenDrop = createSelector([headerDropHidden], (headers) => headers.cartHidden);

export const UserDropDownSelector = createSelector(
  [headerDropHidden],
  (headers) => headers.userDropDown
);