import { createSlice } from '@reduxjs/toolkit';

export const quizzesSlice = createSlice({
  name: 'quizzesList',
  initialState: {
    isLoading: true,
    quizzesList: []
  },
  reducers: {
    setQuizzes: (state, action) => {
      if (state.quizzesList.length === 0) {
        for (let key in action.payload) {
          state.quizzesList.push(action.payload[key]);
        }
      } else {
        state.quizzesList = [];
        for (let key in action.payload) {
          state.quizzesList.push(action.payload[key]);
        }
      }
      state.isLoading = false;
    }
  }
});

export const { setQuizzes } = quizzesSlice.actions;

export default quizzesSlice.reducer;