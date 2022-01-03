import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import Form from '../../components/Form/Form';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = async event => {
    event.preventDefault();
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Form buttonTitle={'Sign Up'} className={'signup'} onSubmitHandler={signup} setEmail={setEmail} setPassword={setPassword} />
  );
};

export default SignUp;