import AnswerItem from './AnswerItem/AnswerItem';

const Answers = ({answers, onClick, rightAnswer}) => {
  return (
    <section className='quiz__wrapper'>
      {answers.map((item, index) => <AnswerItem answer={item} index={index + 1} key={index} onClick={onClick} rightAnswer={rightAnswer}/>)}
    </section>
  );
};

export default Answers;