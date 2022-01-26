import './AnswerItem.css';

const AnswerItem = ({answer, index, onClick, rightAnswer}) => {
  let userAnswer = false;

  if (index === rightAnswer) {
    userAnswer = true;
  }

  return (
    <p className='quiz__answer' onClick={() => userAnswer === true ? onClick(userAnswer) : onClick(null)}>
      <span className='quiz__index'>{index}.&nbsp;</span>{answer}
    </p>
  );
};

export default AnswerItem;