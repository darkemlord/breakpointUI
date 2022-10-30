import { createSlice } from "@reduxjs/toolkit";
import { ReduxStateType, REDUX_STATE } from "../../constants/ReduxState";
import { signup } from "../actions/auth";

export type AuthenticationState = {
  fetch: ReduxStateType;
  auth: any;
};

const initialState: AuthenticationState = {
  fetch: REDUX_STATE.idle,
  auth: undefined,
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        return {
          ...state,
          fetch: REDUX_STATE.pending,
        };
      })
      .addCase(signup.fulfilled, (state, action) => {
        return {
          ...state,
          fetch: REDUX_STATE.fulfilled,
        };
      })
      .addCase(signup.rejected, (state) => {
        return {
          ...state,
          fetch: REDUX_STATE.rejected,
        };
      });
  },
});

export default authSlice.reducer;
