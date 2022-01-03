import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = async event => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className='signin'>
      <form onSubmit={signin}>
        <p>greenacny@gmail.com greenacny123</p>
        <input onChange={event => setEmail(event.target.value)} placeholder='Email...' ></input>
        <input onChange={event => setPassword(event.target.value)} placeholder='Password...' ></input>
        <button>Sign In</button>
      </form>
    </div>
  );
};
//type={'email'} type={'password'}
export default SignIn;