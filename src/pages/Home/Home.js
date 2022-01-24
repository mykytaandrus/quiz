import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { onValue, ref} from 'firebase/database';
import { database } from '../../firebase/index';
import { setQuizzes } from '../../store/quizzesSlice';
import Main from '../../components/Main/Main';
import Loader from '../../components/Loader/Loader';
import Quiz from '../../components/Quiz/Quiz';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.quizzes.isLoading);
  const route = useParams();

  useEffect(() => {
    const starCountRef = ref(database, 'quizzes/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      dispatch(setQuizzes(data));
    });
  }, [dispatch]);

  return (
    <React.Fragment>
      {isLoading ? <Loader /> : route.id ? <Quiz /> : <Main />}
    </React.Fragment>
  );
};

export default Home;