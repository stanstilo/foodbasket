import React from "react";
import { connect } from "react-redux";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../../actions/auth/actions";
import { authUserSelector } from "../../reducers/authReducer/selector";
import "./styles/user-drop-down.scss";

const UserDropDown = ({ userSignedIn, logoutUser, history, handleClickAway }) => {
  return (
      <div className="user_dropdown">
        {userSignedIn ? (
          <div className="user-drop-down-menu">
            <ul className="user-menu">
              <li onClick={() => {
                  handleClickAway();
                  history.push("/my-account");
                }}>Dashboard</li>
              <li onClick={() => {
                  handleClickAway();
                  history.push("/orders");
                }}>Orders</li>
              <li onClick={() => {
                  handleClickAway();
                  history.push("/downloads");
                }}>Downloads</li>
              <li onClick={() => {
                  handleClickAway();
                  history.push("/address");
                }}>Addresses</li>
              <li onClick={() => {
                  handleClickAway();
                  history.push("/payment-method");
                }}>Payment Methods</li>
              <li onClick={() => {
                  handleClickAway();
                  history.push("/account-details");
                }}>Account Details</li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => {
                  logoutUser();
                  history.push("/");
                }}
              >
                Logout
              </li>
            </ul>
          </div>
        ) : (
          <div className="user-drop-down-login-signin">
            <p className="signin_qus">Returning Customer ?</p>
            <div className="login_user_btn_div">
              <button
                className="drop_btn"
                onClick={() => {
                  history.push("/login-signup");
                  handleClickAway();
                }}
              >
                Sign in
              </button>
            </div>
            <div className="register_user_btn_div">
              <p className="signin_qus">Don't have an account ?</p>
              <p
                className="register_user_btn"
                onClick={() => {
                  history.push("/login-signup");
                  handleClickAway();
                }}
              >
                Register
              </p>
            </div>
          </div>
        )}
      </div>
  );
};

const mapStateToProps = (state) => ({
  userSignedIn: authUserSelector(state),
});

export default withRouter(connect(mapStateToProps, { logoutUser })(UserDropDown));
