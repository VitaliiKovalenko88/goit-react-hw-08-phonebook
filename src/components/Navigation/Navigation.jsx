import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={css.navLink}
        activeclassname={css.activeNavLink}
        end
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={css.navLink}
          activeclassname={css.activeNavLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
