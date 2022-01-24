import { useSelector } from 'react-redux';
import './QuizList.css';
import QuizCard from './QuizCard/QuizCard';

const QuizList = () => {
  const quizzes = useSelector(state => state.quizzes.quizzesList);
  
  return (
    <section className='quiz-list'>
      {quizzes.map((item, index) => <QuizCard item={item} key={index} />)}
    </section>
  );
};

export default QuizList;