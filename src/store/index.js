import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import quizzesReducer from './quizListSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    quizzes: quizzesReducer
  }
});