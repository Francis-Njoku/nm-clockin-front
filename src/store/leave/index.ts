import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  myLeaveRequests: {
    loading: false,
    hasErrors: null,
    data: null
  },
  myTeamLeaveRequests: {
    loading: false,
    hasErrors: null,
    data: null
  },
  leaveInfo: {
    loading: false,
    hasErrors: null,
    data: null
  },
  leavesAdmin: {
    loading: false,
    hasErrors: null,
    data: null
  },
  users: {
    loading: false,
    hasErrors: null,
    data: null
  }
}

const leaveSlice = createSlice({
  name: 'leave',
  initialState,
  reducers: {
    setGetmyleavesState: (leave, action) => {
      leave.myLeaveRequests = action.payload
    },
    setGetmyteamleavesState: (leave, action) => {
      leave.myTeamLeaveRequests = action.payload
    },
    setLeaveInfo: (leave, action) => {
      leave.leaveInfo = action.payload
    },
    setLeavesAdmin: (leave, action) => {
      leave.leavesAdmin = action.payload
    },
    setUsers: (leave, action) => {
      leave.users = action.payload
    }
  }
})

export const {
  setGetmyleavesState,
  setGetmyteamleavesState,
  setLeaveInfo,
  setLeavesAdmin,
  setUsers
} = leaveSlice.actions

export default leaveSlice.reducer
