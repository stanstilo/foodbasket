import React, { Component, useState, useEffect } from "react";
import { connect,useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Shipping from "./Shipping";
import Billing from "./Billing";
import Login from "./Login";
import OrderPreview from "./OrderPreview";
import "./styles/checkoutContainer.scss";
import { placeOrder } from "../../actions/cart/actions";
import {fetchAddressBook,fetchShippingAddress} from "../../actions/auth/actions";
import Stepper from "./Stepper";
import { withRouter } from "react-router-dom";


const CheckoutForm = ({ currentUser, cartItems, }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAddressBook());
    dispatch(fetchShippingAddress());
  }, []);
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
  };
  const previousPage = () => {
    setPage(page - 1);
  };

  const showStep = () => {
    switch (page) {
      case 1:
        return <Billing nextPage={nextPage} previousPage={previousPage} />;
      case 2:
        return (
          <Shipping
            nextPage={nextPage}
            previousPage={previousPage}
          />
        );
      case 3:
        return (
          <OrderPreview nextPage={nextPage} previousPage={previousPage} cartItems={cartItems} />
        );

      default:
        return;
    }
  };

  return (
    <div className="checkout-page-container">
      <h1 className="checkout-title"> Checkout</h1>
      <div className="step-container">
        <Stepper page={page} currentUser={currentUser} />
        {currentUser ? showStep() : <Login nextPage={nextPage} />}
      </div>
    </div>
  );
};

CheckoutForm.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  cartItems: state.cartReducer,
  currentUser: state.authReducer.currentUser,
});

export default withRouter(connect(mapStateToProps, { placeOrder,fetchAddressBook,fetchShippingAddress })(CheckoutForm));
