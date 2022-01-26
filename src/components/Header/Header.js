import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ref, set } from 'firebase/database';
import { database } from '../../firebase';
import { authSignOut } from '../../store/authSlice';
import { setQuizzes } from '../../store/quizListSlice';
import { fetchQuiz } from '../../store/quizSlice';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user);

  const createQuiz = async () => {
    const author = email.split('@')[0];
    const date = new Date();
    const id = date.getTime().toString().substring(4);
    const validateDate = (date) => {
      if (date < 10) {
        return '0' + date;
      } else {
        return date;
      }
    };
    const creationDate = `${validateDate(date.getDate())}/${validateDate(date.getMonth() + 1)}/${date.getFullYear()} ${validateDate(date.getHours())}:${validateDate(date.getMinutes())}`;

    await set(ref(database, `quizzes/quiz${id}`), {
      author: author,
      date: creationDate,
      id: id,
      questions: [
        {
          answers: [
            'Answer One',
            'Answer Two',
            'Answer Three',
            'Answer Four',
          ],
          question: 'What is it?',
          questionId: 1,
          rightAnswer: 1,
        },
        {
          answers: [
            'Awanger',
            'Awanger',
            'Not Awanger',
            'Titan',
          ],
          question: 'Who is Thanos',
          questionId: 2,
          rightAnswer: 4,
        }
      ],
      title: 'Quiz'
    });
  }

  const signout = async () => {
    dispatch(authSignOut());
    dispatch(setQuizzes([]));
  };

  return (
    <header className='header'>
      <nav className='menu'>
        <ul className='menu__list'>
          <Link className='menu__link' to='/' onClick={() => dispatch(fetchQuiz(null))}>Home</Link>
          <button className='menu__button menu__button--icon-create' onClick={createQuiz}>Create Quiz</button>
          <button className='menu__button menu__button--icon-signout' onClick={signout}>Sign Out</button>
        </ul>
        <p className='menu__text'>{email.split('@')[0]}</p>
      </nav>
    </header>
  );
};

export default Header;