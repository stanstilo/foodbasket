import React from "react";
import { connect } from "react-redux";
import { placeOrder, removeCartItems } from "../../actions/cart/actions";
import  _ from "lodash";



const OrderPreview = ({cartItems, placeOrder,nextPage, previousPage, history}) => {
  let subtotal = 0;
  let orders = _.map(cartItems, (cartItem) => {
    subtotal += cartItem.product.price * cartItem.quantity
   return <ul key={cartItem.id} className="order-details">
      <div className="order-product-details">
        <li>
          <p>{cartItem.quantity}</p>
        </li>
        <p>x</p>
        <li>
          <p>{cartItem.product.item}</p>
        </li>
      </div>
      <br />
      <li className="order-subtotal-price">
        <p>{cartItem.product.price}</p>
      </li>
    </ul>;
    
  })
  return (
    <div className="orderpreview">
      <div className="preview">
      <div className="order-header">
        <p className="order-product">Product</p>
        <p className="order-subtotal">Subtotal</p>
      </div>
      {orders}
      <ul className="order-subtitle">
        <li className="order-subtext">Subtotal</li>
        <li className="order-subprice">₦{(subtotal).toFixed(2)}</li>
      </ul>
      <form>
      <ul className="order-shipping">
        <ul className="order-input">
          <li className="order-shipping-title">Shipping</li>
          <div className="order-flatrate">
            <input type="radio" name="pickup" value="1000" id="flaterate"/>
            <label htmlFor="flatrate">Flat Rate:</label>
            <span className="order-flatrate-amount">₦1,000</span>
          </div>
          <div className="order-store">
            <input type="radio" name="pickup" value="store-pickup" id="pickup"/>
            <label htmlFor="pickup">In Store Pickup:</label>
          </div>
        </ul>
      </ul>
      </form>
      <div className="order-total">
        <p>Total</p>
        <p className="amount-order">₦{(subtotal+1000).toFixed(2)}</p>
      </div>
                                                                                                                                                                                            
      <div className="order-payment-header">
        <h3 className="order-title-payment">Payment</h3>
        <p className="order-payment">Debit/Credit Cards</p>
        <p className="order-payment-mode">
          Make payment using your debit and credit cards
          <br />
          <input type="checkbox" />
          <span>Save to account</span>
        </p>
        <p className="order-note">
          Your personal data will be used to process your order, support your experience throughout
          this website, and for other purposes described in our privacy policy.
        </p>
      </div>
      <div className="order-approval">
        <input type="checkbox" />
        <p className="order-approval-note">
          I have read and agree to the website
          <span className="approval-note">terms and conditions *</span>
        </p>
      </div>
      <button onClick={() => {placeOrder(cartItems); history.push('/')}} className="order-payment-button">
        Pay now
      </button>
      {/* </form> */}
      </div>
      <div className="next-prev-cart">
          <button className="back-to-cart-btn" onClick={() => history.push("/my-cart")}>
            Back to cart
          </button>
          <div className="next-prev">
            <button className="prev-submit-btn" onClick={() => previousPage()}>
              Previous
            </button>
            <button className="next-submit-btn" onClick={() => nextPage()}>
              Next
            </button>
          </div>
        </div>
    </div>
  );
};

export default connect(null, { placeOrder, removeCartItems })(OrderPreview);
