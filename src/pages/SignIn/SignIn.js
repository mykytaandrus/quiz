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
    <Form buttonTitle={'Sign In'} className={'signin'} onSubmitHandler={signin} setEmail={setEmail} setPassword={setPassword} />
    // <React.Fragment>
    //   <form className='form' onSubmit={signin}>
    //     <label className='label form__label'>Email</label>
    //     <input className='input form__input' onChange={event => setEmail(event.target.value)} placeholder='example@mail.com' type={'email'}></input>
    //     <label className='label form__label'>Password</label>
    //     <input className='input form__input' onChange={event => setPassword(event.target.value)} type={'password'}></input>
    //     <button className='button form__button'>Sign In</button>
    //   </form>
    // </React.Fragment>
  );
};

export default SignIn;