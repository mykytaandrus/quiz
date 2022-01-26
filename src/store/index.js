import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import quizReducer from './quizSlice';
import quizzesReducer from './quizListSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    quiz: quizReducer,
    quizzes: quizzesReducer
  }
});