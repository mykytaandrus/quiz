import React, { useState } from 'react';
import { signup } from '../../firebase';
import Form from '../../components/Form/Form';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form buttonTitle={'Sign Up'} className={'signup'} linkTo={'signin'} onSubmitHandler={event => signup(event, email, password)} setEmail={setEmail} setPassword={setPassword} />
  );
};

export default SignUp;