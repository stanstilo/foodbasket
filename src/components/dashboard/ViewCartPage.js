import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/viewCart.scss";
import ViewCartItem from "./ViewCartItem";
import _ from "lodash";
import { clearCartItems } from "../../actions/cart/actions";

export const ViewCartPage = ({history }) => {
  const cartItems = useSelector(state=>state.cartReducer);
const dispatch = useDispatch()
  let subtotal = 0;
  return (
    <div className="view-container">
      <div className="viewcart-page">
        <div className="viewcart-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block"></div>
          <div className="header-block">
            <span> Unit Price</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Total</span>
          </div>
          <div className="header-block">
            <span></span>
          </div>
        </div>
        {_.map(cartItems, (cartItem, idx) => {
          subtotal += cartItem.product.price * cartItem.quantity;
          return <ViewCartItem cartItem={cartItem} key={idx} />;
        })}
        <div className="total">
          <span>Subtotal: ₦{subtotal} </span>
        </div>
        {cartItems.length >= 1 ? (
          <div className="buttons">
            <button className="clear-cart" onClick={() => dispatch(clearCartItems())}>
              Clear
            </button>
            <button className="checkout-btn" onClick={() => history.push("/checkout")}>
              Procced To CheckOut
            </button>
          </div>
        ) : null}
      </div>
      <div className="cart-total">
        <h3>Cart Totals</h3>
      </div>
    </div>
  );
};


export default ViewCartPage;
