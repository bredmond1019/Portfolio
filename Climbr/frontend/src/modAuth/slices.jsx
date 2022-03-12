import { createSlice } from "@reduxjs/toolkit";

export const authTokenSlice = createSlice({
  name: "authToken",
  initialState: {
    token: null,
    refreshToken: null,
    userId: null,
    profileId: 1,
    expirationTime: null,
  },
  reducers: {
    setAuthToken: (state, { payload }) => {
      state.token = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.userId = payload.userId;
      state.profileId = payload.profileId;
      state.expirationTime = payload.expirationTime;
    },
    setRefreshToken: (state, { payload }) => {
      state.token = payload.newToken;
    },

    logOut: (state, { payload }) => {
      state.token = null;
      state.refreshToken = null;
      state.userId = null;
      state.profileId = null;
      state.expirationTime = null;
    },
  },
});
