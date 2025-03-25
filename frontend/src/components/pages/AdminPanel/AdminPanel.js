import React from 'react';
import LogoutButton from '../../Common/LogoutButton';

const AdminPanel = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Panel Administratora</h1>
      <LogoutButton />
      <p>Witaj, admin! Tutaj w przyszłości dodasz możliwość zarządzania projektami klientów.</p>
    </div>
  );
};

export default AdminPanel;
