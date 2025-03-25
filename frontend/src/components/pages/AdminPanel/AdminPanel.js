import React from 'react';
import LogoutButton from '../../Common/LogoutButton/LogoutButton';
import styles from './AdminPanel.module.scss';

const AdminPanel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.panelContainer}>
        <h1 className={styles.title}>Panel Administratora</h1>
        <LogoutButton />
        <p className={styles.description}>
          Witaj, admin! Tutaj w przyszłości dodasz możliwość zarządzania projektami klientów.
        </p>
      </div>
    </div>
  );
};

export default AdminPanel;
