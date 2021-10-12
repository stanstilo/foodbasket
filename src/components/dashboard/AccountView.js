import React from "react";
import "./styles/accountDetails.scss";

export default function AccountView(props) {
  return (
    <div>
      <form>
        <div className="labels">
          <label>First name *</label>
          <label id="lastname">Last name *</label>
        </div>
        <div className="account-names-inputs">
          <input type="text" />
          <input type="text" />
        </div>

        <div className="label">
          <label>Display name *</label>
        </div>
        <div className="account-user-input">
          <input
            type="text"
            placeholder="Enter Email"
            name="username"
            required
          />
          <p style={{ fontSize: "14px", fontStyle: "italic", paddingLeft:"1.5rem" }}>
            This will be how your name will be displayed in the account section
            and in reviews
          </p>
        </div>

        <div className="label">
          <label>Email address *</label>
        </div>

        <div className="account-user-input">
          <input type="text" placeholder="Enter Email" name="email" required />
        </div>
        <p
          style={{ borderBottom: "1.5px solid #F15A22", paddingBottom: "1em", width:"90%" }}
        >
          <b>Password Change</b>
        </p>

        <div className="label">
          <label>Current password (leave blank to leave unchanged)</label>
        </div>
        <div className="account-user-input">
          <input type="password" name="old_password" required />
        </div>
        <div className="label">
          <label>New password (leave blank to leave unchanged)</label>
        </div>
        <div className="account-user-input">
          <input type="password" name="password1" required />
        </div>
        <div className="label">
          <label>Confirm new password</label>
        </div>
        <div className="account-user-input">
          <input type="password" name="password2" required />
        </div>
        <div className="account-submit-button">
          <button>Save change</button>
        </div>
      </form>
    </div>
  );
}
