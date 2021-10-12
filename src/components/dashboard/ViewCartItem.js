import React from "react";
import { connect } from "react-redux";
import { removeCartItems, addCartItems, reduceCartItem } from "../../actions/cart/actions";

const ViewCartItem = ({ cartItem, removeCartItems,addCartItems,reduceCartItem }) => {
  const { item, image_url, price } = cartItem.product;
  const total = cartItem.quantity * price;
  return (
    <div className="viewcart-item">
      <div className="image-container">
        <img src={image_url} alt="product-img"/>
      </div>
      <span className="name">{item}</span>
      <span className="price">₦{price}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => reduceCartItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={() => cartItem.quantity +1}>&#10095;</div>
      </span>
      <span className="price">₦{total.toFixed(2)}</span>
      <span className="remove-button" onClick={() => removeCartItems(cartItem.id)}>
        &#10005;
      </span>
    </div>
  );
};



export default connect(null, {removeCartItems,addCartItems,reduceCartItem})(ViewCartItem);
