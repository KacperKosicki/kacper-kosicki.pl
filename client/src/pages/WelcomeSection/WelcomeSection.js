import React from 'react';
import styles from './WelcomeSection.module.scss'


const WelcomeSection = () => {
  return (
    <div className={styles.profileWrapper}>
      <div className={styles.profileRow}>
        <div className={styles.aboutInfo}>
          <div className={styles.header}>
            <span className={styles.headerText}>EASYWEBCODE.PL by Kacper Kosicki</span>
          </div>
          <h1 className={styles.aboutName}>Kacper Kosicki</h1>
          <p className={styles.aboutText}>
            Hej, jestem Kacper i od zawsze fascynuje mnie świat programowania i tworzenia stron internetowych.
            Moja pasja to projektowanie i implementacja prostych, ale efektywnych stron internetowych.
            Obecnie rozwijam swoje umiejętności jako Full Stack Developer podczas kursu online.
          </p>
          <button className={styles.customButton}>Witaj na mojej stronie!</button>
        </div>
        <div className={styles.profileImage}>
          <img src="images/kosa.jpg" alt="Zdjęcie profilowe" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;