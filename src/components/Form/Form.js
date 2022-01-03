import React from 'react';
import './Form.css';

const Form = ({buttonTitle, className, onSubmitHandler, setEmail, setPassword}) => {
  return (
    <React.Fragment>
      <form className={`form form-${className}`} onSubmit={onSubmitHandler}>
        <label className={`form__label form-${className}__label`}>Email</label>
        <input className={`form__input form-${className}__input`} onChange={event => setEmail(event.target.value)} placeholder='example@mail.com' type={'email'}></input>
        <label className={`form__label form-${className}__label`}>Password</label>
        <input className={`form__input form-${className}__input`} onChange={event => setPassword(event.target.value)} type={'password'}></input>
        <button className={`form__button form-${className}__button`}>{buttonTitle}</button>
      </form>
    </React.Fragment>
  );
};

export default Form;