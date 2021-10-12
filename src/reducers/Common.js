import {
   SHOW_SUCCESS_MESSAGE,
    HIDE_MESSAGE,
    SHOW_ERROR_MESSAGE
  } from "actions/common/ActionTypes";
  
  const initialState = {
    error: true,
    loginMessage: "",
    signupMessage: "",
    showMessage: false,
    loading: false
  };

  const common = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOW_SUCCESS_MESSAGE:
        return {
            ...state, showMessage: true, Message:payload, loading:false, error: false,
        }
        case SHOW_ERROR_MESSAGE:
        return {
            ...state, showMessage: true, Message:payload, loading:false, error: true,
        }
        case HIDE_MESSAGE:
        return {
            ...state, showMessage: false, Message: " ", loading:false
        }
    
        default:
            return state;
    }
  }

export default common;