import React from "react"

export const validateBilling = (values) => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = "Required";
    }
    if (!values.last_name) {
      errors.last_name = 'Required'
    }
    if (!values.street_address) {
      errors.street_address = 'Required'
    }
    if (!values.state_name) {
      errors.state_name = 'Required'
    }
    if (!values.city_name) {
      errors.city_name = 'Required'
    }
    if (!values.store_name) {
      errors.store_name = 'Required'
    }
    if (!values.zip) {
      errors.zip = 'Required'
    }
    if (!values.phone) {
      errors.phone = 'Required'
    }
    return errors;
  };
export const validateShipping = (values) => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = "Required";
    }
    if (!values.last_name) {
      errors.last_name = 'Required'
    }
    if (!values.street_address) {
      errors.street_address = 'Required'
    }
    if (!values.state_name) {
      errors.state_name = 'Required'
    }
    if (!values.city_name) {
      errors.city_name = 'Required'
    }
    return errors;
  };

  export const renderField = ({ input, placeholder, type, className, meta: { touched, error } }) => {
    return (
      
        <div>
          <input {...input} type={type} className={className} placeholder={placeholder}/>
          {touched && error && (
            <p style={{color:"red", fontSize:"10px"}}>{error}</p>
          )}
        </div>
    );
  };