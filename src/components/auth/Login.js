import React from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { login } from "../../actions/auth/actions";
import { renderField, validate } from "./LoginValidation";

let LoginForm = ({ pristine, submitting, handleSubmit }) => {
  const auth = useSelector((state) => state.authReducer);
  const { isAuthenticated } = auth;
  const dispatch = useDispatch();
  const onSubmit = (formValues) => {
    dispatch(login(formValues));
  };

  if (isAuthenticated) {
    return <Redirect to="/my-account" />;
  }

  return (
    <div className="login-container">
      <h3 className="auth-title">Login</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name="email" type="email" component={renderField} label="Email" />
        <Field name="password" type="password" component={renderField} label="Password" />
        <button className="login-btn" disabled={pristine || submitting}>
          Login
        </button>
      </form>
      <p className="text">
        Don't have an account? <Link to="/signup">Register</Link>
      </p>
    </div>
  );
};
LoginForm.propTypes = {
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func.isRequired,
};

LoginForm = reduxForm({
  form: "loginForm",
  touchOnBlur: true,
  validate,
})(LoginForm);

export default LoginForm;
