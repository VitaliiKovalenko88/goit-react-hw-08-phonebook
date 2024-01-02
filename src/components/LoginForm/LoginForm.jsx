import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmite = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const data = {
      email,
      password,
    };

    dispatch(logIn(data));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmite} className={css.form}>
      <label className={css.label}>Email</label>
      <input type="email" name="email" className={css.input} />
      <label className={css.label}>Password</label>
      <input type="password" name="password" className={css.input} />
      <button type="submite" className={css.submitButton}>
        Log in
      </button>
    </form>
  );
};
