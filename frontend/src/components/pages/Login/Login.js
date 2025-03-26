import React, { useState } from 'react';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
        const res = await fetch('https://kacper-kosickipl-production.up.railway.app/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Błąd logowania');
        return;
      }

      // Zapisz token i rolę do localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('userRole', data.user.role);

      // Callback po udanym logowaniu (jeśli używany)
      onLoginSuccess?.(data.user);

      // 🔁 Automatyczne przekierowanie w zależności od roli
      if (data.user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/panel');
      }
    } catch (err) {
      console.error(err);
      setError('Błąd połączenia z serwerem');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>🔐 Logowanie</h2>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Zaloguj</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
