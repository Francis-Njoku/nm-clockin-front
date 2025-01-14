import { useEffect } from 'react'

import { setLoginState, setProfileState, setRegisterState } from '.'
import { useAppDispatch, useAppSelector } from '..'
import { message } from 'antd'
import { createBrowserHistory } from 'history'
import { useNavigate } from 'react-router'

import { makeAPICall } from 'global/utils/api'
import { AUTH_TOKEN, REDIRECT_URL } from 'global/utils/constants'

export default function useAuthRedux() {
  const history = createBrowserHistory()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { auth, register, profile } = useAppSelector((state) => state.auth) || {}

  return {
    auth,
    loginUser: (data) => {
      dispatch(setLoginState({ ...auth, loading: true }))
      return makeAPICall({
        path: '/auth/login',
        payload: data,
        method: 'POST'
      })
        .then(async (res) => {
          dispatch(setLoginState({ ...auth, loading: false, data: { ...res } }))
          window.localStorage.setItem(AUTH_TOKEN, res?.token)
          window.localStorage.setItem('REFRESH_TOKEN', res?.refresh_token)
          history.push(window.sessionStorage.getItem(REDIRECT_URL) ?? '/')
          window.location.reload()
        })
        .catch((err) => {
          message.error(err.message, 5)
          dispatch(setLoginState({ ...auth, loading: false, hasErrors: err.message }))
        })
    },
    changePassword: (data, reset) => {
      return makeAPICall({
        path: '/auth/change-password',
        payload: { email: profile?.data.email, ...data },
        method: 'POST'
      })
        .then(async (res) => {
          message.success('password changed successfully')
          reset()
        })
        .catch((err) => {
          message.error(err.message, 5)
        })
    },
    logout: () => {
      dispatch(setLoginState({ hasErrors: null, loading: false, data: null }))
      dispatch(setProfileState({ hasErrors: null, loading: false, data: null }))
      window.localStorage.removeItem(AUTH_TOKEN)
      window.localStorage.removeItem('REFRESH_TOKEN')
      window.localStorage.removeItem('persist:counter')
      history.push('/auth/sign-in')
      window.location.reload()
    },
    register,
    registerUser: (data) => {
      dispatch(setRegisterState({ ...register, loading: true }))
      return makeAPICall({
        path: data?.referral_code ? '/auth/register/referral/' : '/auth/register',
        payload: { gmt: 'Pacific/Midway', ...data },
        method: 'POST'
      })
        .then((res) => {
          dispatch(setRegisterState({ ...register, loading: false, data: res.data }))
          window.localStorage.setItem(AUTH_TOKEN, res?.token)
          window.localStorage.setItem('REFRESH_TOKEN', res?.refresh_token)
          message.success('User Created Successfully')
          navigate(window.sessionStorage.getItem(REDIRECT_URL) ?? '/')
          window.location.reload()
        })
        .catch((err) => {
          message.error(err.message, 5)
          console.log(err)
          dispatch(setRegisterState({ ...register, loading: false, hasErrors: err.message }))
        })
    },
    profile,
    getProfile: () => {
      useEffect(() => {
        makeAPICall({
          path: '/auth/profile',
          method: 'GET',
          params: null
        })
          .then((res) => {
            dispatch(setProfileState({ ...profile, loading: false, data: res.data }))
          })
          .catch((err) => {
            message.error(err.message, 5)
            dispatch(setProfileState({ ...profile, loading: false, hasErrors: err.message }))
          })
      }, [])
    }
  }
}
