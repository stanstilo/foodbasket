import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { authUserSelector,isLoadingSelector } from "../../reducers/authReducer/selector";
import { createStructuredSelector } from "reselect";
const PrivateRoute = ({ render: Component, isLoading, isAuthenticated, ...rest }) => {
  return (
    <Route
      render={(props) => {
        if (isLoading) {
          return <div>Loading....</div>;
        } else if (!isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: "/login-signup",
                state: { from: props.location },
              }}
            />
          );
        } else {
          return <Component {...props} />;
        }
      }}
      {...rest}
    />
  );
};

// PrivateRoute.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
// };

const mapStateToProps = createStructuredSelector({
 isLoading: isLoadingSelector,
 isAuthenticated: authUserSelector
});

export default connect(mapStateToProps)(PrivateRoute);
