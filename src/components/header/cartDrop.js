import React from "react";
import { connect } from "react-redux";
import CartProductItem from "./cartProduct";
import "./styles/cartdrop-item.scss";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../actions/header/actions";
import { removeCartItems,clearCartItems } from "../../actions/cart/actions";
import _ from "lodash";

const CartDropDown = ({ cartItems, removeCartItems, handleCartHidden, history,clearCartItems  }) => {

const handleRemoveItem = (e, item) =>{
    e.stopPropagation()
    removeCartItems(item.id)
}
  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <>
        <button onClick={()=>clearCartItems()} className="clear-cart">Clear All</button>
          <div className="cart-items">
            {_.map(cartItems,(cartitem,idx) => (
              <CartProductItem
                key={idx}
                cartitem={cartitem}
                handleRemoveItem={handleRemoveItem}
              />
            ))}
          </div>
          <div className="cart-buttons">
            <button
              className="view_cart"
              onClick={() => {
                history.push("/my-cart");
                handleCartHidden();
              }}
            >
              View Cart
            </button>
            <button
              className="checkout"
              onClick={() => {
                history.push("/checkout");
                handleCartHidden();
              }}
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="empty-message">Your cart is empty</div>
          <button
            className="go_shop_btn"
            onClick={() => {
              history.push("/shop");
              handleCartHidden();
            }}
          >
            Go Shop
          </button>
        </>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: state.cartReducer
});
export default withRouter(
  connect(mapStateToProps, {removeCartItems,clearCartItems  })(CartDropDown)
);
