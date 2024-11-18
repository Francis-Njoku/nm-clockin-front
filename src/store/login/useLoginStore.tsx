import { useAppDispatch, useAppSelector } from '..'

import makeAPICall from '../../utils/apiUtils'
import history from '../../services/history'
import { AUTH_TOKEN, REDIRECT_URL } from '../../utils/constants'
import { message } from 'antd'
import { getApp, getAppSuccess, getAppFailure } from '.'

export default function useLoginRedux() {
  const dispatch = useAppDispatch()
  const { loading, hasErrors, login, user } = useAppSelector((state) => state.login)

  return {
    loading,
    hasErrors,
    login,
    user,
    loginUser: (data) => {
      console.log('Chima')
      dispatch(getApp())
      console.log(data)
      return makeAPICall({
        path: '/auth/login',
        payload: data,
        method: 'POST'
      })
        .then((res) => {
          // console.log(res, "login successful")
          if (res.group_id === 1) {
            dispatch(getAppSuccess(res))
            window.localStorage.setItem(AUTH_TOKEN, res?.token)
            window.localStorage.setItem('REFRESH_TOKEN', res?.refresh_token)
            const redirectUrl = window.sessionStorage.getItem(REDIRECT_URL) ?? '/'
            history.push(redirectUrl)
            window.location.reload()
          } else {
            dispatch(getAppSuccess(res))
            window.localStorage.setItem(AUTH_TOKEN, res?.token)
            window.localStorage.setItem('REFRESH_TOKEN', res?.refresh_token)
            const redirectUrl = window.sessionStorage.getItem(REDIRECT_URL) ?? '/'
            history.push(redirectUrl)
            window.location.reload()
          }
        })
        .catch((err) => {
          // console.log(err.message, "login error")
          message.error(err.message, 5)
          dispatch(getAppFailure(err))
        })
    }
  }
}
