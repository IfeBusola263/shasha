import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
      state.isLoggedIn = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { login, logout, setLoading, setError } = authSlice.actions;

export default authSlice.reducer;
