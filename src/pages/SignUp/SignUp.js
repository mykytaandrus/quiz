import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = async event => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className='signup'>
    <form onSubmit={signup}>
      <p>greenacny@gmail.com greenacny123</p>
      <input onChange={event => setEmail(event.target.value)} placeholder='Email...' type={'email'} ></input>
      <input onChange={event => setPassword(event.target.value)} placeholder='Password...' ></input>
      <button>Sign Up</button>
    </form>
  </div>
  );
};

export default SignUp;