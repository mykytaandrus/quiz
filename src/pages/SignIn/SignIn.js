import React, { useState } from 'react';
import { signin } from '../../firebase';
import Form from '../../components/Form/Form';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form buttonTitle={'Sign In'} className={'signin'} linkTo={'signup'} onSubmitHandler={event => signin(event, email, password)} setEmail={setEmail} setPassword={setPassword} />
  );
};

export default SignIn;