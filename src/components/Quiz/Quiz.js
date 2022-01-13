import { useState } from 'react';
import Answers from './Answers/Answers';
import './Quiz.css';

const Quiz = () => {
  // const [quiz1, setQuiz] = useState(null);
  const quiz = {
    author: '',
    date: '1234567',
    title: 'Quiz Title',
    questionNumber: '4/18',
    question: 'Some interesting question?',
    answers: ['Answer 01', 'Answer 02', 'Answer 03', 'Answer 04'],
  }
  return (
    <div className='quiz'>
      <h1 className='quiz__title'>{quiz.title}:&nbsp;{quiz.questionNumber}</h1>
      <h2 className='quiz__question'>{quiz.question}</h2> 
      <Answers answers={quiz.answers} />
    </div>
  );
};

export default Quiz;