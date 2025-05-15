import React, { useEffect, useState, useContext } from "react";
import styles from "./Footer.module.scss";
import { LanguageContext } from "../../../context/LanguageContext"; // Import kontekstu języka
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi"; // zamiast FontAwesome

const Footer = () => {
  const { t } = useContext(LanguageContext); // Pobranie tłumaczeń
  const [time, setTime] = useState(new Date());
  const [visitCount, setVisitCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    let visits = localStorage.getItem("visitCount");
    visits = visits ? parseInt(visits) + 1 : 1;
    localStorage.setItem("visitCount", visits);
    setVisitCount(visits);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`${styles.footer} ${styles.fadeIn}`}>
      <div className={styles.footerContainer}>
        {/* Przydatne Linki */}
        <div className={styles.section}>
          <h3>🔗 {t.usefulLinks}</h3>
          <ul>
            <li><a href="/">{t.home}</a></li>
            <li><a href="/portfolio">{t.portfolio}</a></li>
            <li><a href="/contact">{t.contact}</a></li>
            <li><a href="/login">{t.login}</a></li>
            <li><a href="/privacy-policy">{t.privacy}</a></li>
          </ul>
        </div>

        {/* Ostatnie Projekty */}
        <div className={styles.section}>
          <h3>💻 {t.recentProjects}</h3>
          <ul>
            <li><a href="/project1">{t.project1}</a></li>
            <li><a href="/project2">{t.project2}</a></li>
            <li><a href="/project3">{t.project3}</a></li>
          </ul>
        </div>

        {/* Najnowsze wpisy */}
        <div className={styles.section}>
          <h3>📝 {t.latestPosts}</h3>
          <ul>
            <li><a href="/blog/react-hooks">{t.post1}</a></li>
            <li><a href="/blog/mongodb-tips">{t.post2}</a></li>
            <li><a href="/blog/nextjs-vs-react">{t.post3}</a></li>
          </ul>
        </div>
      </div>

      {/* 🔹 Dodaj linię ODDZIELAJĄCĄ poza kontenerem */}
      <div className={styles.divider}></div>

      {/* Newsletter */}
      <div className={`${styles.section} ${styles.newsletter}`}>
        <h3>📩 {t.newsletter}</h3>
        <p>{t.newsletterText}</p>
        <form className={styles.newsletterForm}>
          <input type="email" placeholder={t.emailPlaceholder} required />
          <button type="submit">{t.subscribe}</button>
        </form>
      </div>

      {/* Social Media */}
      <div className={styles.socialSection}>
        <h3>🌍 {t.findMeOn}</h3>
        <div className={styles.socialIcons}>
          <a href="https://github.com/KacperKosicki"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/kacper-kosicki-17b7752a2/"><FaLinkedin /></a>
          <a href="mailto:kosickikacper1@gmail.com"><FaEnvelope /></a>
        </div>
      </div>

      {/* Dynamiczne informacje */}
      <div className={styles.extraInfo}>
        <p>⏳ {time.toLocaleTimeString()} | 🔥 {t.visited} <strong>{visitCount}</strong> {t.times}!</p>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} kacper-kosicki.pl. {t.allRightsReserved}</p>
      </div>

      {/* Przycisk przewijania do góry */}
      {isVisible && (
        <button className={`${styles.scrollTop} ${styles.pulse}`} onClick={scrollToTop} title={t.scrollTop}>
          <FiArrowUp className={styles.arrowIcon} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
