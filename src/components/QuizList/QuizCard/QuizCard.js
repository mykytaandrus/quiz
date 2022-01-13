import { Link } from 'react-router-dom';
import { ref, set } from 'firebase/database';
import { database } from '../../../firebase';
import './QuizCard.css';

const QuizCard = ({item}) => {
  const removeQuiz = async () => {
    console.log(item.quizId)
    await set(ref(database, `quizzes/quiz${item.quizId}`), null);
  };

  return (
    <div className='quiz-card'>
      <h3 className='quiz-card__title'>{item.title}</h3>
      <p className='quiz-card__author'>by {item.author}</p>
      <Link className='quiz-card__button quiz-card__start-button' to={`quiz${item.quizId}`}>start</Link>
      <button className='quiz-card__button quiz-card__remove-button' onClick={removeQuiz}>remove</button>
    </div>
  );
};

export default QuizCard;