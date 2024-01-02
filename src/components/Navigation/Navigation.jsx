import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts"></NavLink>}
    </nav>
  );
};