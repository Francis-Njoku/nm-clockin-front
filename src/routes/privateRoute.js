import React from "react";
import {useNavigate, Navigate, useHistory  } from "react-router-dom";
import { isLogin } from "../utils/authUtils";

//const history = useHistory();
function PrivateRoute({ children }) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/sign-in', { replace: true});

    // Delay the reload slightly to ensure navigation completes
      window.location.replace('/sign-in');
  }

  /*
  const handleRedirect = () => {
    navigate(`/sign-in?reload=${new Date().getTime()}`);
  }
  */
  //return isLogin() ? children : useHistory.push("/sign-in");
  //return isLogin() ? children : <Navigate to="/sign-in" />;
  return isLogin() ? children : handleRedirect();

}

export default PrivateRoute;
