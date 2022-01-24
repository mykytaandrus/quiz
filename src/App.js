import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import { addAuthListener } from './store/authSlice';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth)
  const isLoading = useSelector(state => state.auth.isLoading);

  useEffect(() => {
    console.log('effect');
    dispatch(addAuthListener());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className='app'>
        <Loader />
      </div>
    );
  }

  if (isAuth) {
    return (
      <div className='application'>
        <Header />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Home />} path='quiz:id' />
          <Route element={<Navigate to='/' />} path='*' />
        </Routes>
      </div>
    );
  }

  return (
    <div className='app'>
      <Routes>
        <Route element={<SignIn />} path='signin' />
        <Route element={<SignUp />} path='signup' />
        <Route element={<Navigate to='signin' />} path='*' />
      </Routes>
    </div>
  );
};

export default App;