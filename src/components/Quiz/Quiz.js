import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { onValue, ref } from 'firebase/database';
import { database } from '../../firebase';
import { setCurrentQuiz } from '../../store/quizListSlice';
import Answers from './Answers/Answers';
import './Quiz.css';

const Quiz = () => {
  const dispatch = useDispatch();
  const route = useParams();
  const quiz = useSelector(state => state.quizzes.currentQuiz);

  useEffect(() => {
    const starCountRef = ref(database, `quizzes/quiz${route.id}`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      data.isFinished = false;
      dispatch(setCurrentQuiz(data));
    });
  }, []);

  if (quiz !== null) {
    return (
      <div className='quiz'>
        <h1 className='quiz__title'>{quiz.title}:&nbsp;{`${quiz.questions.length}`}</h1>
        <h2 className='quiz__question'>{quiz.questions[0].question}</h2> 
        <Answers answers={quiz.questions[0].answers} />
      </div>
    );
  }
  return (<div className='quiz'>00</div>);
};

export default Quiz;