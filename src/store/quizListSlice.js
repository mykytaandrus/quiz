import { createSlice } from '@reduxjs/toolkit';

export const quizzesSlice = createSlice({
  name: 'quizzesList',
  initialState: {
    currentQuiz: null,
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
    },
    setCurrentQuiz: (state, action) => {
      state.currentQuiz = action.payload;
    }
  }
});

export const { setCurrentQuiz, setQuizzes } = quizzesSlice.actions;

export default quizzesSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { onValue, ref } from 'firebase/database';
// import { database } from '../firebase';

// export const fetchQuizzes = () => {
//   return async dispatch => {
//     onValue(ref(database, 'quizzes/'), (snapshot) => {
//       const data = snapshot.val();
//       const quizzes = [];
//       for (let quiz in data) {
//         quizzes.push(data[quiz]);
//       }
//       dispatch(getQuizzes(quizzes));
//     });
//   };
// };

// export const quizzesSlice2 = createSlice({
//   name: 'quizzes',
//   initialState: {
//     isFetching: true,
//     quizzes: null
//   },
//   reducers: {
//     getQuizzes: (state, action) => {
//       state.isFetching = false;
//       state.quizzes = action.payload;
//     }
//   }
// });

// export const { getQuizzes } = quizzesSlice2.actions;

// export default quizzesSlice2.reducer;