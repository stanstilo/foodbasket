import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import _ from "lodash";
import shortid from 'shortid'
import "../styles/dashboard.scss";
import { fetchAddressBook, fetchShippingAddress, updateAddress } from "../../../actions/auth/actions";


const Address = ({ match}) => {
  const billing_address = useSelector(state => state.authReducer.billingAddress);
  const shipping_address = useSelector(state => state.authReducer.shippingAddress);
  // let id = _.map(shipping_address, address=> address.id);
  let id = _.map(billing_address, address=> address.id);
  const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchAddressBook());
}, []);

useEffect(() => {
  dispatch(fetchShippingAddress());
}, []);
  

  return (
    <>
      <div>
        <p>The following addresses will be used on the checkout page by default.</p>
        <div className="addresses">
          <div className="address-billing">
            <h4 style={{ borderBottom: ".1rem solid #F15A22" }}>
              Billing Address
              {billing_address.length? (
                <span style={{ float: "right", paddingRight: "25px" }}>
                  <Link
                    style={{ textDecoration: "none", color: "#F15A22" }}
                    to={`${match.path}/edit-billing/${shortid.generate()}/${id}/`}
                  >
                    Edit
                  </Link>
                </span>
              ) : (
                <span style={{ float: "right", paddingRight: "25px" }}>
                  <Link
                    style={{ textDecoration: "none", color: "#F15A22" }}
                    to={`${match.path}/billing`}
                  >
                    Add
                  </Link>
                </span>
              )}
            </h4>
            {billing_address.length ? (
              _.map(billing_address,(add) => {
                return (
                  <div key={add.id}>
                    <div>{add.street_address}</div>
                    <div>{add.phone}</div>
                    <div>{add.city_name}</div>
                    <div>{add.state_name}</div>
                  </div>
                );
              })
            ) : (
              <p>You have not set up this type of address yet.</p>
            )}
          </div>
          <div className="address-shipping">
            <h4 style={{ borderBottom: ".1rem solid #F15A22" }}>
              Shipping Address
              {shipping_address.length ? (
                <span style={{ float: "right", paddingRight: "25px" }}>
                  <Link
                    style={{ textDecoration: "none", color: "#F15A22" }}
                    to={`${match.path}/edit-shipping/${shortid.generate()}/${id}/`}
                  >
                    Edit
                  </Link>
                </span>
              ) : (
                <span style={{ float: "right", paddingRight: "25px" }}>
                  <Link
                    style={{ textDecoration: "none", color: "#F15A22" }}
                    to={`${match.path}/shipping`}
                  >
                    Add
                  </Link>
                </span>
              )}
            </h4>
            {shipping_address.length
            ?
            _.map(shipping_address,(shipping)=>{
              return (
                <div key={shipping.id}>
                  <div>{shipping.street_address}</div>
                  <div>{shipping.city_name}</div>
                  <div>{shipping.state_name}</div>
                </div>
              );
            })
            :
            <p>You have not set up this type of address yet.</p>
           }
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
