import 'core-js/stable/atob'
import { createBrowserHistory } from 'history'
import { jwtDecode } from 'jwt-decode'

import { AUTH_TOKEN } from '../constants'

const history = createBrowserHistory()

export const isLogin = () => {
  //console.log("Chima");
  const token = window.localStorage.getItem(AUTH_TOKEN)
  //console.log("Chima33");
  return !!token && !isSessionExpired(token)
}
export const isSessionExpired = (token: string): boolean => {
  if (!token) {
    return false
  }
  const decodedToken = jwtDecode<{ exp?: number }>(token)
  const currentDate = new Date()
  if (decodedToken.exp && decodedToken.exp * 1000 < currentDate.getTime()) {
    return true
  }
  return false
}
export const logout = () => {
  window.localStorage.removeItem(AUTH_TOKEN)
  window.localStorage.removeItem('REFRESH_TOKEN')
  window.localStorage.removeItem('persist:counter')
  history.push('/')
  window.location.reload()
}
