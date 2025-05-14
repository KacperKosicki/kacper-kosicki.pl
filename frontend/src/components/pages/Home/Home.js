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
import RandomTip from "../RandomTip/RandomTip";

const Home = () => {
  const { t } = useContext(LanguageContext); // Pobieramy tłumaczenia

  return (
    <>
      <Hero />
      <div className={styles.container}>
        {/* SEKCJA STATYSTYK */}
        <section className={styles.stats}>
  <div className={styles.statWrapper} data-aos="fade-up">
    <div className={styles.statBox}>
      <FaCode className={styles.icon} />
      <h3>500+</h3>
      <p>{t.codeHours}</p>
    </div>
  </div>
  <div className={styles.statWrapper} data-aos="fade-up" data-aos-delay="200">
    <div className={styles.statBox}>
      <FaLaptopCode className={styles.icon} />
      <h3>30+</h3>
      <p>{t.projectsCompleted}</p>
    </div>
  </div>
  <div className={styles.statWrapper} data-aos="fade-up" data-aos-delay="400">
    <div className={styles.statBox}>
      <FaUsers className={styles.icon} />
      <h3>?+</h3>
      <p>{t.happyClients}</p>
    </div>
  </div>
  <div className={styles.statWrapper} data-aos="fade-up" data-aos-delay="600">
    <div className={styles.statBox}>
      <FaBriefcase className={styles.icon} />
      <h3>2+</h3>
      <p>{t.yearsExperience}</p>
    </div>
  </div>
</section>


        {/* SEKCJE */}
        <AboutMe />
        <Skills />
        <RandomTip />
        <WhyMe />
        <Workflow />

        {/* OPINIE KLIENTÓW */}
        <section className={styles.testimonials}>
          <div className={styles.overflowWrapper}>
            <h2 data-aos="zoom-in" data-aos-delay="200">💬 {t.testimonialsTitle}</h2>
            <div className={styles.testimonialGrid}>
              <div className={styles.testimonialBox} data-aos="fade-right" data-aos-delay="400">
                <FaCommentDots className={styles.testimonialIcon} />
                <p>{t.testimonial1}</p>
                <h4>- {t.client1}</h4>
              </div>
              <div className={styles.testimonialBox} data-aos="fade-left" data-aos-delay="400">
                <FaCommentDots className={styles.testimonialIcon} />
                <p>{t.testimonial2}</p>
                <h4>- {t.client2}</h4>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta} data-aos="fade-up">
          <h2>🚀 {t.ctaTitle}</h2>
          <p>{t.ctaDescription}</p>
          <a href="/contact" className={styles.ctaButton}>{t.ctaContactMe}</a>
        </section>

        <FAQ />

      </div>
    </>
  );
};

export default Home;
