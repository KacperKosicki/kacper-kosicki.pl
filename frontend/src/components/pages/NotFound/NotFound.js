import React, { useContext } from 'react';
import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';
import { LanguageContext } from "../../../context/LanguageContext";

const NotFound = () => {
  const { t } = useContext(LanguageContext); // Pobranie tłumaczeń z kontekstu

  return (
    <div className={styles.container}>
      <h1 className={styles.notFoundTitle}>404 - {t.notFound}</h1>
      <p className={styles.notFoundText}>⛔️ {t.notFoundText}</p>
      <Link to="/" className={styles.backButton}>◀️ {t.goBack}</Link>
    </div>
  );
};

export default NotFound;
