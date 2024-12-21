import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: {
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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (user, action) => {
      user.userInfo = action.payload
    },
    setUsers: (user, action) => {
      user.users = action.payload
    }
  }
})

export const { setUserInfo, setUsers } = userSlice.actions

export default userSlice.reducer
