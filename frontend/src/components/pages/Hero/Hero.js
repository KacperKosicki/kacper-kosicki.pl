import React, { useEffect, useState } from "react";
import styles from "./Hero.module.scss";

const typedMessages = [
  "Strony szyte na miarę 📐",
  "Skuteczna obecność w sieci 🌐",
  "Design z charakterem 🎨",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % typedMessages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.shapes}></div>
      <div className={styles.light}></div>

      <div className={styles.inner}>
        <div className={styles.content} data-aos="fade-up">
          <h1>
            <span className={styles.gradientText}>Hej! Tu Kacper</span> 👋
          </h1>

          <p className={styles.typedText}>{typedMessages[index]}</p>

          <h1 className={styles.slogan}>
            Tworzę strony, które{" "}
            <span className={styles.highlight}>wyglądają</span>,{" "}
            <span className={styles.highlight}>działają</span> i{" "}
            <span className={styles.highlight}>przekonują</span>.
          </h1>

          <div className={styles.terminal}>
            <code>&gt; npx create-your-site</code>
            <code>&gt; Installing dependencies...</code>
            <code className={styles.info}>&gt; Custom layout initialized</code>
            <code className={styles.warning}>&gt; 🚀 Deployment started...</code>
            <code className={styles.success}>&gt; ✅ Success! Your site is live 🎉</code>
          </div>

          <a href="/contact" className={styles.ctaButton}>
            Porozmawiajmy!
          </a>
        </div>

        <div className={styles.avatarBox}>
          <img src="/images/other/hero-kosa.png" alt="Kacper pointing" className={styles.avatar} />
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
