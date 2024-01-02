import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmite = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const data = {
      name,
      email,
      password,
    };

    dispatch(register(data));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmite} className={css.form}>
      <label className={css.label}>Username</label>
      <input className={css.input} type="text" name="name" />
      <label className={css.label}>Email</label>
      <input className={css.input} type="email" name="email" />
      <label className={css.label}>Password</label>
      <input className={css.input} type="password" name="password" />
      <button className={css.submitButton} type="submit">
        Register
      </button>
    </form>
  );
};
