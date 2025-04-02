import React, { useEffect, useState } from 'react';
import LogoutButton from '../../Common/LogoutButton/LogoutButton';
import AdminUsersTab from './AdminUsersTab';
import ClientProjects from './ClientProjects';
import styles from './AdminPanel.module.scss';

const AdminPanel = () => {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState(null); // ⬅️ Domyślnie brak zakładki

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (activeTab === 'projects') {
      fetchProjects();
    } else if (activeTab === 'users') {
      fetchUsers();
    }
  }, [activeTab]);

  const fetchProjects = async () => {
    try {
      const res = await fetch('https://kacper-kosickipl-production.up.railway.app/api/client-projects', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error('Błąd pobierania projektów');
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      setError('Nie udało się pobrać projektów');
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch('https://kacper-kosickipl-production.up.railway.app/api/users', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error('Błąd pobierania użytkowników');
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError('Nie udało się pobrać użytkowników');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.panelContainer} data-aos="zoom-in-down">
        <h1 className={styles.title}>🛡️ Panel Administratora</h1>
        <LogoutButton />
        <p className={styles.description}>Witaj, Kacper Kosicki! Zarządzaj projektami i użytkownikami.</p>

        {/* 🔸 Domyślny komunikat */}
        {!activeTab && (
          <p className={styles.info}>👉 Wybierz zakładkę poniżej, aby rozpocząć</p>
        )}

        <div className={styles.tabs}>
          <button
            className={activeTab === 'projects' ? styles.activeTab : ''}
            onClick={() => setActiveTab('projects')}
          >
            Projekty
          </button>
          <button
            className={activeTab === 'users' ? styles.activeTab : ''}
            onClick={() => setActiveTab('users')}
          >
            Użytkownicy / Klienci
          </button>
        </div>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      {activeTab === 'projects' && <ClientProjects projects={projects} />}
      {activeTab === 'users' && <AdminUsersTab users={users} setUsers={setUsers} />}
    </div>
  );
};

export default AdminPanel;
