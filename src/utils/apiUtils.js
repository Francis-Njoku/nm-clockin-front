import { logout } from "./authUtils.js";

export const AUTH_TOKEN = "__API_TOKEN__";

export const getAuthToken = () => window.localStorage.getItem(AUTH_TOKEN);
//require('dotenv').config();
const baseURL = process.env.REACT_APP_API_ENDPOINT;

const makeAPICall = async (
  { path, method = "POST", payload = null, params = null },
  customConfigs
) => {
  const token = getAuthToken();

  const headers = {
    Accept: "application/json, */*",
    "Content-type": "application/json",
  };
  console.log("deborah");
  console.log(baseURL);
  console.log('API Endpoint:', process.env.REACT_APP_API_ENDPOINT);
  if (token) headers.Authorization = `Bearer ${token}`;

  const configs = {
    method,
    headers,
    ...customConfigs,
  };
  console.log("deborah2");

  // return console.log(configs);

  if (payload) configs.body = JSON.stringify(payload);

  let url = new window.URL(`${baseURL}${path}`);

  console.log(url);
  console.log("deborah3");

  const buildParams = (data) => {
    const params = new window.URLSearchParams();

    for (let [key, value] of Object.entries(data)) {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          params.append(`${key}[]`, item);
        });
      } else {
        params.append(key, value);
      }
    }

    return params;
  };

  if (params) url.search = buildParams(params);

  return window
    .fetch(url, configs)
    .then(async (response) => {
      const data = await response.json();
       console.log(data, "test");
      if (!response.ok) {
        let errorMessage;
        if (response.status === 401) {
          errorMessage = data.message;
        } else {
          errorMessage = `HTTP error! Status: ${response.status}`;
        }

        let error = new Error(errorMessage);

        if (
          data.code === "token_not_valid" ||
          error === "Token is invalid or expired"
        ) {
          logout();
        } else {
          error.status = response.status || 500;
        }

        return Promise.reject(error);
      }

      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export default makeAPICall;
