import React, { useEffect, useState } from "react";
import styles from "./Hero.module.scss";

const messages = [
  "Cześć, tu Kacper 👋",
  "Tworzę nowoczesne strony",
  "Twoja marka zasługuje na efekt WOW",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.imageContainer}>
        <img
          src="/images/other/kosa.jpg"
          alt="Kacper Kosicki"
          className={styles.photo}
        />
      </div>
      <div className={styles.content} data-aos="fade-up">
        <p className={styles.intro}>{messages[index]}</p>
        <h1>
          Tworzę strony, które <span className={styles.highlight}>wyglądają</span>,<br />
          <span className={styles.highlight}>działają</span> i <span className={styles.highlight}>przekonują</span>.
        </h1>
        <p className={styles.subtext}>
          Pomagam freelancerom i małym firmom wyróżnić się w sieci – z klasą, bez chaosu i z efektem wow ✨
        </p>

        <div className={styles.terminal}>
          <code>&gt; npm install kacper-site</code>
          <code>&gt; Deploying...</code>
          <code className={styles.success}>&gt; ✅ Gotowe! Strona online.</code>
        </div>

        <a href="/contact" className={styles.ctaButton}>Zacznijmy współpracę</a>
      </div>
    </section>
  );
};

export default Hero;
