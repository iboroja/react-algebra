import React from "react";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, isLoggedIn, redirectPath }) => {
  if (!isLoggedIn) {
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  isLoggedIn: PropTypes.bool,
  redirectPath: PropTypes.string,
};

export default ProtectedRoute;
