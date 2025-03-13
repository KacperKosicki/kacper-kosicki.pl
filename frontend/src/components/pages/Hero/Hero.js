import React, { useState, useEffect, useContext } from "react";
import styles from "./Hero.module.scss";
import { FaArrowDown } from "react-icons/fa";
import { LanguageContext } from "../../../context/LanguageContext"; // Import kontekstu języka

const Hero = () => {
  const { t } = useContext(LanguageContext); // Pobranie tłumaczeń

  const phrases = t.heroPhrases; // Pobranie dynamicznych fraz

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 150;
    const delayAfterTyping = 2000;

    const handleTyping = () => {
      if (!isDeleting && charIndex < phrases[index].length) {
        setText((prev) => prev + phrases[index].charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === phrases[index].length) {
        setTimeout(() => setIsDeleting(true), delayAfterTyping);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, index, phrases]);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1>👋{t.heroTitle}</h1>
          <p className={styles.subtitle}>{text}<span className={styles.cursor}>|</span></p>
          <div className={styles.buttons}>
            <a href="/portfolio" className={styles.button}>🔍 {t.viewProjects}</a>
            <a href="/contact" className={`${styles.button} ${styles.secondary}`}>📞 {t.contactMe}</a>
          </div>
        </div>

        {/* Zdjęcie */}
        <div className={styles.heroImage}>
          <img src="/images/kosa.jpg" alt={t.heroImageAlt} />
        </div>
      </div>

      {/* Efekt przewijania */}
      <div className={styles.scrollIndicator}>
        <FaArrowDown />
      </div>
    </section>
  );
};

export default Hero;
