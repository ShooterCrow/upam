import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    completeness: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const payload = action.payload;
      const user = payload.data.user;
      const accessToken = payload.data.accessToken;
      const completeness = payload.data.completeness;

      state.user = user;
      state.token = accessToken;
      state.completeness = completeness;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.token = null;
      state.completeness = null;
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCompleteness = (state) => state.auth.completeness;
export default authSlice.reducer;
