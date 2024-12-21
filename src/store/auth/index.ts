import { createSlice } from '@reduxjs/toolkit'
import useAuthRedux from './useAuthRedux'

const initialState = {
  auth: {
    loading: false,
    hasErrors: null,
    data: null
  },
  register: {
    data: null,
    loading: false,
    hasErrors: null
  },
  profile: {
    data: null,
    loading: false,
    hasErrors: null
  }
}

export const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginState: (auth, action) => {
      auth.auth = action.payload
    },
    setRegisterState: (auth, action) => {
      auth.register = action.payload
    },
    setProfileState: (state, { payload }) => {
      state.profile = payload
    }
  }
})

export const { setLoginState, setRegisterState, setProfileState } = loginSlice.actions

export default loginSlice.reducer

export { useAuthRedux }
