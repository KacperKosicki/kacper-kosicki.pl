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
      <div className={styles.logo}>kacper-kosicki.com</div>

      {/* 🔹 Hamburger tylko na mobile */}
      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>

      {/* 🔹 Menu nawigacyjne */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : styles.hideMenu}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")} onClick={closeMenu}>
            {({ isActive }) => (
              <>
                {isActive && "🏠 "} {t.home}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? styles.active : "")} onClick={closeMenu}>
            {({ isActive }) => (
              <>
                {isActive && "💼 "} {t.portfolio}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : "")} onClick={closeMenu}>
            {({ isActive }) => (
              <>
                {isActive && "📩 "} {t.contact}
              </>
            )}
          </NavLink>
        </li>

        {/* 🔹 Wyraźna przestrzeń oddzielająca linki od przycisków */}
        <div className={styles.mobileSpacer}></div>

        {/* 🔹 Przyciski mobilne */}
        <li className={styles.mobileControls}>
          <button className={styles.themeToggle} onClick={toggleTheme}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            {t.toggleTheme}
          </button>
          <button className={styles.languageButton} onClick={handleToggleLanguage}>
            <img
              src={`/images/flags/${language === "pl" ? "us" : "pl"}.png`}
              width="30"
              height="20"
              alt={language === "pl" ? "English" : "Polski"}
              className={styles.flagIcon}
            />
            {t.toggleLanguage}
          </button>
        </li>
      </ul>

      {isMenuOpen && <div className={styles.menuOverlay} onClick={closeMenu}></div>}

      {/* 🔹 Przyciski desktop */}
      <div className={styles.controls}>
        <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
        <button className={styles.languageButton} onClick={handleToggleLanguage} aria-label="Toggle language">
          <img
            src={`/images/flags/${language === "pl" ? "us" : "pl"}.png`}
            width="30"
            height="20"
            alt={language === "pl" ? "English" : "Polski"}
            className={styles.flagIcon}
          />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
