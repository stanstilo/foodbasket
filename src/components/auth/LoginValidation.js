import React from 'react'

export const renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div className="renderfield-layout">
      <label className="label">{label}*</label>
      <div className="renderfield">
        <input {...input} type={type} className="renderfield-input" />
        {touched && error && (
          <span className="renderfield-error">{error}</span>
        )}
      </div>
    </div>
  );
};

export const hiddenField = ({ type, meta: { error } }) => {
  return (
    <div className="renderfield-error">
      <input type={type} />
      {error && <div className="renderfield-error">{error}</div>}
    </div>
  );
};

export const signupValidate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = "Required";
  }
  // if (!values.firstName) {
  //   errors.firstName = 'Required'
  // }
  // if (!values.lastName) {
  //   errors.lastName = 'Required'
  // }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors;
};


export const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'This field cannot be empty.'
}
// After null checking, check length
if (typeof values.password === 'undefined' && values.password < 8){
    errors.password = 'Password must be greater than 8.'
  }

  return errors;
}
