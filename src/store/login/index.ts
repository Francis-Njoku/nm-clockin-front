import { createSlice } from '@reduxjs/toolkit'
import useLoginRedux from './useLoginStore'

const initialState = {
  loading: false,
  hasErrors: null,
  login: null,
  user: {}
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    getApp: (state = initialState) => {
      state.loading = true
    },
    getAppSuccess: (state, { payload }) => {
      state.login = payload
      state.loading = false
    },
    getAppFailure: (state, { payload }) => {
      state.loading = false
      state.hasErrors = payload
    }
  }
})

export const { getApp, getAppSuccess, getAppFailure } = loginSlice.actions

export default loginSlice.reducer

export { useLoginRedux }
