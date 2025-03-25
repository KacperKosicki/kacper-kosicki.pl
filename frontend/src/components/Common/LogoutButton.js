import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} style={{
      margin: '1rem',
      padding: '0.5rem 1rem',
      background: '#c0392b',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    }}>
      Wyloguj się
    </button>
  );
};

export default LogoutButton;
