import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div className={css.userMenu}>
      <p className={css.userMail}>{user.email}</p>
      <button type="button" onClick={handleLogOut} className={css.logoutButton}>
        Logout
      </button>
    </div>
  );
};
