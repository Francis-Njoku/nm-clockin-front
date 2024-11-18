import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  register: null,
  loading: false,
  hasErrors: null,
  user: {}
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    getApp: (state = initialState) => {
      state.loading = true
    },
    getAppSuccess: (state, { payload }) => {
      state.register = payload
      state.loading = false
    },
    getAppFailure: (state, { payload }) => {
      state.loading = false
      state.hasErrors = payload
    }
  }
})

export const { getApp, getAppSuccess, getAppFailure } = registerSlice.actions

export default registerSlice.reducer
