import React from "react";
import './styles/trackOrders.scss'

export default function () {
  return (
    <div className="track-orders">
      <h2 style={{textAlign:"center", color:"black", fontWeight:"500"}}>Track Your Order</h2>
      <div>
        <p className='track-order-message'>
          To track your order please enter your Order ID in the box below and press the "Track"
          button. This was given to you on your receipt and in the confirmation email you should
          have received.
        </p>
      </div>
      <form>
        <div className="track-order-labels">
            <label>Order ID *</label>
          <label id="track-order-email">Billing Email *</label>
        </div>
        <div className="track-order-input">
          <input type="text" />
          <input type="text" />
        </div>
        <div className='track-order-button'>
            <button >Track</button>
        </div>
      </form>
    </div>
  );
}
