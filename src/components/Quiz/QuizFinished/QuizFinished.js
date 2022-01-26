import React from 'react';
import './QuizFinished.css';

const QuizFinished = ({answers, length}) => {
  return (
    <div className='quiz-start'>
      <p className='quiz-start__text--bold'>Quiz is Finished!</p>
      <p className='quiz-start__text'>Right answers: {answers}/{length}</p>
    </div>
  );
};

export default QuizFinished;