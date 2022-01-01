import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticate: true
  },
  reducers: {
    setIsAuthenticate: state => {
      state.isAuthenticate = !state.isAuthenticate;
    }
  }
});

export const { setIsAuthenticate } = userSlice.actions;

export default userSlice.reducer;