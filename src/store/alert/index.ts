import { createSlice } from '@reduxjs/toolkit'

export interface IAlert {
  type?: string
  message?: string
  showAfterRedirect?: boolean
}

const initialState: IAlert = {
  type: undefined,
  message: undefined,
  showAfterRedirect: undefined
}

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    alertSuccess: (alert, action) => {
      alert.type = 'success'
      alert.message = action.payload.message
      alert.showAfterRedirect = action.payload.showAfterRedirect
    },
    alertError: (alert, action) => {
      alert.type = 'danger'
      alert.message =
        action.payload.message.TypeError || action.payload.message.Error || action.payload.message

      alert.showAfterRedirect = action.payload.showAfterRedirect
    },
    clear: (alert, action) => {
      // if showAfterRedirect is true the alert is kept for
      // one route change (e.g. after successful registration)
      if (action.payload?.showAfterRedirect) {
        alert.showAfterRedirect = false
      } else {
        alert.type = undefined
        alert.message = undefined
        alert.showAfterRedirect = undefined
      }
    }
  }
})

export const { alertSuccess, alertError, clear } = alertSlice.actions

export default alertSlice.reducer
