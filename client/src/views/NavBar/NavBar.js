import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faBriefcase, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import styles from './NavBar.module.scss';

Modal.setAppElement('#root');

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { to: "/", icon: faHome, text: "STRONA GŁÓWNA" },
    { to: "about", icon: faInfoCircle, text: "O MNIE" },
    { to: "/contact", icon: faEnvelope, text: "KONTAKT" },
    { to: "/portfolio", icon: faBriefcase, text: "PORTFOLIO" },
  ];

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <img src="/images/banner.webp" alt="Banner" className={styles.banner} />
      <div className={styles.navbarItems}>
        {navLinks.map((link, index) => (
          <div className={`${styles.navbarItem} ${index === 2 ? styles.smallMargin : ''}`} key={index}>
            <NavLink to={link.to} className={styles.navbarLink}>
              <FontAwesomeIcon icon={link.icon} className={styles.navbarIcon} />
              <span className={styles.navbarText}>{link.text}</span>
            </NavLink>
          </div>
        ))}
      </div>
      <div className={styles.navbarItem}>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          className={styles.modalContent}
          overlayClassName={styles.modalOverlay}
        >
          <div className={styles.modalHeader}>
            <h2>Trwają pracę nad logowaniem...</h2>
            <button onClick={handleCloseModal} className={styles.closeButton}>Zamknij</button>
          </div>
          <div className={styles.modalBody}>
          Zalogowani użytkownicy za pomocą Google uzyskają dostęp do nowych funkcji na stronie, w tym różnych aplikacji, których używam w kursie Full Stack Developer. Czekajcie na nowości! Funkcja jest w trakcie prac. Wróć niebawem!
          </div>
        </Modal>
        <button className={styles.navbarButton} onClick={handleLoginClick}>
          <FontAwesomeIcon icon={faSignInAlt} className={styles.navbarIcon} />
          <span className={styles.navbarText}>LOGOWANIE</span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
