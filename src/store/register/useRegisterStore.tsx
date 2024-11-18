import { useAppDispatch, useAppSelector } from '..'

import makeAPICall from 'global/utils/apiUtils'
import { REDIRECT_URL } from 'global/utils/constants'
import { message } from 'antd'
import { getApp, getAppSuccess, getAppFailure } from '.'

export default function useRegisterStore() {
  const dispatch = useAppDispatch()
  const { loading, hasErrors, register, user } = useAppSelector((state) => state.register)

  return {
    loading,
    hasErrors,
    register,
    user,
    registerUser: (data) => {
      //console.log("chima is young");
      dispatch(getApp())
      return makeAPICall({
        path: data?.referral_code ? '/auth/register/referral/' : '/auth/register',
        payload: data,
        method: 'POST'
      })
        .then((res) => {
          //console.log(res, 'register successful');
          dispatch(getAppSuccess(res.data))
          const redirectUrl = window.sessionStorage.getItem(REDIRECT_URL) ?? '/'
          //history.push(redirectUrl);
          //window.location.reload();
          message.success('User Created Successfully')
        })
        .catch((err) => {
          message.error(err.message, 5)
          dispatch(getAppFailure(err))
        })
    }
  }
}
