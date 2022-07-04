import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.auth = action.payload;
    },
    logoutSuccess: (state) => {
      state.auth = null;
    },
    getMyProfileSuccess: (state, action) => {
      state.auth.data.user = action.payload;
    },
    changeUserNameSuccess: (state, action) => {
      state.auth.data.user = action.payload;
    },
  },
});

export const {
  loginSuccess,
  logoutSuccess,
  getMyProfileSuccess,
  changeUserNameSuccess,
} = authSlice.actions;
export default authSlice.reducer;
