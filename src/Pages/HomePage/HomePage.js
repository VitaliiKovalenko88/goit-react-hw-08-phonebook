
import React from 'react';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <div className={css.welcomeMessage}>
        Welcome to our Phonebook!
      </div>
    </div>
  );
};

export default HomePage;
