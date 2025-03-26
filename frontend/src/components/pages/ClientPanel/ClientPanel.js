import React from 'react';
import LogoutButton from '../../Common/LogoutButton/LogoutButton';
import ClientForm from './ClientForm';
import styles from './ClientPanel.module.scss';

const ClientPanel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.panelContainer} data-aos="zoom-in-down">
        <h1 className={styles.title}>🖥️ Panel Klienta</h1>
        <LogoutButton />
        <p className={styles.description}>
          Witaj, kliencie! Tutaj w przyszłości skonfigurujesz swoją stronę.
        </p>
      </div>
      <ClientForm />
    </div>
  );
};

export default ClientPanel;
