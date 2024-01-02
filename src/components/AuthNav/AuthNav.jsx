import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div className={css.authNavContainer}>
      <NavLink to="/register" className={css.authNavLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.authNavLink}>
        Log In
      </NavLink>
    </div>
  );
};
