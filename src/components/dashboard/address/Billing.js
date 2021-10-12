import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { saveBillingAddress } from "../../../actions/auth/actions";
import { Field, reduxForm } from "redux-form";
import { validateBilling, renderField } from "./validateForm";

const Billing = ({history, handleSubmit, pristine, submitting }) => {
  const reduxState = useSelector((state) => state.authReducer);
  const user = reduxState.currentUser.email;
  const dispatch = useDispatch();

  const Submit = (formValues) => {
      dispatch(saveBillingAddress(formValues));
      history.push('/my-account/address')
    }

  return (
    <form className="billing-form" onSubmit={handleSubmit(Submit)}>
      <div className="form-body">
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
        <button className="next-submit-btn" type="submit" disabled={pristine || submitting}>
          Save Address
        </button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "billing", validateBilling, })(Billing);
