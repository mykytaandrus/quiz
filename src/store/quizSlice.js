import { createSlice } from '@reduxjs/toolkit';
import { child, get, ref } from 'firebase/database';
import { database } from '../firebase';

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    quiz: null
  },
  reducers: {
    setQuiz: (state, action) => {
      state.quiz = action.payload;
    }
  }
});

export const { setQuiz } = quizSlice.actions;

export default quizSlice.reducer;

export const fetchQuiz = (quizId) => dispatch => {
  if (quizId === null) {
    return dispatch(setQuiz(null));
  }
  get(child(ref(database), `quizzes/quiz${quizId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        dispatch(setQuiz(data));
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
};