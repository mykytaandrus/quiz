import { createSlice } from '@reduxjs/toolkit';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    isLoading: true,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    }
  }
});

export const { login, logout, stopLoading } = authSlice.actions;

export default authSlice.reducer;

export const addAuthListener = () => dispatch => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const email = user.email;
      dispatch(login(email));
      dispatch(stopLoading());
    } else {
      dispatch(stopLoading());
    }
  });
};

export const authSignOut = () => async dispatch => {
  signOut(auth);
  dispatch(logout());
};