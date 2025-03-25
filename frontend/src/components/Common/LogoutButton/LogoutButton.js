import { useNavigate } from 'react-router-dom';
import styles from './LogoutButton.module.scss';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} className={styles.logoutButton}>
      Wyloguj się
    </button>
  );
};

export default LogoutButton;
