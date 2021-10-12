import React, { Component } from "react";
import { useDispatch, connect } from "react-redux";
import { createShippingAddress,fetchShippingAddress} from "../../../actions/auth/actions";
import { Field, reduxForm } from "redux-form";
import { validateShipping, renderField } from "./validateForm";


const Shipping =({history, handleSubmit, pristine, submitting }) => {
 const dispatch = useDispatch();
  const Submit =(formValues) =>{
    dispatch(createShippingAddress(formValues));
    history.push('/my-account/address')
  }

    return (
      <form className="billing-form" onSubmit={handleSubmit(Submit)}>
        <div className="form-body">
          <div className="label">
            <label>First name *</label>
            <label id="lastname">Last name *</label>
          </div>
          <div className="user-names">
            <Field type="text" name="first_name" component={renderField} className="input-first" />
            <Field type="text" name="last_name" component={renderField} className="input-last" />
          </div>

          <div className="label">
            <label>Country / Region *</label>
          </div>
          <div className="label">
            <label>Nigeria</label>
          </div>

          <div className="address">
            <label className="label"> State address * </label>
            <Field
              type="text"
              placeholder="House number and Street name"
              component={renderField}
              className="input-address"
              name="street_address"
            />
          </div>
          <div className="address">
            <label className="label"> Town / City * </label>
            <Field type="text" component={renderField} className="input-address" name="city_name" />
          </div>
          <div className="label">
            <label>State / County *</label>
          </div>
          <Field className="select-state" name="state_name" component="select">
            <option> Select State</option>
            <option value="lagos"> Lagos </option>
            <option value="ogun"> Ogun </option>
            <option value="oyo"> Oyo </option>
            <option value="kebbi"> Kebbi </option>
          </Field>

          <div className="next-prev">
            <button type="submit" className="back-to-cart-btn" disabled={pristine || submitting}>
              Save change
            </button>
          </div>
        </div>
      </form>
    );
  }

  
  
  
  export default reduxForm({ form: "shipping", validateShipping})(Shipping);

