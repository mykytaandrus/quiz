import './QuizCard.css';

const QuizCard = ({item}) => {
  return (
    <div className='quiz-card'>
      <h3>{item.title}</h3>
      <p>by {item.author}</p>
    </div>
  );
};

export default QuizCard;