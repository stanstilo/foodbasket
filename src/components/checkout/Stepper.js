import React from "react";

export default function Stepper({ page, currentUser }) {
  return (
    <div className="checkout-scroll">
      {currentUser ? (
        <div className="currentUser">
          <div className={page === 1 ? "inflow-scroll-active" : "inflow-scroll"}></div>

          <div className={page === 1 ? "scroll-1-active" : "scroll-1"}>
            <p className={page === 1 ? "scroll-1-writeup-active" : "scroll-1-writeup"}>1</p>
            <p className={page === 1 ? "billing-active" : "billing"}>Billing</p>
          </div>

          <div className={page === 2 ? "link-scroll-1-active" : "link-scroll-1"}></div>

          <div className={page === 2 ? "scroll-2-active" : "scroll-2"}>
            <p className={page === 2 ? "scroll-2-writeup-active" : "scroll-2-writeup"}>2</p>
            <p className={page === 2 ? "shipping-active" : "shipping"}>Shipping</p>
          </div>

          <div className={page === 3 ? "link-scroll-2-active" : "link-scroll-2"}></div>

          <div className={page === 3 ? "scroll-3-active" : "scroll-3"}>
            <p className={page === 3 ? "scroll-3-writeup-active" : "scroll-3-writeup"}>3</p>
            <p className={page === 3 ? "order-payment-active" : "order-payment"}>Order & Payment</p>
          </div>
          <div className={page === 3 ? "outflow-scroll-active" : "outflow-scroll"}> </div>
        </div>
      ) : (
        <div className="currentUser">
          <div className="inflow-scroll-active"></div>

          <div className={page===1 ?"scroll-login-active" : null}>
            <p className="scroll-login-writeup-active">1</p>
            <p className="login">Login</p>
          </div>

          <div className="link-scroll-login"></div>

          <div className="scroll-1">
            <p className="scroll-1-writeup">2</p>
            <p className="billing">Billing</p>
          </div>

          <div className="link-scroll-1"></div>

          <div className="scroll-2">
            <p className="scroll-2-writeup">3</p>
            <p className="shipping">Shipping</p>
          </div>

          <div className="link-scroll-2"></div>

          <div className="scroll-3">
            <p className="scroll-3-writeup">4</p>
            <p className="order-payment">Order & Payment</p>
          </div>
          <div className="outflow-scroll"> </div>
          </div>
      )}
    </div>
  );
}
