import * as actionType from "./ActionTypes";
import axiosInstance from "utils/Api";

export const showAuthMessage = (message) => (dispatch) => {
  dispatch({
    type: actionType.SHOW_SUCCESS_MESSAGE,
    payload: message,
  });
  setTimeout(
    () =>
      dispatch({
        type: actionType.HIDE_MESSAGE,
      }),
    5000
  );
};
export const showErrorMessage = (message) => (dispatch) => {
  dispatch({
    type: actionType.SHOW_ERROR_MESSAGE,
    payload: message,
  });
  setTimeout(
    () =>
      dispatch({
        type: actionType.HIDE_MESSAGE,
      }),
    5000
  );
};


//   export const verifyPaystack = (refcode) => async(dispatch) => {
//     try{
//       const res= await axiosInstance.get('/verify_transaction/?refcode='+ parseInt(refcode))
//           dispatch({
//             type:actionType.VERIFY_PAYSTACK,
//             payload:res
//           })
//           console.log(res)
//     }catch(error){
//       console.log(error)
//     }

//   }
