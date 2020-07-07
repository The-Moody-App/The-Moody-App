
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./auth";


function PrivateRoute({ component: Component, ...rest }) {
    const { authTokens } = useAuth();
  


function Alert(){
    alert("You have to Log In first")
}

  return (
    <Route
    {...rest}
    render={props =>
      authTokens ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { referer: props.location } }} />
        )
      }
    />
  );
}

export default PrivateRoute;
