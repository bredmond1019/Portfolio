import { createSlice } from "@reduxjs/toolkit";

export const authTokenSlice = createSlice({
  name: "authToken",
  initialState: {
    token: null,
    payload: null,
    refreshExpiresIn: null,
  },
  reducers: {
    setAuthToken: (state, { payload }) => {
      (state.token = null), (state.payload = null), (state.refreshExpiresIn = null);
    },
  },
});
