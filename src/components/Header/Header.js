import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { setAuthenticate } from '../../store/userSlice';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.user.email);

  const signout = async () => {
    signOut(auth);
    dispatch(setAuthenticate(''));
  };
  return (
    <header className='header'>
      <nav className='menu'>
        <p className='menu__text'>{email.split('@')[0]}</p>
        <button className='menu__button' onClick={signout}>Sign Out</button>
      </nav>
    </header>
  );
};

export default Header;