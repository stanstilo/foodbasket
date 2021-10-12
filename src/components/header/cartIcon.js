import React from "react";
import { connect } from "react-redux";
// import Shopcart from "../../assets/images/Shopcart.png";
import _ from "lodash";
import {AiOutlineShoppingCart} from 'react-icons/ai'


const Cart = ({handleCartHidden, ItemCount, cartItems }) => {
  let subtotal =0;
   _.map(cartItems,(cartitem)=>{
     subtotal += cartitem.product.price * cartitem.quantity
   })
  return (
    <div className='cart-container' onClick={handleCartHidden}>
      <AiOutlineShoppingCart className='cart-icon' />
      <div>
        <div className="amount">{(subtotal).toFixed(2)}</div>
        <div className="count-product">{ItemCount}</div>
        </div>
    </div>
  );
};


const mapStateToProps = state => ({
  ItemCount: state.cartReducer.length,
  cartItems: state.cartReducer
});

export default connect(mapStateToProps)(Cart);
