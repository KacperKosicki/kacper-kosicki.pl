import React, { useEffect, useState } from 'react';
import styles from './AdminUsersTab.module.scss';

const AdminUsersTab = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ email: '', password: '', role: 'client' });
  const [editingData, setEditingData] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const token = localStorage.getItem('token');

  const fetchUsers = async () => {
    try {
      const res = await fetch('https://kacper-kosickipl-production.up.railway.app/api/users', {
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
      await fetch(`https://kacper-kosickipl-production.up.railway.app/api/users/${userId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchUsers();
    } catch (err) {
      setError('Błąd usuwania użytkownika');
    }
  };

  const handleUpdate = async (userId) => {
    const { role, password } = editingData[userId] || {};
  
    if (password && password.length < 6) {
      setError('Nowe hasło musi mieć minimum 6 znaków');
      return;
    }
  
    try {
      if (role) {
        await fetch(`https://kacper-kosickipl-production.up.railway.app/api/users/${userId}/role`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ role })
        });
      }
  
      if (password) {
        await fetch(`https://kacper-kosickipl-production.up.railway.app/api/users/${userId}/password`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ password })
        });
      }
  
      setSuccess('Dane użytkownika zaktualizowane');
      setError('');
      fetchUsers();
    } catch (err) {
      setError('Błąd aktualizacji użytkownika');
    }
  };  

  const handleInputChange = (userId, field, value) => {
    setEditingData(prev => ({
      ...prev,
      [userId]: {
        ...prev[userId],
        [field]: value
      }
    }));
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
  
    if (formData.password.length < 6) {
      setError('Hasło musi mieć minimum 6 znaków');
      return;
    }
  
    try {
      const res = await fetch('https://kacper-kosickipl-production.up.railway.app/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Błąd tworzenia użytkownika');
      }
  
      setSuccess('Użytkownik dodany');
      setError('');
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
            <p><strong>Data utworzenia:</strong> {new Date(user.createdAt).toLocaleString()}</p>

            <div className={styles.controls}>
              <select
                value={editingData[user._id]?.role || user.role}
                onChange={(e) => handleInputChange(user._id, 'role', e.target.value)}
              >
                <option value="client">Client</option>
                <option value="admin">Admin</option>
              </select>
              <input
                type="password"
                placeholder="Nowe hasło"
                onChange={(e) => handleInputChange(user._id, 'password', e.target.value)}
              />
              <button className={styles.updateButton} onClick={() => handleUpdate(user._id)}>Zaktualizuj</button>
              <button onClick={() => handleDelete(user._id)}>Usuń</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUsersTab;
