import React from 'react';
import styles from './Login.module.scss';

const Login = ({ onGoogleLogin }) => {
  return (
    <div className={styles.login}>
      <h2>Logowanie Google</h2>
      <div className={styles.technologyInfo}>Klikając przycisk zalogujesz się na stronę i otrzymasz nowe możliwości!</div>
      <button className={styles.googleButton} onClick={onGoogleLogin}>
        Log in with Google
      </button>
    </div>
  );
}

export default Login;