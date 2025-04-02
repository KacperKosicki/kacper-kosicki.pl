import React, { useEffect, useState } from 'react';
import styles from './AdminUsersTab.module.scss';

const AdminUsersTab = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ email: '', password: '', role: 'client' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const token = localStorage.getItem('token');

  const fetchUsers = async () => {
    try {
      const res = await fetch('https://kacper-kosickipl-production.up.railway.app/api/admin/users', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError('Błąd podczas pobierania użytkowników');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    if (!window.confirm('Czy na pewno chcesz usunąć użytkownika?')) return;

    try {
      await fetch(`https://kacper-kosickipl-production.up.railway.app/api/admin/users/${userId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchUsers();
    } catch (err) {
      setError('Błąd usuwania użytkownika');
    }
  };

  const handleRoleChange = async (userId, newRole) => {
    try {
      await fetch(`https://kacper-kosickipl-production.up.railway.app/api/admin/users/${userId}/role`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ role: newRole })
      });
      fetchUsers();
    } catch (err) {
      setError('Błąd zmiany roli');
    }
  };

  const handlePasswordChange = async (userId, newPassword) => {
    try {
      await fetch(`https://kacper-kosickipl-production.up.railway.app/api/admin/users/${userId}/password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ password: newPassword })
      });
      fetchUsers();
    } catch (err) {
      setError('Błąd zmiany hasła');
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://kacper-kosickipl-production.up.railway.app/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Błąd tworzenia użytkownika');
      }

      setSuccess('Użytkownik dodany');
      setFormData({ email: '', password: '', role: 'client' });
      fetchUsers();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.adminUsersTab}>
      <h2>👥 Zarządzanie użytkownikami</h2>

      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}

      {/* ➕ Dodaj nowego użytkownika */}
      <form onSubmit={handleCreateUser} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          required
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Hasło"
          value={formData.password}
          required
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="client">Client</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Dodaj użytkownika</button>
      </form>

      {/* 🔁 Lista użytkowników */}
      <div className={styles.userList}>
        {users.map(user => (
          <div key={user._id} className={styles.userCard}>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Rola:</strong> {user.role}</p>
            <p><strong>Data utworzenia:</strong> {new Date(user.createdAt).toLocaleString()}</p>

            <div className={styles.controls}>
              <select value={user.role} onChange={(e) => handleRoleChange(user._id, e.target.value)}>
                <option value="client">Client</option>
                <option value="admin">Admin</option>
              </select>
              <input
                type="password"
                placeholder="Nowe hasło"
                onBlur={(e) => {
                  if (e.target.value) {
                    handlePasswordChange(user._id, e.target.value);
                    e.target.value = '';
                  }
                }}
              />
              <button onClick={() => handleDelete(user._id)}>Usuń</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUsersTab;
