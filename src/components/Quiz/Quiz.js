import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchQuiz } from '../../store/quizSlice';
import Answers from './Answers/Answers';
import Loader from '../Loader/Loader';
import QuizFinished from './QuizFinished/QuizFinished';
import './Quiz.css';


const Quiz = () => {
  const dispatch = useDispatch();
  const route = useParams();
  const quiz = useSelector(state => state.quiz.quiz);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);

  useEffect(() => {
    dispatch(fetchQuiz(route.id));
  }, [dispatch, route.id]);

  const clickHandler = (userAnswer) => {
    setCurrentQuestion(currentQuestion + 1);
    if (userAnswer !== null) setRightAnswers(rightAnswers + 1);
  };

  if (quiz) {
    return (
      <div className='quiz'>
        {currentQuestion + 1 > quiz.questions.length ?
          <QuizFinished answers={rightAnswers} length={quiz.questions.length} /> :
          <React.Fragment>
            <h1 className='quiz__title'>{quiz.title}:&nbsp;{`${quiz.questions[currentQuestion].questionId}/${quiz.questions.length}`}</h1>
            <h2 className='quiz__question'>{quiz.questions[currentQuestion].question}</h2> 
            <Answers answers={quiz.questions[currentQuestion].answers} onClick={clickHandler} rightAnswer={quiz.questions[currentQuestion].rightAnswer} />
          </React.Fragment>
        }
      </div>
    );
  }

  return (
    <Loader />
  );
};

export default Quiz;