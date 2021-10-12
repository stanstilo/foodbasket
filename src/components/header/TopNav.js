import React from "react";
import "./styles/topnav.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {connect} from 'react-redux'
import { logoutUser } from '../../actions/auth/actions'



function TopNav({logoutUser}) {
  return (
    <header className="topnav">
      <div style={{color: "#334141" }}>
        <p >Welcome to Soupe Food Store </p>
      </div>
      <div style={{ color: "#334141" }} >
        <p >
          <span style={{ paddingRight: "6px" }}>
            <FontAwesomeIcon icon="clock" />
          </span>
          Two weeks maximum delivery
        </p>
      </div>
      <div style={{ color: "#334141" }}>
        <p onClick={() => logoutUser()}>
          <span style={{ paddingRight: "6px" }}>
            <FontAwesomeIcon icon="map-marker-alt" />
          </span>
          Store Locator
        </p>
      </div>
      <Link style={{ textDecoration: "none", color: "#334141" }} to='/track-your-order'>
        <p >
          <span style={{ paddingRight: "6px" }}>
            <FontAwesomeIcon icon="truck" />
          </span>
          Track Your Order
        </p>
      </Link>
      <Link style={{ textDecoration: "none", color: "#334141" }} to="/shop">
        <p>
          <span style={{ paddingRight: "6px" }}>
            <FontAwesomeIcon icon="cart-arrow-down" />
          </span>
          Shop
        </p>
      </Link>
      <Link style={{ textDecoration: "none", color: "#334141" }} to="/my-account">
        <p>
          <span style={{ paddingRight: "6px" }}>
            <FontAwesomeIcon icon="user" />
          </span>
          My Account
        </p>
      </Link>
    </header>
  );
}

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(null, mapDispatchToProps)(TopNav);
