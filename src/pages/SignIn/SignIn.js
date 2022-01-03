import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import Form from '../../components/Form/Form';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = async event => {
    event.preventDefault();
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Form buttonTitle={'Sign In'} className={'signin'} linkTo={'signup'} onSubmitHandler={signin} setEmail={setEmail} setPassword={setPassword} />
  );
};

export default SignIn;