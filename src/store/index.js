import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import quizzesReducer from './quizzesSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    quizzes: quizzesReducer
  }
});