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
  } from "../../actions/products/types";
  
  
  const INIT_STATE = {
    allProduct: [],
    isLoading: false,
    singleProduct: {},
    errors: {},
    address:[],
    myOrders:[],
    errorMessage:[]
  };
  
  
  
  export default (state = INIT_STATE, action) => {
  
    switch (action.type) {
        case FETCH_ALL_PRODUCT:
          return{
            ...state,
            isLoading: true
          }
        case FETCH_ALL_PRODUCT_SUCCESS:
          return{
            ...state,
            allProduct: action.payload,
            isLoading: false
          }
        case FETCH_SINGLE_PRODUCT_DETAILS:
        case FETCH_SINGLE_PRODUCT_DETAILS_SUCCESS:
          return{
            ...state, singleProduct: action.payload
          }
        case FETCH_ALL_PRODUCT_FAILS:
          return{
            ...state,  errors: action.payload, isLoading:true
          }
        case FETCH_SINGLE_PRODUCT_DETAILS_FAILS:
          return{
            ...state,  errors: action.payload
          } 
          // Orders
        case FETCH_ALL_ORDERS:
          return{
            ...state, isLoading: false
          }
        case FETCH_ORDERS_SUCCESS:
          return{
            ...state, myOrders: action.payload
          }
        case FETCH_ORDERS_FAILS:
          return{
            ...state, errorMessage: action.payload
          }
      default:
        return state;
    }
  };
  
