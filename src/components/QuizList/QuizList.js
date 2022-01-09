import QuizCard from './QuizCard/QuizCard';
import './QuizList.css';

const QuizList = () => {
  return (
    <section className='quiz-list'>
      <QuizCard />
      <QuizCard />
      <QuizCard />
    </section>
  );
};

export default QuizList;