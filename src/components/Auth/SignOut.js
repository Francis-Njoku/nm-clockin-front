import React, { useState } from "react";
//import { Link } from "react-router-dom";
import makeAPICall from "../../utils/apiUtils";
import { message } from "antd";
//import { AUTH_TOKEN } from "../../utils/constants";

export default function SignOut ()
{
    return makeAPICall({
        path: "/auth/signout",
        method: "POST",
        payload: null,
      })
        .then((res) => {
          //setIsLoading(false);
          localStorage.removeItem("__API_TOKEN__");
          localStorage.removeItem("REFRESH_TOKEN");
          message.success(res.message);
          navigate('/sign-in'); // Redirect to the desired success page
        })
        .catch((err) => {
          //setIsLoading(false);
          message.error("Failed to logout");
        });
}