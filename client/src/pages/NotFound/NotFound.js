import React from 'react';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404 - Nie znaleziono</h1>
      <p>Strona, której szukasz, nie istnieje.</p>
    </div>
  );
};

export default NotFound;
