import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onValue, ref} from 'firebase/database';
import { database } from '../../firebase/index';
import { setQuizzes } from '../../store/quizzesSlice';
import Main from '../../components/Main/Main';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.quizzes.isLoading);

  useEffect(() => {
    const starCountRef = ref(database, 'quizzes/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      dispatch(setQuizzes(data));
    });
  }, [dispatch]);

  return (
    <React.Fragment>
      {isLoading ? <Loader /> : <Main />}
    </React.Fragment>
  );
};

export default Home;