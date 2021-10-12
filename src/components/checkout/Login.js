import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { login } from "../../actions/auth/actions";
import {
  authUserSelector,
  showMessageSelector,
  alertMessageSelector,
} from "../../reducers/authReducer/selector";
import PropTypes from "prop-types";
import { renderField, hiddenField, validate  } from "../auth/LoginValidation";

function LoginForm(props) {
  const onSubmit = (formValues) => {
    props.loginUser(formValues);
    // props.nextPage();
  };

  if (props.isAuthenticated) {
    return <Redirect to="/checkout" />;
  }
  const { pristine, submitting } = props;


  return (
    <>
    <div className="checkout-login-form">
      <p className="auth-title">Welcome back! Sign in to your account.</p>
      <p className="auth-signin-writeup">
        If you have shopped with us before, please enter your details in the boxes below. If you are
        a new customer, please proceed
        <br />
        to the Billing & Shipping section.
      </p>
      <form onSubmit={props.handleSubmit(onSubmit)}>
        <div className="form">
          <Field name="email" type="email" component={renderField} label="Email" />
          <Field name="password" type="password" component={renderField} label="Password" />
          <Field name="non_field_errors" type="hidden" component={hiddenField} />
        </div>
      <div className="rem-login">
        <div className="rem">
          <input type="checkbox" />
          <span>Remember me</span>
        </div>
        <div className="login-cart">
          <button id="login" disabled={pristine || submitting}>
            Login
          </button>
        </div>
      </div>
      </form>
    </div>
          <button id="to-cart" onClick={() => props.history.push('/my-cart/')}>Back to Cart</button>
          </>
  );
}
LoginForm.propTypes = {
  isAuthenticated: PropTypes.bool,
  loginUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  isAuthenticated: authUserSelector(state),
  showMessage: showMessageSelector(state),
  alertMessage: alertMessageSelector(state),
});

const loginForm = connect(mapStateToProps, { login })(LoginForm);

export default reduxForm({
  form: "loginForm",
  validate ,
})(loginForm);
