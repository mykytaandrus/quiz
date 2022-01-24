import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { onValue, ref } from 'firebase/database';
import { database } from '../../firebase';
import { setCurrentQuiz } from '../../store/quizzesSlice';
import Answers from './Answers/Answers';
import './Quiz.css';

const Quiz = () => {
  const dispatch = useDispatch();
  const route = useParams();
  const quiz = useSelector(state => state.quizzes.currentQuiz);
  // console.log(quiz.questions[0].answers);

  useEffect(() => {
    const starCountRef = ref(database, `quizzes/quiz${route.id}`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      data.isFinished = false;
      // console.log(data)
      // console.log(data.questions[0].answers);
      dispatch(setCurrentQuiz(data));
    });
  }, []);
  // console.log(useParams());
  // console.log(props);

  // const [quiz1, setQuiz] = useState(null);
  // const route = useParams();
  // const quizA = useSelector(state => {
  //   state.quizzes.quizzesList.map((item, index) => {
  //     if (route.id === item.quizId) {
  //       setQuiz(index);
  //     }
  //   });
  //   console.log(quiz1)
  // });
  // // console.log(quizA)
  // // setTimeout(() => console.log(quizA), 1000)

  // const quiz = {
  //   author: '',
  //   date: '1234567',
  //   title: 'Quiz Title',
  //   questionNumber: '4/18',
  //   question: 'Some interesting question?',
  //   answers: ['Answer 01', 'Answer 02', 'Answer 03', 'Answer 04'],
  // }
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