import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogged: false, users: [] };

const loginSlice = createSlice({
  name: "Login",
  initialState: initialState,
  reducers: {
    login(state) {
      state.isLogged = !state.isLogged;
    },
    addUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
