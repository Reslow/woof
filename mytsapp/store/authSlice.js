import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: undefined,
    email: undefined,
    role: undefined,
    loggedIn: false,
  },

  reducers: {
    login(state, action) {
      console.log(action.payload);
      state.username = action.payload.username;
      state.userId = action.payload.userId;
      state.role = action.payload.role;
      state.email = action.payload.email;
      state.loggedIn = true;
    },
    logout(state, action) {
      state.username = "";
      state.email = "";
      state.role = "";
      state.userId = "";
      state.loggedIn = false;
    },
    register(state, action) {
      state.username = action.payload.username;
      state.role = action.payload.role;
      state.userId = action.payload.userId;
      state.email = action.payload.email;
      state.loggedIn = true;
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
