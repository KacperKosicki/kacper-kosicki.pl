import React, { useState, useContext } from "react";
import styles from "./Help.module.scss";
import { LanguageContext } from "../../../context/LanguageContext";

const Help = () => {
  const { t } = useContext(LanguageContext); // Pobranie tłumaczeń
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  const steps = [
    { title: "👋 " + t.helpStep1Title, description: t.helpStep1Desc },
    { title: "📂 " + t.helpStep2Title, description: t.helpStep2Desc },
    { title: "📝 " + t.helpStep3Title, description: t.helpStep3Desc },
    { title: "🤖 " + t.helpStep4Title, description: t.helpStep4Desc },
    { title: "📩 " + t.helpStep5Title, description: t.helpStep5Desc },
    { title: "🚀 " + t.helpStep6Title, description: t.helpStep6Desc },
  ];

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className={styles.help}>
      <button className={styles.helpButton} onClick={() => setIsOpen(true)}>
        ❓ {t.helpButton}
      </button>

      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h2>{steps[step].title}</h2>
            <p>{steps[step].description}</p>

            <div className={styles.buttons}>
              {step > 0 && <button onClick={prevStep}>⬅️ {t.previous}</button>}
              {step < steps.length - 1 ? (
                <button onClick={nextStep}>➡️ {t.next}</button>
              ) : (
                <button onClick={() => setIsOpen(false)}>❌ {t.close}</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Help;
