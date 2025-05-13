import React, { useEffect, useState, useContext } from "react";
import styles from "./Hero.module.scss";
import { LanguageContext } from "../../../context/LanguageContext";

const Hero = () => {
  const { t } = useContext(LanguageContext);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % t.heroPhrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [t.heroPhrases]);

  return (
    <section className={styles.hero}>
      <div className={styles.shapes}></div>
      <div className={styles.light}></div>

      <div className={styles.inner}>
        <div className={styles.content} data-aos="fade-up">
          <h1>
            <span className={styles.gradientText}>{t.heroTitle}</span> 👋
          </h1>

          <p className={styles.typedText}>{t.heroPhrases[index]}</p>

          <h1 className={styles.slogan}>
            {t.heroSloganPrefix}{" "}
            <span className={styles.highlight}>{t.heroSlogan1}</span>,{" "}
            <span className={styles.highlight}>{t.heroSlogan2}</span> i{" "}
            <span className={styles.highlight}>{t.heroSlogan3}</span>.
          </h1>

          <div className={styles.terminal}>
            <code>&gt; npx create-your-site</code>
            <code>&gt; Installing dependencies...</code>
            <code className={styles.info}>&gt; {t.terminalInfo}</code>
            <code className={styles.warning}>&gt; {t.terminalWarning}</code>
            <code className={styles.success}>&gt; {t.terminalSuccess}</code>
          </div>

          <a href="/contact" className={styles.ctaButton}>
            {t.contactMe}
          </a>
        </div>

        <div className={styles.avatarBox}>
          <img
            src="/images/other/hero-kosa.png"
            alt={t.heroImageAlt}
            className={styles.avatar}
          />
        </div>
      </div>

      <div className={styles.waveContainer}>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="var(--primary-bg)"
            d="M0,160C180,80,360,240,540,160C720,80,900,240,1080,160C1260,80,1440,240,1440,240L1440,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
