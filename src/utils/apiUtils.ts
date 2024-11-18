import { logout } from './authUtils.js'

export const AUTH_TOKEN = '__API_TOKEN__'

export const getAuthToken = () => window.localStorage.getItem(AUTH_TOKEN)
//require('dotenv').config();
const baseURL = import.meta.env.VITE_API_URL
//console.log(baseURL);

const makeAPICall = async (
  { path, method = 'POST', payload = null, params = null },
  customConfigs?
) => {
  const token = getAuthToken()

  const headers: Record<string, string> = {
    Accept: 'application/json, */*',
    'Content-type': 'application/json'
  }
  //console.log("deborah");
  //console.log(baseURL);
  //console.log('API Endpoint:', import.meta.env.VITE_API_URL);
  if (token) headers.Authorization = `Bearer ${token}`

  const configs = {
    method,
    headers,
    ...customConfigs
  }
  //console.log("deborah2");

  // return console.log(configs);

  if (payload) configs.body = JSON.stringify(payload)

  const url = new window.URL(`${baseURL}${path}`)

  //console.log(url);
  //console.log("deborah3");

  const buildParams = (data) => {
    return new window.URLSearchParams(
      Object.entries(data).flatMap(([key, value]) =>
        Array.isArray(value) ? value.map((item) => [`${key}[]`, item]) : [[key, value]]
      )
    )
  }

  if (params) url.search = buildParams(params).toString()

  return window
    .fetch(url, configs)
    .then(async (response) => {
      const data = await response.json()
      //console.log(data, "test");
      if (!response.ok) {
        let errorMessage
        if (response.status === 401) {
          errorMessage = data.message
        } else {
          errorMessage = `HTTP error! Status: ${response.status}`
        }

        const error = new Error(errorMessage) as Error & { status?: number }

        if (data.code === 'token_not_valid' || error.message === 'Token is invalid or expired') {
          logout()
        } else {
          error.status = response.status || 500
        }

        return Promise.reject(error)
      }

      return data
    })
    .catch((error) => {
      throw error
    })
}
export default makeAPICall
