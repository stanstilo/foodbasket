import axiosInstance from "../../utils/Api";
import { stopSubmit, reset } from "redux-form";

import {
  FETCH_BILLING_ADDRESS_FAILS,
  FETCH_BILLING_ADDRESS_SUCCESS,
  CREATE_BILLING_ADDRESS_FAILS,
  CREATE_BILLING_ADDRESS_SUCCESS,
  UPDATE_BILLING_ADDRESS_FAILS,
  UPDATE_BILLING_ADDRESS_SUCCESS,
  GET_SINGLE_BILLING_ADDRESS_SUCCESS,
  GET_SINGLE_BILLING_ADDRESS_FAILS,
  CREATE_SHIPPING_ADDRESS_SUCCESS,
  CREATE_SHIPPING_ADDRESS_FAILS,
  UPDATE_SHIPPING_ADDRESS_SUCCESS,
  UPDATE_SHIPPING_ADDRESS_FAILS,
  FETCH_SHIPPING_ADDRESS_FAILS,
  FETCH_SHIPPING_ADDRESS_SUCCESS,
  GET_SINGLE_SHIPPING_ADDRESS_SUCCESS,
  GET_SINGLE_SHIPPING_ADDRESS_FAILS,
  SHOW_FORM,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  LOGOUT,
  SHOW_ERROR_MESSAGE,
  SHOW_SUCCESS_MESSAGE,
} from "./ActionTypes";
import { tokenConfig } from "../tokenConfig";
import { showAuthMessage, showErrorMessage } from "../common/action";

export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axiosInstance.get("auth/users/me/", config);

      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: USER_LOADED_FAIL,
      });
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    });
  }
};

export const checkAuthenticated = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const body = { token: localStorage.getItem("access") };

    try {
      const res = await axiosInstance.post("auth/jwt/verify/", body);

      if (res.data.code !== "token_not_valid") {
        dispatch({
          type: AUTHENTICATED_SUCCESS,
        });
      } else {
        dispatch({
          type: AUTHENTICATED_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
    }
  } else {
    dispatch({
      type: AUTHENTICATED_FAIL,
    });
  }
};

// login
export const login = ({ email, password }) => async (dispatch) => {
  const body = { email, password };
  try {
    const res = await axiosInstance.post("auth/jwt/create/", body);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(showAuthMessage("You've successfully logged in"));
    dispatch(stopSubmit("loginForm"));
    dispatch(reset("loginForm"));
    dispatch(load_user());
  } catch (err) {
    dispatch({ type: LOGIN_FAIL, payload: err.message });
    dispatch(stopSubmit("loginForm"));
    dispatch(reset("loginForm"));
    if (err.response.data) {
      err.response.data.email &&
        err.response.data.email.map((err) => {
          return dispatch(showErrorMessage(err, `Email: ${err}`));
        });
      err.response.data.password &&
        err.response.data.password.map((err) => {
          return dispatch(showErrorMessage(`Password: ${err}`));
        });
      err.response.data.detail && dispatch(showErrorMessage(`Detail: ${err.response.data.detail}`));
    }
  }
};

// signup
export const signup = ({ full_name, mobile, email, password }) => async (dispatch) => {
  const body = { full_name, mobile, email, password };

  try {
    const res = await axiosInstance.post("auth/users/", body);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
    dispatch(stopSubmit("SignupForm"));
    dispatch(reset("SignupForm"));
    dispatch(showAuthMessage("Account Created: Please check your email to verify your account."));
  } catch (err) {
    dispatch({ type: SIGNUP_FAIL });
    dispatch(stopSubmit("SignupForm"));
    dispatch(reset("SignupForm"));
    if (err.response.data) {
      err.response.data.email &&
        err.response.data.email.map((err) => {
          return dispatch(showErrorMessage(`Email: ${err}`));
        });
      err.response.data.password &&
        err.response.data.password.map((err) => {
          return dispatch(showErrorMessage(`Password: ${err}`));
        });
      err.response.data.first_name &&
        err.response.data.full_name.map((err) => {
          return dispatch(showErrorMessage(`Full Name: ${err}`));
        });
      err.response.data.last_name &&
        err.response.data.mobile.map((err) => {
          return dispatch(showErrorMessage(`Mobile Number: ${err}`));
        });
    }
  }
};

export const verify = ({ uid, token }) => async (dispatch) => {
  const body = { uid, token };
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    await axiosInstance.post("auth/users/activation/", body, config);
    dispatch({
      type: ACTIVATION_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: ACTIVATION_FAIL,
    });
  }
};

export const reset_password = (email) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email });

  try {
    await axiosInstance.post(
      `${process.env.REACT_APP_API_URL}/auth/users/reset_password/`,
      body,
      config
    );
    dispatch({
      type: PASSWORD_RESET_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: PASSWORD_RESET_FAIL,
    });
  }
};

export const reset_password_confirm = (uid, token, new_password, re_new_password) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ uid, token, new_password, re_new_password });

  try {
    await axiosInstance.post(
      `${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`,
      body,
      config
    );

    dispatch({
      type: PASSWORD_RESET_CONFIRM_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: PASSWORD_RESET_CONFIRM_FAIL,
    });
  }
};

// logout
export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
    messageInfo: "Account Logged out",
  });
  dispatch({
    type: SHOW_SUCCESS_MESSAGE,
    payload: "Account Logged out",
  });
};

//billing address create
export const saveBillingAddress = (address) => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.post("store/billing", { ...address }, tokenConfig(getState));
    dispatch({ type: CREATE_BILLING_ADDRESS_SUCCESS, payload: res.data });
    dispatch(reset("billing"));
  } catch (error) {
    dispatch({ type: CREATE_BILLING_ADDRESS_FAILS, payload: error.message });
  }
};

//get single billing address
export const getSingleBillngAddress = (id) => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.get(`store/billing/${id}`, tokenConfig(getState));
    dispatch({ type: GET_SINGLE_BILLING_ADDRESS_SUCCESS, payload: { id, res } });
  } catch (error) {
    dispatch({ type: GET_SINGLE_BILLING_ADDRESS_FAILS, payload: error.message });
  }
};

//update billing address
export const updateBillingAddress = (id, address) => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.patch(
      `store/billing/${id}`,
      { ...address },
      tokenConfig(getState)
    );
    dispatch({ type: UPDATE_BILLING_ADDRESS_SUCCESS, payload: { id, res } });
  } catch (error) {
    dispatch({ type: UPDATE_BILLING_ADDRESS_FAILS, payload: error.message });
  }
};

// fetch all billing address
export const fetchAddressBook = () => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.get("store/billing", tokenConfig(getState));
    dispatch({ type: FETCH_BILLING_ADDRESS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_BILLING_ADDRESS_FAILS, payload: error.message });
  }
};

// create shipping address
export const createShippingAddress = (address) => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.post("store/shipping", address, tokenConfig(getState));
    dispatch({ type: CREATE_SHIPPING_ADDRESS_SUCCESS, payload: res.data });
    dispatch(reset("shipping"));
  } catch (error) {
    dispatch({ type: CREATE_SHIPPING_ADDRESS_FAILS, payload: error.message });
  }
};

//update shipping address
export const updateShippingAddress = (id, address) => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.patch(
      `store/shipping/${id}`,
      { ...address },
      tokenConfig(getState)
    );
    dispatch({ type: UPDATE_SHIPPING_ADDRESS_SUCCESS, payload: { id, address } });
  } catch (error) {
    dispatch({ type: UPDATE_SHIPPING_ADDRESS_FAILS, payload: error.message });
  }
};

//get shipping address
export const fetchShippingAddress = () => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.get("store/shipping", tokenConfig(getState));
    dispatch({ type: FETCH_SHIPPING_ADDRESS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_SHIPPING_ADDRESS_FAILS, payload: error.message });
  }
};

//get single shipping address
export const singleShippingAddress = (id) => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.get(`store/shipping/${id}`, tokenConfig(getState));
    dispatch({ type: GET_SINGLE_SHIPPING_ADDRESS_SUCCESS, payload: { id, res } });
  } catch (error) {
    dispatch({ type: GET_SINGLE_SHIPPING_ADDRESS_FAILS, payload: error.message });
  }
};

export const toggleshipingForm = () => {
  return {
    type: SHOW_FORM,
  };
};
