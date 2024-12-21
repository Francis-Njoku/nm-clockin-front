import { logout } from './auth.js'

export const AUTH_TOKEN = '__API_TOKEN__'

export const getAuthToken = () => window.localStorage.getItem(AUTH_TOKEN)
const baseURL = import.meta.env.VITE_API_URL

const makeAPICall = async (
  { path, method = 'POST', payload = null, params = null },
  customConfigs?
) => {
  const token = getAuthToken()

  const headers: Record<string, string> = {
    Accept: 'application/json, */*',
    'Content-type': 'application/json'
  }
  // console.log("deborah");
  // console.log(baseURL)
  // console.log('API Endpoint:', import.meta.env.VITE_API_URL)
  if (token) headers.Authorization = `Bearer ${token}`

  const configs = {
    method,
    headers,
    ...customConfigs
  }
  // console.log("deborah2");

  // console.log(configs, payload)

  if (payload) configs.body = JSON.stringify(payload)

  const url = new window.URL(`${baseURL}${path}`)

  // console.log(url)
  // console.log("deborah3");

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
      // console.log(data, "test");
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

const makeAPICallNoTokenForm = async ({ path, method = 'POST', payload = null }) => {
  const myHeaders = new Headers()

  const requestOptions = {
    method: method,
    headers: myHeaders,
    body: payload,
    redirect: 'follow'
  }

  let url = new window.URL(`${baseURL}${path}`)

  return window
    .fetch(url, requestOptions)
    .then(async (response) => {
      const data = await response.json()
      if (!response.ok) {
        let errorMessage

        if (data && data.message) {
          if (typeof data.message === 'string') {
            errorMessage = data.message
          } else if (Array.isArray(data.message)) {
            errorMessage = data.message.map(({ msg, param }) => `${param}: ${msg}`).join(', ')
          }
        } else {
          errorMessage = 'An unknown error occured!'
        }
        const error = new Error(errorMessage)
        error.status = response.status || 500
        return Promise.reject(error)
      }
      return data
    })
    .catch((error) => {
      throw error
    })
}

const makeAPICallForm = async ({ path, method = 'POST', payload = null }) => {
  const token = getAuthToken()

  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Bearer ${token}`)

  const requestOptions = {
    method: method,
    headers: myHeaders,
    body: payload,
    redirect: 'follow'
  }

  let url = new window.URL(`${baseURL}${path}`)

  return window
    .fetch(url, requestOptions)
    .then(async (response) => {
      const data = await response.json()
      if (!response.ok) {
        let errorMessage

        if (data && data.message) {
          if (typeof data.message === 'string') {
            errorMessage = data.message
          } else if (Array.isArray(data.message)) {
            errorMessage = data.message.map(({ msg, param }) => `${param}: ${msg}`).join(', ')
          }
        } else {
          errorMessage = 'An unknown error occured!'
        }
        const error = new Error(errorMessage)
        error.status = response.status || 500
        return Promise.reject(error)
      }
      return data
    })
    .catch((error) => {
      throw error
    })
}

export { makeAPICall, makeAPICallNoTokenForm, makeAPICallForm }
