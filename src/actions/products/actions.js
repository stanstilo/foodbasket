import {
  FETCH_ALL_PRODUCT,
  FETCH_ALL_PRODUCT_FAILS,
  FETCH_ALL_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_DETAILS_SUCCESS,
  FETCH_SINGLE_PRODUCT_DETAILS,
  FETCH_SINGLE_PRODUCT_DETAILS_FAILS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ALL_ORDERS,
  FETCH_ORDERS_FAILS,
  UPDATE_PRODUCT_FAILS,
  UPDATE_PRODUCT_SUCCESS
} from "./types";
import axios from "../../utils/Api";
import { tokenConfig } from "../tokenConfig";

// DISPATCH PRODUCT_LOADING
export const loadAllProduct = () => (dispatch) => dispatch({ type: FETCH_ALL_PRODUCT });

// FETCH PRODUCTs
export const fetchAllProducts = () => async (dispatch) => {
   dispatch(loadAllProduct());
  try {
    const res = await axios.get("store/products");
    dispatch({ type: FETCH_ALL_PRODUCT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ALL_PRODUCT_FAILS, payload: error.message });
  }
};

// FETCH PRODUCTs
export const updateProducts = () => async (dispatch) => {
  try {
    const res = await axios.patch("store/products");
    dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: UPDATE_PRODUCT_FAILS, payload: error.message });
  }
};

// fetch single product load
export const loadSingleProduct = () => {
  return {
    type: FETCH_SINGLE_PRODUCT_DETAILS,
  };
};

export const fetchSingleProduct = (productId) => async (dispatch) => {
  try {
    const res = await axios.get(`store/products/${productId}/details`);
    dispatch({
      type: FETCH_SINGLE_PRODUCT_DETAILS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: FETCH_SINGLE_PRODUCT_DETAILS_FAILS, payload: error.message });
  }
};



export const loadAllOrder = () => (dispatch) => dispatch({ type: FETCH_ALL_ORDERS });

// FETCH PRODUCTs
export const fetchOrders = () => async (dispatch, getState) => {
  dispatch(loadAllOrder());
  try {
    const res = await axios.get("store/orders", tokenConfig(getState));
    dispatch({ type: FETCH_ORDERS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ORDERS_FAILS, payload: error.message });
  }
};