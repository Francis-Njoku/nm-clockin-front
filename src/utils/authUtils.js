import { jwtDecode } from "jwt-decode";
import { AUTH_TOKEN} from "./constants";
import history from "../services/history";
import "core-js/stable/atob";

export const isLogin = () => {
  //console.log("Chima");
  let token = window.localStorage.getItem(AUTH_TOKEN);
  //console.log("Chima33");
  return !!token && !isSessionExpired(token);
};

export const isSessionExpired = (token) => {
  if (!token){
    return false
  };
  let decodedToken = jwtDecode(token);
  let currentDate = new Date();
  if (decodedToken.exp * 1000 < currentDate.getTime()) {
    return true;
  }
};

export const logout = () => {
  window.localStorage.removeItem(AUTH_TOKEN);
  window.localStorage.removeItem("REFRESH_TOKEN");
  window.localStorage.removeItem('persist:counter');
  history.push("/");
  window.location.reload()
};