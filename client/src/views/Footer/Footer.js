import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.scss';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Proszę podać adres e-mail!');
      return;
    }
    // Tutaj możesz dodać dodatkową logikę walidacji adresu e-mail, jeśli chcesz.
    // Na razie, po prostu zalogujemy wprowadzony adres e-mail.
    console.log('Wysłano adres e-mail:', email);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Cleanup function to clear the email error when component is unmounted
    return () => {
      setEmailError('');
    };
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h3>Kontakt</h3>
          <p>Email: kosickikacper1@gmail.com</p>
          <p>Telefon: 799-030-616</p>
        </div>
        <div className={styles.iconsAndNewsletter}>
          <div className={styles.socialMedia}>
            <FontAwesomeIcon icon={faFacebook} size="2x" className={styles.iconFacebook} />
            <FontAwesomeIcon icon={faInstagram} size="2x" className={styles.iconInstagram} />
            <FontAwesomeIcon icon={faYoutube} size="2x" className={styles.iconYouTube} />
            <FontAwesomeIcon icon={faGithub} size="2x" className={styles.iconGithub} />
            <FontAwesomeIcon icon={faDiscord} size="2x" className={styles.iconDiscord} />
          </div>
          <div className={styles.newsletter}>
            <h3>Newsletter</h3>
            <p>Zapisz się do naszego newslettera, aby otrzymywać najnowsze aktualizacje!</p>
            <form onSubmit={handleFormSubmit}>
              <input type="email" placeholder="Twój adres e-mail (np. jan.kowalski@example.com)" value={email} onChange={handleEmailChange} />
              <button type="submit">Zapisz się</button>
            </form>
            {emailError && <p className={styles.error}>{emailError}</p>}
          </div>
        </div>
        <div className={styles.portfolio}>
          <h3>Portfolio</h3>
          <p>Projekt 1</p>
          <p>Projekt 2</p>
          <p>Projekt 3</p>
        </div>
      </div>
      <div className={styles.additionalLinks}>
        <ul>
          <li><a href="/polityka-prywatnosci">Polityka prywatności</a></li>
          <li><a href="/warunki-uzytkowania">Warunki użytkowania</a></li>
        </ul>
      </div>
      <div className={styles.copyRight}>
        <p>&copy; 2024 EASYWEBCODE.PL by Kacper Kosicki. Wszelkie prawa zastrzeżone.</p>
      </div>
      <div className={styles.scrollToTop} onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" />
      </div>
    </footer>
  );
}

export default Footer;
