import React from "react";
import { useSelector } from "react-redux";
import "./auth.scss";
import LoginForm from "./Login";
import SignupForm from "./SignUp";

const LayoutLogin = () => {
  const common = useSelector((state) => state.commonReducer);
  const { Message,error } = common;
  return (
    <>
      <div className="renderfield-error">
        {Message && <div className="renderfield-error">{Message}</div>}
      </div>
      <div className="layout-container">
        <div>
          <LoginForm />
        </div>
        <div style={{ display: "block" }}>
          <div className="seprator1"></div>
          <div className="or">or</div>
          <div className="seprator2"></div>
        </div>
        <div>
          <SignupForm />
        </div>
      </div>
    </>
  );
};

export default LayoutLogin;
