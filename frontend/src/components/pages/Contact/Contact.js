import React, { useState, useContext } from "react";
import styles from "./Contact.module.scss";
import { LanguageContext } from "../../../context/LanguageContext";
import emailjs from "emailjs-com";

const Contact = () => {
  const { t } = useContext(LanguageContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    option: "",
  });

  const [messageError, setMessageError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "message" && e.target.value.length < 25) {
      setMessageError(t.messageError);
    } else {
      setMessageError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.message.length < 25) {
      setMessageError(t.messageError);
      return;
    }
  
    setIsSending(true);
  
    const minSendingTime = 5000; // 🕒 Minimalny czas trwania "WYSYŁANIE..."
    const startTime = Date.now();
  
    emailjs
      .send(
        "service_533jfup",
        "template_h2bud0e",
        {
          name: formData.name,
          email: formData.email,
          option: formData.option,
          message: formData.message,
        },
        "nSJDaJUKISutrpEbf"
      )
      .then(() => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minSendingTime - elapsedTime);
  
        setTimeout(() => {
          setIsSent(true);
          setShowSuccess(true);
          setIsSending(false);
          setFormData({ name: "", email: "", message: "", option: "" });
  
          // Po 5 sekundach chowamy komunikat "WYSŁANO!"
          setTimeout(() => {
            setShowSuccess(false);
            setIsSent(false);
          }, 5000);
        }, remainingTime);
      })
      .catch((err) => {
        console.error("Błąd wysyłania wiadomości: ", err);
        setIsSending(false);
      });
  };  

  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        {/* LEWA STRONA */}
        <div className={styles.contactInfo}>
          <h2>📩 {t.contactTitle}</h2>
          <p>{t.contactDescription}</p>

          {/* 📅 Integracja z Calendly */}
          <a href="https://calendly.com/twoj-link" target="_blank" rel="noopener noreferrer">
            <button className={styles.calendlyButton}>📅 {t.scheduleAMeeting} {t.bookMeeting}</button>
          </a>
        </div>

        {/* PRAWY PANEL - FORMULARZ */}
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">{t.nameLabel}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.placeholderName}
                required
                disabled={isSending}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">{t.emailLabel}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.placeholderEmail}
                required
                disabled={isSending}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="option">{t.optionLabel}</label>
              <select
                id="option"
                name="option"
                value={formData.option}
                onChange={handleChange}
                required
                disabled={isSending}
              >
                <option value="" disabled hidden>
                  {t.selectOption}
                </option>
                <option value="Cennik">{t.optionPricing}</option>
                <option value="Współpraca">{t.optionCollaboration}</option>
                <option value="Problem ze stroną">{t.optionProblem}</option>
                <option value="Błąd">{t.optionBug}</option>
                <option value="Porada">{t.optionAdvice}</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">{t.messageLabel}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.placeholderMessage}
                rows={4}
                required
                disabled={isSending}
              />
              {messageError && <p className={styles.errorMessage}>{messageError}</p>}
            </div>

            {/* PRZYCISK / KOMUNIKAT */}
            {!showSuccess ? (
              <button type="submit" className={styles.submitButton} disabled={isSending}>
                {isSending ? t.sending : t.sendButton}
              </button>
            ) : (
              <div className={styles.successMessage}>{t.sent}</div>
            )}

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
