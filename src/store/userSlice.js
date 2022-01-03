import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    isAuthenticate: false
  },
  reducers: {
    setAuthenticate: (state, action) => {
      state.email = action.payload;
      state.email ? state.isAuthenticate = true : state.isAuthenticate = false;
    }
  }
});

export const { setAuthenticate } = userSlice.actions;

export default userSlice.reducer;