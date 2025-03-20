import React, { useContext } from "react";
import styles from "./Home.module.scss";
import { LanguageContext } from "../../../context/LanguageContext"; // Import kontekstu języka
import {
  FaCode,
  FaLaptopCode,
  FaUsers,
  FaBriefcase,
  FaCommentDots,
} from "react-icons/fa";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Hero from "../Hero/Hero";
import Workflow from "../Workflow/Workflow"; // Import nowego komponentu
import FAQ from "../FAQ/FAQ";
import WhyMe from "../WhyMe/WhyMe"

const Home = () => {
  const { t } = useContext(LanguageContext); // Pobieramy tłumaczenia

  return (
    <div className={styles.container}>
      <Hero />

      {/* SEKCJA STATYSTYK */}
      <section className={styles.stats}>
        <div className={styles.statBox} data-aos="fade-up">
          <FaCode className={styles.icon} />
          <h3>500+</h3>
          <p>{t.codeHours}</p>
        </div>
        <div className={styles.statBox} data-aos="fade-up" data-aos-delay="200">
          <FaLaptopCode className={styles.icon} />
          <h3>30+</h3>
          <p>{t.projectsCompleted}</p>
        </div>
        <div className={styles.statBox} data-aos="fade-up" data-aos-delay="400">
          <FaUsers className={styles.icon} />
          <h3>?+</h3>
          <p>{t.happyClients}</p>
        </div>
        <div className={styles.statBox} data-aos="fade-up" data-aos-delay="600">
          <FaBriefcase className={styles.icon} />
          <h3>2+</h3>
          <p>{t.yearsExperience}</p>
        </div>
      </section>

      {/* SEKCJE */}
      <AboutMe />
      <Skills />
      <WhyMe />
      <Workflow />

      {/* OPINIE KLIENTÓW */}
      <section className={styles.testimonials}>
        <h2>💬 {t.testimonialsTitle}</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialBox}>
            <FaCommentDots className={styles.testimonialIcon} />
            <p>{t.testimonial1}</p>
            <h4>- {t.client1}</h4>
          </div>
          <div className={styles.testimonialBox}>
            <FaCommentDots className={styles.testimonialIcon} />
            <p>{t.testimonial2}</p>
            <h4>- {t.client2}</h4>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>🚀 {t.ctaTitle}</h2>
        <p>{t.ctaDescription}</p>
        <a href="/contact" className={styles.button}>{t.contactMe}</a>
      </section>

      <FAQ />
      
    </div>
  );
};

export default Home;
