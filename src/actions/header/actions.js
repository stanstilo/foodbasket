import { TOGGLE_CART_HIDDEN, TOGGLE_USER_DROP_DOWN_HIDDEN } from "./types";

export const toggleCartHidden = () => {
  return {
    type: TOGGLE_CART_HIDDEN,
  };
};

export const toggleUserDropHidden = () => {
  return {
    type: TOGGLE_USER_DROP_DOWN_HIDDEN,
  };
};
