import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "../utils/token";

const LoginRoute = ({ children, ...rest }) => {
  const token = getToken();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        const { from } = location.state || { from: { path: "/" } };
        return !token ? children : <Redirect to={from} />;
      }}
    />
  );
};

export default LoginRoute;
