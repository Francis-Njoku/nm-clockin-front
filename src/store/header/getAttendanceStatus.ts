import { createSlice } from '@reduxjs/toolkit'
import makeAPICall from '../../utils/apiUtils'
import { message } from 'antd'

const initialState = {
  loading: false,
  hasErrors: null,
  attendance: {}
}

export const currentAttendanceStatusSlice = createSlice({
  name: 'currentAttendance',
  initialState,
  reducers: {
    getApp: (state = initialState) => {
      state.loading = true
    },
    getAppSuccess: (state, { payload }) => {
      state.attendance = payload
      state.loading = false
    },
    getAppFailure: (state, { payload }) => {
      state.loading = false
      state.hasErrors = payload
    }
  }
})

// Three actions generated from the slice
const { getApp, getAppSuccess, getAppFailure } = currentAttendanceStatusSlice.actions

// A selector
export const getCurrentAttendanceStatusSelector = (state) => state.currentAttendance

// The reducer
export default currentAttendanceStatusSlice.reducer

// api call action
export const GetAttendanceStatus =
  ({ params = null }) =>
  (dispatch) => {
    dispatch(getApp())
    return makeAPICall({
      path: '/user/clock/status',
      method: 'GET',
      params
    })
      .then((res) => {
        dispatch(getAppSuccess(res))
      })
      .catch((err) => {
        message.error(err.message, 5)
        dispatch(getAppFailure(err))
      })
  }
