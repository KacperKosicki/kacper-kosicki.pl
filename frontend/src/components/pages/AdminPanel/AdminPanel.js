import React, { useEffect, useState } from 'react';
import LogoutButton from '../../Common/LogoutButton/LogoutButton';
import styles from './AdminPanel.module.scss';
import AdminUsersTab from './AdminUsersTab';

const AdminPanel = () => {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('projects'); // 🔹 Dodaj zakładki

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (activeTab === 'projects') {
      fetchProjects();
    } else {
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

      {/* 🔹 Zakładka PROJEKTY */}
      {activeTab === 'projects' && (
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project._id} className={styles.projectCard} data-aos="zoom-in">
              <h3>{project.siteName || 'Brak nazwy'}</h3>
              <p><strong>Klient:</strong> {project.userId?.email || 'Nieznany'}</p>
              <p><strong>Podstrony:</strong> {project.pages?.join(', ') || 'Brak'}</p>
              <p><strong>Kolory:</strong> {project.themeColors?.join(', ') || 'Brak'}</p>
              <p><strong>Czcionki:</strong> {project.fonts?.join(', ') || 'Brak'}</p>
              <p><strong>Wybrana czcionka główna:</strong> {project.font || 'Brak'}</p>
              <p><strong>Animacje:</strong> {project.animations}</p>
              <p><strong>Typ strony:</strong> {project.type}</p>
              <p><strong>Przeznaczenie:</strong> {project.purpose || 'Brak'}</p>
              <p><strong>Tłumaczenia:</strong> {project.translations?.join(', ') || 'Brak'}</p>
              <p><strong>Domena:</strong> {project.hasOwnDomain === 'yes' ? 'Ma domenę' : 'Potrzebuje domeny'}</p>
              {project.referenceSite && (
                <>
                  <p><strong>Inspiracja:</strong> <a href={project.referenceSite} target="_blank" rel="noreferrer">{project.referenceSite}</a></p>
                  <p><strong>Opis inspiracji:</strong> {project.referenceDescription}</p>
                </>
              )}
              <p><strong>Data utworzenia:</strong> {new Date(project.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}

      {/* 🔹 Zakładka UŻYTKOWNICY */}
      {activeTab === 'users' && (
        <AdminUsersTab users={users} setUsers={setUsers} />
      )}
    </div>
  );
};

export default AdminPanel;
