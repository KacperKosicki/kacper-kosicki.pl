import React, { useContext } from "react";
import styles from "./AboutMe.module.scss";
import { LanguageContext } from "../../../context/LanguageContext"; // Import kontekstu języka

const AboutMe = () => {
  const { t } = useContext(LanguageContext); // Pobranie tłumaczeń

  return (
    <section className={styles.about}>
      {/* Zdjęcie */}
      <div className={styles.imageSection} data-aos="fade-right">
        <img src={`${process.env.PUBLIC_URL}/images/other/kosa.jpg`} alt={t.aboutImageAlt} />
      </div>

      {/* Tekst */}
      <div className={styles.textSection} data-aos="fade-left">
        <h2>📝 {t.aboutTitle}</h2>
        <p>
          {t.aboutIntro1} <strong>Kacper Kosicki</strong>, {t.aboutIntro2} 🚀
        </p>
        <p>
          {t.aboutDescription}
        </p>

        {/* Przycisk CTA */}
        <a href="/portfolio" className={styles.button}>
          {t.viewProjects}
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
