import {
  ADD_ITEMS_TO_CART,
  REMOVE_CART_ITEMS,
  REDUCE_CART_ITEM,
  ADD_MORE_BUTTON,
  SUB_MORE_BUTTON,
  PLACE_ORDERS_SUCCESS,
  PLACE_ORDER_FAILS,
  CLEAR_CART_ITEMS
} from "./types";
import axios from "../../utils/Api";
import { tokenConfig } from "../tokenConfig";
import _ from "lodash";

export const addCartItems = (product, quantity) => {
  return {
    type: ADD_ITEMS_TO_CART,
    payload: {
      product: product,
      quantity: quantity,
    },
  };
};

export const removeCartItems = (id) => {
  return {
    type: REMOVE_CART_ITEMS,
    payload: {
      id: id,
    },
  };
};

export const clearCartItems  = () =>{
  return {
    type:CLEAR_CART_ITEMS}
}
export const reduceCartItem = (product, quantity) => {
  return {
    type: REDUCE_CART_ITEM,
    payload:{
      product: product,
      quantity: quantity
    }
  };
};


export const placeOrder = (items) => async (dispatch, getState) => {
  let totalPrice = 0;
  let productsArr = [];
  let quantitiesArr = [];

  _.forEach(items, (element) => {
    totalPrice += element.product.price * element.quantity;
    productsArr.push(element.product.item);
    console.log(productsArr);
    quantitiesArr.push(element.quantity);

    let updatedQuantity = element.product.stock_count - element.quantity;
    axios.put(`/api/product-items/${element.product.id}`, {
      category: element.product.category,
      item: element.product.item,
      price: element.product.price,
      stock_count: updatedQuantity,
    
    });
  });

  try {
    const { data } = await axios.post(
      "/api/orders",
      {
        products: productsArr,
        quantities: quantitiesArr,
        total_price: totalPrice.toFixed(2),
        ordered: true,
      },
      tokenConfig(getState)
    );
    dispatch({ type: PLACE_ORDERS_SUCCESS, payload: data });
    dispatch(clearCartItems())
  } catch (error) {
    dispatch({ type: PLACE_ORDER_FAILS });
  }
};


