import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { auth, database } from '../../firebase';
import { setAuthenticate } from '../../store/userSlice';
import { setQuizzes } from '../../store/quizzesSlice';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.user.email);

  const createQuiz = async () => {
    const currentDate = new Date();
    const namingDate = currentDate.getTime().toString().substring(5);
    const date = currentDate.toString().split(' ');

    await set(ref(database, `quizzes/quiz${namingDate}`), {
      author: email.split('@')[0],
      date: `${date[1]} ${date[2]} ${date[3]} ${date[4]}`,
      title: 'Quiz',
      quizId: `${namingDate}`,
      quizzes: {
        question1: {
          answer1: 'answer01',
          answer2: 'answer02',
          answer3: 'answer03',
          answer4: 'answer04',
          rightAnswer: '1',
        },
        question2: {
          answer1: 'answer01',
          answer2: 'answer02',
          answer3: 'answer03',
          answer4: 'answer04',
          rightAnswer: '1',
        },
        question3: {
          answer1: 'answer01',
          answer2: 'answer02',
          answer3: 'answer03',
          answer4: 'answer04',
          rightAnswer: '1',
        }
      },
    });
  }

  const signout = async () => {
    signOut(auth);
    dispatch(setAuthenticate(''));
    dispatch(setQuizzes([]));
  };

  return (
    <header className='header'>
      <nav className='menu'>
        <ul className='menu__list'>
          <Link className='menu__link' to='/'>Home</Link>
          <button className='menu__button menu__button--icon-create' onClick={createQuiz}>Create Quiz</button>
          <button className='menu__button menu__button--icon-signout' onClick={signout}>Sign Out</button>
        </ul>
        <p className='menu__text'>{email.split('@')[0]}</p>
      </nav>
    </header>
  );
};

export default Header;