import React, { useState } from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    option: ''
  });

  const [messageError, setMessageError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (e.target.name === 'message' && e.target.value.length < 25) {
      setMessageError('Wiadomość musi zawierać co najmniej 25 znaków.');
    } else {
      setMessageError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.message.length < 25) {
      setMessageError('Wiadomość musi zawierać co najmniej 25 znaków.');
    } else {
      console.log(formData);
      setFormData({
        name: '',
        email: '',
        message: '',
        option: ''
      });
      setMessageError('');
    }
  };

  return (
    <div className={styles.contact}>
      <h2>Skontaktuj się ze mną!</h2>
      <div className={styles.contactInfo}>Skorzystaj z dostępnego formularza kontaktowego!</div>
      <form onSubmit={handleSubmit}>
        <div className={`${styles.formGroup} ${styles.name}`}>
          <label htmlFor="name">Imię:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Wpisz swoje imię"
            required
          />
        </div>
        <div className={`${styles.formGroup} ${styles.email}`}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Wpisz swój email"
            required
          />
        </div>
        <div className={`${styles.formGroup} ${styles.option}`}>
          <label htmlFor="option">Wybierz opcję:</label>
          <select
            id="option"
            name="option"
            value={formData.option}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>Wybierz opcję z listy</option>
            <option value="Cennik">Cennik</option>
            <option value="Inne">Inne</option>
            <option value="Współpraca">Współpraca</option>
            <option value="Problem ze stroną">Problem ze stroną</option>
            <option value="Błąd">Błąd</option>
            <option value="Porada">Porada</option>
          </select>
        </div>
        <div className={`${styles.formGroup} ${styles.message}`}>
          <label htmlFor="message">Wiadomość:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Wpisz swoją wiadomość..."
            rows={4}
            required
          />
          {messageError && <p className={styles.errorMessage}>{messageError}</p>}
        </div>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
};

export default Contact;
