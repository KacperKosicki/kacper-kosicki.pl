import React, { useEffect, useContext } from "react";
import styles from "./WhyMe.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faLightbulb, faCode, faHandshake } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { LanguageContext } from "../../../context/LanguageContext";

const WhyMe = () => {
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const features = [
    {
      icon: faRocket,
      title: t.innovativeApproach, // Dodane do tłumaczeń
      description: t.innovativeApproachDesc,
      animation: "fade-up",
    },
    {
      icon: faLightbulb,
      title: t.creativity,
      description: t.creativityDesc,
      animation: "fade-up",
    },
    {
      icon: faCode,
      title: t.professionalCode,
      description: t.professionalCodeDesc,
      animation: "fade-up",
    },
    {
      icon: faHandshake,
      title: t.collaboration,
      description: t.collaborationDesc,
      animation: "fade-up",
    },
  ];

  return (
    <section className={styles.whyMe} data-aos="fade-up">
      <h2 className={styles.title}>💡 {t.whyMeTitle}</h2>
      <p className={styles.subtitle}>{t.whyMeSubtitle}</p>
      <div className={styles.features}>
        {features.map((feature, index) => (
          <div
            className={styles.featureCard}
            key={index}
            data-aos={feature.animation}
            data-aos-delay={index * 200}
          >
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={feature.icon} className={styles.icon} />
            </div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyMe;
