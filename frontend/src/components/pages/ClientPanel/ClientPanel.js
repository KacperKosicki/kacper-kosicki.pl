import React from 'react';
import LogoutButton from '../../Common/LogoutButton/LogoutButton';

const ClientPanel = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Panel Klienta</h1>
      <LogoutButton />
      <p>Witaj, kliencie! Tutaj w przyszłości skonfigurujesz swoją stronę.</p>
    </div>
  );
};

export default ClientPanel;
