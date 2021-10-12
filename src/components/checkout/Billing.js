import React, { useEffect,useState } from "react";
import { connect, useDispatch,useSelector } from "react-redux";
import { reduxForm,Field } from "redux-form";
import PropTypes from "prop-types";
import {getSingleBillngAddress, updateBillingAddress} from "../../actions/auth/actions";
import { validateBilling, renderField } from "../dashboard/address/validateForm";


function Billing({ nextPage, handleSubmit, pristine, submitting,singleAddress, history}) {
  const reduxState = useSelector((state) => state.authReducer);
  const user = reduxState.currentUser.email;
  const id = reduxState.billingAddress.map(_id=> _id.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleBillngAddress(`${id}`));
  }, []);
 
  const updateBilling = (formValues) => {
    const _id = id
    dispatch(updateBillingAddress(id,formValues));
    nextPage()
};

    return (
      <>
        <form className="checkout-billing-form" onSubmit={handleSubmit(updateBilling)}>
          <div className="form-body">
            <div className="checkout-billing-header">
              <p className="billing-header">Billing Details</p>
            </div>
            <div className="user-names">
            <Field
              type="text"
              name="first_name"
              component={renderField}
              placeholder="First Name"
              className="input-first"
            />
            <Field
              type="text"
              name="last_name"
              component={renderField}
              placeholder="Last Name"
              className="input-last"
            />
        </div>
        <div className="address">
          <label className="label"> Address * </label>
          <Field
            type="text"
            placeholder="House number and Street name"
            component={renderField}
            className="input-address"
            name="street_address"
          />
        </div>
        <div className="city-zip">
          <label className="label"> Town / City * </label>
          <div className="inputs">
            <Field
              className="city"
              type="text"
              placeholder="town/city"
              name="city_name"
              component={renderField}
            />
            <Field
              className="zip"
              type="text"
              placeholder="Postcode/Zip"
              component={renderField}
              name="zip"
            />
          </div>
        </div>
            <div className="state-label">
              <label> State * </label>
            </div>

            <Field className="select-state" name="state_name" component="select">
          <option> Select State</option>
          <option value="lagos"> Lagos </option>
          <option value="ogun"> Ogun </option>
          <option value="oyo"> Oyo </option>
          <option value="kebbi"> Kebbi </option>
        </Field>
        <div className="phone-email">
          <Field
            className="phone-input"
            type="text"
            placeholder="Phone Number"
            component={renderField}
            name="phone"
          />
          <Field
            className="email-input"
            type="text"
            placeholder={user}
            component={renderField}
            disabled
            name="none"
          />
        </div>
        <div className="store-title">
          <label> Hubmart Store Close You * </label>
        </div>
        <div className="store-close">
          <Field className="options" name="store_name" component="select">
            <option>Select Store</option>
            <option value="Ikeja"> Hubmart Store, Ikeja </option>
            <option value="Lekki"> Hubmart Store, Lekki </option>
            <option value="Ogba"> Hubmart Store, Ogba </option>
          </Field>
        </div>
          </div>
        <div className="next-prev">
          <button className="back-to-cart-btn" onClick={() => history.push("/my-cart")}>
            Back to cart
          </button>
          <button className="next-submit-btn" type="submit">
            Next
          </button>
        </div>
        </form>
      </>
    );
}
Billing.propTypes = {
  nextPage: PropTypes.func.isRequired,
  updateBilling: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { singleAddress} = state.authReducer;
  return {
      initialValues: singleAddress,
  }
}

export default connect(
    mapStateToProps,
    {getSingleBillngAddress, updateBillingAddress }
)(reduxForm({ form: "billing", enableReinitialize: true ,validateBilling})(Billing));
