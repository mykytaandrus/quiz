import './AnswerItem.css';

const AnswerItem = ({answer, index}) => {
  return (
    <p className='quiz__answer'>
      <span className='quiz__index'>{index}. </span>{answer}
    </p>
  );
};

export default AnswerItem;