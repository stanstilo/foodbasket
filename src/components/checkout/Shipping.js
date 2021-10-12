import React, { useState,useEffect } from "react";
import { connect, useDispatch,useSelector } from "react-redux";
import PropTypes from "prop-types";
import { reduxForm,Field } from "redux-form";
import { updateShippingAddress, singleShippingAddress } from "../../actions/auth/actions";
import { validateShipping, renderField } from "../dashboard/address/validateForm";


const Shipping = ({ nextPage, previousPage, history, handleSubmit, pristine, submitting, }) => {
  const reduxState = useSelector((state) => state.authReducer);
  const id = reduxState.shippingAddress.map(_id=> _id.id);
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(singleShippingAddress(`${id}`))
  }, [])
 const [checked, setChecked] = useState(false);

 const updateShipping = (formValues) => {
  const _id = id
  dispatch(updateShippingAddress(id,formValues));
  nextPage()
};
  const ToggleSwitch = ({ checked, onChange, id }) => (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        id={id}
      />
    </div>
  );
  return (
    <>
        <form className="checkout-shipping-form" onSubmit={handleSubmit(updateShipping)}>
          <div className="form-body">
            <div className="checkout-shipping-header">
              <p className="shipping-header">Shipping Details</p>
            </div>
            <div className="shipping-show">
              <ToggleSwitch checked={checked} id="form" onChange={setChecked} />
              <span className="shipping-msg">Ship to a different address?</span>
            </div>
            {checked ? (
              <>
                <div className="user-names">
                <Field type="text" name="first_name" component={renderField} className="input-first" />
                <Field type="text" name="last_name" component={renderField} className="input-last" />
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
                <div className="state-label"> State * </div>
                <Field className="select-state" name="state_name" component="select">
          <option> Select State</option>
          <option value="lagos"> Lagos </option>
          <option value="ogun"> Ogun </option>
          <option value="oyo"> Oyo </option>
          <option value="kebbi"> Kebbi </option>
        </Field>
              </>
            ) : null}
            <input
              className="ordernote"
              type="textarea"
              placeholder="Order Notes:Notes about your order e.g. special notes for delivery"
              component="textarea"
              name="note"
            />
          </div>
        <div className="next-prev-cart">
          <button className="back-to-cart-btn" onClick={() => history.push("/my-cart")}>
            Back to cart
          </button>
          <div className="next-prev">
            <button className="prev-submit-btn" onClick={() => previousPage()}>
              Previous
            </button>
            <button
              className="next-submit-btn"
              type="submit"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
Shipping.propTypes = {
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { singleAddress} = state.authReducer;
  return {
      initialValues: singleAddress,
  }
}

export default connect(
    mapStateToProps,
    {updateShippingAddress, singleShippingAddress }
)(reduxForm({ form: "shipping", enableReinitialize: true ,validateShipping})(Shipping));