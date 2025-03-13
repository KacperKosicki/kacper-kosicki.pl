import React, { useContext } from "react";
import styles from "./Workflow.module.scss";
import {
  FaPencilRuler,
  FaCode,
  FaRocket,
  FaCogs,
  FaCheckCircle,
} from "react-icons/fa";
import { LanguageContext } from "../../../context/LanguageContext"; // Import kontekstu języka

const Workflow = () => {
  const { t } = useContext(LanguageContext); // Pobranie tłumaczeń

  return (
    <section className={styles.workflow}>
      <h2>🚀 {t.workflowTitle}</h2>
      <div className={styles.steps}>
        <div className={styles.step} data-aos="fade-up">
          <FaPencilRuler className={styles.icon} />
          <h3>1. {t.workflowStep1Title}</h3>
          <p>{t.workflowStep1Desc}</p>
        </div>
        <div className={styles.step} data-aos="fade-up" data-aos-delay="200">
          <FaCode className={styles.icon} />
          <h3>2. {t.workflowStep2Title}</h3>
          <p>{t.workflowStep2Desc}</p>
        </div>
        <div className={styles.step} data-aos="fade-up" data-aos-delay="400">
          <FaCogs className={styles.icon} />
          <h3>3. {t.workflowStep3Title}</h3>
          <p>{t.workflowStep3Desc}</p>
        </div>
        <div className={styles.step} data-aos="fade-up" data-aos-delay="600">
          <FaRocket className={styles.icon} />
          <h3>4. {t.workflowStep4Title}</h3>
          <p>{t.workflowStep4Desc}</p>
        </div>
        <div className={styles.step} data-aos="fade-up" data-aos-delay="800">
          <FaCheckCircle className={styles.icon} />
          <h3>5. {t.workflowStep5Title}</h3>
          <p>{t.workflowStep5Desc}</p>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
