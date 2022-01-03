import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

const Form = ({buttonTitle, className, linkTo, onSubmitHandler, setEmail, setPassword}) => {
  return (
    <React.Fragment>
      <form className={`form form-${className}`} onSubmit={onSubmitHandler}>
        <label className={`form__label form-${className}__label`}>Email</label>
        <input className={`form__input form-${className}__input`} onChange={event => setEmail(event.target.value)} placeholder='example@mail.com' type={'email'}></input>
        <label className={`form__label form-${className}__label`}>Password</label>
        <input className={`form__input form-${className}__input`} onChange={event => setPassword(event.target.value)} type={'password'}></input>
        <button className={`form__button form-${className}__button`}>{buttonTitle}</button>
        <p className={`form__text form-${className}__text`}>or <Link to={'/' + linkTo}>{linkTo}</Link></p>
      </form>
    </React.Fragment>
  );
};

export default Form;