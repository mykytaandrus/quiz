import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import quizzesReducer from './quizzesSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    quizzes: quizzesReducer
  }
});