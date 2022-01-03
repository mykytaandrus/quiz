import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader/Loader';
import Main from './pages/Main/Main';
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
      <Loader />
    );
  }
  if (user) {
    return (
      <Routes>
      <Route element={<Main />} path='/' />
      <Route element={<Navigate to='/' />} path='*' />
      </Routes>
    );
  }
  
  return (
    <Routes>
      <Route element={<SignIn />} path='signin' />
      <Route element={<SignUp />} path='signup' />
      <Route element={<Navigate to='signin' />} path='*' />
    </Routes>
  );
};

export default App;