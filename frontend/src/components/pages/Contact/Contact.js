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
    honeypot: "", // 🐝 Ukryte pole do anty-spamu
  });

  const [rodoConsent, setRodoConsent] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "message" && e.target.value.length < 25) {
      setMessageError(t.messageError);
    } else {
      setMessageError("");
    }

    if (e.target.name === "rodoConsent") {
      setRodoConsent(e.target.checked);
      return;
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.honeypot) return; // 🐝 spam – nie wysyłaj
    if (!isValidEmail(formData.email)) {
      setMessageError("Podaj poprawny adres e-mail.");
      return;
    }
    if (formData.message.length < 25) {
      setMessageError(t.messageError);
      return;
    }

    if (!rodoConsent) {
      setMessageError("Musisz wyrazić zgodę na przetwarzanie danych.");
      return;
    }

    setIsSending(true);
    const startTime = Date.now();
    const minSendingTime = 5000;

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
          setFormData({ name: "", email: "", message: "", option: "", honeypot: "" });

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
      <div className={styles.contact} data-aos="zoom-in">
        {/* LEWA STRONA */}
        <div className={styles.contactInfo}>
          <h2>📩 {t.contactTitle}</h2>
          <p>{t.contactDescription}</p>

          <a href="https://calendly.com/twoj-link" target="_blank" rel="noopener noreferrer">
            <button className={styles.calendlyButton}>{t.scheduleAMeeting} {t.bookMeeting}</button>
          </a>
        </div>

        {/* FORMULARZ */}
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

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
                <option value="" disabled hidden>{t.selectOption}</option>
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

            <div className={`${styles.formGroup} ${styles.rodoGroup}`}>
              <label className={styles.rodoLabel}>
                <input
                  type="checkbox"
                  name="rodoConsent"
                  checked={rodoConsent}
                  onChange={handleChange}
                  disabled={isSending}
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: t.rodoConsentText.replace(
                      '[link]',
                      `<a href="/privacy-policy" target="_blank" rel="noopener noreferrer">${t.privacyPolicyLink}</a>`
                    )
                  }}
                />
              </label>
            </div>

            {!showSuccess ? (
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSending}
                aria-label="Wyślij formularz kontaktowy"
              >
                {isSending ? (
                  <div className={styles.loaderWrapper}>
                    <span className={styles.spinner}></span> {t.sending}
                  </div>
                ) : (
                  t.sendButton
                )}
              </button>
            ) : (
              <div className={styles.successMessage}>✅ {t.sent}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
