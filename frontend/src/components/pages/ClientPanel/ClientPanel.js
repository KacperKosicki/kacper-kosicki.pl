import React, { useEffect, useState } from 'react';
import LogoutButton from '../../Common/LogoutButton/LogoutButton';
import ClientForm from './ClientForm';
import styles from './ClientPanel.module.scss';

const ClientPanel = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    fetch('https://kacper-kosickipl-production.up.railway.app/api/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('Błąd pobierania danych użytkownika', err));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.panelContainer} data-aos="zoom-in-down">
        <h1 className={styles.title}>🖥️ Panel Klienta</h1>
        <LogoutButton />
        <p className={styles.description}>
          Witaj, {user?.email || 'kliencie'}! Tutaj w przyszłości skonfigurujesz swoją stronę.
        </p>
        <p className={styles.infoBox}>
          <span className={styles.arrow}>▼</span> Kliknij ikonkę, aby rozwinąć szczegółowy opis każdej sekcji konfiguracji.
        </p>
      </div>
      <ClientForm />
    </div>
  );
};

export default ClientPanel;
