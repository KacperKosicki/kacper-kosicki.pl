import React, { useState, useContext } from 'react';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../../context/LanguageContext';

const Login = ({ onLoginSuccess }) => {
  const { t } = useContext(LanguageContext);
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
        setError(data.error || t.loginError);
        return;
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('userRole', data.user.role);

      onLoginSuccess?.(data.user);

      if (data.user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/panel');
      }
    } catch (err) {
      console.error(err);
      setError(t.loginConnectionError);
    }
  };

  return (
    <div className={styles.loginWrapper} data-aos="zoom-in">
      <div className={styles.loginBox}>
        <h2>🔐 {t.loginTitle}</h2>
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
            placeholder={t.loginPasswordPlaceholder}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{t.login}</button>
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>

      <div className={styles.infoBox}>
        <h3>ℹ️ {t.loginInfoTitle}</h3>
        <p>{t.loginInfoIntro}</p>
        <ul>
          <li>✅ {t.loginInfo1}</li>
          <li>🎨 {t.loginInfo2}</li>
          <li>📄 {t.loginInfo3}</li>
          <li>🔍 {t.loginInfo4}</li>
          <li>🤝 {t.loginInfo5}</li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
