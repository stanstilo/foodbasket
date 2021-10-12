import React from 'react'



 const CartProductItem = ({ cartitem, handleRemoveItem }) => {
   const { item, price, image} = cartitem.product;
    return (
      <div className="cart-item">
        <img src={image} alt="item" className='imgproduct'/>
        <div className="item-details">
          <span className="cart-name">{item}</span>
          <span className="cart-price">
            {cartitem.quantity} x ₦{price}
          </span>
        </div>
      <span className='rm-cart-btn' onClick={(e) => handleRemoveItem(e,cartitem)}>&#10005;</span>
      </div>
    );
  };
  export default CartProductItem