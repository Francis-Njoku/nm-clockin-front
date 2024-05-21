import { createSlice } from "@reduxjs/toolkit";
import makeAPICall from "../../../utils/apiUtils";
import { message } from "antd"

const initialState = {
    loading: false,
    hasErrors: null,
    user: {},  
};

export const registerSlice = createSlice({
    name:"register",
    initialState,
    reducers: {
        getApp: (state = initialState) => {
            state.loading = true;
        },
        getAppSuccess: (state, { payload }) => {
            state.register = payload;
            state.loading = false;
        },
        getAppFailure: (state, { payload }) => {
            state.loading = false;
            state.hasErrors = payload;
        },
    },
});

// Three actions generated from the slice
const {getApp, getAppSuccess, getAppFailure} = registerSlice.actions;

// A selector
export const getRegisterSelector = (state) => state.register;

// The reducer
export default registerSlice.reducer;

// api call action
export const RegisterUser = (data) => (dispatch) => {
    dispatch(getApp());
  return makeAPICall({
    path: data?.referral_code ? "/auth/register/referral/" : "/auth/register/",
    payload: data,
    method: "POST",
  })
    .then((res) => {
      // console.log(res, 'register successful');
      dispatch(getAppSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message, 5);
      dispatch(getAppFailure(err));
    });
}
