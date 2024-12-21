import { useEffect } from 'react'
import { message } from 'antd'

import { useAppDispatch, useAppSelector } from '..'
import makeAPICall from '../../utils/api'
import { useNavigate } from 'react-router'
import history from '../../services/history'
import { AUTH_TOKEN, REDIRECT_URL } from '../../utils/constants'
import { setLoginState, setRegisterState, setProfileState } from '.'

export default function useAuthRedux() {
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
