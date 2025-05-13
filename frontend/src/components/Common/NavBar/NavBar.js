import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../../../context/LanguageContext";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const { language, toggleLanguage, t } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    closeMenu();
  };
  const handleToggleLanguage = () => {
    toggleLanguage();
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${isDarkMode ? styles.darkMode : ""}`}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className={styles.logoIcon} />
          <div className={styles.separator}></div>
          <span className={styles.logoText}>kacper-kosicki.pl</span>
        </div>
      </div>

      {/* 🔹 Nawigacja – niezależnie od układu center */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={closeMenu}
          >
            {t.home}
          </NavLink>
        </li>
        <li>
          <div className={styles.loginWrapper}>
          <span className={styles.betaLabel}>{t.addProjects}</span>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={closeMenu}
          >
            {t.portfolio}
          </NavLink>
          </div>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={closeMenu}
          >
            {t.contact}
          </NavLink>
        </li>
        <li className={styles.loginItem}>
          {!token ? (
            <div className={styles.loginWrapper}>
              <span className={styles.betaLabel}>{t.testing}</span>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
                onClick={closeMenu}
              >
                {t.login}
              </NavLink>
            </div>
          ) : userRole === 'admin' ? (
            <NavLink
              to="/admin"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={closeMenu}
            >
              Admin
            </NavLink>
          ) : (
            <NavLink
              to="/panel"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={closeMenu}
            >
              Panel
            </NavLink>
          )}
        </li>

        {/* 🔹 Separator pod linkami */}
        <div className={styles.mobileSpacer}></div>

        {/* 🔹 Przyciski mobilne */}
        <div className={styles.mobileControls}>
          <button className={styles.themeToggle} onClick={toggleTheme}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            {t.toggleTheme}
          </button>
          <button className={styles.languageButton} onClick={handleToggleLanguage}>
            <img
              src={`${process.env.PUBLIC_URL}/images/flags/${language === "pl" ? "us" : "pl"}.png`}
              width="30"
              height="20"
              alt={language === "pl" ? "English" : "Polski"}
              className={styles.flagIcon}
            />
            {t.toggleLanguage}
          </button>
        </div>
      </ul>

      <div className={styles.right}>
        <div className={styles.controls}>
          <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
          <button className={styles.languageButton} onClick={handleToggleLanguage} aria-label="Toggle language">
            <img
              src={`${process.env.PUBLIC_URL}/images/flags/${language === "pl" ? "us" : "pl"}.png`}
              width="30"
              height="20"
              alt={language === "pl" ? "English" : "Polski"}
              className={styles.flagIcon}
            />
          </button>
        </div>
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {isMenuOpen && <div className={styles.menuOverlay} onClick={closeMenu}></div>}
    </nav>
  );
};

export default NavBar;
