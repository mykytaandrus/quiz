import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader/Loader';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import { auth } from './firebase';
import { setAuthenticate } from './store/userSlice';
// greenacny@gmail.com

const App = () => {
  const dispatch = useDispatch();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      dispatch(setAuthenticate(user.email));
    }
  }, [user, dispatch]);

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if (loading) {
    return (
      <div className='app'>
        <Loader />
      </div>
    );
  }
  if (user) {
    return (
      <div className='application'>
        <Routes>
          <Route element={<Home />} path='/' />
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