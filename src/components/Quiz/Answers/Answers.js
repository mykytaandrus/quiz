import AnswerItem from './AnswerItem/AnswerItem';

const Answers = ({answers}) => {
  return (
    <section className='quiz__wrapper'>
      {answers.map((item, index) => <AnswerItem answer={item} index={index + 1} key={index} />)}
    </section>
  );
};

export default Answers;