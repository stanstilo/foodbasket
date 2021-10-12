import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { removeCartItems, addCartItems, reduceCartItem } from "../../actions/cart/actions";

const BasketHub = ({ cartItems,subtotal, removeCartItems, addCartItems, reduceCartItem }) => {
  return (
    <>
      <div className="baskethub">
        {cartItems.map((cartbasket) => {
          return (
            <div className="cartbasket-items" key={cartbasket.id}>
              <img src={cartbasket.image} alt="cart-items" className="cartbasket-img" />
              <div className="cartbasket-details">
                <p className="cartbasket-name">
                  {cartbasket.name}
                  <span className="cartbasket-remove">
                    <FontAwesomeIcon icon="trash-alt" onClick={() => removeCartItems(cartbasket)} />
                  </span>
                </p>
                <p>Price: ₦{cartbasket.price}</p>
                <div className="cartbasket-addon">
                  <button className="cartbasket-plus" onClick={() => reduceCartItem(cartbasket)}>
                    -
                  </button>
                  <input className="cartbasket-qty" placeholder={cartbasket.quantity} />
                  <button className="cartbasket-plus" onClick={() => addCartItems(cartbasket)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {cartItems.length ? (
        <div>
          <p style={{ display: "flex", marginLeft: "2rem" }}>
            Subtotal: <span style={{ marginLeft: "8rem" }}>₦{subtotal}.00</span>
          </p>
          <p style={{ display: "flex", marginLeft: "2rem", marginTop: ".1rem" }}>
            Shipping: <span style={{ marginLeft: "7.8rem" }}>₦500.00</span>
          </p>
          <p style={{ display: "flex", marginLeft: "2rem", marginTop: ".1rem" }}>
            Total: <span style={{ marginLeft: "9.5rem" }}>₦{subtotal +500}.00</span>
          </p>
          <div className="cartbasket-checkout-btn">
            <button>Procceed to Checkout</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cartReducer.length,
  subtotal: state.cartReducer
});

export default connect(mapStateToProps, { removeCartItems, addCartItems, reduceCartItem })(
  BasketHub
);
