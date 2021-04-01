import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  errorMessage: "",
  loggedIn: !!localStorage.getItem("token"),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart: (state) => {
      state = { ...initialState };
      state.loading = true;
    },
    authSuccess: (state) => (state = { ...initialState, loggedIn: true }),
    authError: (state, action) => {
      state.loading = false;
      state.error = true;
      state.loggedIn = false;
      state.errorMessage = action.payload;
    },
    logout: (state) => {
      state.loggedIn = false;
    },
  },
});

export const { authError, authStart, authSuccess, logout } = authSlice.actions;

export const selectLoginError = (state) => ({
  error: state.auth.error,
  errorMessage: state.auth.errorMessage,
});

export default authSlice.reducer;
